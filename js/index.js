let invoiceValue = parseFloat(prompt('Ingrese el valor de la factura'));
let quotationDay = 91.5;


function divide (value, quotation) {
    return value / quotation;
}

alert(divide(invoiceValue, quotationDay));