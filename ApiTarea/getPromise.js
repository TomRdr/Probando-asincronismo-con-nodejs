const axios = require('axios').default;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(resp =>{
          console.log(resp.data);
      })
      .catch(err =>{
          console.error(err);
      })