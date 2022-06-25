function getValue(id) {
    let num = document.getElementById(id).value;
    num = Number(num);
    return num;
}

function calcSumAddition() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = num1 + num2;
    document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function calcSumSubtraction() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = num1 - num2;
    document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function calcSumMultiplication() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = num1 * num2;
    document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function calcSumDivision() {
    const num1 = getValue('number1');
    const num2 = getValue('number2');
    result = num1 / num2;
    document.getElementById('out').innerHTML = 'Результат: ' + result;
    if (num2 === 0) {
        document.getElementById('out').innerHTML = 'Результат: На ноль делить нельзя!';
        return;
    }
}