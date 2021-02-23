function setValueCoin(){ 
    // Me traigo el valor del tipo de cambio
    let valueCoin = getValueCoin()
    // Tomo el elemento tipo de cambio de factura y le agrego el atributo valor del objeto
   document.getElementById('tc-Invoice').setAttribute('value', valueCoin)
}

function getValueCoin(){
    // Uso de objeto para darle valor literal al tipo de cambio
    let valueCoin = new TypeCoin(90, 100, 1220)
    // Me traigo el texto del select
    let typeOfCoin = document.getElementById('selectCoin');
    typeOfCoin = typeOfCoin.options[typeOfCoin.selectedIndex].text;
    // Valído el tipo de string que es el Select
        if (typeOfCoin == 'Dolar'){
            typeOfCoin = valueCoin.dolar
        }
        else if(typeOfCoin == 'Euro'){
            typeOfCoin = valueCoin.euro
        }
        else if(typeOfCoin == 'Real'){
            typeOfCoin = valueCoin.real
        }
    return typeOfCoin
}

function setValueInvoiceInPesos (){
    let valueInvoice = document.getElementById('value-Invoice');
    let userValueInvoice = valueInvoice.value;

    let valueCoin = getValueCoin();

    let resultInvoicedInPesos = getResultInvoicedInPesos(valueCoin, userValueInvoice)

    document.getElementById('invoice-Pesos').setAttribute('value', resultInvoicedInPesos)
}

function getResultInvoicedInPesos(valueInvoice, valueCoin){
    return valueInvoice * valueCoin
}

function setAmountPay(){
    let valueCoinPay = document.getElementById('value-Coin-Pay').value
    let valueInvoice = document.getElementById('value-Invoice');
    let userValueInvoice = valueInvoice.value;
   
    let valueInvoicePay = getResultInvoicedInPesos(userValueInvoice, valueCoinPay)

    document.getElementById('value-Pay').setAttribute('value', valueInvoicePay)
}

function ndGenerate (){
    let valuePayInvoice = document.getElementById('value-Pay').value;
    let amountPaid = document.getElementById('amount-Paid')
    let userAmountPaid = amountPaid.value;

    let resultNd = deduct(valuePayInvoice, userAmountPaid)

    let spancontent = document.createTextNode(resultNd)

    let textND = document.getElementById('ND').appendChild(spancontent)
}

function deduct (valuePayInvoice, userAmountPaid){
    return valuePayInvoice - userAmountPaid
}