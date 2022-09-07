import axios from "axios";

const getData = async() => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return response;
    }
    catch(error){
        console.log(error)
    }
}
export default getData();