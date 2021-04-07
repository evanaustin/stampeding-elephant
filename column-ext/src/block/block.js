import { assign } from 'lodash';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ColorPalette } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

// Enable manipulation of the following blocks
const enabledBlocks = [
    'core/column',
];

/**
 * Add background-color control attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addBgColorAttribute = (settings, name) => {
    // Do nothing if it's another block than our defined ones
    if (!enabledBlocks.includes(name)) {
        return settings;
    }

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign(settings.attributes, {
        bgColor: {
            type: 'string',
            default: 'transparent',
        },
    });

    return settings;
};

addFilter('blocks.registerBlockType', 'lu-gutenberg/attribute/bgColor', addBgColorAttribute);

/**
 * Create HOC to add background-color option to inspector controls of block
 */
const withBgColor = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        // Do nothing if it's another block than our defined ones
        if (!enabledBlocks.includes(props.name)) {
            return (
                <BlockEdit {...props} />
            );
        }

        const { bgColor } = props.attributes;

        // add has-bgColor-x class to block
        if (bgColor) {
            props.attributes.className = `has-bgColor-${bgColor}`;
            props.style = { 'background': bgColor };
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
                <div style={{ background: bgColor }}>
                    <BlockEdit  {...props} />
                </div>

                <InspectorControls>
                    <panelBody initialOpen={false}>
                        <panelRow>
                            <label><b>Background Color</b></label>
                            <ColorPalette
                                colors={colors}
                                value={props.attributes}
                                disableCustomColors={true}
                                onChange={(value) => props.setAttributes({ bgColor: value })}
                            />
                        </panelRow>
                    </panelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withBgColor');

addFilter('editor.BlockEdit', 'lu-gutenberg/with-bg-color', withBgColor);

/**
 * Add background-color style attribute to save element of block.
 *
 * @param {object} saveElementProps Props of save element.
 * @param {Object} blockType Block type information.
 * @param {Object} attributes Attributes of block.
 *
 * @returns {object} Modified props of save element.
 */
const addBgColorExtraProps = (saveElementProps, blockType, attributes) => {
    // Do nothing if it's another block than our defined ones.
    if (!enabledBlocks.includes(blockType.name)) {
        return saveElementProps;
    }

    // console.log(attributes);

    // Use Lodash's assign to gracefully handle if attributes are undefined
    assign(saveElementProps, { style: { 'background': attributes.bgColor } });

    return saveElementProps;
};

addFilter('blocks.getSaveContent.extraProps', 'lu-gutenberg/get-save-content/extra-props', addBgColorExtraProps);
