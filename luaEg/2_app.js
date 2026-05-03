const y_arr = [
0.000,
0.150,
0.222,
0.289,
0.355,
0.418,
0.478,
0.536,
0.591,
0.645,
0.696,
0.746,
0.793,
0.838,
0.882,
0.923,
0.964,
1.003,
1.040,
1.075,
1.110,
1.143,
1.174,
1.204,
1.234,
1.262,
1.288,
1.314,
1.339,
1.363,
1.386,
1.408,
1.429,
1.449,
1.468,
1.487,
1.505,
1.523,
1.539,
1.554,
1.570,
1.585,
1.599,
1.612,
1.626,
1.637,
1.650,
1.661,
1.673,
1.682,
1.694,
1.702,
1.713,
1.721,
1.730,
1.738,
1.747,
1.753,
1.762,
1.768,
1.775,
1.782,
1.788,
1.794,
1.800,
1.806,
1.810,
1.816,
1.821,
1.825,
1.831,
1.834,
1.839,
1.842,
1.847,
1.850,
1.854,
1.857,
1.860,
1.864,
1.867,
1.869,
1.873,
1.875,
1.877,
1.880,
1.883,
1.885,
1.887,
1.889,
1.891,
1.893,
1.895,
1.897,
1.898,
1.900,
1.902,
1.903,
1.905,
1.906,
1.907,
1.909,
1.910,
1.911,
1.912,
1.914,
1.914,
1.916,
1.916,
1.918,
1.918,
1.919,
1.920,
1.921,
1.922,
1.922,
1.923,
1.924,
1.924,
1.925,
1.926,
1.926,
1.927,
1.927,
1.928,
1.928,
1.929,
1.929,
1.930,
1.930,
1.930,
1.931,
1.931,
1.932,
1.932,
1.932,
1.932,
1.933,
1.933,
1.934,
1.934,
1.933,
1.935,
1.934,
1.935,
1.935,
1.935,
1.935,
1.936,
1.935,
1.936,
1.936,
1.936,
1.937,
1.936,
1.937,
1.937,
1.937,
1.937,
1.937,
1.937,
1.937,
1.938,
1.938,
1.937,
1.938,
1.938,
1.938,
1.938,
1.938,
1.939,
1.938,
1.938,
1.939,
1.939,
1.938,
1.939,
1.939,
1.938,
1.939,
1.939,
1.939,
1.939,
1.939,
1.939,
1.939,
1.940,
1.939,
1.939,
1.939,
1.940,
1.939,
1.940,
1.939,
1.939,
1.940,
1.939,
1.940,
1.940,
1.939,
1.940,
1.939,
1.940,
1.940,
1.940,
1.939,
1.940,
1.940,
1.940,
1.939,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.939,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
1.941,
1.940,
1.940,
1.940,
1.940,
];
const y_arrLen = y_arr.length;
const x_arr1 = [
    0.098,
    0.150,
    0.179,
    0.193,
    0.202,
    0.206,
    0.208,
    0.209,
];
const x_arr2 = [
0.21077586206896573,
0.209,
0.113,
0.060,
0.033,
0.017,
0.009,
0.005,
0.003,
0.001,
0.001,
];
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
const maxY = 1.9400851063829774;
const maxX = 0.21077586206896573;
const const_X_R = 0.2781864406779663 / 0.21077586206896573;

var gravity = 1.0;
var isTInputed = true;
var speed = 1.0;
var isRun = false;
var isBeg = true;
var isEnd = true;

var ln = Math.log;

// function getYD_fromT(t) {
//     if (t < 0) {
//         return -getYD_fromT(-t);
//     }
//     if (t >= maxT_fromY) {
//         return (
//             maxY
//         );
//     }
//     return y_arr[Math.floor(t * 20)];
// }
// function getYD_fromT(t) {
//     return 1.94 * gravity * (Math.pow(2.32, -t) - 1);
// }
// function getY_fromT(t) {
//     if (t < 0) {
//         return -getY_fromT(-t);
//     }
//     if (t > maxT_fromY) {
//         return (
//             y_frr[y_arrLen - 1] +
//             maxY * (Math.round(t * 20) - y_arrLen + 1)
//         );
//     }
//     return y_frr[Math.floor(t * 20)];
// }
function getY_fromT(t, v0) {
    // return (v0 + 1.94 * gravity) * Math.pow(2.2142174, -t) - 1.94 * gravity;
    return -( ( -v0 + 1.94 * gravity ) / ln(2.2142174) ) * ( Math.pow(2.2142174, -t) - 1 ) * 20 - 38.8 * t * gravity;
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
// function getT_fromYD(y) {
//     if (y < 0) {
//         return -getT_fromYD(-y);
//     }
//     if (y > maxY) {
//         return NaN;
//     }
//     var l = 0,
//         r = y_arrLen + 1;
//     while (l < r) {
//         let mid = (l + r) >> 1;
//         if (y < y_arr[mid]) {
//             r = mid;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return l / 20;
// }
function getT_fromYaV0(y, v0) {
    // time is new. we dont use array hahaha
    return ln( (v0 + 1.94 * gravity) / (1.94 * gravity + y) ) * 2 / ln(2.2142174);
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
const elemY_V0 = $s("#y_v0");
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

var setElemY_fromT = (t = +elemT.value, v0 = +elemY_V0.value) =>
    (elemY.value = (-getY_fromT(t, v0)).toFixed(2));
    // (elemY.value = (getY_fromT(t + getT_fromYaV0(v0 / gravity)) * gravity).toFixed(2));

var setElemT_fromX = (x = +elemX.value) =>
(elemT.value = getT_fromX(
    x / (isRun ? const_X_R : 1) / (speed || 1),
).toFixed(2));

var setElemT_fromY = (y = +elemY.value, v0 = +elemY_V0.value) =>
    (elemT.value = (-getT_fromYaV0(y, v0)).toFixed(2));
// (elemT.value = (getT_fromY(y / gravity) + getT_fromV0(v0 / gravity)).toFixed(2));

elemT.elem.addEventListener("input", (e) => {
    isTInputed = true;
    setElemY_fromT();
    setElemX_fromT();
}); // changeALL_fromT

elemY.elem.addEventListener("input", (e) => {
    isTInputed = false;
    setElemT_fromY();
    setElemX_fromT();
}); // changeT_fromY
elemY_V0.elem.addEventListener("input", (e) => {
    if (isTInputed) setElemY_fromT();
    else {
        setElemT_fromY();
        setElemX_fromT();
    }
}); // changeT_fromV0
elemY_G.elem.addEventListener("input", (e) => {
    gravity = (+elemY_G.value) || 1;
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
