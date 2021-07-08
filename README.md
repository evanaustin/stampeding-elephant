## Prerequisites

##### Node
This project requires Node version 14 to compile ESnext Javascript and React. You may install Node 14 either directly onto your machine from [source](https://nodejs.org/en/download/current/), or through Node Version Manager (nvm). Using nvm is recommended, as it allows you to switch between different versions of Node as necessary.

To install Node (required), nvm (optional), and npm (required) on Windows, follow the instructions on this link:
- https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

To install Node on Mac or Linux, follow the instructions on this link:
- https://github.com/nvm-sh/nvm

To check if you have Node successfullly installed, run:

`$ node -v` (should read 14.x.x)

To check if you have npm successfullly installed, run:

`$ npm -v`

To check if you have nvm successfullly installed, run:

`$ nvm -v`

If you have nvm installed, run:

`$ nvm ls` (to view which versions of Node you can run)

`$ nvm install 14` (if Node 14 is not yet installed)

`$ nvm use 14` (to switch to using Node 14)

##### Sass
This project requires Sass to compile our Sass files as CSS. This can only be done after you first successfully install Node and npm.

To install Sass globally with npm, run:

`$ npm i -g sass`

##### Yarn (optional)
Yarn is a package manager, like npm. However, it is much faster than npm. It is not required for you to use Yarn for development, but if you do you must first successfully install Node and npm.

Then, to install Yarn globally with npm, run:

`$ npm i -g yarn`

## Running the Project

##### Compile a block
Each block requires dependencies before you can develop or build them. To do this, `cd` into a given block directory (e.g. mu-plugins/lu-gutenberg-blocks/accordion) and then run:

`$ npm install` or `$ yarn`

##### Run a block in dev/watch mode
While developing a block, it is useful to be able to have your package manager 'watching' your Javascript files for changes. Keep in mind, this is a block-by-block process. So make sure that if you're developing a block, you have the following commands running in that given block's directory:

`$ npm start` or `$ yarn start`

##### Build a block
While building for production, or even sometimes for development, you will need to build your blocks so that the browser can read the Javascript. Keep in mind, this is a block-by-block process. So make sure that if you're building a block, you run the following commands in that given block's directory:

`$ npm run build` or `$ yarn build`

##### Create new block
`$ npx create-guten-block`

##### Load Gutenberg
Gutenberg is automatically installed in Wordpress 5+. However, to use the Gutenberg editor to build pages, you need to first ensure that the Classic Editor plugin is deactivated.

##### Load our blocks in Gutenberg
To make the custom blocks and extension blocks from this project accessible to the Gutenberg editor, ensure they are included in `mu-plugins.php`:
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