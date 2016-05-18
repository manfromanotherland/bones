# Bones

Bare-bones front-end boilerplate using npm scripts.

## List of available tasks

### `clean`
`rm -f dist/{css/*,js/*,images/*}`

Delete existing dist files

### `autoprefixer`
`postcss -u autoprefixer -r dist/css/*`

Add vendor prefixes to your CSS automatically

### `scss`
`node-sass --output-style compressed -o dist/css src/scss`

Compile Scss to CSS

### `lint`
`eslint src/js`

"Lint" your JavaScript to enforce a uniform style and find errors

### `uglify`
`mkdir -p dist/js && uglifyjs src/js/*.js -m -o dist/js/app.js && uglifyjs src/js/*.js -m -c -o dist/js/app.min.js`

Uglify (minify) a production ready bundle of JavaScript

### `imagemin`
`imagemin src/img dist/img -p`

Compress all types of images

### `icons`
`svgo -f src/img/icons && mkdir -p dist/img && svg-sprite-generate -d src/img/icons -o dist/img/icons.svg`

Compress separate SVG files and combine them into one SVG "sprite"

### `serve`
`browser-sync start --server --files 'dist/css/*.css, dist/js/*.js, **/*.html, !node_modules/**/*.html'`

Start a new server and watch for CSS & JS file changes in the `dist` folder

### `build:css`
`npm run scss && npm run autoprefixer`

Alias to run the `scss` and `autoprefixer` tasks. Compiles Scss to CSS & add vendor prefixes

### `build:js`
`npm run lint && npm run concat && npm run uglify`

Alias to run the `lint`, `concat` and `uglify` tasks. Lints JS, combines `src` JS files & uglifies the output

### `build:images`
`npm run imagemin && npm run icons`

Alias to run the `imagemin` and `icons` tasks. Compresses images, generates an SVG sprite from a folder of separate SVGs

### `build:all`
`npm run build:css && npm run build:js && npm run build:images`

Alias to run all of the `build` commands

### `watch:css`
`onchange 'src/**/*.scss' -- npm run build:css`

Watches for any .scss file in `src` to change, then runs the `build:css` task

### `watch:js`
`onchange 'src/**/*.js' -- npm run build:js`

Watches for any .js file in `src` to change, then runs the `build:js` task

### `watch:all`
`npm-run-all -p serve watch:css watch:js`

Run the following tasks simultaneously: `serve`, `watch:css` & `watch:js`. When a .scss or .js file changes in `src`, the task will compile the changes to `dist`, and the server will be notified of the change. Any browser connected to the server will then inject the new file from `dist`

### `postinstall`
`npm run build:all && npm run watch:all`

Runs `watch:all` after `npm install` is finished

## Credit

The npm script is heavily based on a repository by [Damon Bauer](https://github.com/damonbauer). I made some small changes that better suit my needs, that's all. You should definitely check the [original repository](https://github.com/damonbauer/npm-build-boilerplate).