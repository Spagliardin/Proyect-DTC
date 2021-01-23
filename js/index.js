let invoiceValue = parseInt(prompt('Ingrese el valor de la factura'));

let quotationDay = 91.5;


function divide (value, quotation) {
    return value / quotation;
}

console.log(divide(invoiceValue, quotationDay));