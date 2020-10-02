const button = document.getElementById('submit-button');

button.addEventListener('click', (e) => {
    const name = document.getElementById("name").value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    const success = document.getElementById('success');

    const payload = JSON.stringify({
        name,
        company,
        email,
        telephone,
        message
    });

    e.preventDefault();
    //console.log(payload);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://lj9hb9lgr0.execute-api.eu-west-2.amazonaws.com/dev/contact', true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.response);
            success.classList.remove('collapse');
        }
    }
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(payload);
});