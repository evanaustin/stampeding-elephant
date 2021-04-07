/**
 * BLOCK: carousel
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';


const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls, RichText, PanelColorSettings } = wp.blockEditor;
const { Dashicon, Tooltip, PanelBody, RangeControl, SelectControl } = wp.components;

class CarouselBlock extends Component {
	constructor() {
		super(...arguments);
	}

	componentWillMount() {
		const { attributes, setAttributes } = this.props;

		// No override attributes of blocks inserted before
		if (attributes.changed !== true) {
			// Set changed attribute to true, so we don't modify anything again
			setAttributes({ changed: true });
		}
	}

	componentDidMount() {
		if (!this.props.attributes.blockID) {
			this.props.setAttributes({ blockID: this.props.clientId });
		}
	}

	componentDidUpdate(prevProps) {
		const { tabItems: prevItems } = prevProps.attributes;
		const { tabItems } = this.props.attributes;

		if (tabItems.length === 0) {
			this.props.setAttributes({
				tabItems: [
					{
						header: 'Tab 1',
						body: 'At least one tab must remaining, to remove block use "Remove Block" button from right menu.',
					},
				],
			});
		}
	}

	updateTabs(value, index) {
		const { attributes, setAttributes } = this.props;
		const { tabItems } = attributes;

		let newItems = tabItems.map((item, thisIndex) => {
			if (index === thisIndex) {
				item = { ...item, ...value };
			}

			return item;
		});

		setAttributes({ tabItems: newItems });
	}

	render() {
		const { attributes, setAttributes, clientId } = this.props;
		const {
			blockID,
			tabItems,
			activeTab,
		} = attributes;

		// edit
		return (
			<Fragment>
				<div className="add-tab">
					<Tooltip text={__('Add tab')}>
						<span onClick={() => setAttributes({
							tabItems: [
								...tabItems,
								{ header: __('New item'), body: __('Enter your content.') }
							]
						})}>
							<Dashicon icon="plus-alt" />
						</span>
					</Tooltip>
				</div>

				<div className="tabs-block">
					<div className="tab_wrapper">
						<div class="tabs_content">
							{tabItems.map((item, index) => (
								<div key={index}
									id={`tab-${blockID}-${index}`}
									className={`tab_content ${activeTab == index ? 'active' : 'inactive'}`}
									data-tab={index}
								>
									<RichText
										tagName="p"
										value={item.body}
										onChange={(value) => this.updateTabs({ body: value }, index)}
										placeholder={__('Enter text…')}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

const tabBlockAttrs = {
	tabItems: {
		type: "array",
		default: [
			{
				header: __('Tab 1'),
				body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
			},
			{
				header: __('Tab 2'),
				body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
			},
			{
				header: __('Tab 3'),
				body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
			},
		]
	},
	blockID: {
		type: 'string',
	},
	activeTab: {
		type: 'number',
		default: 0,
	},
	changed: {
		type: 'boolean',
		default: false,
	},
};

registerBlockType('lu/block-carousel', {
	title: __('Carousel'),
	icon: 'menu',
	category: 'common',
	keywords: [
		__('Carousel'),
		__('Custom blocks'),
		__('Gutenberg'),
	],
	attributes: tabBlockAttrs,
	edit: CarouselBlock,
	save: ({ attributes }) => {
		const {
			blockID,
			tabItems,
		} = attributes;

		return (
			<div
				className="carousel tinymce_carousel"
				data-carousel-no-gap="false"
				data-carousel-images="0"
				data-carousel-speed="500"
				data-carousel-timeout="4000"
				data-carousel-arrows="0"
				data-carousel-slider="0"
				data-carousel-centered="true"
				data-carousel-slides="0"
			>
				{/* <p className="carouselPrev" style="display: block;"></p> */}
				{/* <p className="carouselNext" style="display: block;"></p> */}

				<div className="carousel-container">
					{tabItems.map((item, index) => (
						<div class="carousel_item cycle-slide cycle-sentinel">
							<div class="carousel_content">
								{/* <div key={index}
									id={`tab-${blockID}-${index}`}
									className="tab_content"
									data-tab={index}
								> */}
								<RichText.Content tagName="p" value={item.body} />
							</div>
						</div>
					))}
				</div>
			</div>
		);
	},
});