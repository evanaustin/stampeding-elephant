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
const { TextControl, ColorPicker, ToggleControl } = wp.components;

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


/**
 * Extend default Columns block
 *
 * @param {function} settings Block edit component.
 * @param {function} name Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
function extendColumnBlock(settings, name) {
	if ("core/columns" === name) {
		console.log(settings.attributes.backgroundColor);
		if (settings.attributes.backgroundColor == undefined) {
			console.log('adding bg color...')
			settings.attributes = Object.assign(settings.attributes, {
				backgroundColor: {
					type: 'string',
				}
			});
		}

		console.log({ settings });
	}

	return settings;
}

addFilter(
	"blocks.registerBlockType",
	"lu-gutenberg/extend-column-block",
	extendColumnBlock,
);



/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {

		/* const {
			attributes,
			setAttributes,
			isSelected,
		} = props;
 */
		const {
			attributes: { backgroundColor, },
			className,
			setState,
			setAttributes,
			clientId,
			isSelected,
		} = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && props.name == 'core/column' &&
					<InspectorControls>
						<panelBody title={__('Background Color')} initialOpen={false}>
							<panelRow>
								{/* {console.log('higherorder:', props)} */}
								{/* <TextControl
									label={__('Background Color')}
									onChange={(value) => {
										props.setAttributes({ backgroundColor: value })
										console.log(props.attributes);
									}}
								/> */}

								<ColorPicker
									label={__('Background Color')}
									color={props.attributes}
									onChangeComplete={(value) => props.setAttributes(value.hex)}
								/>
								{/* disableAlpha */}
							</panelRow>
						</panelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, 'withInspectorControls');

addFilter(
	'editor.BlockEdit',
	'lu-gutenberg/custom-column',
	withInspectorControls
);

// Save.
// addFilter(
// 	'blocks.getSaveElement',
// 	'jb/core-button',
// 	( element, block, attributes ) => {
// 		if ( 'core/button' !== block.name ) {
// 			return element;
// 		}

// 		if ( '_blank' === attributes.target ) {
// 			return cloneElement(
// 				element,
// 				{},
// 				cloneElement( element.props.children, {
// 					target: '_blank',
// 					rel: 'noreferrer noopener',
// 				} )
// 			);
// 		}

// 		return element;
// 	}
// );


/**
 * External Dependencies
 */
// import classnames from 'classnames';

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass(extraProps, blockType, attributes) {

	const { backgroundColor } = attributes;

	//check if attribute exists for old Gutenberg version compatibility
	//add class only when visibleOnMobile = false
	if ("core/columns" === blockType.name) {
		// console.log(extraProps, blockType, attributes);

		if (typeof backgroundColor !== 'undefined' && !backgroundColor) {
			console.log(backgroundColor);
			// extraProps.className = classnames( extraProps.className, 'will-get-background-color' );
		}
	}

	console.log({ extraProps });

	return extraProps;
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'lu-gutenberg/custom-column',
	applyExtraClass
);