let invoiceValue = parseFloat(prompt('Ingrese el valor de la factura'));
let quotationDay = 91.5;  // Este valor lo dará banco nacion

let resultsDivicion = divide(invoiceValue, quotationDay)

alert(resultsDivicion);

console.log(resultsDivicion.toString().length);

let day = parseInt(prompt('Ingrese el Dia de la fecha'));
let month = parseInt(prompt('ingrese el Mes de la fecha'));
let year = parseInt(prompt('Ingrese el año de la fecha'));

let typeCoin = ['Dolar', 'Euro', 'Real'];

//Objet Dolar

function Dolar(dolarDivisa, dolarBillete){
    this.dolarDivisa = dolarDivisa;
    this.dolarBillete = dolarBillete;
}
let dolar = new Dolar(quotationDay,88);
console.log(dolar)

//objeto Euro

function Euro(euroDivisa, euroBillete){
    this.euroDivisa = euroDivisa;
    this.euroBillete = euroBillete;
}
let euro = new Euro(70,45);
console.log(euro)
// objeto fecha

function Date(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
}
//objet invoice - Factura

function Invoice(dayInvoice, monthInvoice, yearInvoice, amountMoney, typeCoin){
    this.date = new Date(dayInvoice, monthInvoice, yearInvoice);
    this.typeCoin = typeCoin
    this.amountMoney = amountMoney;
}
let date = new Date(day, month, year)
console.log(date);
let invoice = new Invoice(day, month, year, '$43000' ,typeCoin[1]);
console.log(invoice);

