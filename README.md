# Social Posts Widget
Hi there, thank you for checking my ~~awesome~~ widget!

## Dev Mode
The development mode is introduced!
To start dev server for the widget just to execute the following npm script:
```
npm run dev:start
```

## Testing
Tests use [jest](https://jestjs.io/) and can be run with the following script:
```
npm test
```

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
import "<PATH_TO_WIDGET_FILE>/social-posts-widget.js";

const SocialPostsWidget = socPost.SocialPostsWidget;
const container = document.querySelector(<your very cool element selector>);
ReactDOM.render((
  <SocialPostsWidget
    feedURL={feedURL}
    countOfPosts={countOfPosts}
    refreshInterval={refreshInterval}
  />
), container);
```
Or you can inject the widget in your html with helper function:
```html
...
<script type="text/javascript" src="<URL_TO_WIDGET_FILE>/social-posts-widget.js"></script>
<!-- Injecting the widget with default params
  You can use the following arguments for injectWidget:
  (default values are shown in parentheses)
  - containerSelector: string ("#social-posts-widget"),
  - feedURL: string (http://api.massrelevance.com/MassRelDemo/kindle.json),
  - countOfPosts: number (20),
  - refreshInterval: number (5000)
-->
<script>
  socPost.injectWidget();
</script>
...
```
**NOTE: You need to include React and ReactDOM libraries in your project.**

## Under the hood this widget uses:
+ [webpack](https://webpack.js.org/) for project building
+ [React](https://ru.react.js.org) including React Hooks!
+ [Typescript](https://www.typescriptlang.org/)
+ [Atomic design](http://atomicdesign.bradfrost.com/table-of-contents/)
+ [jest](https://jestjs.io/)