// Client side JS - run in browser

// Fetch the broadcast info
// fetch data from this url and then run this function (callback)
const weatherForm = document.querySelector('form');
// 2 arguments in eventListener 1. What are we listening for 2. callback function which runs every time the event ocures (everytime the form is submitted)
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })
})