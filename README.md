# Bones

Bare-bones front-end boilerplate using npm scripts.

## Features

* Sass for stylesheets
* ES6 for JavaScript
* [Webpack](https://webpack.github.io/) for compiling assets, optimizing images, and concatenating and minifying files
* [Browsersync](http://www.browsersync.io/) for synchronized browser testing
* CSS framework: [Bootstrap 4](http://getbootstrap.com/)

## Requirements

Make sure all dependencies have been installed before moving on:

* [Node.js](http://nodejs.org/) >= 6.9.x
* [Yarn](https://yarnpkg.com/en/docs/install)

## Folder Structure

```shell
├── assets                # → Front-end assets
│   ├── config.json       # → Settings for compiled assets
│   ├── build/            # → Webpack and ESLint config
│   ├── fonts/            # → Theme fonts
│   ├── images/           # → Theme images
│   ├── scripts/          # → Theme JS
│   └── styles/           # → Theme stylesheets
├── dist/                 # → Built theme assets (never edit)
├── index.html            # → Never manually edit
├── node_modules/         # → Node.js packages (never edit)
├── package.json          # → Node.js dependencies and scripts
├── templates/            # → Theme templates
│   ├── layouts/          # → Base templates
│   └── partials/         # → Partial templates
```

## Development

Sage uses [Webpack](https://webpack.github.io/) as a build tool and [npm](https://www.npmjs.com/) to manage front-end packages.

### Install dependencies

From the command line on your host machine (not on your Vagrant development box), navigate to the theme directory then run `yarn`:

```shell
# @ bones/
$ yarn
```

You now have all the necessary dependencies to run the build process.

### Build commands

* `yarn run start` — Compile assets when file changes are made, start Browsersync session
* `yarn run build` — Compile and optimize the files in your assets directory
* `yarn run build:production` — Compile assets for production

#### Additional commands

* `yarn run rmdist` — Remove your `dist/` folder
* `yarn run lint` — Run ESLint against your assets and build scripts

### Using Browsersync

To use Browsersync you need to update `devUrl` at the bottom of `assets/config.json` to reflect your local development hostname.

If your local development URL is `https://project-name.dev`, update the file to read:
```json
...
  "devUrl": "https://project-name.dev",
...
```

By default, Browsersync will use webpack's [HMR](https://webpack.github.io/docs/hot-module-replacement.html), which won't trigger a page reload in your browser.

If you would like to force Browsersync to reload the page whenever certain file types are edited, then add them to `watch` in `assets/config.json`.

```json
...
  "watch": [
    "assets/scripts/**/*.js",
    "templates/**/*.php"
  ],
...
```

# Credit

When working on a Wordpress project I learned about [Sage](https://roots.io/sage/), so I thought of bringing they modern WordPress develop stack to use without WordPress. All credit to the guys at Roots – see License.
