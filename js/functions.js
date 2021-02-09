const COINS = {
    DOLAR: "dolar",
    EURO: "euro",
    REAL: "real"
};

const TYPE_COINS = {
    BILLETE: "billete",
    DIVISA: "divisa"
};

function divide(value, quotation) {
    return value / quotation;
}

function typeDivisaDolar() {
    type = prompt('Es Billete o Divisa?')
    while (type == null || type == '' || type.toLowerCase().trim() != 'billete' && type.toLowerCase().trim() != 'divisa') {
        type = prompt('Es Billete o Divisa?')
    }
    if (type.toUpperCase().trim() == 'DIVISA') {
        return dolar.dolarDivisa
    }
    else {
        return dolar.dolarBillete
    }
}

function typeDivisaEuro() {
    type = prompt('Es Billete o Divisa?')
    while (type == null || type == '' || type.toLowerCase().trim() != 'billete' && type.toLowerCase().trim() != 'divisa') {
        type = prompt('Es Billete o Divisa?')
    }
    if (type.toUpperCase().trim() == 'DIVISA') {
        return euro.euroDivisa
    }
    else {
        return euro.euroBillete
    }
}

function resultTypeCoin() {
    var selectTypeCoin;
    while (!isValidCoin(selectTypeCoin)) {
        selectTypeCoin = prompt('favor de elegir un tipo de moneda');
    }
    selectTypeCoin = selectTypeCoin.toLowerCase;

    switch (selectTypeCoin) {
        case DOLAR:
            return new Dolar(87.91, 92.75);;
        case EURO:
            return new Euro(105.28, 109.25);;
        // Te olvidaste el real ;)
        case REAL:
            return null;

    }
}

function isValidCoin(coin) {
    return Object.values(COINS).includes(coin);
}

function invoiceWithoutIva(valueInvoice, iva) {
    return valueInvoice * [(100 - iva) / 100]
}

function valueInvoiceMoneyLocal(valueInvoice, tc) {
    return valueInvoice * tc
}
