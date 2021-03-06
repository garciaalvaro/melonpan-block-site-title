=== Melonpan Block - Site Title ===
Contributors: melonpan
Tags: site-info, title, block, block-editor, description, gutenberg
Requires at least: 5.6
Tested up to: 5.6
Stable tag: 2.0.0
Requires PHP: 7.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Block that displays the Site Title and Description.


== Description ==

[Demo](https://gutenberg-showcase.melonpan.io/melonpan-block-site-title) - [Documentation](https://melonpan.io/gutenberg-blocks/melonpan-block-site-title) - [GitHub](https://github.com/garciaalvaro/melonpan-block-site-title)

Block that displays the Site Title and Description. No stylesheets or scripts are added in the front-end.


== Features ==

The block comes with the following settings:

* **Title HTML tag**: Choose between _h1_, _h1 > a_, _a_, _a > h1_, _span_
* **Description enabled**: Display the site description
* **Description HTML tag**: Choose between _h2_, _h3_, _h4_, _span_


== Usage ==

The block can be found inside the blocks inserter menu under the *Melonpan Blocks* category.
Once added in the post you can edit its settings on the Editor sidebar under the Block settings panel.
The block renders dynamically. This means it doesn't save any content in the Post content, it renders the content when the post loads with the current Site Title and Description.

== Installation ==

Installation from the WordPress admin.

1. Log in to the WordPress admin and navigate to *Plugins > Add New*.
2. Type *Melonpan Block - Site Title* in the Search field.
3. In the results list *Melonpan Block - Site Title* plugin should appear, click **Install Now** button.
4. Once it finished installing, click the *Activate* button.
5. That's it, now you can go to any post where Gutenberg is enabled and start using the block.


== Screenshots ==

1. Block in the editor


== Changelog ==

= 2.0.0 =
* Refactored code base
* Updated dependencies

= 1.2.0 =
* Updated dependencies

= 1.1.0 =
* Minor styling fixes

= 1.0.0 =
* Initial release
