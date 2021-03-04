
// Tomar el valor de select y agregar el resultado (mediante evento) en el input tipo de cambio
$('#selectCoin').change(setValueCoin)

// Tomar el valor de la factura y añadir evento de calculo para valor factura en pesos

$('#value-Invoice').change(setValueInvoiceInPesos)

// Por el momento TC dia Abonado toma el valor por defecto del htm (150)

// Tomar el valor de la factura y Obtener el monto correspondiente a abonar

$('#value-Invoice').change(setAmountPay)
// Toma el valor de factura en pesos y el valor correspondiente, restalos y crea una nota de debito

$('#amount-Paid').change(ndGenerate)

let dateInvoice = $('#dateInvoice').val()
let UsertDateInvoice = getDate(dateInvoice)

$('#button').click(function () {
    $.ajax({
        header:{
        Authorization: 'BEARER ' + 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDYxODU5MTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzcGFnbGlhcmRpLm5AZ21haWwuY29tIn0.P7rz1ihON_42rMf_XDjCcpKx3bGTg5uOiMR18rPbySLHSvN_LiKNrfnBlltJKPTsykamGtQSOK1OEi7kXLcIeg',
        },
        url: 'https://api.estadisticasbcra.com/usd_of',
        type: 'GET',
        dataType: 'json',     
        
        


    }).done(function(resultado){
        console.log(resultado)  
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})