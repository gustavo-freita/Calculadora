const operadores = document.querySelector('.ope');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let ope of operadores) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == "limpar") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value == "deletar") {
            input = input.slice(0, -1);
            display_input.innerHTML = input;
        } else if (value == "=") {
            let result = eval(input);

            display_output.innerHTML = result;
        } else if (value == "parenteses") {
            if (
                input.indexOf("(") == -1 || 
                input.indexOf("(") != -1 && 
                input.indexOf(")") != -1 && 
                input.lastIndexOf("(") < input.lastIndexOf(")")
            ) {
                input += "(";
            } else if (
                input.indexOf("(") != -1 && 
                input.indexOf(")") == -1 ||
                input.indexOf("(") != -1 &&
                input.indexOf(")") != -1 &&
                input.lastIndexOf("(") > input.lastIndexOf(")")
            ) {
                input -= ")";
            }
        }
    })
}