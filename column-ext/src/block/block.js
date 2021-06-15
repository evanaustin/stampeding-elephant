import { assign } from 'lodash';

const { compose, createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { PanelBody, SelectControl, ColorPalette, Button, ResponsiveWrapper } = wp.components;
const { addFilter } = wp.hooks;
const { withSelect } = wp.data;
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

	// Use Lodash's assign to gracefully handle if attributes are undefined
	settings.attributes = assign(settings.attributes, {
		bgColor: {
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
		}
	});

	return settings;
};

addFilter('blocks.registerBlockType', 'lu-gutenberg/attribute/backgrounds', addBackgroundAttributes);

/**
 * Create HOC to add background-color option to inspector controls of block
 */
const withBackground = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		// Do nothing if it's another block than our defined ones
		if (!enabledBlocks.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

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

		const { bgColor, mediaId } = props.attributes;

		// add has-bgColor-x class to block
		if (bgColor) {
			props.attributes.className = `has-bgColor-${bgColor}`;
			// props.style = { background: bgColor };
		}

		// add has-mediaId-x class to block
		if (mediaId) {
			props.attributes.className = `has-mediaId-${mediaId}`;
			props.style = {
				// backgroundImage: props.attributes.mediaUrl != '' ? 'url("' + props.attributes.mediaUrl + '")' : 'none'
			};
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
				<BlockEdit {...props} />

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

const withAttributes = compose(
	withSelect((select, props) => {
		return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
	})
)(withBackground);

addFilter('editor.BlockEdit', 'lu-gutenberg/with-background', withBackground);

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

	// Use Lodash's assign to gracefully handle if attributes are undefined
	assign(saveElementProps, {
		style: {
			background: attributes.bgColor,
			backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
		}
	});

	return saveElementProps;
};

addFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addBackgroundExtraProps);
