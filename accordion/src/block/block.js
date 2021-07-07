/**
 * BLOCK: accordion
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	InnerBlocks
} = wp.blockEditor;
const { TextControl, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl } = wp.components;

/**
 * Register: Accordion block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('lu/block-accordion-parent', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Accordion'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [ __('Accordion') ],
	attributes: {
		noOfChildren: {
			type: 'number',
			default: 0
		},
		blockId: {
			type: 'string'
		},
		styled: {
			type: 'boolean',
			default: false
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
		const { attributes: { noOfChildren, styled }, className, setAttributes, clientId } = props;

		setAttributes({ blockId: clientId });

		const ALLOWEDBLOCKS = [ 'lu/block-accordion-child' ];
		const BLOCKS_TEMPLATE = [ ALLOWEDBLOCKS ];

		const styledAccordion = styled ? 'styled-accordion' : '';

		return (
			<fragment>
				<div className={{ className }}>
					<div className={'accordionParentWrapper accordion' + ' ' + styledAccordion}>
						<p>[ Accordion ]</p>
						<InnerBlocks template={BLOCKS_TEMPLATE} templateLock={false} allowedBlocks={ALLOWEDBLOCKS} />
					</div>

					<InspectorControls>
						<panelBody title={__('Accordion Style Setting')} initialOpen={false}>
							<panelRow>
								<label>
									<b>Styled Setting</b>
								</label>
								<ToggleControl
									label={__('Styled Accordion')}
									checked={!!styled}
									onChange={() => setAttributes({ styled: !styled })}
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
		const { attributes: { noOfChildren, styled }, className, setAttributes, clientId } = props;

		const styledAccordion = styled ? 'styled-accordion' : '';

		return (
			<div className={'accordion' + ' ' + styledAccordion}>
				<InnerBlocks.Content />
			</div>
		);
	}
});

/**
 * Register: Accordion Child block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('lu/block-accordion-child', {
	title: __('Accordion Child'),
	category: 'common',
	parent: [ 'lu/block-accordion-parent' ],
	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		subtitle: {
			type: 'string',
			default: ''
		},
		open: {
			type: 'boolean',
			default: false
		},
		styled: {
			type: 'boolean',
			default: false
		}
	},
	edit: (props) => {
		const { attributes, setAttributes, className, clientId } = props;
		const parentBlocks = wp.data.select('core/block-editor').getBlockParents(clientId);
		const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[0].attributes;
		setAttributes({ styled: parentAttributes.styled });

		const { title, subtitle, open, styled } = attributes;

		const ALLOWEDBLOCKS = [ 'core/paragraph' ];
		const BLOCKS_TEMPLATE = [ [ 'core/paragraph', { value: 'Lorem ipsum dolor sit amet' } ] ];

		const subtitleDisplay = styled ? 'block' : 'none';

		return (
			<div className={{ className }}>
				<div className="accordionWrapper accordion_item">
					<div className="accordionHeader accordion_title">
						<RichText
							tagName={styled ? 'h3' : 'p'}
							value={title}
							onChange={(value) => setAttributes({ title: value })}
							placeholder={__('Accordion Header')}
						/>

						<RichText
							tagName="p"
							value={subtitle}
							onChange={(value) => setAttributes({ subtitle: value })}
							placeholder={__('Accordion Subtitle')}
							style={{ display: subtitleDisplay }}
						/>
					</div>

					<div className="accordionBody accordionContent">
						<InnerBlocks template={BLOCKS_TEMPLATE} templateLock={false} allowedBlocks={ALLOWEDBLOCKS} />
					</div>
				</div>

				<InspectorControls>
					<panelBody title={__('Accordion Title Setting')} initialOpen={false}>
						<panelRow>
							<label>
								<b>Title Setting</b>
							</label>
							<ToggleControl
								label={__('Open By Default')}
								checked={!!open}
								onChange={() => setAttributes({ open: !open })}
							/>
						</panelRow>
					</panelBody>
				</InspectorControls>
			</div>
		);
	},
	save: (props) => {
		const { attributes, className } = props;

		const { open, styled, title, subtitle } = attributes;

		const tabOpen = open ? 'tabOpen active' : 'tabClose';
		const subtitleDisplay = styled ? 'block' : 'none';
		const bodyDisplay = open ? 'block' : 'none';

		return (
			<div className={'accordionWrapper accordion_item' + ' ' + tabOpen}>
				<div className="accordion_title">
					<RichText.Content tagName={styled ? 'h3' : 'p'} value={title} className="accordionHeader" />
					<RichText.Content tagName="p" value={subtitle} style={{ display: subtitleDisplay }} />
				</div>

				<div className="accordionBody accordion_content" style={{ display: bodyDisplay }}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
