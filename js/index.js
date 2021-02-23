
// Tomar el valor de select y agregar el resultado (mediante evento) en el input tipo de cambio
let typeCoin = document.getElementById('selectCoin').addEventListener('change', setValueCoin)

// Tomar el valor de la factura y añadir evento de calculo para valor factura en pesos

let valueInvoice = document.getElementById('value-Invoice').addEventListener('change', setValueInvoiceInPesos)

// Por el momento TC dia Abonado toma el valor por defecto del htm (150)

// Tomar el valor de la factura y Obtener el monto correspondiente a abonar

let amountPay = document.getElementById('value-Invoice').addEventListener('change', setAmountPay)

// Toma el valor de factura en pesos y el valor correspondiente, restalos y crea una nota de debito

let valuePayInvoice = document.getElementById('amount-Paid').addEventListener('change', ndGenerate)

