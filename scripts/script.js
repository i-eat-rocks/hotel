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
        console.log(formData);
        updateHeader(formData);
        // refresh articles
        garbage.forEach(title => {
            $(`#${title.split(' ')[0]}`).remove()
            let card = buildCard(title)
            $('#resultsList').append(card)
        });
        $('#results').css('display', 'flex');
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
function updateHeader(o) {
    let msg = "Hello, ";
    if (o.honorific) {
        msg += `${o.honorific} ${o.lastName}!`
    } else {
        msg += `${o.firstName}!`
    };
    $('#newsletterHeader').html(msg);
};

const garbage = [
"Leverage Synergistic Paradigms for Vertical Integration in the Blockchain Ecosystem",
"Maximizing Disruptive Omni-Channel Strategies for Seamless UX Transformation",
"Optimizing Quantum-Enhanced AI Algorithms to Achieve Hyperdimensional ROI",
"Revolutionize Scalable Synergy with Holistic Quantum Neural Networks",
"Harnessing Deep Learning Augmentation for Cognitive Cloud Acceleration"
];

function buildCard(title) { // cut-down version from golf
    // random dimension to minimize chance that two headlines will have the same image
    let card = `
    <div class="col-md-12 mt-3" id=${title.split(' ')[0]}>
        <div class="row g-0">
            <div class="col-md-3">
                <img class="img-fluid rounded h-100" src="https://picsum.photos/${200 + Math.floor(Math.random() * 100)}/400">
            </div>
            <div class="col-md-9">
                <div class="card w-100 h-100">
                    <div class="card-body">
                        <h5 class="title" style="color: #29bffd; font-weight: 700;">${title}</h5>
                        <p class="text-muted mt-1">If this were a real article, a short description would go here</p>
                        <button class="btn btn-secondary mb-2" disabled onclick="window.open('#','_blank')">
                            Continue Reading
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    return card;
};