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

fetch("https://api.apilayer.com/email_verification/balajihack2651@gmail.com?apikey=AQcZ7IxCjhBK10lW9u8Lx03MH378Kaci")
  .then((response) => {
  return response.json()
}
    )
  .then((data) => {
  // console.log(data)
  if(data.can_connect_smtp===true){
    console.log("valid")
  }
  else{
    console.log(" not valid")
  }
}
  )