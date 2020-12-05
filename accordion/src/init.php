<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package lu
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function accordion_lu_block_assets()
{ // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'accordion-lu-style-css', // Handle.
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)), // Block style CSS.
		is_admin() ? array('wp-editor') : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'accordion-lu-block-js', // Handle.
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'accordion-lu-block-editor-css', // Handle.
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
		array('wp-edit-blocks'), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `luGlobal` object.
	wp_localize_script(
		'accordion-lu-block-js',
		'luGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path(__DIR__),
			'pluginDirUrl'  => plugin_dir_url(__DIR__),
			// Add more data here that you want to access from `luGlobal` object.
		]
	);

	// Enqueue scripts for frontend.
	/* wp_enqueue_script(
        'frontend',
        plugins_url('/dist/frontend.js', __FILE__),
        array('jquery'),
        filemtime( plugin_dir_path( __FILE__ ) . 'frontend.js' ),
        true
    ); */

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'lu/block-accordion',
		array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'accordion-lu-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'accordion-lu-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'accordion-lu-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action('init', 'accordion_lu_block_assets');

/**
 * Add action for enqueue scripts.
 *
 */
add_action('wp_enqueue_scripts', 'custom_script_enqueue');

/**
 * Add call back function for enqueue scripts.
 * Note: there is probably a better way to do this.
 *
 */
function custom_script_enqueue()
{
	// enqueue jquery.js
	wp_enqueue_script('jquery');

	// register custom.js
	wp_register_script(
		'custom',
		plugin_dir_url(__FILE__) . 'block/custom.js',
		'',
		''
	);

	// enqueue custom.js
	wp_enqueue_script(
		'custom',
		plugin_dir_url(__FILE__) . 'block/custom.js',
		'',
		'',
		true
	);
}
