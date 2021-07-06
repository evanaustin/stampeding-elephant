import { assign } from 'lodash';

const { compose, createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } = wp.blockEditor;
const { PanelBody, SelectControl, ColorPalette, Button, ResponsiveWrapper } = wp.components;
const { addFilter } = wp.hooks;
const { select, dispatch, withSelect } = wp.data;
const { __ } = wp.i18n;

// Enable manipulation of the following blocks
const enabledBlocks = [ 'core/column' ];

/**
 * Add background-color control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addBackgroundAttributes = (settings, name) => {
	// Do nothing if it's another block than our defined ones
	if (!enabledBlocks.includes(name)) {
		return settings;
	}

	settings.attributes = assign(settings.attributes, {
		// parentBgColor: {
		// 	type: 'string',
		// 	default: null
		// },
		bgColor: {
			type: 'string',
			default: null
		},
		bgImage: {
			type: 'string',
			default: null
		},
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: ''
		},
		// mediaFocalPoint: {
		// 	type: 'string',
		// 	default: ''
		// },
		media: {
			type: 'object',
			default: null
		}
	});

	return settings;
};

addFilter('blocks.registerBlockType', 'lu-gutenberg/attribute/backgrounds', addBackgroundAttributes);

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
 * Given a parent bgColor, return the corresponding class set
 */
function getClasses(parentBgColor) {
	switch (parentBgColor) {
		case '#FFFFFF': // White
			return 'bg_white dark_text';

		case '#F5F5F5': // Gray
			return 'bg_gray dark_text';

		case '#333333': // Dark Gray
			return 'bg_darkgray light_text';

		case '#E7EFF7': // Blue
			return 'bg_blue dark_text';

		case '#161F31': // Dark Blue
			return 'bg_darkblue light_text';
	}
}

/**
 * Create HOC to add background-color option to inspector controls of block
 */
