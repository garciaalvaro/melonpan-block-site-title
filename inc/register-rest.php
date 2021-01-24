<?php

namespace MELONPANBLOCKSITETITLE;

/**
 * Register route that returns the site title and description.
 *
 * @since 1.0.0
 */
\add_action("rest_api_init", __NAMESPACE__ . '\register_route');
function register_route()
{
	\register_rest_route("melonpan-block-site-title/v1", "/site-info", [
		"methods" => "GET",
		"callback" => __NAMESPACE__ . "\get_site_info",
		"permission_callback" => __NAMESPACE__ . "\get_route_permission",
	]);
}

function get_site_info()
{
	return [
		"title" => \get_bloginfo("name"),
		"description" => \get_bloginfo("description"),
	];
}

/**
 * Permissions check.
 */
function get_route_permission($request)
{
	if (\current_user_can("edit_posts")) {
		return true;
	}

	return false;
}
