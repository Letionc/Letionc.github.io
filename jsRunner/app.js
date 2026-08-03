var a = document.getElementById('1');

document.getElementById('3').addEventListener("click", function (e) {
    try {
        this.innerText = String(eval(a.value));
        this.style.color = '#396'
    } catch (err) {
        this.innerText = err.message;
        this.style.color = '#933'
    }
}.bind(document.getElementById('2')))

document.getElementById('2').addEventListener("keydown", function (e) {
	if(e.ctrlKey && e.code == "Enter"){
        try {
            this.innerText = String(eval(a.value));
            this.style.color = '#396'
        } catch (err) {
            this.innerText = err.message;
            this.style.color = '#933'
        }
    }
}.bind(document.getElementById('2')))
    