
// Tomar el valor de select y agregar el resultado (mediante evento) en el input tipo de cambio
$('#selectCoin').change(setValueCoin)

// Tomar el valor de la factura y añadir evento de calculo para valor factura en pesos

$('#value-Invoice').change(setValueInvoiceInPesos)

// Por el momento TC dia Abonado toma el valor por defecto del htm (150)

// Tomar el valor de la factura y Obtener el monto correspondiente a abonar

$('#value-Invoice').change(setAmountPay)
// Toma el valor de factura en pesos y el valor correspondiente, restalos y crea una nota de debito

$('#amount-Paid').change(ndGenerate)

