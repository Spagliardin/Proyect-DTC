function setValueCoin(){ 
    // Me traigo el valor del tipo de cambio
    let valueCoin = getValueCoin()
    // Tomo el elemento tipo de cambio de factura y le agrego el atributo valor del objeto
    $('#tc-Invoice').val(valueCoin)
}

function getValueCoin(){
    // Uso de objeto para darle valor literal al tipo de cambio
    let valueCoin = new TypeCoin(90, 100, 1220)
    // Me traigo el texto del select
    
    let typeOfCoin = $('#selectCoin option:selected').val().toUpperCase()

    // Valído el tipo de string que es el Select
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


function setValueInvoiceInPesos (){

    let userValueInvoice =  $('#value-Invoice').val();

    let valueCoin = getValueCoin();

    let resultInvoicedInPesos = getInvoicedResultInPesos(valueCoin, userValueInvoice)

    $('#invoice-Pesos').val(resultInvoicedInPesos)
}

function getInvoicedResultInPesos(valueInvoice, valueCoin){
    return valueInvoice * valueCoin
}

function setAmountPay(){
    let valueCoinPay = $('#value-Coin-Pay').val()
    let userValueInvoice = $('#value-Invoice').val();
    
   
    let valueInvoicePay = getInvoicedResultInPesos(userValueInvoice, valueCoinPay)

    $('#value-Pay').val(valueInvoicePay)
}

function ndGenerate (){
    let valuePayInvoice = $('#value-Pay').val();
    let userAmountPaid = $('#amount-Paid').val()
    

    let resultNd = deduct(valuePayInvoice, userAmountPaid)

    let textND = $('#ND').text(resultNd)
}

function deduct (valuePayInvoice, userAmountPaid){
    return valuePayInvoice - userAmountPaid
}

//Obtener Fecha puesta por el usuario
function getDate(e){
    let date = moment(e).format("DD-MM-YYYY");
    return date
  }