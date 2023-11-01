$(function () {
    // using states json from https://gist.github.com/mshafrir/2646763
    $.getJSON('./lib/states.json', function(data) {
        $.each(data, function(abbr, stateName) {
            $('#state').append($('<option>', {
                value: abbr,
                text: stateName
            }));
        });
    });
    // TODO: add address info to form, save to cookie (check how vdub did it)
    // TODO: validate addy info if check is checked
    $('#newsletterForm').submit(function (e) {
        e.preventDefault();
        //     var formData = {
            //         firstName: $('#firstName').val(),
            //         lastName: $('#lastName').val(),
            //         birthdate: $('#birthdate').val(),
            //         gender: $('#gender').val(),
            //         honorific: $('#honorific').val(),
            //         email: $('#email').val(),
            //         additionalInfo: $('#additionalInfo').val()
            //     };
        });
        $('#receivePaperNewsletter').change(function() {
            if (this.checked) {
                $('#addressFields').show();
                toggleAddressFieldsRequired();
            } else {
                $('#addressFields').hide();
                toggleAddressFieldsRequired();
            }
        });
    function toggleAddressFieldsRequired() {
        
    }
});