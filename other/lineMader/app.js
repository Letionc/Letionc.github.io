const elemValK=$s("#val-k");
const elemValM=$s("#val-m");
const elemValN=$s("#val-n");
// const elemBody=$s("body");
// const elemValA=$s("#val-a");
// const elemValB=$s("#val-b");
// const elemValC=$s("#val-c");
// const elemValD=$s("#val-d");

const elemValsK=$s("#vals-k");
const elemValsM=$s("#vals-m");
const elemValsN=$s("#vals-n");
// const elemValsA=$s("#vals-a");
// const elemValsB=$s("#vals-b");
// const elemValsC=$s("#vals-c");
// const elemValsD=$s("#vals-d");

/**@type {HTMLCanvasElement}*/
const elemCanvas=$s("#canvas").elem;
const ctxtCanvas=elemCanvas.getContext("2d");
const elemFormula=$s("#formula");
const elemNext=$s("#next");
const elemScale=$s("#scale");
const elemScales=$s("#scales");

const formulaFuncs={
    "y = x + m": (x, _k, m) => x+m,
    "y = k x": (x, k) => k*x,
    "y = k x + m": (x, k, m) => k*x+m,
    "y = x<sup>2</sup> + m": (x, _k, m) => x*x+m,
    "y = k x<sup>2</sup>": (x, k) => k*x*x,
    "y = k x<sup>2</sup> + m": (x, k, m) => k*x*x+m,
    "y = 1 / x + m": (x, _k, m) => 1/x+m,
    "y = k / x": (x, k) => k/x,
    "y = k / x + m": (x, k, m) => k/x+m,
}

const randDict={
    k: 2,
    m: 2,
    n: 2,
}

var varScale=0.05;
var varK=0;
var varM=0;
var varN=0;

function randomChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function getScale() {
    return varScale;
}
function getValK() {
    return varK;
}
function getValM() {
    return varM;
}
function getValN() {
    return varN;
}
function getY(x, func, scale, k, m, n) {
    const mathY=func(x*scale, k, m, n);
    return Math.round(mathY/scale);
}
function updateCanvasPic(formula, scale) {
    var width=Math.round(elemCanvas.width=0.7*window.innerWidth);
    var height=Math.round(elemCanvas.height=window.innerHeight-62);
    var width_half=(width>>1);
    var height_half=(height>>1);
    var func=formulaFuncs[formula];
    
    const truths=new Array(width);
    var sub=0;
    
    ctxtCanvas.clearRect(0, 0, width, height);
    
    ctxtCanvas.beginPath();
    
    ctxtCanvas.moveTo(0, height_half);
    ctxtCanvas.lineTo(width, height_half);
    
    ctxtCanvas.moveTo(width_half, 0);
    ctxtCanvas.lineTo(width_half, height);
    ctxtCanvas.lineWidth = 2;
    ctxtCanvas.imageSmoothingEnabled = true; 
    ctxtCanvas.strokeStyle = "#888";
    ctxtCanvas.stroke();
    
    ctxtCanvas.beginPath();
    
    for (let x = 0, isFirstPoint = true, 
        k = randDict.k, n = randDict.n, m = randDict.m; x < width; x++) {
        
        const xMath = x - width_half;
        const yMath = getY(xMath, func, scale, k, m);
        const yCanvas = height_half - yMath;
        truths[x]=yCanvas;
        
        if (yCanvas < 0 || yCanvas > height) {
            isFirstPoint = true;
            continue;
        }
        
        if (isFirstPoint) {
            ctxtCanvas.moveTo(x, yCanvas);
            isFirstPoint = false;
        } else {
            ctxtCanvas.lineTo(x, yCanvas);
        }
    }
    ctxtCanvas.strokeStyle="red";
    ctxtCanvas.lineWidth = 2;
    ctxtCanvas.imageSmoothingEnabled = true; 
    ctxtCanvas.stroke();
    
    ctxtCanvas.beginPath();
    
    for (let x = 0, isFirstPoint = true, 
        k = getValK(), m = getValM(), n = getValN(); x < width; x++) {
        
        const xMath = x - width_half;
        const yMath = getY(xMath, func, scale, k, m);
        const yCanvas = height_half - yMath;
        
        if (yCanvas < 0 || yCanvas > height) {
            isFirstPoint = true;
            continue;
        }

        sub+=Math.abs(yCanvas-truths[x])
        
        if (isFirstPoint) {
            ctxtCanvas.moveTo(x, yCanvas);
            isFirstPoint = false;
        } else {
            ctxtCanvas.lineTo(x, yCanvas);
        }
    }
    isTrue=!sub;
    elemNext.attr("disabled", isTrue? null : "disabled");
    elemNext.inhtml(isTrue? "下一关" : `你差了${sub}个像素！`);
    ctxtCanvas.strokeStyle=isTrue?"#393":"black";
    ctxtCanvas.lineWidth = 2;
    ctxtCanvas.imageSmoothingEnabled = true; 
    ctxtCanvas.stroke();

    ctxtCanvas.beginPath();
}

var gettik=()=>new Date().getTime();
var lastik=0;

function frame() {
    const nowtik=gettik();
    if(nowtik<lastik+16){
        requestAnimationFrame(frame);
        return;
    }
    updateCanvasPic(elemFormula.INHTML(), getScale());

    requestAnimationFrame(frame);
}

elemScale.elem.addEventListener("input", e=>{
    varScale = +(elemScales.value = elemScale.value)
})
elemScales.elem.addEventListener("input", e=>{
    varScale = +(elemScale.value = elemScales.value)
})

elemValK.elem.addEventListener("input", e=>{
    varK = +(elemValsK.value = elemValK.value)
})
elemValsK.elem.addEventListener("input", e=>{
    varK = +(elemValK.value = elemValsK.value)
})

elemValM.elem.addEventListener("input", e=>{
    varM = +(elemValsM.value = elemValM.value)
})
elemValsM.elem.addEventListener("input", e=>{
    varM = +(elemValM.value = elemValsM.value)
})

elemValN.elem.addEventListener("input", e=>{
    varN = +(elemValsN.value = elemValN.value)
})
elemValsN.elem.addEventListener("input", e=>{
    varN = +(elemValN.value = elemValsN.value)
})

elemNext.elem.addEventListener("click", e=>{
    elemFormula.inhtml( randomChoice(Object.keys(formulaFuncs)) );
    randDict.k=Math.round(Math.random()*200-100)/10,
    randDict.m=Math.round(Math.random()*200-100)/10,
    randDict.n=Math.round(Math.random()*200-100)/10;
})

requestAnimationFrame(frame);