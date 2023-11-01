$(function () {
    $('#newsletterForm').submit(function (e) {
        e.preventDefault();

        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            birthdate: $('#birthdate').val(),
            gender: $('input[name=gender]:checked').val(),
            honorific: $('#honorific').val(),
            email: $('#email').val(),
            additionalInfo: $('#additionalInfo').val()
        };
    });
});