import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b443a4daee8b47df84cd1510e01ca6cc'
    }
});