

// import {axios} from './axios.js';
// let axios = require('axios');
// function ifsc_api(ifsc_branch) {

//     const options = {
//         method: 'GET',
//         url: `https://api.sandbox.co.in/bank/${ifsc_branch}`, //xml--><?xml><?brach>Kallakurichi</branch></xml> & JSON[{}]  
//         // `../${ifsc_branch}`
//         headers: { accept: 'application/json', 'x-api-version': '1.0' }
//     };
//     axios
//         .request(options)
//         .then(function (response) {
//             console.log(response.data.BRANCH);
//             // return response.data.BRANCH;
//             // console.log(response.data.BRANC4H)
//         })
//         .catch(function (error) {
//             console.error(error);
//         });

// }
// ifsc_api("CNRB0000973");




// function getUsers() {
//   fetch("https://api.sandbox.co.in/bank")
//     .then((results) => {
//       return results.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // return data;
//       // Access your data here
//     });
// }
// getUsers();