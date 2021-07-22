# Sudoo-Throttle

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Throttle/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Throttle/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Throttle/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Throttle)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fthrottle.svg)](https://www.npmjs.com/package/@sudoo/throttle)
[![downloads](https://img.shields.io/npm/dm/@sudoo/throttle.svg)](https://www.npmjs.com/package/@sudoo/throttle)

Throttle for Node

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

throttle.reset(); // Cancel
```

## Debounce

```ts
import { Debounce } from "@sudoo/throttle";

const debounce = Debounce.create(async (...args) => {
    await doSomethingCostALot(args);
}, 1000);

for(1000 Times){
    debounce.execute(args); // Only the last call will be executed since all action called within 1000 ms
}

debounce.reset(); // Cancel
```
