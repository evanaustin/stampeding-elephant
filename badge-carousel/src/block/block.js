/**
 * BLOCK: badge carousel
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Dashicon, Tooltip } = wp.components;

const oalBadgeSrcSet = [
	{
		id: '',
		src: 'SREducationGroup_Best_Online_Colleges_in_Virginia.png',
	},
	{
		id: '',
		src: 'ACBSP-Badge-2.png'
	},
	{
		id: '',
		src: 'Onlinecolleges-Top-Colleges-in-Virginia-1.png'
	},
	{
		id: '',
		src: 'cacrep-accredited-badge.jpg'
	},
	{
		id: '88410',
		src: 'acc_NCATE-logo-color-High-Resol_circle-1.jpg'
	},
	{
		id: '',
		src: 'Banner-1-1.png'
	},
	{
		id: '',
		src: 'OnlineColleges-Center-for-Online-Education-Best-Online-Colleges-in-Virginia.png'
	},
	{
		id: '',
		src: 'BestColleges_Best-Online_Colleges.png'
	},
	{
		id: '',
		src: 'MilitaryFriendly-Top-10-School-Gold.png'
	},
];

/**
 * Register: Badge Carousel Gutenberg Block.
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
registerBlockType('lu/block-badge-carousel', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-badge-block.
	title: __('Badge Carousel'), // Block title.
	icon: 'menu', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Badge carousel'),
		__('Badge blocks'),
		__('Gutenberg'),
	],
	attributes: {
		blockId: {
			type: 'string',
		},
		includedBadges: {
			type: 'array',
			default: oalBadgeSrcSet,
		}
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
			attributes: {
				includedBadges
			},
			className,
			setAttributes,
			clientId,
		} = props;

		setAttributes({ blockId: clientId });

		return (
			<fragment>
				<div className={className}>
					<div className="carousel_container">
						{includedBadges.map((badge, index) => (
							<div className="carousel_item">
								<img src={`https://www.liberty.edu/residential/lp/wp-content/uploads/sites/2/${badge.src}`} width="75" />

								<Tooltip text={__('Remove badge')}>
									<span className="badge-remove"
										onClick={() => setAttributes({
											includedBadges: includedBadges.filter((vl, idx) => idx !== index)
										})}
									>
										<Dashicon icon="no" />
									</span>
								</Tooltip>
							</div>
						))}
					</div>
				</div>
			</fragment>
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
			attributes: {
				includedBadges
			},
			className,
			setAttributes,
			clientId
		} = props;

		return (
			<div className="carousel newBadges">
				<p class="carouselPrev"></p>
				<p class="carouselNext"></p>

				<div class="carousel_container">
					{includedBadges.map((badge, index) => (
						<div className="carousel_item cycle-slide">
							<div className="carousel_content">
								<figure class="wp-block-image">
									<img
										className={`attachment-thumbnail size-thumbnail wp-image-${badge.id}`}
										data-img-id={badge.id}
										data-type="image"
										data-sizes="(max-width: 150px) 100vw, 150px"
										src={`https://www.liberty.edu/residential/lp/wp-content/uploads/sites/2/${badge.src}`}
										data-src={`https://www.liberty.edu/residential/lp/wp-content/uploads/sites/2/${badge.src}`}
										data-mce-src={`https://www.liberty.edu/residential/lp/wp-content/uploads/sites/2/${badge.src}`}
										srcset={`https://www.liberty.edu/residential/lp/wp-content/uploads/sites/2/${badge.src} 150w`}
										width="150px"
										height="150px"

									/>
								</figure>
							</div>
						</div>
					))}
				</div>
			</div >
		);
	},
});
