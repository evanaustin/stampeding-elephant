/**
 * BLOCK: tabs
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';


const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls, InnerBlocks, RichText, PanelColorSettings } = wp.blockEditor;
const { Dashicon, Tooltip, PanelBody, RangeControl, SelectControl } = wp.components;

class TabsBlock extends Component {
    constructor() {
        super(...arguments);
    }

    componentWillMount() {
        const { attributes, setAttributes } = this.props;

        // No override attributes of blocks inserted before
        if (attributes.changed !== true) {
            // Set changed attribute to true, so we don't modify anything again
            setAttributes({ changed: true });
        }
    }

    componentDidMount() {
        if (!this.props.attributes.blockID) {
            this.props.setAttributes({ blockID: this.props.clientId });
        }
    }

    componentDidUpdate(prevProps) {
        const { tabItems: prevItems } = prevProps.attributes;
        const { tabItems } = this.props.attributes;

        if (tabItems.length === 0) {
            this.props.setAttributes({
                tabItems: [
                    {
                        header: 'Tab 1',
                        body: 'At least one tab must remaining, to remove block use "Remove Block" button from right menu.',
                    },
                ],
            });
        }
    }

    updateTabs(value, index) {
        const { attributes, setAttributes } = this.props;
        const { tabItems } = attributes;

        let newItems = tabItems.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value };
            }

            return item;
        });

        setAttributes({ tabItems: newItems });
    }

    render() {
        const { attributes, setAttributes, clientId } = this.props;
        const {
            blockID,
            tabItems,
            activeTab,
        } = attributes;

        const ALLOWEDBLOCKS = ['lu/block-tab-child'];
        const BLOCKS_TEMPLATE = [
            ['lu/block-tab-child'],
        ];

        return (
            <Fragment>
                <div className="tabs-block">
                    <div className="tab_wrapper">
                        <div className="tabs">
                            {tabItems.map((item, index) => (
                                <div key={index}
                                    className={`tab ${activeTab == index ? 'active' : ''}`}
                                    data-tab={index}
                                >
                                    <a className="tab_title">
                                        <RichText
                                            tagName="p"
                                            value={item.header}
                                            onChange={(value) => this.updateTabs({ header: value || '' }, index)}
                                            onClick={() => setAttributes({ activeTab: index })}
                                            unstableOnSplit={() => null}
                                            placeholder={__('Title…')}
                                        />

                                        {/* <a href={`#tab-${blockID}-${index}`}>
                                            <Dashicon icon="pencil" />
                                        </a> */}
                                    </a>

                                    <Tooltip text={__('Remove tab')}>
                                        <span className="tab-remove"
                                            onClick={() => setAttributes({
                                                tabItems: tabItems.filter((vl, idx) => idx !== index),
                                                activeTab: 0
                                            })}
                                        >
                                            <Dashicon icon="no" />
                                        </span>
                                    </Tooltip>
                                </div>
                            ))}

                            <div className="add-tab">
                                <Tooltip text={__('Add tab')}>
                                    <span onClick={() => setAttributes({
                                        tabItems: [
                                            ...tabItems,
                                            { header: __('New Tab'), body: __('Enter your content.') }
                                        ]
                                    })}>
                                        <Dashicon icon="plus-alt" />
                                    </span>
                                </Tooltip>
                            </div>
                        </div>

                        <div class="tabs_content">
                            {tabItems.map((item, index) => (
                                <div key={index}
                                    id={`tab-${blockID}-${index}`}
                                    className={`tab_content ${activeTab == index ? 'active' : 'inactive'}`}
                                    data-tab={index}
                                >
                                    <InnerBlocks
                                        className={`tab-child-${index}`}
                                        template={BLOCKS_TEMPLATE}
                                        templateLock={false}
                                        allowedBlocks={ALLOWEDBLOCKS}
                                    />

                                    {/* <RichText
                                        tagName="p"
                                        value={item.body}
                                        onChange={(value) => this.updateTabs({ body: value }, index)}
                                        placeholder={__('Enter text…')}
                                    /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const tabBlockAttrs = {
    tabItems: {
        type: "array",
        default: [
            {
                header: __('Tab 1'),
                body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
            },
            {
                header: __('Tab 2'),
                body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
            },
            {
                header: __('Tab 3'),
                body: __('Filler text (also placeholder text or dummy text) is text that shares some characteristics of a real written text, but is random or otherwise generated.')
            },
        ]
    },
    blockID: {
        type: 'string',
    },
    activeTab: {
        type: 'number',
        default: 0,
    },
    changed: {
        type: 'boolean',
        default: false,
    },
};

registerBlockType('lu/block-tabs', {
    title: __('Tabs'),
    icon: 'menu',
    category: 'common',
    keywords: [
        __('Tabs'),
        __('Custom blocks'),
        __('Gutenberg'),
    ],
    attributes: tabBlockAttrs,
    edit: TabsBlock,
    save: ({ attributes }) => {
        const {
            blockID,
            tabItems,
        } = attributes;

        return (
            <div id={`tabs-${blockID}`}
                className="tab_wrapper"
                style={{ border: 'none' }}
            >
                <div className="tabs">
                    {tabItems.map((item, index) => (
                        <div key={index}
                            className={`tab ${index == 0 ? 'active' : ''}`}
                            data-tab={index}
                        >
                            <div className="tab_title">
                                <RichText.Content tagName="span" value={item.header} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tabs_content">
                    {tabItems.map((item, index) => (
                        <div key={index}
                            id={`tab-${blockID}-${index}`}
                            className={`tab_content ${index == 0 ? 'active' : ''}`}
                            data-tab={index}
                        >
                            <RichText.Content tagName="p" value={item.body} />
                            {/* <InnerBlocks.Content /> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    },
});

/* Accordion Child Block */
registerBlockType('lu/block-tab-child', {
    title: __('Tab Child'),
    category: 'common',
    parent: ['lu/block-tabs'],
    /* attributes: {
        title: {
            type: 'string',
            default: ''
        },
        subtitle: {
            type: 'string',
            default: ''
        },
        open: {
            type: 'boolean',
            default: false,
        },
        styled: {
            type: 'boolean',
            default: false,
        },
    }, */
    edit: (props) => {
        const { /* attributes, */ setAttributes, className, clientId } = props;
        // const parentBlocks = wp.data.select('core/block-editor').getBlockParents(clientId);
        // const parentAttributes = wp.data.select('core/block-editor').getBlocksByClientId(parentBlocks)[0].attributes;
        // setAttributes({ styled: parentAttributes.styled })

        /* const {
            title,
            subtitle,
            open,
            styled,
        } = attributes; */

        const ALLOWEDBLOCKS = ['core/paragraph'];
        const BLOCKS_TEMPLATE = [
            ['core/paragraph', { value: 'Lorem ipsum dolor sit amet' }],
        ];

        // const subtitleDisplay = styled ? 'block' : 'none';

        return (
            <div className={{ className }}>
                <InnerBlocks
                    template={BLOCKS_TEMPLATE}
                    templateLock={false}
                    allowedBlocks={ALLOWEDBLOCKS}
                ></InnerBlocks>
            </div>
        );
    },
    save: (props) => {
        const { /* attributes, */ className } = props;

        /* const {
            open,
            styled,
            title,
            subtitle,
        } = attributes; */



        return (
            <div className={'accordionWrapper accordion_item' + ' ' + tabOpen}>
                <InnerBlocks.Content />
            </div>
        );
    },
});