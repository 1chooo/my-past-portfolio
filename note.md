# My Note of My Portfolio

- [React APP Deployment](https://create-react-app.dev/docs/deployment/)

### 1. Rewrite the `scripts` into the `package.json`

```js
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

### 2. Add `devDependencies` at the bottom of the `package.json` file

```js
"devDependencies": {
    "gh-pages": "^4.0.0"
}
```

### 3. Add the homepage on the top of `package.json`

```js
"homepage": "https://your_user_name.github.io",
```

### 4. type `npm install`

### 5. Follow the `README.md` to change the content in `/src/components/`

### How to start server and deploy

Start Server in the localhost
```bash
$ npm run start
```

Deploy to GitHub page
```bash
$ npm run deploy
```