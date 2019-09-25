<?php

/**
 * Plugin Name:     	SmartParagraph
 * Plugin URI:      	https://github.com/a-atalla/smart-paragraph
 * Description:         Gutenberg block to edit smartly
 * Version:         	0.1.0
 * Author:          	Ahmed Atalla
 * Author URI:      	https://github.com/a-atalla
 * License:         	GNU GPL v2.0 (https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
 *
 * @package         	SmartParagraph
 * @author          	Ahmed Atalla <a.3talla@gmail.com>
 * @copyright       	Copyright (c) Ahmed Atalla
*/

/*
 * Copyright (c) SmartParagraph (a.3talla@gmail.com)
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

wp_register_script('script', plugins_url('/build/index.js', __FILE__), ['wp-blocks', 'wp-editor'], true, false);
register_block_type('egcoder/smartparagraph', array('editor_script' => 'script'));