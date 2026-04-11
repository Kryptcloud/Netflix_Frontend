import axios from 'axios';

export default axios.create({
    baseURL:'http://3.15.194.21:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
