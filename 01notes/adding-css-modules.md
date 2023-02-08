Adding a CSS Modules Stylesheet
===============================

> Note: this feature is available with `react-scripts@2.0.0` and higher.

This project supports [CSS Modules](https://github.com/css-modules/css-modules) alongside regular stylesheets using the `[name].module.css` file naming convention. CSS Modules allows the scoping of CSS by automatically creating a unique classname of the format `[filename]\_[classname]\_\_[hash]`.

> Tip: Should you want to preprocess a stylesheet with Sass then make sure to [follow the installation instructions](https://create-react-app.dev/docs/adding-a-sass-stylesheet) and then change the stylesheet file extension as follows: `[name].module.scss` or `[name].module.sass`.

CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules [here](https://css-tricks.com/css-modules-part-1-need/).

`Button.module.css`[​](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet#buttonmodulecss "Direct link to heading")
----------------------------------------------------------------------------------------------------------------------------------

```
.error {  background-color: red;}
```

Copy

`another-stylesheet.css`[​](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet#another-stylesheetcss "Direct link to heading")
---------------------------------------------------------------------------------------------------------------------------------------------

```
.error {  color: red;}
```

Copy

`Button.js`[​](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet#buttonjs "Direct link to heading")
-------------------------------------------------------------------------------------------------------------------

```
import React, { Component } from 'react';import styles from './Button.module.css'; // Import css modules stylesheet as stylesimport './another-stylesheet.css'; // Import regular stylesheetclass Button extends Component {  render() {    // reference as a js object    return <button className={styles.error}>Error Button</button>;  }}
```

Copy

Result[​](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet#result "Direct link to heading")
------------------------------------------------------------------------------------------------------------

No clashes from other `.error` class names

```
<!-- This button has red background but not red text --><button class="Button_error_ax7yz">Error Button</button>
```

Copy

This is an optional feature. Regular `<link>` stylesheets and CSS files are fully supported. CSS Modules are turned on for files ending with the `.module.css` extension.
