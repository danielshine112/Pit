import axios from "axios";

export const getdata = async (callback) => {
    try {
        const response = await axios.get('/gettopcryptos');
        callback(response.data)
    } catch(e) {
        console.log(e)
    }
  }