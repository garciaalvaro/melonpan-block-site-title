<?php
/**
 * Plugin Name: Melonpan Block Site Title
 * Plugin URI: #
 * Description: Block that displays the Site Title and Description
 * Author: melonpan
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace MELONPANBLOCKSITETITLE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.0.0' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'melonpan-block-site-title' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}
if ( ! defined( __NAMESPACE__ . '\INC_DIR' ) ) {
	define( __NAMESPACE__ . '\INC_DIR', plugin_dir_path( __FILE__ ) . 'inc/' );
}

require_once INC_DIR . 'register-enqueue.php';
require_once INC_DIR . 'register-block_render.php';
require_once INC_DIR . 'register-rest.php';
