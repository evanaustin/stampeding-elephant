/**
 * Generics
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { SelectControl, TextControl, ColorPicker, ToggleControl } = wp.components;

/**
 * Extend default Paragraph block
 *
 * @param {function} settings Block edit component.
 * @param {function} name Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
function extendParagraphBlock(settings, name) {
	if ("core/paragraph" === name) {
		settings.attributes.content.default = __("This is a new paragraph. Lorem ipsum dolor sit amet...");
	}

	return settings;
}

addFilter(
	"blocks.registerBlockType",
	"lu-gutenberg/extend-paragraph-block",
	extendParagraphBlock,
);


const filterBlocks = (settings) => {
	if (settings.name !== 'core/column') {
		return settings
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes, // spread in old attributes
			bgColor: {
				type: 'string',
				default: 'transparent'
			}
		},
		edit(props) {
			const { bgColor } = props.attributes;

			console.log(props);

			return (
				<Fragment>
					<InspectorControls>
						<panelBody title={__('Background Color')} initialOpen={false}>
							<panelRow>
								<ColorPicker
									label={__('Background Color')}
									color={props.attributes}
									onChangeComplete={(value) => props.setAttributes({ bgColor: value.hex })}
								/>
							</panelRow>
						</panelBody>
					</InspectorControls>

					{/* <SelectControl
						value={bgColor}
						label='Select background color:'
						onChange={bgColor => props.setAttributes({ bgColor })}
						options={[
							{ label: 'pink', value: 'pink' },
							{ label: 'orange', value: 'orange' },
							{ label: 'cadetblue', value: 'cadetblue' },
						]}
					/> */}
					{/* <div
						className='my-custom-wrapper'
						style={{ background: bgColor }}
					> */}
					{/* {settings.edit(props => {
						return ( */}
							<div style={{ background: props.attributes.bgColor }}>
								<InnerBlocks.content />
							</div>
						{/* )
					})} */}
					{/* </div> */}
				</Fragment>
			)

		},
		save(props) {
			const { bgColor } = props.attributes;

			return (
				// <div
				// 	className='my-custom-wrapper'
				// 	style={{ background: bgColor }}
				// >
				settings.save(props)
				// </div>
			)
		}
	}

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'lu-gutenberg/custom-column',
	filterBlocks
);