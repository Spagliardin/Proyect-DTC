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

