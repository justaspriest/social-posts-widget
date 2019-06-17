# Social Posts Widget
Hi there, thank you for checking my ~~awesome~~ widget!

## Build
To build widget you need to execute the npm script:
```
npm run build
```

## Installation
After building there will be a file under project directory:
**_build/js/social-posts-widget.js_**
You need to place this file somewhere where your app can grab it.

## Usage
Can be embedded inside a React application with the following code:
```javascript
const SocialPostsWidget = require(<path to builded .js file>);
const container = document.querySelector(<your very cool element selector>);

ReactDOM.render(<SocialPostsWidget
    feedURL={ feedURL }
    countOfPosts={ countOfPosts }
    refreshInterval={ refreshInterval }/>, container);
```
As you can see from the example above you need to include React and ReactDOM libraries in your project.

## Under the hood this widget uses:
+ [React](https://ru.react.js.org) including React Hooks!
+ [Typescript](https://www.typescriptlang.org/)
+ [webpack](https://webpack.js.org/) for project building