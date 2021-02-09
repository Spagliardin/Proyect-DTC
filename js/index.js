let select = document.getElementById('selectCoin');

// get type coin and add input type number // obtener tipo de moneda y agregar al input tipo numero


let tcInvoice = document.getElementById("tc-Invoice")
tcInvoice.setAttribute('value', resultTypeCoin())


// get date invoice // obtener fecha de la factura

let date = new Date()
let day = String(date.getDay() + 1).padStart(2, '0')
let month = String(date.getMonth()).padStart(2, '0')
let year = date.getFullYear()

date = day + '/' + month + '/' + year

let todaysDate = new TodaysDate(day, month, year)

// get amount money for user and get value invoice without IVA // obtener monto factura por usuario y su valor sin IVA

const IVA21 = 21
const IVA105 = 10.5
let valueInvoice = parseInt(prompt('Ingrese monto total de la factura'))
let valueIva = parseFloat(prompt('ingrese valor IVA'))

let amountMoney = document.getElementById('value-Invoice')
amountMoney.setAttribute('value', valueInvoice)

if (valueIva == IVA21) {
    let getValueWithoutIva21 = document.getElementById('value-Without-Iva')
    getValueWithoutIva21.setAttribute('value', invoiceWithoutIva(valueInvoice, valueIva))
}

else if (valueIva == IVA105) {
    let getValueWithoutIva105 = document.getElementById('value-Without-Iva')
    getValueWithoutIva105.setAttribute('value', invoiceWithoutIva(valueInvoice, valueIva))
}

//get value invoice in coin Local // valor factura en moneda local

let getValueInvoiceMoneyLocal = document.getElementById('Value-InvoiceMoneyLocal')
getValueInvoiceMoneyLocal.setAttribute('value', valueInvoiceMoneyLocal(valueInvoice, resultTypeCoin()))

//get day amount paid // obtener dia de pago abonado 

//get amount paid // obtener monto abonado

let amountPaid = parseInt(prompt('Ingrese valor Abonado'))
let getIdAmountPaid = document.getElementById('amount-Paid')
getIdAmountPaid.setAttribute('value', amountPaid)

// get value ND // obtener valor de la nota de debito (provisorio mal resuelto)

function valueND(valueInvoiceMoneyLocal, amountPaid) {
    return amountPaid - valueInvoiceMoneyLocal
}

let ND = valueND(getValueInvoiceMoneyLocal, amountPaid)
let addND = document.createTextNode(String(ND))
let getTextND = document.getElementById('ND')
getTextND.appendChild(addND)
