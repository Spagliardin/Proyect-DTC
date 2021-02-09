//Objet Dolar

function Dolar(dolarDivisa, dolarBillete) {
    this.dolarDivisa = dolarDivisa;
    this.dolarBillete = dolarBillete;
}

//objeto Euro

function Euro(euroDivisa, euroBillete) {
    this.euroDivisa = euroDivisa;
    this.euroBillete = euroBillete;
}

// objeto today`s Date - fecha de hoy

function TodaysDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
}
//objet invoice - Factura

function Invoice(dayInvoice, monthInvoice, yearInvoice, amountMoney, typeCoin) {
    this.date = new Date(dayInvoice, monthInvoice, yearInvoice);
    this.typeCoin = typeCoin
    this.amountMoney = amountMoney;
}
