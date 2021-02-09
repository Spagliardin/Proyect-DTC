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
    let typeCoin = ['DOLAR', 'EURO', 'REAL'];
    for (i = 0; i < typeCoin.length; i++) {
        let selectTypeCoin = prompt('favor de elegir un tipo de moneda');
        while (selectTypeCoin == null || selectTypeCoin == '' || selectTypeCoin.toUpperCase().trim() != 'DOLAR' && selectTypeCoin.toUpperCase().trim() != 'EURO') {
            selectTypeCoin = prompt('favor de elegir un tipo de moneda');
        }
        if (selectTypeCoin.toUpperCase().trim() == typeCoin[0]) {
            dolar = new Dolar(87.91, 92.75);
            dolar = typeDivisaDolar()
            return dolar
        }
        else if (selectTypeCoin.toUpperCase().trim() == typeCoin[1]) {
            euro = new Euro(105.28, 109.25);
            euro = typeDivisaEuro()
            return euro

        }
        else if (selectTypeCoin.toUpperCase().trim() == typeCoin[3]) {
            real = 1730
            return real
        }
    }
}

function invoiceWithoutIva(valueInvoice, iva) {
    return valueInvoice * [(100 - iva) / 100]
}

function valueInvoiceMoneyLocal(valueInvoice, tc) {
    return valueInvoice * tc
}
