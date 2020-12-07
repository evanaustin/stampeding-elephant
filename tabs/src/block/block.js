/**
 * BLOCK: tabs
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

import times from "lodash/times";
import memoize from "memize";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, AlignmentToolbar, BlockControls, InspectorControls, PanelColorSettings, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl } = wp.components;

/**
 * Register: Tabs Gutenberg Block.
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
registerBlockType('lu/block-tabs-parent', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Tabs'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Tabs'),
		__('Custom blocks'),
		__('Gutenberg'),
	],
	attributes: {
		noOfTabs: {
			type: 'number',
			default: 0,
		},
		blockId: {
			type: 'string',
		},
		style: {
			type: 'string',
			default: 'regular',
		},
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
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		const {
			attributes: {
				noOfTabs,
				style
			},
			className,
			setAttributes,
			clientId,
		} = props;

		setAttributes({ blockId: clientId });

		const ALLOWEDTITLEBLOCKS = ['lu/block-tab-title'];
		const ALLOWEDCONTENTBLOCKS = ['lu/block-tab-content'];

		const ALLOWEDBLOCKS = ['core/paragraph'];
        const BLOCKS_TEMPLATE = [
            ['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet' }],
        ];

		const getTabTitleBlocks = memoize(tabTitles => {
			return times(tabTitles, n => ["lu/block-tab-title", {
				id: n + 1
			}]);
		});
		
		const getTabContentBlocks = memoize(tabContents => {
			return times(tabContents, n => ["lu/block-tab-content", {
				id: n + 1
			}]);
		});

		return (
			<fragment>
				<div className={{ className }}>
					<div className={'tabsParentWrapper tabs_wrapper'}>
						<p>[ Tabs ]</p>

						<div className="tabs">
							<InnerBlocks
								template={getTabTitleBlocks(noOfTabs)}
								templateLock="all"
								allowedBlocks={ALLOWEDTITLEBLOCKS}
							/>
						</div>

						<div className="tabs_content">
							<InnerBlocks
								template={BLOCKS_TEMPLATE}
								templateLock="all"
								allowedBlocks={ALLOWEDBLOCKS}
							/>
							{/* <InnerBlocks
								template={getTabContentBlocks(noOfTabs)}
								templateLock="all"
								allowedBlocks={ALLOWEDCONTENTBLOCKS}
							/> */}
						</div>

						<span className="dashicons dashicons-plus" onClick={() => setAttributes({ noOfTabs: noOfTabs + 1 })}></span>
						<span className="dashicons dashicons-minus" onClick={() => setAttributes({ noOfTabs: noOfTabs - 1 })}></span>
					</div>

					<InspectorControls>
						<panelBody title={__('Tabs Style Setting')} initialOpen={false}>
							<panelRow>
								<label><b>Style Setting</b></label>
								<ToggleControl
									label={__('Style Tabs')}
									checked={!!style}
									onChange={() => setAttributes({ style: !style })}
								/>
							</panelRow>
						</panelBody>
					</InspectorControls>
				</div>
			</fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		const {
			attributes: {
				noOfTabs,
				style
			},
			className,
			setAttributes,
			clientId
		} = props;

		return (
			<div className="tab_wrapper">
				<div className="tabs">
					<InnerBlocks.Content />
				</div>

				<div className="tabs_content">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});


/* Tab Title Block */
registerBlockType('lu/block-tab-title', {
	title: __('Tab Title'),
	category: 'common',
	parent: ['lu/block-tabs-parent'],
	attributes: {
		style: {
			type: 'string',
			default: 'regular',
		},
		title: {
			type: 'string',
		},
	},
	edit: (props) => {
		const { attributes, setAttributes, className, clientId } = props;
		const parentBlocks = wp.data.select('core/block-editor').getBlockParents(clientId);
		const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[0].attributes;
		{ setAttributes({ style: parentAttributes.style }) }

		const {
			style,
			title,
		} = attributes;

		return (
			<div className={{ className }}>
				<div className='tab'>
					<RichText
						tagName="div"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						placeholder={__('Tab title')}
						className="tab_title"
					/>
				</div>
			</div>
		);
	},
	save: (props) => {
		const { attributes, className, } = props;
		const { style, title, } = attributes;

		return (
			<div className="tab">
				<RichText.Content
					tagName="div"
					value={title}
					className="tab_title"
				/>
			</div>
		);
	},
});

/* Tab Content Block */
registerBlockType('lu/block-tab-content', {
	title: __('Tab Content'),
	category: 'common',
	parent: ['lu/block-accordion-parent'],
	attributes: {
		style: {
			type: 'string',
			default: 'regular',
		},
	},
	edit: (props) => {
		const { attributes, setAttributes, className, clientId } = props;
		const parentBlocks = wp.data.select('core/block-editor').getBlockParents(clientId);
		const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[0].attributes;
		{ setAttributes({ style: parentAttributes.style }) }

		const {
			style,
		} = attributes;

		const ALLOWEDBLOCKS = ['core/paragraph'];
		const BLOCKS_TEMPLATE = [
			['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet' }],
		];

		// const subtitleDisplay = styled ? 'block' : 'none';

		return (
			<div className={{ className }}>
				<div className='tabs_content'>
					<div className='tabContent'>
						<InnerBlocks
							template={BLOCKS_TEMPLATE}
							templateLock={false}
							allowedBlocks={ALLOWEDBLOCKS}
						></InnerBlocks>
					</div>
				</div>
			</div>
		);
	},
	save: (props) => {
		const { attributes, className } = props;

		const {
			style,
		} = attributes;

		return (
			<div className={'tabs_content'}>
				<div className='tabContent'>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});
