/**
 * BLOCK: tabs
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
// import icons from '../../assets/icons.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component, Fragment } = wp.element;
const { registerBlockType, createBlock } = wp.blocks;
const { addFilter } = wp.hooks;
const { PanelBody, RangeControl, TextControl } = wp.components;
const { InnerBlocks, RichText, ColorPalette, InspectorControls } = wp.blockEditor;
const { select, dispatch } = wp.data;

class TabsBlock extends Component {
	constructor() {
		super(...arguments);
	}

	/* componentWillMount() {
		const { attributes, setAttributes } = this.props;

		// No override attributes of blocks inserted before
		if (attributes.changed !== true) {
			// Set changed attribute to true, so we don't modify anything again
			setAttributes({ changed: true });
		}
	} */

	componentDidMount() {
		// fetch children on load
		console.log('fetching children...');
		this.dispatchChildren();
		console.log('done!');
	}

	/* componentDidUpdate(prevProps) {
		const { tabItems: prevItems } = prevProps.attributes;
		const { tabItems } = this.props.attributes;

		if (tabItems.length === 0) {
			this.props.setAttributes({
				tabItems: [
					{
						header: 'Tab 1',
						body: 'At least one tab must remain. To remove block use "Remove Block" button from right menu.'
					}
				]
			});
		}
	} */

	/* MINE */
	/* updateTabs(value, index) {
		const { attributes, setAttributes } = this.props;
		const { tabItems } = attributes;

		let newItems = tabItems.map((item, thisIndex) => {
			if (index === thisIndex) {
				item = { ...item, ...value };
			}

			return item;
		});

		setAttributes({ tabItems: newItems });
	} */

	saveArrayUpdate(value, index) {
		console.log({ value, index });
		console.log(this.props.attributes.tabs);
		const items = [ ...this.props.attributes.tabs ];
		const itemToMod = items[index];

		for (const key in value) {
			if (value.hasOwnProperty(key)) {
				itemToMod[key] = value[key];
			}
		}

		items[index] = itemToMod;
		this.props.setAttributes({ tabs: items });
	}

	dispatchChildren(tab = null, index = null) {
		if (tab == null) {
			tab = this.props.attributes.tabs[0];
		}

		if (index == null) {
			index = 0;
		}

		this.saveArrayUpdate({ isActive: true }, index);

		const children = select('core/block-editor').getBlocksByClientId(this.props.clientId)[0].innerBlocks;
		children.forEach((child) => {
			if (child.attributes.tabName === tab.text) {
				dispatch('core/block-editor').updateBlockAttributes(child.clientId, { isActive: true });
			}
		});
	}

	deactivateTab() {
		const el = document.querySelector('.tab-title-text.active');
		const activeIndex = el.getAttribute('data-tab-index');
		const children = select('core/block-editor').getBlocksByClientId(this.props.clientId)[0].innerBlocks;

		this.saveArrayUpdate({ isActive: false }, parseInt(activeIndex));

		children.forEach((child) => {
			dispatch('core/block-editor').updateBlockAttributes(child.clientId, { isActive: false });
		});
	}

	handleTabClick(tab, index) {
		this.props.setAttributes({ dataTabActive: tab.text });

		// if a tab is already active, deactivate and deactivate the content block
		if (document.querySelector('.tab-title-text.active') !== null) {
			this.deactivateTab();
		}

		this.dispatchChildren(tab, index);
	}

	handleTabTextChange(value, index) {
		const child = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks[index];
		this.saveArrayUpdate({ text: value, dataTab: value }, index);
		dispatch('core/block-editor').updateBlockAttributes(child.clientId, { tabName: value });
	}

	moveLeft(tab, index) {
		const tmpArray = [ ...tabs ];
		tmpArray.splice(index, 1);
		tmpArray.splice(index - 1, 0, tab);
		this.props.setAttributes({ tabs: tmpArray });
	}

	moveRight(tab, index) {
		const tmpArray = [ ...tabs ];
		tmpArray.splice(index, 1);
		tmpArray.splice(index + 1, 0, tab);
		this.props.setAttributes({ tabs: tmpArray });
	}

	deleteTab(index) {
		// select content block matching tab
		const child = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks[index];
		const tmpArray = [ ...tabs ];

		// remove tab from tmp array and then set tabs to tmp array
		tmpArray.splice(index, 1);
		this.props.setAttributes({ tabs: tmpArray });

		// remove matching content block
		dispatch('core/block-editor').removeBlock(child.clientId);
	}

	addTab() {
		// add a new tab to the attributes
		const tabsCopy = [ ...tabs ];
		const tabName = 'Tab ' + (tabsCopy.length + 1);
		tabsCopy.push({ text: tabName, anchor: '', isActive: false, dataTab: tabName });
		this.props.setAttributes({ tabs: tabsCopy });

		// create a new tab content block
		const indexToInsert = tabsCopy.length - 1;
		dispatch('core/block-editor').insertBlock(
			createBlock('lu/block-tab-child', {
				content: tabName,
				tabName: tabName,
				tabIndex: indexToInsert,
				isActive: false
			}),
			indexToInsert,
			clientId
		);
	}

	render() {
		const { setAttributes, attributes, clientId } = this.props;
		const { tabs, dataTabActive, activeColor, contentBackgroundColor, verticalPadding, sectionID } = attributes;

		const onChangeActiveColor = (newColor) => {
			setAttributes({ activeColor: newColor });
		};

		const onChangeContentBackgroundColor = (newColor) => {
			setAttributes({ contentBackgroundColor: newColor });
		};

		const onChangeVerticalPadding = (newPadding) => {
			setAttributes({ verticalPadding: newPadding });
		};

		const INNER_TEMPLATE = [
			[ 'lu/block-tab-child', { content: 'Tab 1', tabName: 'Tab 1', tabIndex: 0 } ],
			[ 'lu/block-tab-child', { content: 'Tab 2', tabName: 'Tab 2', tabIndex: 1 } ],
			[ 'lu/block-tab-child', { content: 'Tab 3', tabName: 'Tab 3', tabIndex: 2 } ]
		];

		return (
			<div id={sectionID} className="tabSection">
				<div className="tabContainer" data-tab-active={dataTabActive}>
					{tabs.map((tab, index) => {
						return (
							<div
								key={index}
								className="tabInner"
								style={tab.isActive ? { alignSelf: 'initial' } : { alignSelf: 'flex-end' }}
							>
								{tab.isActive && (
									<div className="imageHolder">
										{index > 0 && (
											<div className="editIcon editorIcon" onClick={() => this.moveLeft(tab, index)}>
												{/* icons.leftArrow */ '<'}
											</div>
										)}
										{Object.keys(tabs).length - 1 !== index && (
											<div className="editIcon editorIcon" onClick={() => this.moveRight(tab, index)}>
												{/* icons.rightArrow */ '>'}
											</div>
										)}
									</div>
								)}
								<div className="tabHolder">
									<RichText
										key={index}
										tagName="div"
										placeholder={__('Tab Title')}
										value={tab.text}
										unstableOnFocus={() => setAttributes({ currentTab: 1 + index })}
										onChange={(value) => this.handleTabTextChange(value, index)}
										onClick={() => this.handleTabClick(tab, index)}
										className={tab.isActive ? 'tab-title-text active' : 'tab-title-text'}
										style={
											tab.isActive && {
												color: activeColor,
												borderBottomColor: { activeColor }
											}
										}
										keepPlaceholderOnFocus
										data-tab={tab.dataTab}
										data-tab-index={index}
									/>
									{tab.isActive && (
										<div className="editIcon" onClick={() => this.deleteTab(index)}>
											{/* icons.trash */ '🗑'}
										</div>
									)}
								</div>
							</div>
						);
					})}

					<div className="editIcon add" onClick={this.addTab}>
						{/* icons.plus */ '+'}
					</div>
				</div>

				<InnerBlocks
					template={INNER_TEMPLATE}
					allowedBlocks={[ 'lu/block-tab-child' ]}
					renderAppender={false}
				/>
			</div>
		);
	}
}

