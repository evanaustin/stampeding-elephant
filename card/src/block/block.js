/**
 * BLOCK: card
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor;

console.log('card block.js');

/**
 * Register: Card Gutenberg Block.
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
registerBlockType('lu/block-card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Card', 'Gutenburg'), // Block title.
	icon: 'index-card', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Card'),
		__('Custom blocks'),
		__('Gutenburg'),
	],
	attributes: {
		sup: {
			type: 'array',
			source: 'children',
			selector: 'sup',
		},
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
			attributes: { sup, title, subtitle, content },
			setAttributes,
		} = props;

		const onChangeSup = (value) => {
			setAttributes({ sup: value });
		};

		const onChangeTitle = (value) => {
			setAttributes({ title: value });
		};

		const onChangeSubtitle = (value) => {
			setAttributes({ subtitle: value });
		};

		const onChangeContent = (value) => {
			setAttributes({ content: value });
		};

		// Creates a <p class='wp-block-lu-block-card'></p>.
		return (
			<div className={className}>
				<div className="card_top">
					{/* <RichText
                        tagName="sup"
                        placeholder={ __(
                            '$',
                            'block-editor'
                        ) }
                        value={ sup }
                        onChange={ onChangeSup }
                    /> */}
					<RichText
						tagName="h2"
						placeholder={__(
							'Write Card title…',
							'block-editor'
						)}
						value={title}
						onChange={onChangeTitle}
					/>
					<RichText
						tagName="p"
						placeholder={__(
							'Write Card subtitle…',
							'block-editor'
						)}
						value={subtitle}
						onChange={onChangeSubtitle}
					/>
				</div>

				<div className="card_bottom">
					<RichText
						tagName="div"
						multiline="p"
						placeholder={__(
							'Write the content…',
							'block-editor'
						)}
						value={content}
						onChange={onChangeContent}
					/>
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
			attributes: { sup, title, subtitle, content },
		} = props;

		return (
			<div className={className}>
				{/* <RichText.Content tagName="sup" value={ sup } /> */}
				<div className="card_top">
					<RichText.Content tagName="h2" value={title} />
					<RichText.Content tagName="p" value={subtitle} />
				</div>

				<div className="card_bottom">
					<RichText.Content
						tagName="div"
						className="steps"
						value={content}
					/>
				</div>
			</div>
		);
	},
});
