const request = require('ajax-request');

const baseURL = process.env.REACT_APP_BACKEND_BASEURL || 'http://me.mydomain.com:5000';

const options = {
    url: `${baseURL}/auth/google`,
    json: true,
};
const login = () => {
    request(options, (err, res, body) => {
        console.log('body', body);
    });
};

export default login;