/**
 * Register: Tab Layout block
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('lu/block-tab-parent', {
	title: __('Tab Layout'),
	// icon: icons.tabs,
	icon: 'menu',
	category: 'common',
	keywords: [ __('Tab layout'), __('Tab') ],
	attributes: {
		tabs: {
			type: 'array',
			default: [
				{
					text: __('Tab 1'),
					anchor: '',
					dataTab: __('Tab 1'),
					isActive: true
				},
				{
					text: __('Tab 2'),
					anchor: '',
					dataTab: __('Tab 2'),
					isActive: false
				},
				{
					text: __('Tab 3'),
					anchor: '',
					dataTab: __('Tab 3'),
					isActive: false
				}
			]
		},
		dataTabActive: {
			type: 'string',
			default: 'Tab 1'
		},
		activeColor: {
			type: 'string',
			default: '#cd092d'
		},
		contentBackgroundColor: {
			type: 'string',
			default: '#F7F7F7'
		},
		verticalPadding: {
			type: 'integer',
			default: 80
		},
		sectionID: {
			type: 'string',
			default: null
		}
	},
	providesContext: {
		'block-tab-parent/contentBackgroundColor': 'contentBackgroundColor',
		'block-tab-parent/verticalPadding': 'verticalPadding'
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {JSX.Element[]} JSX Component.
	 */
	edit: TabsBlock
	/* (props) => {
		const { setAttributes, attributes, clientId } = props;
		const { tabs, dataTabActive, activeColor, contentBackgroundColor, verticalPadding, sectionID } = attributes;

		// fetch children on load
		// console.log('fetching children...');
		dispatchChildren();
		// console.log('done!');

		const onChangeActiveColor = (newColor) => {
			props.setAttributes({ activeColor: newColor });
		};

		const onChangeContentBackgroundColor = (newColor) => {
			setAttributes({ contentBackgroundColor: newColor });
		};

		const onChangeVerticalPadding = (newPadding) => {
			setAttributes({ verticalPadding: newPadding });
		};

		function saveArrayUpdate(value, index) {
			console.log({ value, index });
			console.log({ tabs });
			const items = [ ...tabs ];
			const itemToMod = items[index];

			for (const key in value) {
				if (value.hasOwnProperty(key)) {
					itemToMod[key] = value[key];
				}
			}

			items[index] = itemToMod;
			setAttributes({ tabs: items });
		}

		function dispatchChildren(tab = null, index = null) {
			if (tab == null) {
				tab = attributes.tabs[0];
			}

			if (index == null) {
				index = 0;
			}

			saveArrayUpdate({ isActive: true }, index);

			const children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
			children.forEach((child) => {
				if (child.attributes.tabName === tab.text) {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, { isActive: true });
				}
			});
		}

		function deactivateTab() {
			const el = document.querySelector('.tab-title-text.active');
			const activeIndex = el.getAttribute('data-tab-index');
			const children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;

			saveArrayUpdate({ isActive: false }, parseInt(activeIndex));

			children.forEach((child) => {
				dispatch('core/block-editor').updateBlockAttributes(child.clientId, { isActive: false });
			});
		}

		function handleTabClick(tab, index) {
			setAttributes({ dataTabActive: tab.text });

			// if a tab is already active, deactivate and deactivate the content block
			if (document.querySelector('.tab-title-text.active') !== null) {
				deactivateTab();
			}

			dispatchChildren(tab, index);
		}

		function handleTabTextChange(value, index) {
			const child = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks[index];
			saveArrayUpdate({ text: value, dataTab: value }, index);
			dispatch('core/block-editor').updateBlockAttributes(child.clientId, { tabName: value });
		}

		function moveLeft(tab, index) {
			const tmpArray = [ ...tabs ];
			tmpArray.splice(index, 1);
			tmpArray.splice(index - 1, 0, tab);
			setAttributes({ tabs: tmpArray });
		}

		function moveRight(tab, index) {
			const tmpArray = [ ...tabs ];
			tmpArray.splice(index, 1);
			tmpArray.splice(index + 1, 0, tab);
			setAttributes({ tabs: tmpArray });
		}

		function deleteTab(index) {
			// select content block matching tab
			const child = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks[index];
			const tmpArray = [ ...tabs ];

			// remove tab from tmp array and then set tabs to tmp array
			tmpArray.splice(index, 1);
			setAttributes({ tabs: tmpArray });

			// remove matching content block
			dispatch('core/block-editor').removeBlock(child.clientId);
		}

		function addTab() {
			// add a new tab to the attributes
			const tabsCopy = [ ...tabs ];
			const tabName = 'Tab ' + (tabsCopy.length + 1);
			tabsCopy.push({ text: tabName, anchor: '', isActive: false, dataTab: tabName });
			setAttributes({ tabs: tabsCopy });

			// create a new tab content block
			const indexToInsert = tabsCopy.length - 1;
			dispatch('core/block-editor').insertBlock(
				createBlock('cgb/tab', {
					content: tabName,
					tabName: tabName,
					tabIndex: indexToInsert,
					isActive: false
				}),
				indexToInsert,
				clientId
			);
		}

		const INNER_TEMPLATE = [
			[ 'lu/block-tab-child', { content: 'Tab 1', tabName: 'Tab 1', tabIndex: 0 } ],
			[ 'lu/block-tab-child', { content: 'Tab 2', tabName: 'Tab 2', tabIndex: 1 } ],
			[ 'lu/block-tab-child', { content: 'Tab 3', tabName: 'Tab 3', tabIndex: 2 } ]
		];

		return [
			<InspectorControls>
				<PanelBody title={'Block Anchor'}>
					<p>
						<strong>
							Enter a unique identifier for the block. This is only needed if auto-scrolling to this
							section is desired.
						</strong>
					</p>
					<TextControl
						label={'Enter the unique block ID:'}
						value={sectionID}
						onChange={(newValue) => {
							newValue = newValue.replace(/ /g, '_');
							props.setAttributes({ sectionID: newValue });
						}}
					/>
				</PanelBody>
				<PanelBody title={'Appearance Settings'}>
					<div className="editorSettingsBlock">
						<p>
							<strong>Select Active Tab Color</strong>
						</p>
						<ColorPalette value={activeColor} onChange={onChangeActiveColor} />
					</div>
					<div className="editorSettingsBlock">
						<p>
							<strong>Select Content Area Background Color</strong>
						</p>
						<ColorPalette value={contentBackgroundColor} onChange={onChangeContentBackgroundColor} />
					</div>
					<div className="editorSettingsBlock">
						<p>
							<strong>Select Top/Bottom Container Padding</strong>
						</p>
						<RangeControl
							label={'Top/Bottom Padding'}
							value={verticalPadding}
							onChange={onChangeVerticalPadding}
							min={20}
							max={120}
							step={1}
						/>
					</div>
				</PanelBody>
			</InspectorControls>,

			<div id={sectionID} className="tabSection">
				<div className="tabContainer" data-tab-active={dataTabActive}>
					{tabs.map((tab, index) => {
						return (
							<div
								key={index}
								className="tabInner"
								style={tab.isActive ? { alignSelf: 'initial' } : { alignSelf: 'flex-end' }}
							>
								{tab.isActive && (
									<div className="imageHolder">
										{index > 0 && (
											<div className="editIcon editorIcon" onClick={() => moveLeft(tab, index)}>
												{'<'}
											</div>
										)}
										{Object.keys(tabs).length - 1 !== index && (
											<div className="editIcon editorIcon" onClick={() => moveRight(tab, index)}>
												{'>'}
											</div>
										)}
									</div>
								)}
								<div className="tabHolder">
									<RichText
										key={index}
										tagName="div"
										placeholder={__('Tab Title')}
										value={tab.text}
										unstableOnFocus={() => setAttributes({ currentTab: 1 + index })}
										onChange={(value) => handleTabTextChange(value, index)}
										onClick={() => handleTabClick(tab, index)}
										className={tab.isActive ? 'tab-title-text active' : 'tab-title-text'}
										style={
											tab.isActive && {
												color: activeColor,
												borderBottomColor: { activeColor }
											}
										}
										keepPlaceholderOnFocus
										data-tab={tab.dataTab}
										data-tab-index={index}
									/>
									{tab.isActive && (
										<div className="editIcon" onClick={() => deleteTab(index)}>
											{'🗑'}
										</div>
									)}
								</div>
							</div>
						);
					})}

					<div className="editIcon add" onClick={addTab}>
						{'+'}
					</div>
				</div>

				<InnerBlocks
					template={INNER_TEMPLATE}
					allowedBlocks={[ 'lu/block-tab-child' ]}
					renderAppender={false}
				/>
			</div>
		];
	} */,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Object} JSX Frontend HTML.
	 */
	save: (props) => {
		const { attributes } = props;
		const { tabs, activeColor, sectionID } = attributes;
		const css = `.tab-title-text.active {
						color: ${activeColor};
						border-bottom-color: ${activeColor};
					}`;

		return (
			<div id={sectionID} className="tabSection">
				<style>{css}</style>
				<div className="tabContainer" data-tab-active={'Tab 1'} data-tab-color={activeColor}>
					{tabs.map((tab, index) => {
						return (
							<RichText.Content
								key={index}
								tagName="div"
								value={tab.text}
								// set first tab as active on initial load
								// all other activity is handled in front-end JS file's click event
								className={index === 0 ? 'tab-title-text active' : 'tab-title-text'}
								data-tab={tab.dataTab}
								data-tab-index={index}
							/>
						);
					})}
				</div>
				<InnerBlocks.Content />
			</div>
		);
	}
});

