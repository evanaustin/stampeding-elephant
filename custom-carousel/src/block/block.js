/**
 * BLOCK: custom carousel
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, /* AlignmentToolbar, */ BlockControls, InspectorControls, PanelColorSettings, InnerBlocks } = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl, CheckboxControl } = wp.components;

/**
 * Register: Accordion Gutenberg Block.
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
registerBlockType('lu/block-custom-carousel-parent', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Custom Carousel'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Custom carousel'),
		__('Custom blocks'),
		__('Gutenberg'),
	],
	attributes: {
		blockId: {
			type: 'string',
		},
		verticalCentered: {
			type: 'boolean',
			default: false,
		},
		noGap: {
			type: 'boolean',
			default: false,
		},
		controlArrowOption: {
			type: 'number',
			default: 0,
		},
		imageOption: {
			type: 'number',
			default: 0,
		},
		slideChangeSpeed: {
			type: 'number',
			default: 250,
		},
		timeBetweenSlides: {
			type: 'number',
			default: 0
		},
		sliderOption: {
			type: 'string',
			default: '{"slider": 0, "slides": 0}',
		},
		numSlider: {
			type: 'number',
			default: 0,
		},
		numSlides: {
			type: 'number',
			default: 0,
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
				verticalCentered,
				noGap,
				controlArrowOption,
				imageOption,
				slideChangeSpeed,
				timeBetweenSlides,
				sliderOption,
				numSlider,
				numSlides,
			},
			className,
			setAttributes,
			clientId,
		} = props;

		setAttributes({ blockId: clientId });

		const ALLOWEDBLOCKS = ['lu/block-custom-carousel-child'];
		const BLOCKS_TEMPLATE = [
			['lu/block-custom-carousel-child'],
		];

		const sliderOptions = [
			{
				label: 'Auto',
				/*
				Object-oriented value options for a SelectControl MUST be encoded as shown below.
				SelectControl:onChange() only expects ONE parameter, and casts it as a string.
				So, we need to pass the data as a string, which in the function we can then parse as JSON.
				*/
				value: '{"slider": 0, "slides": 0}',
			},
			{
				label: 'Slider',
				value: '{"slider": 99, "slides": 1}',
			},
			{
				label: 'Slider Full Width',
				value: '{"slider": 98, "slides": 1}',
			},
			{
				label: '1',
				value: '{"slider": 1, "slides": 1}',
			},
			{
				label: '2',
				value: '{"slider": 2, "slides": 2}',
			},
			{
				label: '3',
				value: '{"slider": 3, "slides": 3}',
			},
			{
				label: '4',
				value: '{"slider": 4, "slides": 4}',
			},
			{
				label: '5',
				value: '{"slider": 5, "slides": 5}',
			},
		];

		return (
			<fragment>
				<div>
					<div
						className="carouselParentWrapper"
						data-carousel-centered={verticalCentered}
						data-carousel-no-gap={noGap}
						data-carousel-arrows={controlArrowOption}
						data-carousel-images={imageOption}
						data-carousel-speed={slideChangeSpeed}
						data-carousel-timeout={timeBetweenSlides}
						data-carousel-slider={numSlider}
						data-carousel-slides={numSlides}
					>
						<p>[ Custom Carousel ]</p>

						<InnerBlocks
							template={BLOCKS_TEMPLATE}
							templateLock={false}
							allowedBlocks={ALLOWEDBLOCKS}
						/>
					</div>

					<InspectorControls>
						<panelBody title={__('Edit Carousel Options')} initialOpen={false}>
							<panelRow>
								<ToggleControl
									label="Vertical Centered"
									checked={!!verticalCentered}
									onChange={() => setAttributes({ verticalCentered: !verticalCentered })}
								/>

								<ToggleControl
									label="No Spacing Between Slides"
									checked={!!noGap}
									onChange={() => setAttributes({ noGap: !noGap })}
								/>

								<SelectControl
									label={__('Different Control Arrow Options')}
									value={controlArrowOption}
									onChange={(value) => setAttributes({ controlArrowOption: Number(value) })}
									options={[
										{ value: 0, label: 'Dark arrows' },
										{ value: 1, label: 'White arrows' },
										{ value: 2, label: 'No arrows' },
									]}
								/>

								<SelectControl
									label={__('Different Image Options')}
									value={imageOption}
									onChange={(value) => setAttributes({ imageOption: Number(value) })}
									options={[
										{ value: 0, label: 'Regular 100px height | auto width' },
										{ value: 1, label: 'Medium 200px height | auto width' },
										{ value: 2, label: 'Large 300px height | auto width' },
										{ value: 3, label: 'Image will fill width of slide' },
										{ value: 4, label: 'Images are resizable' },
									]}
								/>

								<SelectControl
									label={__('Slide Change Speed')}
									value={slideChangeSpeed}
									onChange={(value) => setAttributes({ slideChangeSpeed: Number(value) })}
									options={[
										{ value: 250, label: '0.25s' },
										{ value: 500, label: '0.50s' },
										{ value: 750, label: '0.75s' },
										{ value: 1000, label: '1.00s' },
										{ value: 1500, label: '1.50s' },
										{ value: 2000, label: '2.00s' },
									]}
								/>

								<SelectControl
									label={__('Time Between Slides')}
									value={timeBetweenSlides}
									onChange={(value) => setAttributes({ timeBetweenSlides: Number(value) })}
									options={[
										{ value: 0, label: 'Manual Carousel' },
										{ value: 1000, label: '1s' },
										{ value: 2000, label: '2s' },
										{ value: 3000, label: '3s' },
										{ value: 4000, label: '4s' },
										{ value: 5000, label: '5s' },
										{ value: 6000, label: '6s' },
										{ value: 7000, label: '7s' },
										{ value: 8000, label: '8s' },
										{ value: 9000, label: '9s' },
										{ value: 10000, label: '10s' },
									]}
								/>

								<SelectControl
									label={__('Number of Slides Visible')}
									value={sliderOption}
									onChange={(value) => {
										// value comes in as stringified JSON, so we need to parse
										const v = JSON.parse(value);
										console.log(typeof (v));
										console.log(v);

										setAttributes({
											sliderOption: value,
											numSlider: Number(v.slider),
											numSlides: Number(v.slides),
										})
									}}
									options={sliderOptions}
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
				verticalCentered,
				noGap,
				controlArrowOption,
				imageOption,
				slideChangeSpeed,
				timeBetweenSlides,
				numSlider,
				numSlides,
			},
			className,
			setAttributes,
			clientId
		} = props;

		return (
			<div
				className={'carousel tinymce_carousel ' + (numSlider == 99 ? 'slider' : '') + (numSlider == 98 ? 'slider slider_full' : '')}
				data-carousel-centered={verticalCentered}
				data-carousel-no-gap={noGap}
				data-carousel-arrows={controlArrowOption}
				data-carousel-images={imageOption}
				data-carousel-speed={slideChangeSpeed}
				data-carousel-timeout={timeBetweenSlides}
				data-carousel-slider={numSlider}
				data-carousel-slides={numSlides}
			>
				<p class="carouselPrev"></p>
				<p class="carouselNext"></p>

				<div class="carousel_container">
					<InnerBlocks.Content />
				</div>
			</div >
		);
	},
});

