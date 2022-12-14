<h1 align="center">New React App</h1>

<br />

This is a blank README file that you can customize at your needs.\
Describe your project, how it works and how to contribute to it.

<br />

# ๐ Available Scripts

In the project directory, you can run:

<br />

## โก๏ธ start

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

## ๐งช test

```
yarn test
```

Launches the test runner in the interactive watch mode.

<br />

## ๐ฆพ build

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<br />

## ๐งถ lint

```
yarn lint
```

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

<br />

## ๐ฏ format

```
yarn format
```

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.

<br />

## โ๏ธ generate

```
yarn generate:component <ComponentName>
```

or

```
yarn generate:page <PageName>
```

Generates a new component in `src/components` or a new Page in `src/pages` using the `generate-react-cli` library.

For more information about generate-react-cli, check out their [readme](https://www.npmjs.com/package/generate-react-cli).

<br />

# ๐งฌ Project structure

This is the structure of the files in the project:

```sh
    โ
    โโโ public                  # public files (favicon, .htaccess, manifest, ...)
    โโโ src                     # source files
    โ   โโโ components
    โ   โโโ pages
    โ   โโโ resources           # images, constants and other static resources
    โ   โโโ store               # Redux store
    โ   โ   โโโ actions         # store's actions
    โ   โ   โโโ reducers        # store's reducers
    โ   โโโ styles
    โ   โโโ types               # data interfaces
    โ   โโโ utility             # utilities functions and custom components
    โ   โโโ App.tsx
    โ   โโโ index.tsx
    โ   โโโ react-app-env.d.ts
    โ   โโโ RootComponent.tsx   # React component with all the routes
    โ   โโโ serviceWorker.ts
    โ   โโโ setupTests.ts
    โโโ .eslintrc.js
    โโโ .gitignore
    โโโ .prettierrc
    โโโ package.json
    โโโ README.md
    โโโ tsconfig.json
```

# ๐ Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#

<p align="center">Bootstrapped with Create React App.</p>
