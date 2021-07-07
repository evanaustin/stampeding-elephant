Set node version
`nvm use 14`

Create new block
`npx create-guten-block`

Compile a block
`yarn install`

Run a block in dev mode
`yarn start`

Build a block
`yarn build`

To get the blocks to show up in the Gutenberg editor, make sure they are included via an array in `mu-plugins.php`:
```
...
$gutenberg_blocks = [
    'heading-ext',
    'paragraph-ext',
    'list-ext',
    'columns-ext',
    'column-ext',
    'image-select',
    'card',
    'accordion',
    'button',
    'slider',
    'stepper',
    'custom-carousel',
    'badge-carousel',
    'tabs',
];

foreach ($gutenberg_blocks as $block) {
	$path = "lu-gutenberg/${block}/plugin.php";

	if(!in_array( $path, $activePlugins) && !isset($networkPlugins[$path])){
		array_push($mu_plugins_active, $path);
		require_once($path);
	}
}
```