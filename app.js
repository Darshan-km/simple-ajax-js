import myHTTP from './lib.js';
const http = new myHTTP();
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const value = document.getElementById("number").value;
  if (value) {
    http.get(`http://api.icndb.com/jokes/random/${value}`, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        const responseData = JSON.parse(response);
        let output = "";
        if (responseData.type === "success") {
          responseData.value.forEach((jokeData) => {
            output += `<li>${jokeData.joke}</li>`;
          });
        } else {
          alert("Something went wrong please re-enter");
        }
        document.querySelector("#output ul").innerHTML = output;
      }
    });
   
  } else {
    alert("Please enter integer from 1 to 10");
  }
  /*  else{
     const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${value}`, true);
  
    xhr.onload = function(){
      if(this.status === 200){
        const responseData = JSON.parse(this.responseText);
        let output = '';
        if(responseData.type === 'success'){
          responseData.value.forEach(jokeData => {
            output += `<li>${jokeData.joke}</li>`;
          });
        }else{
          alert('Something went wrong please re-enter');
        }
        document.querySelector('#output ul').innerHTML = output;
      }
    };
  
    xhr.send(); 

  } */

  /* // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();


    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found" */
}
