$(function () {
    // using states json from https://gist.github.com/mshafrir/2646763
    $.getJSON('./lib/states.json', function (data) {
        $.each(data, function (abbr, stateName) {
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
        // if (!validateForm(e)) { // don't proceed if validation fails
        //     return
        // };
        var formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            birthdate: $('#birthdate').val(),
            gender: $('#gender').val(),
            honorific: $('#honorific').val(),
            email: $('#email').val(),
            additionalInfo: $('#additionalInfo').val(),
            receivePaperNewsletter: $('#receivePaperNewsletter').prop('checked'),
            city: $('#city').val(),
            state: $('#state').val(),
            zip: $('#zip').val()
        };
        console.log(formData)
    });
    $('#receivePaperNewsletter').change(function () {
        if (this.checked) {
            $('#addressFields').show();
            toggleAddressFieldsRequired();
        } else {
            $('#addressFields').hide();
            toggleAddressFieldsRequired();
        };
    });
    function toggleAddressFieldsRequired() {

    };
});
function loadDefaultValues() {
    $.getJSON('./lib/default.json', function (data) {
        $.each(data, function (item, value) {
            // console.log(`${item} : ${value}`)
            $(`#${item}`).val(value);
        });
        $('#receivePaperNewsletter').prop('checked', true);
        $('#addressFields').show();
    });
};