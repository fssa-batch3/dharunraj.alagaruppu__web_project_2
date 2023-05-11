// fetch("https://api.apilayer.com/number_verification/validate?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci&number=9185449")
//   .then((response) => {
//   return response.json()
// }
//     )
//   .then((data) => {
//   // console.log(data)
//   if(data.carrier==""){
//     console.log("not valid")
//   }
//   else{
//     console.log("valid")
//   }
// }
//   )

// fetch("https://api.apilayer.com/email_verification/manidharun2204@gmail.com?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci")
//   .then((response) => {
//   return response.json()
// }
//     )
//   .then((data) => {
//   // console.log(data)
//   if(data.can_connect_smtp===true){
//     console.log(data)
//   }
//   else{
//     console.log(" not valid")
//   }
// }
//   )

// function ifsc_api(ifsc_branch) {
//   fetch(`https://api.sandbox.co.in/bank/${ifsc_branch}`)
//     .then((results) => {
//       return results.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // return data;
//       // Access your data here
//     });
// }
// ifsc_api("ABHIRAMAPURAM");