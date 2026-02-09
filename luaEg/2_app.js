const a=[0,0.15,0.22,0.29,0.35,0.42,0.48,0.53,0.60,0.64,0.7,0.74,0.8,0.83,0.89,0.92,0.96,1.01,1.04,1.07,1.11,1.14,1.18,1.2,1.23,1.27,1.28,1.32,1.34,1.36,1.39,1.4,1.43,1.45,1.47,1.49,1.5,1.52,1.54,1.56,1.57,1.58,1.6,1.61,1.63,1.64,1.65,1.66,1.67,1.68,1.7,1.7,1.71,1.72,1.73,1.74,1.75,1.75,1.76,1.77,1.78,1.78,1.79,1.79,1.8,1.81,1.81,1.81,1.82,1.83,1.83,1.83,1.84,1.84,1.85,1.85,1.85,1.86,1.86,1.87,1.86,1.87,1.87,1.88,1.88,1.88,1.88,1.88,1.89,1.89,1.89,1.89,1.9,1.9,1.89,1.9,1.91,1.9,1.9,1.91,1.91,1.91,1.91,1.91,1.91,1.91,1.92,1.91,1.92,1.92,1.92,1.91,1.92,1.93,1.92,1.92,1.92,1.93,1.92,1.93,1.92,1.93,1.92,1.93,1.93,1.93,1.93,1.93,1.92,1.93,1.94,1.93,1.93,1.93,1.93,1.93,1.94,1.93,1.93,1.94,1.93,1.93,1.94,1.93,1.94,1.93,1.94,1.93,1.94,1.93,1.94,1.93,1.94,1.94,1.93,1.94,1.94,1.93,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.93,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.94,1.95,1.94,1.94,1.94,1.94];
const aLen=a.length;
const f=new Array(aLen+1);
f[0]=0;
for(let i=0;i<aLen;++i){
    f[i+1]=f[i]+=a[i];
}

const maxTik=aLen/20;
function getDeltaY(t) {
    if(t<0){
        return -getDeltaY(-t);
    }
    if(t>maxTik){
        return a[aLen-1];
    }
    return a[Math.floor(t*20)];
}
function getY(t) {
    if(t<0){
        return -getY(-t);
    }
    if(t>maxTik){
        return f[aLen-1]+a[aLen-1]*(Math.round(t*20)-aLen+1);
    }
    return f[Math.floor(t*20)];
}
function getTime(y) {
    if(y<0){
        return -getTime(-y);
    }
    if(y>f[aLen]){
        return maxTik+(y-f[aLen])/a[aLen-1]/20;
    }
    var l=0,r=aLen+1;
    while(l<r){
        let mid=(l+r)>>1;
        if(y<f[mid]){
            r=mid;
        }else{
            l=mid+1;
        }
    }
    return l/20;
}

const elemT=$s("#t");
const elemY=$s("#y");
const elemG=$s("#g");

elemG.value=1;

var gravity=1.0;
var isTInputed=true;

elemT.elem.addEventListener("input",e=>{
    elemY.value=(getY(+elemT.value)*(gravity||1)).toFixed(2),
    isTInputed=true;
})
elemY.elem.addEventListener("input",e=>{
    elemT.value=getTime(+elemY.value/(gravity||1)).toFixed(2),
    isTInputed=false;
})
elemG.elem.addEventListener("input",e=>{
    gravity=+elemG.value;
    if(isTInputed)
        elemY.value=(getY(+elemT.value)*(gravity||1)).toFixed(2);
    else
        elemT.value=getTime(+elemY.value/(gravity||1)).toFixed(2);
})