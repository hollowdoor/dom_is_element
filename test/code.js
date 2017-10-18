(function () {
'use strict';

function isElement(o){
    var type = typeof Element; //HTMLElement maybe
    return (
    type === "object" || type === 'function'
    ? o instanceof Element
    //DOM2
    : !!o
        && typeof o === "object"
        && o.nodeType === 1 //Definitely an Element
        && typeof o.nodeName==="string"
    );
}

console.log('typeof Element ',typeof Element);
console.log('typeof HTMLElement  ',typeof HTMLElement );
console.log(isElement({}));
console.log(isElement(null));
console.log(isElement([]));
console.log(isElement(document.createElement('div')));

}());
//# sourceMappingURL=code.js.map
