dom-is-element
=======

Install
----

`npm install --save dom-is-element`

Usage
---

```javascript
import isElement from 'dom-is-element';

console.log(isElement({})); //false
console.log(isElement(null)); //false
console.log(isElement([])); //false
console.log(isElement(document.createElement('div'))); //true

```

About
----

There are other modules that do this. Those modules are not precompiled for different module systems, or they don't conform to a pattern that is amicable to static analysis.

See https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
