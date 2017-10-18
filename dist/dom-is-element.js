var domIsElement = (function () {
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

return isElement;

}());
//# sourceMappingURL=dom-is-element.js.map
