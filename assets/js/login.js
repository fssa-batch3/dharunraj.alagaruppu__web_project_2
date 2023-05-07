

// fetch("https://phonevalidation.abstractapi.com/v1/?api_key=bfd2fdb60b7748db9d84082308868ddc&phone=14152007986")
//     .then((response) => { return response.json() })
//     .then((data) => { console.log(data) })
//     .catch((error)=>{
//         console.log(error)
//     })

    function getUsers() {
//         const controller = new AbortController();
// const signal = controller.signal;

        let url="https://phonevalidation.abstractapi.com/v1/?api_key=bfd2fdb60b7748db9d84082308868ddc&phone=14152007986";
        let options={
            method:"GET" 
        }
        
// setTimeout(() => fetch, 5000);
         fetch(url,options,true)
          .then((results) => {
            return results.json();
          })
          .then((data) => {
            console.log(data);
            // return data;
            // Access your data here
          });
      }
    getUsers();
    // function httpGetAsync(url, callback) {
    //     const xmlHttp = new XMLHttpRequest();
    //     xmlHttp.onreadystatechange = function() {
    //         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
    //         callback(xmlHttp.responseText);
    //     }
    //     xmlHttp.open("GET", url, true); // true for asynchronous
    //     xmlHttp.send(null);
    // }
    // const url = "https://phonevalidation.abstractapi.com/v1/?api_key=bfd2fdb60b7748db9d84082308868ddc&phone=14152007986"
    // httpGetAsync(url)