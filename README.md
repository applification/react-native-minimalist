<div align="center">

# react-native-minimalist

![React Native Minimalist Logo](assets/Minimalist-Logo.png)

</div>

---

[![travis build](https://img.shields.io/travis/applification/react-native-minimalist.svg?style=flat-square)](https://travis-ci.org/applification/react-native-minimalist)
[![codecov coverage](https://img.shields.io/codecov/c/github/applification/react-native-minimalist.svg?style=flat-square)](https://codecov.io/gh/applification/react-native-minimalist)
[![version](https://img.shields.io/npm/v/react-native-minimalist.svg?style=flat-square)](https://www.npmjs.com/package/react-native-minimalist)
[![downloads](https://img.shields.io/npm/dm/react-native-minimalist.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-native-minimalist)
[![MIT License](https://img.shields.io/npm/l/react-native-minimalist.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Styled with Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

---

> **Status**: Alpha (In development, do not use in production).

_Roadmap_

* ListView support (FlatList in native ListView using AntMobile for web)
* Button (simple component to provide basic button)
* Toast Notification (Native and AntMobile for web)
* Search Bar (Native and AntMobile for web)
* Card (compose components together to create a card component)
* Carousel (Native and AntMobile for web)
* Pull to Refresh (Native and AntMobile for web)
* MapView (Native and Google Maps or Mapbox for web?)
* Video (Native and HTML Video?)
* AlertDialog (Native and AntMobile for web)
* Android Support (Nothing prevents native Android, just need to spend time testing and refining)
* Docs (Docusarus architecture in place, just need to implement)
* Sample Apps (React Native & Gatsby PWA)
* Storybook App (Integrated into build system, need to build out full Storybook experience)

_Issues_

* react-primitives warning

  When running tests you get
  `ReactClass: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got undefined.` This is because react-primitives does not yet support React 16 [https://github.com/lelandrichardson/react-primitives/issues/75](https://github.com/lelandrichardson/react-primitives/issues/75)

---

## The Problem

You want to use the same React components across React & React Native. You've heard about React Primitives and React Native Web but you aren't quite sure where to start.

## The Solution

Storybook driven Design System that utilises React Primitives, React Native Web, Ant Mobile & custom native modules always degrading gracefully for web.

## Table of Contents

INSERT using https://github.com/thlorenz/doctoc

## Installation

```bash
npm install --save react-native-minimalist
```

## Usage

```JavaScript
import {
  Content,
  HeaderText,
  BodyText
} from 'react-native-minimalist';

<Content>
  <HeaderText>Big header with padding</HeaderText>
  <BodyText>Body text with padding</BodyText>
</Content>
```

## Examples

All components have been developed and tested using storybook, to play around with all the components, props and various states clone the Demo App.

Storybook API [https://applification.github.io/react-native-minimalist/storybook.html](https://applification.github.io/react-native-minimalist/storybook.html)

Read the docs [https://applification.github.io/react-native-minimalist/](https://applification.github.io/react-native-minimalist/)

React Native Minimalist App

React Native Minimalist PWA (Gatsby)

## FAQ

**Is the API stable?**

Yes but this repository is more for inspiration for you to build your own design system. As such it may include breaking changes in future as technology progresses.

**Can I style the components?**

Minimal styling can be passed in as props. This library uses a minimalist approach so all components are native bare UI and styling.

**How do you handle navigation and routing?**

Navigation is a native experience. The recommended approach is to use native implementations such as:

_Native_:

* React Native Navigation
* React Navigation

_Web_:

* Ant Mobile Tabs in combination with routing such as React Router

Essentially it is up to you to choose and implement the best navigation for your app. You can find examples of React Native Navigation and Ant Mobile Tabs in the examples apps.

## Inspiration

This repo was inspired by the work of ??? on React Native Elements.

## Contributors

INSERT using https://github.com/jfmengels/all-contributors-cli

## License

MIT
