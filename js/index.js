let invoiceValue = parseFloat(prompt('Ingrese el valor de la factura en divisa'));
let quotationDay = 91.5;


function divide (value, quotation) {
    return value / quotation;
}

alert(divide(invoiceValue, quotationDay));

// objeto fecha

let day = parseInt(prompt('Ingrese dia'));
let month = parseInt(prompt('Ingrese mes'));
let year = parseInt(prompt('ingrese Año'));

function Date(day, month, year){
    this.day = day
    this.month = month
    this.year = year
}

let invoiceDate = new Date(day, month, year)
console.log(invoiceDate)

// objeto Moneda 

function Coin(exchangeRate, wholesaler){
    this.exchangeRate = exchangeRate
    this.wholesaler = wholesaler
}

let typeOfCoin = new Coin('Dolar', 'Mayorista');