const withBackground = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		// Do nothing if it's another block than our defined ones
		if (!enabledBlocks.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		// if withBgSelect() found a media file, it will be passed in as a prop here (in our edit function)
		if (props.media) {
			// store it in attributes so we can reference it in bgGetSaveElement() (our save function)
			props.setAttributes({
				media: props.media
			});
		}

		const { attributes, className, clientId } = props;
		const { parentBgColor, bgColor, mediaId } = attributes;

		const removeMedia = () => {
			props.setAttributes({
				mediaId: 0,
				mediaUrl: ''
			});
		};

		const onSelectMedia = (media) => {

			props.setAttributes({
				mediaId: media.id,
				mediaUrl: media.url
			});
		};

		// initialize editBlock styles as flex within row
		props.style = { flexBasis: 0, flexGrow: 1 };

		/* if (!parentBgColor) {
			const parentBlocks = wp.data.select('core/block-editor').getBlockParents(props.clientId);

			if (parentBlocks.length) {
				props.setAttributes({ parentBgColor: getParentBgColor(parentBlocks, parentBlocks.length - 1) });
			}
		} */

		// bgColor hasn't been set yet, but parent does have bgColor
		// so, we percolate so that this column's children text color will be set up correctly
		/* if (!bgColor && parentBgColor) {
			props.setAttributes({ bgColor: parentBgColor });
		} */

		// has background color
		if (bgColor) {
			props.setAttributes({ bgColor });

			// percolate children
			/* const children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
			children.forEach((child) => {
				dispatch('core/block-editor').updateBlockAttributes(child.clientId, { parentBgColor: bgColor });
			}); */

			const classes = getClasses(bgColor);

			if (classes) {
				props.attributes.className = classes;
				props.style = Object.assign(props.style, { backgroundColor: bgColor });

				props.blockWrapperClasses = `wrapper ${classes}`; // editor only
				props.blockClasses = classes; // save content
			}
		}

		// has background image
		if (mediaId) {
			let bgImage = props.attributes.mediaUrl != '' ? 'url("' + props.attributes.mediaUrl + '")' : 'none';
			props.setAttributes({ bgImage });

			// percolate children
			/* const children = select('core/block-editor').getBlocksByClientId(props.clientId)[0].innerBlocks;
			children.forEach((child) => {
				dispatch('core/block-editor').updateBlockAttributes(child.clientId, { parentBgColor: 'image' });
			}); */

			props.attributes.className = `has_background_image has-bgImage-${bgImage} post-${mediaId}`;
			props.classes = `has_background_image has-bgImage-${bgImage}`;

			// add to existing style object
			props.style = Object.assign(props.style, { backgroundImage: bgImage });
		}

		const colors = [
			{ name: 'None', color: 'transparent' },
			{ name: 'White', color: '#FFFFFF' },
			{ name: 'Gray', color: '#F5F5F5' },
			{ name: 'Dark Gray', color: '#333333' },
			{ name: 'Dark Blue', color: '#161F31' },
			{ name: 'Blue', color: '#E7EFF7' }
		];

		return (
			<Fragment>
				<div style={props.style} className={props.blockWrapperClasses}>
					<BlockEdit {...props} />
				</div>

				<InspectorControls>
					<panelBody initialOpen={false}>
						<panelRow>
							<label>
								<b>Background Color</b>
							</label>
							<ColorPalette
								colors={colors}
								value={props.attributes}
								disableCustomColors={true}
								onChange={(value) => props.setAttributes({ bgColor: value })}
							/>
						</panelRow>
					</panelBody>

					<PanelBody title={__('Select block background image')} initialOpen={true}>
						<div className="editor-post-featured-image">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									value={props.attributes.mediaId}
									allowedTypes={[ 'image' ]}
									render={({ open }) => (
										<Button
											className={
												props.attributes.mediaId == 0 ? (
													'editor-post-featured-image__toggle'
												) : (
													'editor-post-featured-image__preview'
												)
											}
											onClick={open}
										>
											{props.attributes.mediaId == 0 && __('Choose an image')}
											{props.media != undefined && (
												<ResponsiveWrapper
													naturalWidth={props.media.media_details.width}
													naturalHeight={props.media.media_details.height}
												>
													<img src={props.media.source_url} />
												</ResponsiveWrapper>
											)}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{props.attributes.mediaId != 0 && (
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image')}
										value={props.attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={[ 'image' ]}
										render={({ open }) => (
											<Button onClick={open} isDefault isLarge>
												{__('Replace image')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							)}
							{props.attributes.mediaId != 0 && (
								<MediaUploadCheck>
									<Button onClick={removeMedia} isLink isDestructive>
										{__('Remove image')}
									</Button>
								</MediaUploadCheck>
							)}
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withBackground');

const withBgSelect = createHigherOrderComponent(
	withSelect((select, props, BlockEdit) => {
		return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
	}),
	'withBgSelect'
);

addFilter('editor.BlockEdit', 'lu-gutenberg/with-background', withBackground);
addFilter('editor.BlockEdit', 'lu-gutenberg/with-bg-select', withBgSelect);

/**
 * Add background-color style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addBackgroundExtraProps = (saveElementProps, blockType, attributes) => {
	// Do nothing if it's another block than our defined ones.
	if (!enabledBlocks.includes(blockType.name)) {
		return saveElementProps;
	}

	assign(saveElementProps, {
		style: {
			background: attributes.bgColor
			// backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
		},
		class: saveElementProps.blockClasses
	});

	return saveElementProps;
};

addFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addBackgroundExtraProps);

function bgGetSaveElement(element, props, attributes) {
	// Do nothing if it's another block than our defined ones.
	if (!enabledBlocks.includes(props.name)) {
		return element;
	}

	return (
		<Fragment>
			{attributes.media && (
				<div className="wp-block-column columns has_background has_background_image">
					<div className="background-image-container">
						<img
							src={attributes.media.source_url}
							className={`background-image wp-post-image wp-image-${attributes.media.id}`}
							style={{ 'object-position': attributes.media._focal_point }}
							alt_text={attributes.media.alt_text}
						/>
					</div>

					{element}
				</div>
			)}

			{!attributes.media && { element }}
		</Fragment>
	);
}

addFilter('blocks.getSaveElement', 'lu-gutenberg/get-save-element', bgGetSaveElement);
