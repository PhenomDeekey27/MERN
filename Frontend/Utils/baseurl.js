import Axios from 'axios';



const axiosBaseUrl=Axios.create({
    baseURL:"http://localhost:7000/api"
})


export default axiosBaseUrl