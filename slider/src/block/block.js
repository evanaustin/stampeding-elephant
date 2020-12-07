/**
 * BLOCK: slider
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
 * Register: aa Gutenberg Block.
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
registerBlockType('lu/block-slider-parent', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Slider Parent'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Accordion'),
		__('Custom Blocks'),
		__('Gutenberg'),
	],
	attributes: {
		noOfChildren: {
			type: 'number',
			default: 2
		},
		blockId: {
			type: 'string',
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
				noOfChildren,
				styled
			},
			className,
			setAttributes,
			clientId,
		} = props;

		setAttributes({ blockId: clientId });

		const ALLOWEDBLOCKS = ['lu/block-slider-child'];

		const getChildSliderBlock = memoize(slider => {
			return times(slider, n => ["lu/block-slider-child", {
				id: n + 1
			}]);
		});

		return (
			<fragment>
				<div className={{ className }}>
					<div className={'sliderParentWrapper'}>
						<p>[ Slider ]</p>
						<InnerBlocks
							template={getChildSliderBlock(noOfChildren)}
							templateLock="all"
							allowedBlocks={ALLOWEDBLOCKS}
						/>
						<span className="dashicons dashicons-plus" onClick={() => setAttributes({ noOfChildren: noOfChildren + 1 })}></span>
						<span className="dashicons dashicons-minus" onClick={() => setAttributes({ noOfChildren: noOfChildren - 1 })}></span>
					</div>
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
				noOfChildren,
			},
			className,
			setAttributes,
			clientId
		} = props;

		return (
			<div className='slider'>
				<div className='slider_container'>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
});

/* Slider Child Block */
registerBlockType('lu/block-slider-child', {
	title: __('Slider Child'),
	category: 'common',
	parent: ['lu/block-slider-parent'],
	edit: (props) => {
		const { attributes, setAttributes, className, clientId } = props;

		const ALLOWEDBLOCKS = ['core/paragraph'];
		const BLOCKS_TEMPLATE = [
			['core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet' }],
		];

		return (
			<div className={{ className }}>
				<div className='slider'>
					<InnerBlocks
						template={BLOCKS_TEMPLATE}
						templateLock={false}
						allowedBlocks={ALLOWEDBLOCKS}
					></InnerBlocks>
				</div>
			</div>
		);
	},
	save: (props) => {
		return (
			<div className='slider_item cycle_slide'>
				<InnerBlocks.Content />
			</div>
		);
	},
});