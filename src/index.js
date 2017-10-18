export default function isElement(o){
    let type = typeof Element; //HTMLElement maybe
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
