/**
 * Paragrah block extension
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { addFilter } = wp.hooks;

/**
 * Extend default Paragraph block
 *
 * @param {function} settings Block edit component.
 * @param {function} name Block edit component.
 * @return {function} BlockEdit Modified block edit component.
 */
function extendParagraphBlock(settings, name) {
	if ("core/heading" === name) {
		console.log(name);
		console.log(settings.attributes);
		settings.attributes.content.default = __("New Heading");
	}

	return settings;
}

addFilter(
	"blocks.registerBlockType",
	"lu-gutenberg/extend-paragraph-block",
	extendParagraphBlock,
);