/* Accordion Child Block */
registerBlockType('lu/block-custom-carousel-child', {
	title: __('Custom Carousel Child'),
	category: 'common',
	parent: ['lu/block-custom-carousel-parent'],
	attributes: {
		copy: {
			type: 'string',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien ipsum, iaculis at malesuada sit amet, pellentesque a risus. Fusce facilisis mollis velit, sit amet luctus nisl consectetur in.',
		},
	},
	edit: (props) => {
		const { attributes, setAttributes, className, clientId } = props;
		const parentBlocks = wp.data.select('core/block-editor').getBlockParents(clientId);
		const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[0].attributes;
		setAttributes({ styled: parentAttributes.styled })

		const {
			copy,
		} = attributes;

		const ALLOWEDBLOCKS = ['core/paragraph'];
		const BLOCKS_TEMPLATE = [
			['core/paragraph'],
		];

		return (
			<div className={{ className }}>
				<RichText
					tagName="p"
					value={copy}
					onChange={(value) => setAttributes({ copy: value })}
				/>
			</div>
		);
	},
	save: (props) => {
		const { attributes, className } = props;

		const {
			copy,
		} = attributes;

		return (
			<div class="carousel_item">
				<div class="carousel_content">
					<RichText.Content
						tagName="p"
						value={copy}
					/>
				</div>
			</div>
		);
	},
});