/**
 * Filter the attributes for all blocks to add custom ones
 *
 * Name can be used to only add the new attribute to a certain block.
 *
 * @param {Object} settings Block settings.
 * @returns {Object} settings that now have new attributes.
 */
function addCustomAttributes(settings) {
	if (settings.attributes) {
		settings.attributes['data-tab'] = {
			type: 'string',
			default: ''
		};
		settings.attributes['data-tab-index'] = {
			type: 'number'
		};
		settings.attributes['data-tab-color'] = {
			type: 'string'
		};
	}
	return settings;
}

addFilter('blocks.registerBlockType', 'lu/block-tab-parent', addCustomAttributes);

/**
  * Register: Tab block
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/
  * @param  {string}   name     Block name.
  * @param  {Object}   settings Block settings.
  * @return {?WPBlock}          The block, if it has been successfully
  *                             registered; otherwise `undefined`.
  */
registerBlockType('lu/block-tab-child', {
	title: __('Tab'),
	icon: 'menu',
	category: 'common',
	parent: 'lu/block-tab-parent',
	attributes: {
		tabName: {
			type: 'string',
			default: ''
		},
		tabIndex: {
			type: 'integer',
			default: -1
		},
		isActive: {
			type: 'boolean',
			default: false
		},
		contentBackgroundColor: {
			type: 'string',
			default: null
		},
		verticalPadding: {
			type: 'integer',
			default: null
		}
	},
	usesContext: [ 'block-tab-parent/contentBackgroundColor', 'block-tab-parent/verticalPadding' ],
	edit: (props) => {
		const { attributes, setAttributes } = props;
		const { tabName, tabIndex, isActive, contentBackgroundColor, verticalPadding } = attributes;

		const parentBackgroundColorSetting = props.context['block-tab-parent/contentBackgroundColor'];
		const parentVerticalPaddingSetting = props.context['block-tab-parent/verticalPadding'];
		if (contentBackgroundColor !== parentBackgroundColorSetting) {
			setAttributes({ contentBackgroundColor: parentBackgroundColorSetting });
		}
		if (verticalPadding !== parentVerticalPaddingSetting) {
			setAttributes({ verticalPadding: parentVerticalPaddingSetting });
		}

		const BLOCKS_TEMPLATE = [ [ 'core/paragraph', { value: 'Lorem ipsum dolor sit amet' } ] ];

		return (
			<div
				data-tab={tabName}
				data-tab-index={tabIndex}
				className={isActive ? 'tab-content active' : 'tab-content'}
				style={{
					backgroundColor: contentBackgroundColor,
					paddingTop: verticalPadding,
					paddingBottom: verticalPadding
				}}
			>
				<div className="contentContainer">
					<InnerBlocks
						template={BLOCKS_TEMPLATE}
						templateLock={false}
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					/>
				</div>
			</div>
		);
	},

	save: (props) => {
		const { tabName, tabIndex, contentBackgroundColor, verticalPadding } = props.attributes;

		// the active tab's content area is activated in the events script
		return (
			<div
				className="tab-content"
				data-tab={tabName}
				data-tab-index={tabIndex}
				style={{
					backgroundColor: contentBackgroundColor,
					paddingTop: verticalPadding,
					paddingBottom: verticalPadding
				}}
			>
				<div className="contentContainer">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});

function addCustomAttributes(settings) {
	if (settings.attributes) {
		settings.attributes['data-tab'] = {
			type: 'string',
			default: ''
		};
		settings.attributes['data-tab-index'] = {
			type: 'number'
		};
	}
	return settings;
}

addFilter('blocks.registerBlockType', 'lu/block-tab-child', addCustomAttributes);
