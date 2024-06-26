const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');

function compute() {
    const input_currency = document.querySelector('#input_currency');
    const output_currency = document.querySelector('#output_currency');

    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
        .then(res => res.json())
        .then(res => {
            const new_rate = res.rates[output_currency1];
            rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
            output_amount.value = (input_amount.value * new_rate).toFixed(2);
        })
};

input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);

exchange.addEventListener('click', () => {
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value = temp;
    compute();
});

compute();

/**faqs**/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}