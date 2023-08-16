Elevate your web design effortlessly with "simply-fades" the NPM module that brings a touch of elegance through simple directional fade-in attributes, enhancing user engagement and visual appeal.

<div align="center">
    <img align="center" width="230" src="https://i.imgur.com/iG2POl5.png" />
    <br />
    <br />
    <div>This project is still in active development, please open any issues on https://github.com/rps-code/simply-fades/issues ❤️</div>
    <br />
    <a href="https://www.npmjs.com/package/simply-fades"><img src="https://badgen.net/npm/v/simply-fades" alt="npm version"></a> <a href="https://github.com/rps-code/simply-fades"><img src="https://img.shields.io/github/last-commit/rps-code/simply-fades" alt="lastest commit"></a>
</div>

## ⭐️ Features

-   Simply yet elegant fade in animations
-   Ultra lightweight
-   No dependancies
-   Written purely in Typescript
-   Basic and really simple to use
-   Works everywhere, anytime

## 📦 Getting Started

### NPM

```
npm i simply-fades
```

### Yarn

```
yarn add simply-fades
```

In your project, import the SimplyFade class like so:

```js
import { SimplyFade } from 'simply-fades'
```

Usage:

> **Note**: If the element does not load, make sure you are initialising your HoverCursor after `DOMContentLoaded`!

```js
document.addEventListener('DOMContentLoaded', () => {
    new SimplyFade()
})
```

## 🙋‍♂️ Example

The following code produces the behaviour displayed in the GIF.

![](https://github.com/rps-code/simply-fades/blob/main/demo.gif)

```js
import { SimplyFade } from 'simply-fade'

document.addEventListener('DOMContentLoaded', () => {
    new SimplyFade()
})
```

You define directions on attributes, by default this attribute is `simply-fade`, but can be changed (read below).

```html
<div simply-fade="right">...</div>
```

## 🚀 Documentation & Properties

> Documentation is still being made as the libary is still being worked on, but a brief list is below. Please note these are global values.

| Parameter              | Description                                                                         | Type            | Default       | Required? |
| ---------------------- | ----------------------------------------------------------------------------------- | --------------- | ------------- | --------- |
| **attributeSelector**  | The name of the attribute to assign animations to                                   | string          | 'simply-fade' | ❌        |
| **offsetPx**           | How many pixels from the bottom of the viewport we wait until we play the animation | number          | 200           | ❌        |
| **transitionDuration** | How long the animation takes to play                                                | number (0 to 1) | 0.5           | ❌        |
| **movementPx**         | How many pixels the element slides in                                               | number          | 50            | ❌        |

### Attribute options

```html
<div simply-fade="up">...</div>
<div simply-fade="right">...</div>
<div simply-fade="down">...</div>
<div simply-fade="left">...</div>
<div simply-fade="fade">...</div>
<!-- `simply-fade="fade"` means no horizontal or vertical movement, just fade in -->
```

## 🛣️ Roadmap (TODO)

-   Optimise build process & update build tools
-   Add option to set parameters through attributes

## 💎 Contribution

I extend a warm invitation to developers and enthusiasts to contribute to `simply-fades`. Your insights, expertise, and fresh perspectives are invaluable assets that can help me refine and enhance my work.

To get started, please review my guidelines for contributing, which can be found in the `CONTRIBUTING.md` file. If you encounter any issues, have questions, or need clarification, don't hesitate to reach out.
