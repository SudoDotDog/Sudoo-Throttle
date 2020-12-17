# Sudoo-Throttle

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Throttle.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Throttle)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Throttle/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Throttle)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fthrottle.svg)](https://www.npmjs.com/package/@sudoo/throttle)
[![downloads](https://img.shields.io/npm/dm/@sudoo/throttle.svg)](https://www.npmjs.com/package/@sudoo/throttle)

:mushroom: Throttle for Node

## Install

```sh
yarn add @sudoo/throttle
# Or
npm install @sudoo/throttle --save
```

## Throttle

```ts
import { Throttle } from "@sudoo/throttle";

const throttle = Throttle.create(async (...args) => {
    await doSomethingCostALot(args);
}, 1000);

for(1000 Times){
    throttle.execute(args); // Only one will be executed every 1000 ms
}
```
