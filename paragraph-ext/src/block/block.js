/**
 * Paragrah block extension
 */

import { assign } from 'lodash';

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;

// Enable manipulation of the following blocks
const enabledBlocks = [ 'core/paragraph' ];

/**
 * Extend default Paragraph block
 *
 * @param {function} settings Block edit component.
 * @param {function} name Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
function extendParagraphBlock(settings, name) {
	// Do nothing if it's another block than our defined ones
	if (!enabledBlocks.includes(name)) {
		return settings;
	}

	settings.attributes = assign(settings.attributes, {
		parentColor: {
			type: 'string',
			default: null
		}
	});

	settings.attributes.content.default = __('This is a new paragraph. Lorem ipsum dolor sit amet...');

	return settings;
}

addFilter('blocks.registerBlockType', 'lu-gutenberg/extend-paragraph-block', extendParagraphBlock);

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
		const { parentColor } = attributes;

		// get most immediate parent
		if (!parentColor) {
			const parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);
			const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[
				parentBlocks.length - 1
			].attributes;

			props.setAttributes = { parentColor: parentAttributes.bgColor };
		}

		console.log({ parentColor });

		if (parentColor) {
			console.log('parent has bgColor', parentColor);
			let textColor;

			switch (parentColor) {
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

			props.style = { color: textColor };
		}

		console.log('props.style', props.style);

		console.log('props.attributes', props.attributes);

		return (
			<div className="foo" style={props.style}>
				<BlockEdit {...props} />
			</div>
		);
	};
}, 'withColor');

addFilter('editor.BlockEdit', 'lu-gutenberg/with-color', withColor);
