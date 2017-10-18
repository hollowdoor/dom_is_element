import isElement from '../';

console.log('typeof Element ',typeof Element)
console.log('typeof HTMLElement  ',typeof HTMLElement )
console.log(isElement({}));
console.log(isElement(null));
console.log(isElement([]));
console.log(isElement(document.createElement('div')));
