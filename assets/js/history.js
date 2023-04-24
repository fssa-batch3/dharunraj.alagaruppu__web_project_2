let axios=require('axios');
const options = {
  method: 'GET',
  url: 'https://api.sandbox.co.in/bank/CNRB0000973',
// `../${variable}`
  headers: {accept: 'application/json', 'x-api-version': '1.0'}
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    // console.log(response.data.BRANCH)
  })
  .catch(function (error) {
    console.error(error);
  });