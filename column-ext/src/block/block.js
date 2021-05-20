import { assign } from 'lodash';

const { compose, createHigherOrderComponent } = wp.compose;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, InnerBlocks, Button, ResponsiveWrapper, Spinner, ColorPalette, MediaUpload, MediaUploadCheck } = wp.components;
const { addFilter } = wp.hooks;
const { withSelect } = wp.data;
const { __ } = wp.i18n;

// Enable manipulation of the following blocks
const enabledBlocks = [
    'core/column',
];

/**
 * Add attributes to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addAttributes = (settings, name) => {
    // don't do anything if this isn't one of our enabled blocks
    if (!enabledBlocks.includes(name)) {
        return settings;
    }

    // use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign(settings.attributes, {
        bgColor: {
            type: 'string',
            default: 'transparent',
        },
    });

    return settings;
};

addFilter('blocks.registerBlockType', 'lu-gutenberg/add-attributes', addAttributes);

/**
 * Add style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addExtraProps = (saveElementProps, blockType, attributes) => {
    // don't do anything if this isn't one of our enabled blocks
    if (!enabledBlocks.includes(blockType.name)) {
        return saveElementProps;
    }

    // console.log(attributes);

    // use Lodash's assign to gracefully handle if attributes are undefined
    assign(saveElementProps, {
        style: {
            'background-color': attributes.bgColor,
        }
    });

    return saveElementProps;
};

addFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addExtraProps);

const ALLOWED_MEDIA_TYPES = ['image'];

class BackgroundEdit extends Component {
    render() {
        // don't do anything if this isn't one of our enabled blocks
        /* if (!enabledBlocks.includes(props.name)) {
            return (
                <BlockEdit {...props} />
            );
        } */

        const { attributes, setAttributes, bgImage, className } = this.props;
        const { bgColor, bgImageId } = attributes;

        const instructions = <p>{__('To edit the background image, you need permission to upload media.', 'image-selector-example')}</p>;

        let styles = {};
        if (bgImage && bgImage.source_url) {
            styles = { backgroundImage: `url(${bgImage.source_url})` };
        }

        const onUpdateImage = (image) => {
            setAttributes({
                bgImageId: image.id,
            });
        };

        const onRemoveImage = () => {
            setAttributes({
                bgImageId: undefined,
            });
        };

        // add has-bgColor-x class to block
        if (bgColor) {
            props.attributes.className = `has-bgColor-${bgColor}`;
            props.style = { 'background-color': bgColor };
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
                <div
                    // style={{ 'background-color': bgColor }}
                    style={styles}
                >
                    <BlockEdit {...props} />
                </div>

                <InspectorControls>
                    <PanelBody initialOpen={false}>
                        <PanelRow>
                            <label><b>Background Color</b></label>
                            <ColorPalette
                                colors={colors}
                                value={bgColor}
                                disableCustomColors={true}
                                onChange={(value) => props.setAttributes({ bgColor: value })}
                            />
                        </PanelRow>
                    </PanelBody>

                    <PanelBody
                        title={__('Background settings', 'image-selector-example')}
                        initialOpen={true}
                    >
                        <div className="wp-block-image-selector-example-image">
                            <MediaUploadCheck fallback={instructions}>
                                <MediaUpload
                                    title={__('Background image', 'image-selector-example')}
                                    onSelect={onUpdateImage}
                                    allowedTypes={ALLOWED_MEDIA_TYPES}
                                    value={bgImageId}
                                    render={({ open }) => (
                                        <Button
                                            className={!bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                            onClick={open}>
                                            { !bgImageId && (__('Set background image', 'image-selector-example'))}
                                            { !!bgImageId && !bgImage && <Spinner />}
                                            { !!bgImageId && bgImage &&
                                                <ResponsiveWrapper
                                                    naturalWidth={bgImage.media_details.width}
                                                    naturalHeight={bgImage.media_details.height}
                                                >
                                                    <img src={bgImage.source_url} alt={__('Background image', 'image-selector-example')} />
                                                </ResponsiveWrapper>
                                            }
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>

                            {!!bgImageId && bgImage &&
                                <MediaUploadCheck>
                                    <MediaUpload
                                        title={__('Background image', 'image-selector-example')}
                                        onSelect={onUpdateImage}
                                        allowedTypes={ALLOWED_MEDIA_TYPES}
                                        value={bgImageId}
                                        render={({ open }) => (
                                            <Button onClick={open} isDefault isLarge>
                                                { __('Replace background image', 'image-selector-example')}
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>
                            }

                            {!!bgImageId &&
                                <MediaUploadCheck>
                                    <Button onClick={onRemoveImage} isLink isDestructive>
                                        {__('Remove background image', 'image-selector-example')}
                                    </Button>
                                </MediaUploadCheck>
                            }
                        </div>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}

/**
 * Create HOC to add options to inspector controls of block
 */
// const withAttributes = compose((BlockEdit) => {
const withAttributes = compose(
    withSelect((select, props) => {
        const { getMedia } = select('core');
        const { bgImageId } = props.attributes;

        return {
            bgImage: bgImageId ? getMedia(bgImageId) : null,
        };
    }),
)(BackgroundEdit);

addFilter('editor.BlockEdit', 'lu-gutenberg/with-attributes', withAttributes);

/* export default compose(
    withSelect( ( select, props ) => {
        const { getMedia } = select( 'core' );
        const { bgImageId } = props.attributes;

        return {
            bgImage: bgImageId ? getMedia( bgImageId ) : null,
        };
    } ),
)( BackgroundEdit ); */
