class _${
    constructor(element){
        this.elem=element||null;
        return this
    }
    toString(){
        return '[object QueryPlusElement]'
    }
    style(key,value=null){
        this.elem.style[key]=value==null?'':value;
        return this
    }
    STYLE(key=null){
        return key==null?this.elem.style:this.elem.style[key]
    }
    class(name=null){
        if(name!=null)this.elem.classList.add(name);
        return this
    }
    CLASS(name=null){
        if(name==null)
            return this.elem.classList;
        this.elem.classList.remove(name);
        return this
    }
    data(key,value=''){
        if(value==null)delete this.elem.dataset[key];else this.elem.dataset[key]=value;
        return this
    }
    DATA(key=null){
        return key==null?this.elem.dataset:this.elem.dataset[key]
    }
    attr(key,value=null){
        value==null?this.elem.removeAttribute(key):this.elem.setAttribute(key,value);
        return this
    }
    ATTR(key=null){
        return key==null?this.elem.getAttributeNames().map(e=>({key:e,value:this.elem.getAttribute(e)})):this.elem.getAttribute(key)
    }
    inhtml(value=''){
        this.elem.innerHTML=value;
        return this
    }
    INHTML(){
        return this.elem.innerHTML
    }
    intext(value=''){
        this.elem.innerText=value;
        return this
    }
    INTEXT(){
        return this.elem.innerText
    }
    listen(name,listenHandle=e=>{}){
        this.elem.addEventListener(name,listenHandle);
        return this
    }
    LISTEN(name,listener=e=>{}){
        this.elem.removeEventListener(name,listener);
        return this
    }
    click(){
        this.elem.click&&this.elem.click();
        return this
    }
    dispatch(Event=new Event('null',{})){
        this.elem.dispatchEvent(Event);
        return this
    }
    append(child=null){
        if(child instanceof _$)child=child.elem;
        this.elem.appendChild(child);
        return this
    }
    APPEND(){
        var a=[];
        for(let x of this.elem.children)a.push(new _$(x));
        return a
    }
    follow(parent=null){
        if(parent instanceof _$)parent=parent.elem;
        parent.appendChild(this.elem);
        return this
    }
    FOLLOW(){
        return new _$(this.elem.parentElement)
    }
    remove(newElem=null){
        this.elem.remove();
        if(newElem)this.elem=newElem;
        return this
    }
    then(handle){
        handle(this.elem);
        return this
    }
    THEN(handle){
        handle(this);
        return this
    }
}
function $s(qs){
    return new _$(document.querySelector(qs))
}
function $S(qs){
    var e=document.querySelectorAll(qs),o=[];
    for(let x of e)o.push(new _$(x));
    return o
}
function $c(name){
    return new _$(document.createElement(name))
}
function $C(names){
    var a=[];
    for(let x of names)a.push(new _$(document.createElement(x)));
    return a
}