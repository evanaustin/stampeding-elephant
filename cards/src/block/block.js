/**
 * BLOCK: card
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
 * Register: Cards Gutenberg Block.
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
registerBlockType('lu/block-cards-parent', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Cards'), // Block title.
	icon: 'index-card', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Cards'),
		__('Custom blocks'),
		__('Gutenberg'),
	],
	attributes: {
		noOfCards: {
			type: 'number',
			default: 3
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
			className,
			attributes: { noOfCards },
			setAttributes,
			clientId
		} = props;

		setAttributes({ blockId: clientId });

		const ALLOWEDBLOCKS = ['lu/block-cards-child'];

		const getChildCardBlock = memoize(card => {
			return times(card, n => ["lu/block-cards-child", {
				id: n + 1
			}]);
		});

		return (
			<fragment>
				<div className={{ className }}>
					<div className={'cards'}>
						<p>[ Cards ]</p>
						<InnerBlocks
							template={getChildCardBlock(noOfCards)}
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
			className,
			attributes: { noOfCards },
		} = props;

		return (
			<div className={className}>
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType('lu/block-cards-child', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Card Child'), // Block title.
	icon: 'index-card', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	parent: ['lu/block-cards-parent'],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		subtitle: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.steps',
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
			className,
			attributes: { title, subtitle, content },
			setAttributes,
		} = props;

		return (
			<div className={className}>
				<div className="card">
					<div className="card_top">
						<RichText
							tagName="h2"
							placeholder={__('###')}
							value={title}
							onChange={(value) => setAttributes({ title: value })}
						/>

						<RichText
							tagName="p"
							placeholder={__('lorem ipsum')}
							value={subtitle}
							onChange={(value) => setAttributes({ subtitle: value })}
						/>
					</div>

					<div className="card_bottom">
						<RichText
							tagName="div"
							multiline="p"
							placeholder={__('Lorem ipsum dolor sit amet, consectetur adipiscing elit')}
							value={content}
							onChange={(value) => setAttributes({ content: value })}
						/>
					</div>
				</div>
			</div>
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
			className,
			attributes: { title, subtitle, content },
		} = props;

		return (
			<div className={className}>
				<div className="card">
					<div className="card_top">
						<RichText.Content
							tagName="h2" value={title}
						/>

						<RichText.Content
							tagName="p"
							value={subtitle}
						/>
					</div>

					<div className="card_bottom">
						<RichText.Content
							tagName="div"
							className="steps"
							value={content}
						/>
					</div>
				</div>
			</div>
		);
	},
});
