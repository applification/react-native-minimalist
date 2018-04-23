<div align="center">

# react-native-minimalist

![React Native Minimalist Logo](Minimalist-Logo.png)

</div>

---

[![travis build](https://img.shields.io/travis/applification/react-native-minimalist.svg?style=flat-square)](https://travis-ci.org/applification/react-native-minimalist)
[![codecov coverage](https://img.shields.io/codecov/c/github/applification/react-native-minimalist.svg?style=flat-square)](https://codecov.io/gh/applification/react-native-minimalist)
[![version](https://img.shields.io/npm/v/react-native-minimalist.svg?style=flat-square)](https://www.npmjs.com/package/react-native-minimalist)
[![downloads](https://img.shields.io/npm/dm/react-native-minimalist.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-native-minimalist)
[![MIT License](https://img.shields.io/npm/l/react-native-minimalist.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Styled with Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> **Status**: Alpha (It is not recommended you use in a production app yet).

---

## The Problem

You want a set of universal components that work across React & React Native, perhaps even Sketch and React VR.

## The Solution

A React component library that utilises [React Primitives](https://github.com/lelandrichardson/react-primitives) and [React Native Web](https://github.com/necolas/react-native-web) to target multiple platforms using [React Native](https://facebook.github.io/react-native/).

![React Native Minimalist](react-native-minimalist.png)

## Approach

This library is highly inspired by Nicolas Gallagher's view that developing great web apps using the DOM is hard and [React Native is a better platform for developing web apps](https://twitter.com/necolas/status/983769332411805697).

The use of Leland Richardson's [React Primitives](https://github.com/lelandrichardson/react-primitives) is a logical extension enabling the use of React Native to deliver native mobile apps, web apps and other mediums using universally rendered components.

Components are developed using a [Pure UI approach](https://rauchg.com/2015/pure-ui) as advocated by Guillermo Rauch, where the UI is a pure function of state.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [FAQ](#faq)
* [Inspiration](#inspiration)
* [Contributors](#contributors)
* [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
npm install --save react-native-minimalist
```

## Dependencies

This library makes use of SVG icons via [React Native Minimalist Icons](https://www.npmjs.com/package/react-native-minimalist-icons) which is a based off Nicolas Gallagher's blog post on [Making SVG icon libraries for React apps](http://nicolasgallagher.com/making-svg-icon-libraries-for-react-apps/).

To install:

```bash
npm install --save react-native-minimalist-icons
```

## Usage

```JavaScript
import {
  Content,
  Header,
  Text
} from 'react-native-minimalist';

<Content>
  <Header>Big header with padding</Header>
  <Text>Body text with padding</Text>
</Content>
```

## Examples

All components have been developed and tested using storybook. View the Storybook [Component API](https://applification.github.io/react-native-minimalist)

Test app shells:

* [Next JS](https://github.com/applification/react-native-minimalist-nextjs)
* [Create React App](https://github.com/applification/react-native-minimalist-cra)
* [Expo](https://github.com/applification/react-native-minimalist-expo)
* Gatsby JS
* React Native
* Sketch

Full example apps:

* [Full Progressive Web App example using Gatsby](https://github.com/applification/react-native-minimalist-pwa)
* [Full React Native App example](https://github.com/applification/react-native-minimalist-app)

## FAQ

**Is the API stable?**

Relatively but this repository is more for exploration of a concept and to serve as inspiration for you to build your own design system of universal components. It is likely to include breaking changes in future as technology progresses.

**Can I style the components?**

Minimal styling can be passed in as props. This library uses a minimalist approach so all components are native bare UI and styling. Theme support is under consideration.

**How do you handle navigation and routing?**

Navigation is a native experience. The recommended approach is to handle this outside of this library using libraries such as:

_Native_:

* [React Native Navigation](https://github.com/wix/react-native-navigation/)
* [React Navigation](https://reactnavigation.org/)

_Web_:

* [Ant Mobile Tabs](https://mobile.ant.design/components/tabs/) in combination with a routing library such as [React Router](https://github.com/ReactTraining/react-router)

Essentially it is up to you to choose and implement the best navigation for your app.

## Inspiration

This repository takes inspiration from:

* [React Primitives](https://github.com/lelandrichardson/react-primitives)
* [React Native Web](https://github.com/necolas/react-native-web)
* [React Native Elements](https://github.com/react-native-training/react-native-elements)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5528035?v=4" width="100px;"/><br /><sub><b>Dave Hudson</b></sub>](http://applification.net)<br />[📖](https://github.com/applification/react-native-minimalist/commits?author=DaveHudson "Documentation") [💻](https://github.com/applification/react-native-minimalist/commits?author=DaveHudson "Code") [💡](#example-DaveHudson "Examples") [⚠️](https://github.com/applification/react-native-minimalist/commits?author=DaveHudson "Tests") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT

---

_Issues_

* react-primitives warning

  When running tests you get
  `ReactClass: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got undefined.` This is because react-primitives does not yet support React 16 [https://github.com/lelandrichardson/react-primitives/issues/75](https://github.com/lelandrichardson/react-primitives/issues/75)

_Roadmap_

* Skeleton loader component
* TextInput component
* Button component
* Toast Notification component
* Search Bar component
* Card component
* Swipeable Views component
* MapView component
* Video component
* Theme support
