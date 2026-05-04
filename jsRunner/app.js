var a = document.getElementById('1');
document.getElementById('3').addEventListener(function (e) {
    try {
        this.innerText = String(eval(a.innerText));
        this.style.color = '#0f0'
    } catch (err) {
        this.innerText = err.message;
        this.style.color = '#f00'
    }
}.bind(document.getElementById('2')))
