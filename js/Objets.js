// objet Type Coin

function TypeCoin (dolar, euro, real){
    this.dolar = dolar
    this.euro = euro
    this.real= real
}


//Objet Dolar

function Dolar(dolarDivisa, dolarBillete){
    this.dolarDivisa = dolarDivisa;
    this.dolarBillete = dolarBillete;
}

//objeto Euro

function Euro(euroDivisa, euroBillete){
    this.euroDivisa = euroDivisa;
    this.euroBillete = euroBillete;
}

//objet invoice - Factura

function Invoice(dayInvoice, monthInvoice, yearInvoice, amountMoney, typeCoin){
    this.date = new Date(dayInvoice, monthInvoice, yearInvoice);
    this.typeCoin = typeCoin
    this.amountMoney = amountMoney;
}
