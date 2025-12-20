/**
 * queryPlus class
 * @class queryPlus class
 * @description queruPlus class
 * @argument {HTMLElement} element
 */
class _${
    /**
     * constructor of queryPlus
     * @param {HTMLElement | null} element Element which is following
     * @returns {_$}
     */
    constructor(element=null){
        /**
         * @type {HTMLElement}
         * @default null
         */
        this.elem=element||null;
        return this
    }
    /**
     * to string type.
     * @returns {string}
     */
    toString(){
        return '[object QueryPlusElement]'
    }
    /**
     * Set a value of a style of this element
     * @param {string} key style key
     * @param {string | null} value style value
     * @returns {_$}
     */
    style(key,value=null){
        this.elem.style[key]=value==null?'':value;
        return this
    }
    /**
     * Get a value of a style of this element.
     * If key is gived, returns a value.
     * If key is not gived, returns a style table.
     * @param {string | null} key style key
     * @returns {_$}
     */
    STYLE(key=null){
        return key==null?this.elem.style:this.elem.style[key]
    }
    /**
     * Add a class to this element.
     * @param {string | null} name class name
     * @returns {_$}
     */
    class(name=null){
        if(name!=null)this.elem.classList.add(name);
        return this
    }
    /**
     * Remove a class of this element.
     * @param {string | null} name class name
     * @returns {_$}
     */
    CLASS(name=null){
        if(name==null){
            this.elem.classList.forEach(this.elem.classList.remove);
            return this
        }
        this.elem.classList.remove(name);
        return this
    }
    /**
     * Get the existion of the class of the element.
     * If key is gived, returns a value.
     * If key is not gived, returns a class table.
     * @param {string | null} name class name 
     * @returns {boolean | DOMTokenList}
     */
    hasClass(name=null){
        if(name==null)
            return this.elem.classList;
        return this.elem.classList.contains(name)
    }
    /**
     * Set a data to this element.
     * @param {string} key key
     * @param {string} value value
     * @returns {_$}
     */
    data(key,value=''){
        if(value==null)delete this.elem.dataset[key];else this.elem.dataset[key]=value;
        return this
    }
    /**
     * Get the value of the data of the element.
     * If key is gived, returns a value.
     * If key is not gived, returns a data table.
     * @param {string | null} key name
     * @returns {boolean | DOMStringMap}
     */
    DATA(key=null){
        return key==null?this.elem.dataset:this.elem.dataset[key]
    }
    /**
     * Set or remove an attr to this element.
     * @param {string} key key
     * @param {string | null} value value
     * @returns {_$}
     */
    attr(key,value=null){
        value==null?this.elem.removeAttribute(key):this.elem.setAttribute(key,value);
        return this
    }
    /**
     * Get the value of the attr of the element.
     * If key is gived, returns a value.
     * If key is not gived, returns a attr table.
     * @param {string | null} key name
     * @returns {string | number | boolean | DOMStringMap}
     */
    ATTR(key=null){
        return key==null?this.elem.getAttributeNames().map(e=>({key:e,value:this.elem.getAttribute(e)})):this.elem.getAttribute(key)
    }
    /**
     * Set the text by in-HTML.
     * @param {string} value the HTML code which will be set
     * @returns {_$}
     */
    inhtml(value=''){
        this.elem.innerHTML=value;
        return this
    }
    /**
     * Get the text by in-HTML.
     * @returns {string}
     */
    INHTML(){
        return this.elem.innerHTML
    }
    /**
     * Set the text by text.
     * @param {string} value the string which will be set
     * @returns {_$}
    */
    intext(value=''){
        this.elem.innerText=value;
        return this
    }
    /**
     * Get the text by text.
     * @returns {string}
     */
    INTEXT(){
        return this.elem.innerText
    }
    /**
     * Set the text by all-HTML.
     * @returns {string}
     */
    ouhtml(value=''){
        this.elem.outerHTML=value;
        return this
    }
    /**
     * Get the text by all-HTML.
     * @returns {string}
     */
    OUHTML(){
        return this.elem.outerHTML
    }
    /**
     * Add a listener to this element.
     * @param {keyof HTMLElementEventMap} name the event name
     * @param {Function} listenHandle listener handler
     * @returns {_$}
     */
    listen(name,listenHandle=e=>{}){
        this.elem.addEventListener(name,listenHandle);
        return this
    }
    /**
     * Remove a listener to this element.
     * @param {keyof HTMLElementEventMap} name the event name
     * @param {Function} listenHandle listener handler
     * @returns {_$}
     */
    LISTEN(name,listener=e=>{}){
        this.elem.removeEventListener(name,listener);
        return this
    }
    /**
     * Simulate clicking.
     * @returns {_$}
     */
    click(){
        this.elem.click&&this.elem.click();
        return this
    }
    /**
     * Simulate focusing.
     * @returns {_$}
     */
    focus(){
        this.elem.focus&&this.elem.focus();
        return this
    }
    /**
     * Dispatch an event to this element. (isTrusted = false)
     * @param {Event} Event the event which will be dispatched to this element
     * @returns {_$}
     */
    dispatch(Event=new Event('null',{})){
        this.elem.dispatchEvent(Event);
        return this
    }
    /**
     * Append an element as a child.
     * @param {HTMLElement} child the element which will be appended
     * @returns {_$}
     */
    append(child=null){
        if(child instanceof _$)child=child.elem;
        this.elem.appendChild(child);
        return this
    }
    /**
     * Get all the children.
     * @returns {HTMLElement[]}
     */
    APPEND(){
        var a=[];
        for(let x of this.elem.children)a.push(new _$(x));
        return a
    }
    /**
     * Follow an element as a child.
     * Just like the parent element use function "append".
     * @param {Element} child the element which will be followed
     * @returns {_$}
     */
    follow(parent=null){
        if(parent instanceof _$)parent=parent.elem;
        parent.appendChild(this.elem);
        return this
    }
    /**
     * Get the parent.
     * @returns {_$}
     */
    FOLLOW(){
        return new _$(this.elem.parentElement)
    }
    /**
     * Remove this element.
     * if "newElem" is given, point to "newElem"
     * @param {Element | null} newElem the element which will be pointed
     * @returns {_$}
     */
    remove(newElem=null){
        this.elem.remove();
        if(newElem)this.elem=newElem;
        return this
    }
    /**
     * Run the function and use the Element as the only argument.
     * handle(Element)
     * @param {Function} handle the runner function
     * @returns {_$}
     */
    then(handle){
        handle(this.elem);
        return this
    }
    /**
     * Run the function and use the queryPlus object as the only argument.
     * handle(queryPlus_Object)
     * @param {Function} handle the runner function
     * @returns {_$}
     */
    THEN(handle){
        handle(this);
        return this
    }
    /**
     * @type {string}
     * @returns {string}
     */
    get value(){
        return this.elem.value
    }
}
/**
 * Use querySelector to set an element and returns a queryPlus object.
 * @param {string} qs query selector
 * @returns {_$}
 */
function $s(qs){
    return new _$(document.querySelector(qs))
}
/**
 * Use querySelectorALL to set ALL elements and returns ALL queryPlus objects.
 * @param {string} qs query selector all
 * @returns {_$[]}
 */
function $S(qs){
    var e=document.querySelectorAll(qs),o=[];
    for(let x of e)o.push(new _$(x));
    return o
}
/**
 * Create an Element as a queryPlus object.
 * @param {string} name element tag name
 * @returns {_$}
 */
function $c(name){
    return new _$(document.createElement(name))
}
/**
 * Create MANY Elements as MANY queryPlus objects.
 * @param {string[]} names element tag names
 * @returns {_$[]}
 */
function $C(names){
    var a=[];
    for(let x of names)a.push(new _$(document.createElement(x)));
    return a
}