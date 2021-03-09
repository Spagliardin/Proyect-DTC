
// Tomar el valor de select y agregar el resultado (mediante evento) en el input tipo de cambio
$('#selectCoin').on('change', setValueCoin);

// Tomar el valor de la factura y añadir evento de calculo para valor factura en pesos

$('#value-Invoice').change(setValueInvoiceInPesos);

// Por el momento TC dia Abonado toma el valor por defecto del htm (150)

// Tomar el valor de la factura y Obtener el monto correspondiente a abonar

$('#value-Invoice').change(setAmountPay);
// Toma el valor de factura en pesos y el valor correspondiente, restalos y crea una nota de debito

$('#amount-Paid').change( () => {
    valueInNd = ndGenerate()
    $('#ND').text(valueInNd.text())
    $('#ND').fadeIn('slow')
});

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
    console.log(getDate($('#dateInvoice')))
})


$('#boton').click( () => {
    $.ajax({
        url: './usd_of.json',
        type: 'GET',
        dataType: 'json',
    })
    .done(function(resultado){
        console.log(resultado[0].d)
        console.log(resultado[0].v)

        for(let i = 0; i < resultado.length; i++){
            console.log(resultado[i].d)
            if(valueDate == resultado[i].d){
                console.log( resultado[i].v)
            }

        }
        

    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})


