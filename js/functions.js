function setValueCoin(valueCoin){ 
    $('#tc-Invoice').val(valueCoin)
}

function getValueCoin(valueDolar, valueEuro, valueReal){
    let valueCoin = new TypeCoin(valueDolar, valueEuro, valueReal)
    
    let typeOfCoin = $('#selectCoin option:selected').val().toUpperCase()

        if (typeOfCoin == 'DOLAR'){
            typeOfCoin = valueCoin.dolar
        }
        else if(typeOfCoin == 'EURO'){
            typeOfCoin = valueCoin.euro
        }
        else if(typeOfCoin == 'REAL'){
            typeOfCoin = valueCoin.real
        }
    return typeOfCoin
}


function setValueInvoiceInPesos (valueCoin){

    let userValueInvoice =  $('#value-Invoice').val();

    let resultInvoicedInPesos = getInvoicedResultInPesos(valueCoin, userValueInvoice)

    $('#invoice-Pesos').val(resultInvoicedInPesos)
}

function getInvoicedResultInPesos(valueInvoice, valueCoin){
    return valueInvoice * valueCoin
}

function setAmountPay(valueCoin){
    let userValueInvoice = $('#value-Invoice').val();
    let valueInvoicePay = getInvoicedResultInPesos(userValueInvoice, valueCoin);
    $('#value-Pay').val(valueInvoicePay);
}

function getValueIva(){
    let valueIva = new Iva (21, 10.5)

    let typeIva = $('#iva option:selected').val()

    if(typeIva == 21){
        typeIva = valueIva.IVA21
    }

    else if (typeIva == 105){
        typeIva = valueIva.IVA105
    }

    return typeIva
}

function getDate(e){
    let date = moment(e).format("DD-MM-YYYY");
    return date
}
