import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-greygoat93-default-rtdb.firebaseio.com/'
})

export default instance;