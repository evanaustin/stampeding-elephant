/**
 * BLOCK: stepper
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
const { InspectorControls, RichText, PanelColorSettings } = wp.blockEditor;
const { Dashicon, Tooltip, PanelBody, RangeControl, SelectControl } = wp.components;

class StepperBlock extends Component {
	constructor() {
		super(...arguments);
	}

	componentDidMount() {
		if (!this.props.attributes.blockID) {
			this.props.setAttributes({ blockID: this.props.clientId });
		}
	}

	componentDidUpdate(prevProps) {
		const { stepperItems: prevItems } = prevProps.attributes;
		const { stepperItems } = this.props.attributes;

		if (stepperItems.length === 0) {
			this.props.setAttributes({
				stepperItems: [
					{
						header: '1',
						body: 'At least one step must remain.',
					},
				],
			});
		}
	}

	updateStepper(value, index) {
		const { attributes, setAttributes } = this.props;
		const { stepperItems } = attributes;

		let newItems = stepperItems.map((item, thisIndex) => {
			if (index === thisIndex) {
				item = { ...item, ...value };
			}

			return item;
		});

		setAttributes({ stepperItems: newItems });
	}

	render() {
		const { attributes, setAttributes, clientId } = this.props;
		const {
			blockID,
			stepperItems,
			style,
		} = attributes;

		const styleOptions = [
			{
				label: 'Numbers Only',
				value: 'words',
				defaultText: 'Learn More',
			},
			{
				label: 'Numbers and Words',
				value: 'numbersAndWords',
				defaultText: 'Apply Now',
			},
		];

		return (
			<Fragment>
				<div id="admission_steps"
					className={`${style} progressSteps stepper-block`}
				>
					<ul className="step_list">
						{stepperItems.map((item, index) => (
							<li key={index}
								className="step_item"
								data-stepper={index}
							>
								<ul className="step_item_list">
									{style == 'words' &&
										<Fragment>
											<li>
												<RichText
													tagName="a"
													className="step_circle"
													href="#"
													value={item.header || index}
													onChange={(value) => this.updateStepper({ header: value || '' }, index)}
												/>
											</li>

											<RichText
												tagName="li"
												className="step_description"
												value={item.description || 'Lorem ipsum'}
												onChange={(value) => this.updateStepper({ description: value || '' }, index)}
											/>
										</Fragment>
									}

									{style == 'numbersAndWords' &&
										<Fragment>
											<li>
												<a href="#" className="step_circle">
													<RichText
														tagName="span"
														value={item.header || index}
														onChange={(value) => this.updateStepper({ header: value || '' }, index)}
													/>

													<RichText
														tagName="span"
														className="step_description"
														value={item.description || 'Lorem ipsum'}
														onChange={(value) => this.updateStepper({ description: value || '' }, index)}
													/>
												</a>
											</li>
										</Fragment>
									}
								</ul>

								<Tooltip text={__('Remove stepper')}>
									<span className="step_remove"
										onClick={() => setAttributes({
											stepperItems: stepperItems.filter((vl, idx) => idx !== index),
											activeStepper: 0
										})}
									>
										<Dashicon icon="no" />
									</span>
								</Tooltip>
							</li>
						))}
					</ul>

					<div className="step_add">
						<Tooltip text={__('Add step')}>
							<span onClick={() => setAttributes({
								stepperItems: [
									...stepperItems,
									{ header: __(`${stepperItems.length + 1}`), description: __('Lorem ipsum') }
								]
							})
							}>
								<Dashicon icon="plus-alt" />
							</span>
						</Tooltip>
					</div>

					<InspectorControls>
						<panelBody title={__('Style Setting')} initialOpen={false}>
							<panelRow>
								<SelectControl
									label={__('Style')}
									value={style}
									options={styleOptions}
									onChange={(value) => {
										// const selected = Object.values(styleOptions).filter(o => {
										// 	return o.value == value;
										// })[0];

										setAttributes({ style: value });
										// setAttributes({ title: selected.defaultText });
									}}
								/>
							</panelRow>
						</panelBody>
					</InspectorControls>
				</div>
			</Fragment>
		)
	}
}

const stepperBlockAttrs = {
	stepperItems: {
		type: "array",
		default: [
			{
				header: __('1'),
				link: '',
				description: __('Lorem ipsum')
			},
			{
				header: __('2'),
				description: __('Lorem ipsum')
			},
			{
				header: __('3'),
				description: __('Lorem ipsum')
			},
		]
	},
	blockID: {
		type: 'string',
	},
	style: {
		type: 'string',
	},
};

registerBlockType('lu/block-stepper', {
	title: __('Stepper'),
	icon: 'menu',
	category: 'common',
	keywords: [
		__('Stepper'),
		__('Custom blocks'),
		__('Gutenberg'),
	],
	attributes: stepperBlockAttrs,
	edit: StepperBlock,
	save: ({ attributes }) => {
		const {
			blockID,
			stepperItems,
			style,
		} = attributes;

		return (
			<div id="admission_steps"
				className={`${style} progressSteps`}
			>
				<ul className="step_list">
					{stepperItems.map((item, index) => 
						<li key={index}
							className="step_item"
							data-stepper={index}
						>
							<ul className="step_item_list">
								<li>
									<RichText.Content
										tagName="a"
										className="step_circle"
										href="#"
										value={item.header}
									/>
								</li>

								<RichText.Content tagName="li" value={item.description} />
							</ul>
						</li>
					)}
				</ul>
			</div>
		);
	},
});