const axios = require('axios').default;

const getRequest = async()=>{
    try{
        const resp = await axios.get('https://animechan.vercel.app/api/random');
        console.log(resp.data);
    }catch(err){
        console.error(err);
    }
}

getRequest();