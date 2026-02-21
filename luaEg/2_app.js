const y_arr = [
    0, 0.15, 0.22, 0.29, 0.35, 0.42, 0.48, 0.53, 0.6, 0.64, 0.7, 0.74, 0.8,
    0.83, 0.89, 0.92, 0.96, 1.01, 1.04, 1.07, 1.11, 1.14, 1.18, 1.2, 1.23, 1.27,
    1.28, 1.32, 1.34, 1.36, 1.39, 1.4, 1.43, 1.45, 1.47, 1.49, 1.5, 1.52, 1.54,
    1.56, 1.57, 1.58, 1.6, 1.61, 1.63, 1.64, 1.65, 1.66, 1.67, 1.68, 1.7, 1.7,
    1.71, 1.72, 1.73, 1.74, 1.75, 1.75, 1.76, 1.77, 1.78, 1.78, 1.79, 1.79, 1.8,
    1.81, 1.81, 1.81, 1.82, 1.83, 1.83, 1.83, 1.84, 1.84, 1.85, 1.85, 1.85,
    1.86, 1.86, 1.87, 1.86, 1.87, 1.87, 1.88, 1.88, 1.88, 1.88, 1.88, 1.89,
    1.89, 1.89, 1.89, 1.9, 1.9, 1.89, 1.9, 1.91, 1.9, 1.9, 1.91, 1.91, 1.91,
    1.91, 1.91, 1.91, 1.91, 1.92, 1.91, 1.92, 1.92, 1.92, 1.91, 1.92, 1.93,
    1.92, 1.92, 1.92, 1.93, 1.92, 1.93, 1.92, 1.93, 1.92, 1.93, 1.93, 1.93,
    1.93, 1.93, 1.92, 1.93, 1.94, 1.93, 1.93, 1.93, 1.93, 1.93, 1.94, 1.93,
    1.93, 1.94, 1.93, 1.93, 1.94, 1.93, 1.94, 1.93, 1.94, 1.93, 1.94, 1.93,
    1.94, 1.93, 1.94, 1.94, 1.93, 1.94, 1.94, 1.93, 1.94, 1.94, 1.94, 1.93,
    1.94, 1.94, 1.94, 1.93, 1.94, 1.94, 1.94, 1.94, 1.93, 1.94, 1.94, 1.94,
    1.94, 1.94, 1.94, 1.93, 1.94, 1.94, 1.94, 1.94, 1.94, 1.94, 1.94, 1.94,
    1.93,
];
const y_arrLen = y_arr.length;
const x_arr1 = [0.1, 0.15, 0.18, 0.19];
const x_arr2 = [0.12, 0.06, 0.03, 0.02];
const x_arr1Len = x_arr1.length;
const x_arr2Len = x_arr2.length;

const y_frr = new Array(y_arrLen + 1),
    x_frr1 = new Array(x_arr1Len + 1),
    x_frr2 = new Array(x_arr2Len + 1);
((y_frr[0] = 0), (x_frr1[0] = 0), (x_frr2[0] = 0));
for (let i = 0; i < y_arrLen; ++i) y_frr[i + 1] = y_frr[i] += y_arr[i];
for (let i = 0; i < x_arr1Len; ++i) x_frr1[i + 1] = x_frr1[i] += x_arr1[i];
for (let i = 0; i < x_arr2Len; ++i) x_frr2[i + 1] = x_frr2[i] += x_arr2[i];

const maxT_fromY = y_arrLen / 20;
const maxY = 1.94;
const maxX = 0.21;
const const_X_R = 4 / 3;

var gravity = 1.0;
var isTInputed = true;
var speed = 1.0;
var isRun = false;
var isBeg = true;
var isEnd = true;

