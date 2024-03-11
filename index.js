const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click',()=>{wrapper.classList.add('active'); });
loginLink.addEventListener('click',()=>{wrapper.classList.remove('active'); });




const API_KEY = 'AIzaSyBVb2HGzlXmDbn-TPxYSFsQ3nR-1w8tT0g';
const endpointUrl = `https://api.example.com/data?key=${API_KEY}`;
// Make a GET request to the API endpoint
fetch(endpointUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Process the response data
        console.log(data);
        // Do something with the data...
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    function onSignIn(googleUser) {
        // Get user profile information
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do something with the user's ID
        console.log('Name: ' + profile.getName()); // Do something with the user's name
        console.log('Image URL: ' + profile.getImageUrl()); // Do something with the user's profile image URL
        console.log('Email: ' + profile.getEmail()); // Do something with the user's email
    }