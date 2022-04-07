import axios from 'axios'
export default axios.create(
    {
        baseURL: 'https://rep-powerlifting-default-rtdb.firebaseio.com/'
    }
)