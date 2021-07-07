/**
 * Paragrah block extension
 */

import { assign } from 'lodash';

//  Import CSS.
import './editor.scss';
import './style.scss';

const { Fragment, useEffect } = wp.element;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

// Enable manipulation of the following blocks
const enabledBlocks = [ 'core/list' ];

/**
 * Extend default Paragraph block
 *
 * @param {function} settings Block edit component.
 * @param {function} name Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
function extendListBlock(settings, name) {
	// Do nothing if it's another block than our defined ones
	if (!enabledBlocks.includes(name)) {
		return settings;
	}

	/* useEffect(() => {
		console.log('use effect');
	}); */

	settings.attributes = assign(settings.attributes, {
		parentBgColor: {
			type: 'string',
			default: null
		},
		textColor: {
			type: 'string',
			default: null
		},
	});

	settings.attributes.values.default = __('<li>Lorem ipsum</li>');

	return settings;
}

addFilter('blocks.registerBlockType', 'lu-gutenberg/extend-list-block', extendListBlock);

/**
 * Get most immediate parent with a non-transparent background image
 */
function getParentBgColor(parentBlocks, index) {
	const directParent = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[parentBlocks.length - 1];

	if (index > 0 && directParent.attributes.bgColor == 'transparent') {
		getparentBgColor(parentBlocks, index - 1);
	} else if (index == 0 && directParent.attributes.bgColor == 'transparent') {
		return 'transparent';
	} else {
		return directParent.attributes.bgColor;
	}
}

/**
 * Given a parent bgColor, return the corresponding text color
 */
function getTextColor(parentBgColor) {
	let textColor;

	switch (parentBgColor) {
		case '#transparent': // None
			textColor = '#000000';
			break;
		case '#FFFFFF': // White
			textColor = '#000000';
			break;
		case '#F5F5F5': // Gray
			textColor = '#000000';
			break;
		case '#333333': // Dark Gray
			textColor = '#FFFFFF';
			break;
		case '#161F31': // Dark Blue
			textColor = '#FFFFFF';
			break;
		case '#F5F5F5': // Blue
			textColor = '#FFFFFF';
			break;
		default:
			textColor = '#000000';
	}

	return textColor;
}

/**
 * Create HOC to add background-color option to inspector controls of block
 */
const withColor = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		// Do nothing if it's another block than our defined ones
		if (!enabledBlocks.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { attributes, setAttributes, className, clientId } = props;
		const { parentBgColor } = attributes;

		if (!parentBgColor) {
			const parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);

			if (parentBlocks.length) {
				props.setAttributes({ parentBgColor: getParentBgColor(parentBlocks, parentBlocks.length - 1) });
			}
		}

		if (!props.attributes.textColor && parentBgColor) {
			props.setAttributes({ textColor: getTextColor(parentBgColor) });
		}

		props.style = { color: props.attributes.textColor };

		return (
			<Fragment>
				<div style={props.style}>
					<BlockEdit {...props} />
				</div>
			</Fragment>
		);
	};
}, 'withColor');

addFilter('editor.BlockEdit', 'lu-gutenberg/with-color', withColor);

/**
 * Add color style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addExtraProps = (saveElementProps, blockType, attributes) => {
	// Do nothing if it's another block than our defined ones.
	if (!enabledBlocks.includes(blockType.name)) {
		return saveElementProps;
	}

	// Use Lodash's assign to gracefully handle if attributes are undefined
	assign(saveElementProps, {
		style: {
			color: attributes.textColor
		}
	});

	return saveElementProps;
};

addFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addExtraProps);
