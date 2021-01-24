<?php
/**
 * Plugin Name: Melonpan Block - Site Title
 * Plugin URI: https://wordpress.org/plugins/melonpan-block-site-title/
 * Description: Block that displays the Site Title and Description
 * Author: melonpan
 * Version: 2.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace MELONPANBLOCKSITETITLE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

define(__NAMESPACE__ . "\PLUGIN_NAME", "melonpan-block-site-title");
define(__NAMESPACE__ . "\PLUGIN_VERSION", "2.0.0");
define(__NAMESPACE__ . "\DIST_DIR", plugins_url("dist/", __FILE__));
define(__NAMESPACE__ . "\INC_DIR", plugin_dir_path(__FILE__) . "inc/");

require_once INC_DIR . "register-enqueue.php";
require_once INC_DIR . "register-block_render.php";
require_once INC_DIR . "register-rest.php";
