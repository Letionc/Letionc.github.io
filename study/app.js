const elemAPP = $s("#app");
const elemTEXT = $s("#text");
const elemDATETIME = $s("#datetime");
const elemSUBMITBTN = $s("#submitbtn");
const elemNEXTBTN = $s("#nextbtn");
const elemEXITBTN = $s("#exitbtn");
const elemTRUTH = $s("#truth");
const elemRIGHTION = $S("#rightion>*>.data");
var answerRight = 0;
var answerWrong = 0;
var pagemode = 0;
var lastQid = null;
var answer = [];

/**@type {number[]}*/
var gotWrongProblems = [];
/**@type {number[]}*/
var gotRightProblems = [];

const PROPERTY_getProblems = {
    Chi: PROPERTY_ChiProblems,
    Law: PROPERTY_LawProblems,
};
/**@param {string} type @returns {{q:string,a:string[]}[]}*/
function getProblems(type = "") {
    return PROPERTY_getProblems[type];
}
/**@param {Date} d @returns {string}*/
function translateDate(d) {
    // return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
/**
 * randint in [0,n) .
 *
 */
function randint(n, without = null) {
    if (without != null) {
        var o = Math.floor(Math.random() * (n - 1));
        return o + (o >= without);
    }
    return Math.floor(Math.random() * n);
}
const problems = getProblems("Law");
const problemslen = problems.length;
/**
 * @type {object}
 */
const PROPERTY_translateProblem = {
    BR: "<br>",
    TAB: "&emsp;&emsp;",
    INP: '<input type="text">',
};
/**
 *
 * @param {string} q
 * @returns {string}
 */
function translateProblem(q) {
    var o = "";
    let len = q.length;
    for (let i = 0; i < len; ++i) {
        switch (q[i]) {
            case "\\": {
                ++i;
                o += q[i];
                break;
            }

            case "$": {
                ++i;
                let tmp = "";
                for (; i < len && q[i] != "#"; ++i) {
                    tmp += q[i];
                }
                o += PROPERTY_translateProblem[tmp] || `\$${tmp}#`;
                break;
            }

            default: {
                o += q[i];
            }
        }
    }
    return o;
}
const PROPERTY1_updateProblem = {
    "-1": "<span class='righted-tag'>",
    0: "",
    1: "<span class='wronged-tag'>",
};
const PROPERTY2_updateProblem = {
    "-1": "</span>",
    1: "</span>",
    0: "",
};
/**
 *
 * @param {number} p
 */
function updateProblem(p, _wronged = false) {
    var wronged = String(
        (gotWrongProblems.findIndex((e) => e == lastQid) >= 0) -
            (gotRightProblems.findIndex((e) => e == lastQid) >= 0),
    );
    elemTEXT.inhtml(
        `${PROPERTY1_updateProblem[wronged]}(id ${p})${PROPERTY2_updateProblem[wronged]}${translateProblem(problems[p].q)}`,
    );
    elemTRUTH.inhtml("");
    answer = problems[p].a;
}
function updateRandomProblem() {
    lastQid = randint(problemslen + gotWrongProblems.length, lastQid);
    updateProblem(
        lastQid >= problemslen
            ? gotWrongProblems[lastQid - problemslen]
            : lastQid,
    );
}
function updateRightionShow() {
    var a = answerRight,
        b = answerWrong;
    (elemRIGHTION[0].inhtml(`${((a * 100) / (a + b)).toFixed(2)}%`),
        elemRIGHTION[1].inhtml(a),
        elemRIGHTION[2].inhtml(b));
}
/**
 * @param {_$[]} elems
 * @returns {boolean}
 */
function checkInputAnswer(elems) {
    var len = answer.length;
    var cnt = 0;
    var arr = new Array(len).fill(true);
    for (let i = 0; i < len; ++i) {
        let x = elems[i];
        console.warn(x.elem.value, " compares with ", answer[i]);
        if (x.value != answer[i]) {
            arr[i] = false;
            x.STYLE().setProperty("--col", "#933");
        } else {
            ++cnt;
            x.STYLE().setProperty("--col", "#396");
        }
        x.attr("disabled", "");
    }
    elemTRUTH.inhtml(
        `正确率: ${((cnt / answer.length) * 100).toFixed(2)}%<br>
答案: ${answer.map((v, k) => '<span class="truth-txt ' + (arr[k] ? "true" : "false") + '">' + v + "</span>").join("  ,  ")}`,
    );
    if (cnt == len) {
        ++answerRight;
        gotRightProblems.findIndex((e) => e == lastQid) < 0 &&
            gotRightProblems.push(lastQid);
        let idx = gotWrongProblems.findIndex((e) => e == lastQid);
        if (idx >= 0) {
            gotWrongProblems.splice(idx, 1);
        }
    } else {
        ++answerWrong;
        gotWrongProblems.findIndex((e) => e == lastQid) < 0 &&
            gotWrongProblems.push(lastQid);
        let idx = gotRightProblems.findIndex((e) => e == lastQid);
        if (idx >= 0) {
            gotRightProblems.splice(idx, 1);
        }
    }
    updateRightionShow();
}
/**
 *
 * @param {PointerEvent} e
 */
function submitBtnHandler(e) {
    switch (pagemode) {
        case 0: {
            // doing question
            checkInputAnswer($S("input"));
            pagemode = 1;

            break;
        }
        case 1: {
            updateRandomProblem();
            pagemode = 0;
        }
        default: {
            break;
        }
    }
}
function nextBtnHandler(e) {
    updateRandomProblem();
    pagemode = 0;
}
updateRandomProblem();
elemSUBMITBTN.listen("click", submitBtnHandler);
elemNEXTBTN.listen("click", nextBtnHandler);
elemEXITBTN.listen("click", (e) => open(".", "_self", ""));
elemEXITBTN.listen(
    "contextmenu",
    (e) => (e.preventDefault(), location.reload()),
);

function frame() {
    elemDATETIME.inhtml(translateDate(new Date()));

    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