function getY_fromT(t) {
    if (t < 0) {
        return -getY_fromT(-t);
    }
    if (t > maxT_fromY) {
        return (
            y_frr[y_arrLen - 1] +
            y_arr[y_arrLen - 1] * (Math.round(t * 20) - y_arrLen + 1)
        );
    }
    return y_frr[Math.floor(t * 20)];
}
function getX_fromT(t) {
    if (t < 0) {
        return -getX_fromT(-t, isBeg, isEnd);
    }
    var tik = Math.round(t * 20);
    var x = 0;
    // part 1: beginning
    if (isBeg) {
        if (tik > x_arr1Len) {
            ((x += x_frr1[x_arr1Len]), (tik -= x_arr1Len));
        } else {
            x += x_frr1[tik];
            return x;
        }
    }
    // part 3: ending (before calculating)
    if (isEnd) {
        if (tik > x_arr2Len) {
            ((x += x_frr2[x_arr2Len]), (tik -= x_arr2Len));
        } else {
            x += x_frr2[tik];
            return x;
        }
    }
    // part 2: stable walking
    return (x += tik * maxX);
}
function getT_fromY(y) {
    if (y < 0) {
        return -getT_fromY(-y);
    }
    if (y > y_frr[y_arrLen]) {
        return maxT_fromY + (y - y_frr[y_arrLen]) / y_arr[y_arrLen - 1] / 20;
    }
    var l = 0,
        r = y_arrLen + 1;
    while (l < r) {
        let mid = (l + r) >> 1;
        if (y < y_frr[mid]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l / 20;
}
function getT_fromX(x) {
    if (x < 0) {
        return -getT_fromX(-x);
    }
    var tik = 0;
    // part 1: beginning
    if (isBeg) {
        if (x > x_frr1[x_arr1Len]) {
            ((tik += x_arr1Len), (x -= x_frr1[x_arr1Len]));
        } else {
            let l = 0,
                r = x_arr1Len + 1;
            while (l < r) {
                let mid = (l + r) >> 1;
                if (x < x_frr1[mid]) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            tik += l;
            return tik / 20;
        }
    }
    // part 3: ending
    if (isEnd) {
        if (x > x_frr2[x_arr2Len]) {
            ((tik += x_arr2Len), (x -= x_frr2[x_arr2Len]));
        } else {
            let l = 0,
                r = x_arr2Len + 1;
            while (l < r) {
                let mid = (l + r) >> 1;
                if (x < x_frr2[mid]) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            tik += l;
            return tik / 20;
        }
    }
    // part 2: stable walking
    return (tik += x / maxX) / 20;
}

const elemT = $s("#t");
// const elemT_T = $s("#t_t");
const elemY = $s("#y");
const elemY_G = $s("#y_g");
const elemX = $s("#x");
const elemX_V = $s("#x_v");
const elemX_B = $s("#x_b");
const elemX_E = $s("#x_e");
const elemX_R = $s("#x_r");

var setElemX_fromT = (t = +elemT.value) =>
    (elemX.value = (
        getX_fromT(t) *
        (isRun ? const_X_R : 1) *
        (speed || 1)
    ).toFixed(2));
var setElemY_fromT = (t = +elemT.value) =>
    (elemY.value = (getY_fromT(t) * (gravity || 1)).toFixed(2));
var setElemT_fromX = (x = +elemX.value) =>
    (elemT.value = getT_fromX(
        x / (isRun ? const_X_R : 1) / (speed || 1),
    ).toFixed(2));
var setElemT_fromY = (y = +elemY.value) =>
    (elemT.value = getT_fromY(y / (gravity || 1)).toFixed(2));

elemT.elem.addEventListener("input", (e) => {
    isTInputed = true;
    setElemY_fromT();
    setElemX_fromT();
}); // changeALL_fromT

elemY.elem.addEventListener("input", (e) => {
    setElemT_fromY();
    setElemX_fromT();
    isTInputed = false;
}); // changeT_fromY
elemY_G.elem.addEventListener("input", (e) => {
    gravity = +elemY_G.value;
    if (isTInputed) setElemY_fromT();
    else {
        setElemT_fromY();
        setElemX_fromT();
    }
}); // getT <-> getY  (gravity)

elemX.elem.addEventListener("input", (e) => {
    isTInputed = false;
    setElemT_fromX();
    setElemY_fromT();
}); // changeT_fromX
elemX_V.elem.addEventListener("input", (e) => {
    speed = +elemX_V.value;
    if (isTInputed) setElemX_fromT();
    else {
        setElemT_fromX();
        setElemY_fromT();
    }
}); // getT <-> getY  (gravity)
elemX_B.elem.addEventListener("click", (e) => {
    isBeg = (elemX_B.elem.checked);
    if (isTInputed) setElemX_fromT();
    else {
        setElemT_fromX();
        setElemY_fromT();
    }
}); // changeXB
elemX_E.elem.addEventListener("click", (e) => {
    isEnd = (elemX_E.elem.checked);
    if (isTInputed) setElemX_fromT();
    else {
        setElemT_fromX();
        setElemY_fromT();
    }
}); // changeXE
elemX_R.elem.addEventListener("click", (e) => {
    isRun = (elemX_R.elem.checked);
    if (isTInputed) setElemX_fromT();
    else {
        setElemT_fromX();
        setElemY_fromT();
    }
}); // changeXR
