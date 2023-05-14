// fetch(`https://api.sandbox.co.in/bank/${ifsc}`)
// .then((results) => results.json())

// .then((data) => {
//   if (data.BRANCH === undefined && data.BANK === undefined) {
//     alert("Enter the correct IFSC code or recheck ");
//   } else {
//     console.log(data);
//     branch = data.BRANCH;
//     bank_name = data.BANK;
//     add_local();
//   }
// });

// function emailcheck() {
//     console.log(email);

//     fetch(
//       `https://api.apilayer.com/email_verification/${email}?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci`
//     )
//       .then((response) => response.json())

//       .then((data) => {
//         if (data.can_connect_smtp === true) {
//           console.log(data);
//           phone_check(email, phone);
//         } else {
//           alert("User email id is not valid");
//         }
//       });
//   }
// function emailcheck() {

//     let email_verification = new XMLHttpRequest();

//     email_verification.open(`get`, `https://api.apilayer.com/email_verification/${email}?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci`, true);

//     email_verification.onload = function () {

//         let result = JSON.parse(email_verification.response);

//         console.log(result);

//         if (result.can_connect_smtp === true) {
//             console.log(result);
//             phone_check(email, phone);
//         } else {
//             alert("User email id is not valid");
//         }
//     };

// }

// let ifsc_compare = new XMLHttpRequest();
// ifsc_compare.onload = function () {

//     let result_ifsc = JSON.parse(ifsc_compare.response)

//     console.log(result_ifsc);

//     if (result_ifsc.BRANCH === undefined && result_ifsc.BANK === undefined) {
//         alert("Enter the correct IFSC code or recheck ");

//     } else {
//         console.log(result_ifsc);
//         branch = result_ifsc.BRANCH;
//         bank_name = result_ifsc.BANK;
//         add_local();
//     }
// }

// ifsc_compare.open("get", `https://api.sandbox.co.in/bank/${ifsc}`, true);
// ifsc_compare.send();

// let xhrReq = new XMLHttpRequest();

// xhrReq.open(`get", "https://api.sandbox.co.in/bank/${ifsc}`, true);

// xhrReq.onload = function () {

//     let resJS0N = JSON.parse(xhrReq.response);

//     console.log(resJS0N);

//     if (resJS0N.BRANCH === undefined && resJS0N.BANK === undefined) {
//               alert("Enter the correct IFSC code or recheck ");
//             } else {
//               console.log(resJS0N);
//               branch = resJS0N.BRANCH;
//               bank_name = resJS0N.BANK;
//               add_local();
//             }
// };

// let email_verification = new XMLHttpRequest();

// email_verification.open(`get`, `https://api.apilayer.com/email_verification/${email}?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci`, true);

// email_verification.onload = function () {

//     let result = JSON.parse(email_verification.response);

//     console.log(result);

//     if (result.can_connect_smtp === true) {
//         console.log(result);
//         phone_check(email, phone);
//     } else {
//         alert("User email id is not valid");
//     }
// };

// fetch(
//   `https://api.apilayer.com/number_verification/validate?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci&number=${phone}`
// )
//   .then((response) => response.json())

//   .then((data) => {
//     if (data.carrier !== "" && phone !== "") {
//       console.log("valid");
//       add_local(email, phone);
//     } else {
//       alert("Recheck your phone number");
//     }
//   });

// const number_check = new XMLHttpRequest();

// number_check.open(
//   "get",
//   `https://api.apilayer.com/number_verification/validate?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci&number=${phone}`,
//   true
// );

// number_check.onload = function () {
//   const got_number = JSON.parse(number_check.response);

//   console.log(got_number);

//   if (got_number.carrier !== "" && phone !== "") {
//     console.log("valid");
//     add_local(email, phone);
//   } else {
//     alert("Recheck your phone number");
//   }
// };
