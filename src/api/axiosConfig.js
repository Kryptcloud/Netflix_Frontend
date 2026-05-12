import axios from 'axios';

export default axios.create({
    baseURL:'http://Netflix-ALB-2145080738.eu-north-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
