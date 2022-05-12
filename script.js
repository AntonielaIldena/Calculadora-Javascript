const el = document.querySelector("#text");
const text = "Calculadora Javascript"
const interval = 300;

function showText(el, text, interval) {
    
  const char = text.split("").reverse();

  const typer = setInterval(() => {

    if(!char.length) {
        return clearInterval(typer);
    }

    const next = char.pop();

    el.innerHTML += next;

  }, interval);

}

showText(el, text, interval);



function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1;
}