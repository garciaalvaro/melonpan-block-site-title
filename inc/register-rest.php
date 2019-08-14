<?php

namespace MELONPANBLOCKSITETITLE;

/**
 * Register route that returns the site title and description.
 *
 * @since 1.0.0
 */
add_action( 'rest_api_init', __NAMESPACE__ . '\register_route' );
function register_route() {

	register_rest_route(
		'melonpan-block-site-title/v1',
		'/site-info',
		array(
			'methods'  => 'GET',
			'callback' => __NAMESPACE__ . '\get_site_info',
		)
	);
}
function get_site_info() {
	return array(
		'title'       => get_bloginfo('name' ),
		'description' => get_bloginfo('description' ),
	);
}
