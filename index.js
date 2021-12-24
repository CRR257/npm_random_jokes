function getRandomJoke() {
    const request = require('request');
    console.log('Hi stranger, I hope that you like it ^^ \n')
    request('https://geek-jokes.sameerkumar.website/api', function (error, response, body) {
        if (!error & response.statusCode === 200) {
            console.log('\x1b[33m%s\x1b[0m', body);
            console.log('Happy coding!');
        } else if (response.statusCode !== 200) {
            console.log('Sorry, it has been an error');
        }
    })
}
module.exports = getRandomJoke();
