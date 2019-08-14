<?php

namespace MELONPANBLOCKSITETITLE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Block render function.
 *
 * @since 1.0.0
 */
add_action( 'init', __NAMESPACE__ . '\register_block' );
function register_block() {

    register_block_type(
		'melonpan-block/site-title',
		array(
			'editor_script'   => PLUGIN_NAME,
			'render_callback' => __NAMESPACE__ . '\render_callback',
			'attributes'      => array(
				'title_html'          => array(
					'type'    => "string",
					'default' => "h1_a"
				),
				'description_enabled' => array(
					'type'    => "boolean",
					'default' => false
				),
				'description_html'    => array(
					'type'    => "string",
					'default' => "h2"
				)
			),
		)
	);
}

/**
 * Build the HTML of the block based on the attribute values.
 *
 * @since 1.0.0
 */
function render_callback( $attributes ) {

	$title       = get_bloginfo( 'name' );
	$description = get_bloginfo( 'description' );
	$url         = get_bloginfo( 'url' );
	$content     = '';

	$root_classes_array = array_filter( array(
		'wp-block-melonpan-block-site-title',
		! empty( $attributes['align'] ) ? 'align-' . $attributes['align'] : '',
	) );

	$root_classes = implode( ' ', $root_classes_array );

	$title_classes = true === $attributes['description_enabled']
		? 'mbst-title'
		: $root_classes . ' mbst-title';

	switch ( $attributes['title_html'] ) {

		case "a":
			$content .= '<a class="' . esc_attr( $title_classes ) . '" href="' . esc_url( $url ) . '">';
			$content .= esc_attr( $title );
			$content .= '</a>';
			break;

		case "a_h1":
			$content .= '<a class="' . esc_attr( $title_classes ) . '" href="' . esc_url( $url ) . '">';
			$content .= '<h1>';
			$content .= esc_attr( $title );
			$content .= '</h1>';
			$content .= '</a>';
			break;

		case "h1":
			$content .= '<h1 class="' . esc_attr( $title_classes ) . '">';
			$content .= esc_attr( $title );
			$content .= '</h1>';
			break;

		case "h1_a":
			$content .= '<h1 class="' . esc_attr( $title_classes ) . '">';
			$content .= '<a href="' . esc_url( $url ) . '">';
			$content .= esc_attr( $title );
			$content .= '</a>';
			$content .= '</h1>';
			break;

		default:
			$content .= '<span class="' . esc_attr( $title_classes ) . '">';
			$content .= esc_attr( $title );
			$content .= '</span>';
			break;
	}

	if ( true === $attributes['description_enabled'] ) {

		switch ( $attributes['description_html'] ) {

			case "h2":
				$content .= '<h2 class="mbst-description">';
				$content .= esc_attr( $description );
				$content .= '</h2>';
				break;

			case "h3":
				$content .= '<h3 class="mbst-description">';
				$content .= esc_attr( $description );
				$content .= '</h3>';
				break;

			case "h4":
				$content .= '<h4 class="mbst-description">';
				$content .= esc_attr( $description );
				$content .= '</h4>';
				break;

			default:
				$content .= '<span class="mbst-description">';
				$content .= esc_attr( $description );
				$content .= '</span>';
				break;
		}

		$content = '<div class="' . esc_attr( $root_classes ) . '">' . $content . '</div>';
	}

	return $content;
}
