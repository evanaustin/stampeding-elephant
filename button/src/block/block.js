/**
 * BLOCK: button
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	Button,
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	InnerBlocks
} = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl } = wp.components;
// const { withState } = wp.compose;

/**
 * Register: Button Parent block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('lu/block-button-parent', {
	title: __('CTA Buttons'),
	icon: 'menu',
	category: 'common',
	keywords: [ __('Accordion'), __('Custom blocks'), __('Gutenberg') ],
	attributes: {
		position: {
			type: 'string',
			default: ''
		}
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
		const { attributes: { position }, className, setAttributes } = props;

		const ALLOWEDBLOCKS = [ 'lu/block-button-child' ];
		const BLOCKS_TEMPLATE = [ ALLOWEDBLOCKS ];

		const positionOptions = [
			{
				label: 'Left',
				value: 'has-text-align-left'
				// value: 'text-justified-left'
			},
			{
				label: 'Center',
				value: 'has-text-align-center'
				// value: 'text-justified-center'
			},
			{
				label: 'Right',
				value: 'has-text-align-right'
				// value: 'text-justified-right'
			}
		];

		return (
			<fragment>
				<div className={`${className} ${position}`}>
					<InnerBlocks template={BLOCKS_TEMPLATE} templateLock={false} allowedBlocks={ALLOWEDBLOCKS} />
				</div>

				<InspectorControls>
					<panelBody>
						<panelRow>
							<SelectControl
								label={__('Position')}
								value={position}
								options={positionOptions}
								onChange={(value) => setAttributes({ position: value })}
							/>
						</panelRow>
					</panelBody>
				</InspectorControls>
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
		const { attributes: { position }, className } = props;

		return (
			<p className={`${className} ${position}`}>
				<InnerBlocks.Content />
			</p>
		);
	}
});

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
registerBlockType('lu/block-button-child', {
	title: __('CTA Button'),
	icon: 'button',
	category: 'common',
	parent: [ 'lu/block-button-parent' ],
	keywords: [ __('Button') ],
	attributes: {
		style: {
			type: 'string',
			default: 'green'
		},
		title: {
			type: 'string',
			default: 'Learn More'
		},
		href: {
			type: 'string',
		},
		immutableHref: {
			type: 'string',
		},
		dataHref: {
			type: 'string',
		}
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
		const { attributes: { style, title, href, immutableHref, dataHref }, className, setAttributes } = props;

		const styleOptions = [
			{
				label: 'Generic Green Button',
				value: 'green',
				defaultText: 'Learn More'
			},
			{
				label: 'Green Apply Button',
				value: 'green applyLink',
				defaultText: 'Apply Now',
				immutableHref: 'https://apply.liberty.edu/'
			},
			{
				label: 'Generic Blue Button',
				value: 'blue',
				defaultText: 'Learn More'
			},
			{
				label: 'Blue Request Info Button',
				value: 'blue requestInfo request-info',
				defaultText: 'Request Info',
				dataHref: 'https://www.liberty.edu/online/request-information/?program='
			},
			{
				label: 'Clear Ghost Button',
				value: 'ghost',
				defaultText: 'Learn More'
			}
		];

		return (
			<fragment>
				<div className={className}>
					<RichText
						tagName="a"
						value={title}
						href={immutableHref || href}
						data-href={dataHref}
						onChange={(value) => setAttributes({ title: value })}
						className={`btn button ${style}`}
					/>
				</div>

				<InspectorControls>
					<panelBody>
						<panelRow>
							<SelectControl
								label={__('Style')}
								value={style}
								options={styleOptions}
								onChange={(value) => {
									const selected = Object.values(styleOptions).filter((o) => {
										return o.value == value;
									})[0];

									setAttributes({
										style: value,
										title: selected.defaultText,
									});

									if (selected.immutableHref) {
										// href is not allowed to be edited
										setAttributes({ immutableHref: selected.immutableHref });
									} else {
										// href is allowed to be edited
										setAttributes({ immutableHref: null });
									}

									if (selected.dataHref) {
										setAttributes({ dataHref: selected.dataHref });
										setAttributes({ href: null });
									} else {
										setAttributes({ dataHref: null });
									}
								}}
							/>
						</panelRow>

						{!immutableHref && !dataHref && (
							<panelRow>
								<TextControl
									label={__('Anchor link')}
									value={href}
									onChange={(value) => setAttributes({ href: value })}
								/>
							</panelRow>
						)}
					</panelBody>
				</InspectorControls>
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
		const { attributes: { style, title, href, immutableHref, dataHref } } = props;
		return (
			<RichText.Content
				tagName="a"
				className={`btn button ${style}`}
				value={title}
				href={immutableHref || href}
				data-href={dataHref}
			/>
		);
	}
});
