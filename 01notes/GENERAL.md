# General

---

## Table of Contents

---

### toFixed()

The **`toFixed()`** method formats a number using fixed-point notation.

## Syntax

```js-nolint
toFixed()
toFixed(digits)
```

### Parameters

- `digits` {{optional_inline}}
  - : The number of digits to appear after the decimal point; should be a value between `0` and `100`, inclusive. If this argument is omitted, it is treated as `0`.

### Return value

A string representing the given number using fixed-point notation.

### Exceptions

- {{jsxref("RangeError")}}
  - : If `digits` is smaller than `0`, larger than `100`, or is `NaN`.
- {{jsxref("TypeError")}}
  - : If this method is invoked on an object that is not a {{jsxref("Number")}}.

## Description

The `toFixed()` method returns a string representation of `numObj` that does not use exponential notation and has exactly `digits` digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.

If the absolute value of `numObj` is greater or equal to 10<sup>21</sup>, this method uses the same algorithm as {{jsxref("Number.prototype.toString()")}} and returns a string in exponential notation. `toFixed()` returns `"Infinity"`, `"NaN"`, or `"-Infinity"` if the value of `numObj` is non-finite.

The output of `toFixed()` may be more precise than [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) for some values, because `toString()` only prints enough significant digits to distinguish the number from adjacent number values. For example:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

However, choosing a `digits` precision that's too high can return unexpected results, because decimal fractional numbers cannot be represented precisely in floating point. For example:

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## Examples

### Using toFixed()

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; it rounds up
(2.55).toFixed(1); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower
(2.449999999999999999).toFixed(1); // '2.5'
// it rounds up as it's less than NUMBER.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation
```

### Using toFixed() with negative numbers

Because member access has higher [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) than unary minus, you need to group the negative number expression to get a string.

```js
-(2.34).toFixed(1); // -2.3, a number
(-2.34).toFixed(1); // '-2.3'
```

---

### htmlFor:

# HTMLLabelElement.htmlFor

The `HTMLLabelElement.htmlFor` property reflects the value of the [`for`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for) content property. That means that this script-accessible property is used to set and read the value of the content property `for`, which is the ID of the label's associated control element.

## [Value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor#value)

A string which contains the ID string of the element which is associated with the control.

---

#### React Portals:

# createPortal

`createPortal` lets you render some children into a different part of the DOM.

```
<div>  <SomeComponent />  {createPortal(children, domNode)}</div>
```

- [Reference](https://beta.reactjs.org/reference/react-dom/createPortal#reference)
  - [`createPortal(children, domNode)`](https://beta.reactjs.org/reference/react-dom/createPortal#createportal)
- [Usage](https://beta.reactjs.org/reference/react-dom/createPortal#usage)
  - [Rendering to a different part of the DOM](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-to-a-different-part-of-the-dom)
  - [Rendering a modal dialog with a portal](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal)
  - [Rendering React components into non-React server markup](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-react-components-into-non-react-server-markup)
  - [Rendering React components into non-React DOM nodes](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-react-components-into-non-react-dom-nodes)

---

## Reference [](https://beta.reactjs.org/reference/react-dom/createPortal#reference "Link for Reference ")

### `createPortal(children, domNode)` [](https://beta.reactjs.org/reference/react-dom/createPortal#createportal "Link for this heading")

To create a portal, call `createPortal`, passing some JSX, and the DOM node where it should be rendered:

```
import { createPortal } from 'react-dom';// ...<div>  <p>This child is placed in the parent div.</p>  {createPortal(    <p>This child is placed in the document body.</p>,    document.body  )}</div>
```

[See more examples below.](https://beta.reactjs.org/reference/react-dom/createPortal#usage)

A portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it. For example, the child can access the context provided by the parent tree, and events still bubble up from children to parents according to the React tree.

#### Parameters [](https://beta.reactjs.org/reference/react-dom/createPortal#parameters "Link for Parameters ")

- `children`: Anything that can be rendered with React, such as a piece of JSX (e.g. `<div />` or `<SomeComponent />`), a [Fragment](https://beta.reactjs.org/reference/react/Fragment) (`<>...</>`), a string or a number, or an array of these.

- `domNode`: Some DOM node, such as those returned by `document.getElementById()`. The node must already exist. Passing a different DOM node during an update will cause the portal content to be recreated.

#### Returns [](https://beta.reactjs.org/reference/react-dom/createPortal#returns "Link for Returns ")

`createPortal` returns a React node that can be included into JSX or returned from a React component. If React encounters it in the render output, it will place the provided `children` inside the provided `domNode`.

#### Caveats [](https://beta.reactjs.org/reference/react-dom/createPortal#caveats "Link for Caveats ")

- Events from portals propagate according to the React tree rather than the DOM tree. For example, if you click inside a portal, and the portal is wrapped in `<div onClick>`, that `onClick` handler will fire. If this causes issues, either stop the event propagation from inside the portal, or move the portal itself up in the React tree.

---

## Usage [](https://beta.reactjs.org/reference/react-dom/createPortal#usage "Link for Usage ")

### Rendering to a different part of the DOM [](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-to-a-different-part-of-the-dom "Link for Rendering to a different part of the DOM ")

_Portals_ let your components render some of their children into a different place in the DOM. This lets a part of your component "escape" from whatever containers it may be in. For example, a component can display a modal dialog or a tooltip that appears above and outside of the rest of the page.

To create a portal, render the result of `createPortal` with some JSX and the DOM node where it should go:

```
import { createPortal } from 'react-dom';function MyComponent() {  return (    <div style={{ border: '2px solid black' }}>      <p>This child is placed in the parent div.</p>      {createPortal(        <p>This child is placed in the document body.</p>,        document.body      )}    </div>  );}
```

React will put the DOM nodes for the JSX you passed inside of the DOM node you provided. Without a portal, the second `<p>` would be placed inside the parent `<div>`, but the portal "teleported" it into the [`document.body`:](https://developer.mozilla.org/en-US/docs/Web/API/Document/body)

<iframe src="https://codesandbox.io/embed/broken-resonance-4mg0ov?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="broken-resonance-4mg0ov"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Notice how the second paragraph visually appears outside the parent `<div>` with the border. If you inspect the DOM structure with developer tools, you can confirm that the second `<p>` got placed direcly into the `<body>`:

```
<body>  <div id="root">    ...      <div style="border: 2px solid black">        <p>This child is placed inside the parent div.</p>      </div>    ...  </div>  <p>This child is placed in the document body.</p></body>
```

A portal only changes the physical placement of the DOM node. In every other way, the JSX you render into a portal acts as a child node of the React component that renders it. For example, the child can access the context provided by the parent tree, and events still bubble up from children to parents according to the React tree.

---

### Rendering a modal dialog with a portal [](https://beta.reactjs.org/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal "Link for Rendering a modal dialog with a portal ")

You can use a portal to create a modal dialog that floats above the rest of the page, even if the component that summons the dialog is inside a container with `overflow: hidden` or other styles that interfere with the dialog.

In this example, the two containers have styles that disrupt the modal dialog, but the one rendered into a portal is unaffected because, in the DOM, the modal is not contained within the elements rendered by its parents.

<iframe src="https://codesandbox.io/embed/infallible-cherry-7oj6d8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="infallible-cherry-7oj6d8"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---
