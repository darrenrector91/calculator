console.log('client is working!');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded!');
    getHistory();
    $('#submitButton').on('click', submitClick);
}

function submitClick() {
    var entry = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val(),
        operation: $('#operation').val()
    };

    $.ajax({
        method: 'POST',
        url: '/math',
        data: entry,
        success: function (response) {
            console.log('POST response:', response);
            $('#firstNumber').val('');
            $('#secondNumber').val('');
            getHistory();
        }
    });
}

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/math',
        success: successCallback
    });
}

function successCallback(response) {
    console.log('GET response:', response);
    $('#history').empty();
    for (var i = 0; i < response.length; i++) {
        $('#history').prepend('<p>' + response[i].firstNumber + ' ' + response[i].operator + ' ' + response[i].secondNumber + ' = ' + response[i].result + '</p>');
    }
};