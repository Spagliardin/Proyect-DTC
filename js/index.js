$('#selectCoin').change(setValueCoin);

let whiteMode = false;

$('#toggle').click(function() {
    let checked = $(this).is(':checked');
    if(checked){
        whiteMode = true;
        $('body').css('background-color', 'white');
        $('#spanToggle').text('Black')
        $('#spanToggle').css('color', 'black');
    }
    else{
        whiteMode = false;
        $('body').css('background-color', 'black');
        $('#spanToggle').text('White')
        $('#spanToggle').css('color', 'white');  
    }
    localStorage.setItem('whiteMode', whiteMode);

});

window.onstorage = () => {
    console.log(JSON.parse(window.localStorage.getItem('whiteMode')))
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



$('#dateInvoice').change(() => {
    let valueDateUser = $('#dateInvoice').val()
        $.ajax({
            url: './usd_of.json',
            type: 'GET',
            dataType: 'json',
        })
        .done(function(resultado){
            function getTcInvoicedForDate(){
                for(let i = 0; i < resultado.length; i++){
                   
                    if(resultado[i].d == valueDateUser){
                        return resultado[i].v
                    }                          
                }
            }

            let tcInvoicedForDate = getTcInvoicedForDate();
            let valueCoin = getValueCoin(tcInvoicedForDate, 180, 210);
            setValueCoin(valueCoin);
            setValueInvoiceInPesos(valueCoin);
            $('#value-Invoice').change(setValueInvoiceInPesos);

        })
        .fail(function(xhr, status, error){
            console.log(xhr)
            console.log(status)
            console.log(error)
        })    
})


$('#datePay').change(() => {
    let valueDateUser = $('#datePay').val()
        $.ajax({
            url: './usd_of.json',
            type: 'GET',
            dataType: 'json',
        })
        .done(function(resultado){            
            function getTcInvoicedForDate(){
                for(let i = 0; i < resultado.length; i++){
                   
                    if(resultado[i].d == valueDateUser){
                        return resultado[i].v
                    }                          
                }
            }

            let tcDatePayForUser = getTcInvoicedForDate();
            let valueCoin = getValueCoin(tcDatePayForUser, 180, 210);

            $('#valueCoinPay').val(valueCoin);
            setAmountPay(valueCoin);
        })
        .fail(function(xhr, status, error){
            console.log(xhr)
            console.log(status)
            console.log(error)
        })    
})

$('#amount-Paid').change( () => {
    let valuePay = $('#value-Pay').val();
    let userAmountPaid = $('#amount-Paid').val();
    let valueInNd = valuePay - userAmountPaid
    $('#ND').text('$' + valueInNd).css({'font-size': '50px', 'color': 'red'});
    $('#ND').fadeIn('slow')
});


