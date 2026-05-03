window.loadOK=function(){
    if(this.APPEND().length==5)
        this.remove();
}.bind($s('#loadPage'));
$s('#loadPage').elem.addEventListener("DOMNodeRemoved", e=>{
    $s(".ace_text-input").elem.focus();
})