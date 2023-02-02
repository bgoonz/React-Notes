# SyntheticEvent

Your event handlers will be passed instances of `SyntheticEvent`, a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

If you find that you need the underlying browser event for some reason, simply use the `nativeEvent` attribute to get it. The synthetic events are different from, and do not map directly to, the browser's native events. For example in `onMouseLeave` `event.nativeEvent` will point to a `mouseout` event. The specific mapping is not part of the public API and may change at any time. Every `SyntheticEvent` object has the following attributes:

```js
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

> Note:
>
> As of v17, `e.persist()` doesn't do anything because the `SyntheticEvent` is no longer [pooled](https://reactjs.org/docs/legacy-event-pooling.html).

> Note:
>
> As of v0.14, returning `false` from an event handler will no longer stop event propagation. Instead, `e.stopPropagation()` or `e.preventDefault()` should be triggered manually, as appropriate.

## [](https://reactjs.org/docs/events.html#supported-events)Supported Events

React normalizes events so that they have consistent properties across different browsers.

The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append `Capture` to the event name; for example, instead of using `onClick`, you would use `onClickCapture` to handle the click event in the capture phase.

- [Clipboard Events](https://reactjs.org/docs/events.html#clipboard-events)
- [Composition Events](https://reactjs.org/docs/events.html#composition-events)
- [Keyboard Events](https://reactjs.org/docs/events.html#keyboard-events)
- [Focus Events](https://reactjs.org/docs/events.html#focus-events)
- [Form Events](https://reactjs.org/docs/events.html#form-events)
- [Generic Events](https://reactjs.org/docs/events.html#generic-events)
- [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)
- [Pointer Events](https://reactjs.org/docs/events.html#pointer-events)
- [Selection Events](https://reactjs.org/docs/events.html#selection-events)
- [Touch Events](https://reactjs.org/docs/events.html#touch-events)
- [UI Events](https://reactjs.org/docs/events.html#ui-events)
- [Wheel Events](https://reactjs.org/docs/events.html#wheel-events)
- [Media Events](https://reactjs.org/docs/events.html#media-events)
- [Image Events](https://reactjs.org/docs/events.html#image-events)
- [Animation Events](https://reactjs.org/docs/events.html#animation-events)
- [Transition Events](https://reactjs.org/docs/events.html#transition-events)
- [Other Events](https://reactjs.org/docs/events.html#other-events)

---

## [](https://reactjs.org/docs/events.html#reference)Reference

### [](https://reactjs.org/docs/events.html#clipboard-events)Clipboard Events

Event names:

```js
onCopy onCut onPaste
```

Properties:

```js
DOMDataTransfer clipboardData
```

---

### [](https://reactjs.org/docs/events.html#composition-events)Composition Events

Event names:

```js
onCompositionEnd onCompositionStart onCompositionUpdate
```

Properties:

```js
string data
```

---

### [](https://reactjs.org/docs/events.html#keyboard-events)Keyboard Events

Event names:

```js
onKeyDown onKeyPress onKeyUp
```

Properties:

```js
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```

The `key` property can take any of the values documented in the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values).

---

### [](https://reactjs.org/docs/events.html#focus-events)Focus Events

Event names:

```js
onFocus onBlur
```

These focus events work on all elements in the React DOM, not just form elements.

Properties:

```js
DOMEventTarget relatedTarget
```

#### [](https://reactjs.org/docs/events.html#onfocus)onFocus

The `onFocus` event is called when the element (or some element inside of it) receives focus. For example, it's called when the user clicks on a text input.

```jsx
function Example() {
  return (
    <input
      onFocus={(e) => {
        console.log("Focused on input");
      }}
      placeholder="onFocus is triggered when you click this input."
    />
  );
}
```

#### [](https://reactjs.org/docs/events.html#onblur)onBlur

The `onBlur` event handler is called when focus has left the element (or left some element inside of it). For example, it's called when the user clicks outside of a focused text input.

```jsx
function Example() {
  return (
    <input
      onBlur={(e) => {
        console.log("Triggered because this input lost focus");
      }}
      placeholder="onBlur is triggered when you click this input and then you click outside of it."
    />
  );
}
```

#### [](https://reactjs.org/docs/events.html#detecting-focus-entering-and-leaving)Detecting Focus Entering and Leaving

You can use the `currentTarget` and `relatedTarget` to differentiate if the focusing or blurring events originated from *outside* of the parent element. Here is a demo you can copy and paste that shows how to detect focusing a child, focusing the element itself, and focus entering or leaving the whole subtree.

```jsx
function Example() {
  return (
    <div
      tabIndex={1}
      onFocus={(e) => {
        if (e.currentTarget === e.target) {
          console.log("focused self");
        } else {
          console.log("focused child", e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log("focus entered self");
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log("unfocused self");
        } else {
          console.log("unfocused child", e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log("focus left self");
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
  );
}
```

---

### [](https://reactjs.org/docs/events.html#form-events)Form Events

Event names:

```js
onChange onInput onInvalid onReset onSubmit
```

For more information about the onChange event, see [Forms](https://reactjs.org/docs/forms.html).

---

### [](https://reactjs.org/docs/events.html#generic-events)Generic Events

Event names:

```js
onError onLoad
```

---

### [](https://reactjs.org/docs/events.html#mouse-events)Mouse Events

Event names:

```js
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

The `onMouseEnter` and `onMouseLeave` events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

```js
boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
```

---

### [](https://reactjs.org/docs/events.html#pointer-events)Pointer Events

Event names:

```js
onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
```

The `onPointerEnter` and `onPointerLeave` events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

As defined in the [W3 spec](https://www.w3.org/TR/pointerevents/), pointer events extend [Mouse Events](https://reactjs.org/docs/events.html#mouse-events) with the following properties:

```js
number pointerId
number width
number height
number pressure
number tangentialPressure
number tiltX
number tiltY
number twist
string pointerType
boolean isPrimary
```

A note on cross-browser support:

Pointer events are not yet supported in every browser (at the time of writing this article, supported browsers include: Chrome, Firefox, Edge, and Internet Explorer). React deliberately does not polyfill support for other browsers because a standard-conform polyfill would significantly increase the bundle size of `react-dom`.

If your application requires pointer events, we recommend adding a third party pointer event polyfill.

---

### [](https://reactjs.org/docs/events.html#selection-events)Selection Events

Event names:

```js
onSelect;
```

---

### [](https://reactjs.org/docs/events.html#touch-events)Touch Events

Event names:

```js
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

Properties:

```js
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```

---

### [](https://reactjs.org/docs/events.html#ui-events)UI Events

Event names:

```js
onScroll;
```

> Note
>
> Starting with React 17, the `onScroll` event does not bubble in React. This matches the browser behavior and prevents the confusion when a nested scrollable element fires events on a distant parent.

Properties:

```js
number detail
DOMAbstractView view
```

---

### [](https://reactjs.org/docs/events.html#wheel-events)Wheel Events

Event names:

```js
onWheel;
```

Properties:

```js
number deltaMode
number deltaX
number deltaY
number deltaZ
```

---

### [](https://reactjs.org/docs/events.html#media-events)Media Events

Event names:

```js
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

---

### [](https://reactjs.org/docs/events.html#image-events)Image Events

Event names:

```js
onLoad onError
```

---

### [](https://reactjs.org/docs/events.html#animation-events)Animation Events

Event names:

```js
onAnimationStart onAnimationEnd onAnimationIteration
```

Properties:

```js
string animationName
string pseudoElement
float elapsedTime
```

---

### [](https://reactjs.org/docs/events.html#transition-events)Transition Events

Event names:

```js
onTransitionEnd;
```

Properties:

```js
string propertyName
string pseudoElement
float elapsedTime
```

---

### [](https://reactjs.org/docs/events.html#other-events)Other Events

Event names:

```js
onToggle;
```
