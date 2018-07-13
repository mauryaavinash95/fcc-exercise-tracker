function submitNewUser(){
  console.log("Button clicked");
  let username = document.getElementById("username").value;
  fetch("https://tart-forger.glitch.me/api/exercise/new-user", {
    method: "POST",
    mode: "cors",
    headers: {
            "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({username})
  })
  .then(res=>{
       console.log("Got response: ", res);
        document.getElementById('response').innerHTML = res;
  }
  )
  .catch(err=>{
        console.log("Got error: ", err)
        document.getElementById('response').innerHTML = err;
  }
  )
}

function submitNewExercise(){
  console.log("Exercise Button clicked");
  let userId = document.getElementById("uid").value;
  let description = document.getElementById('description').value;
  let duration = document.getElementById('dur').value;
  let date = document.getElementById('date').value;
  
  fetch("https://tart-forger.glitch.me/api/exercise/add", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({userId, description, duration, date})
  })
  .then(res=>{
       console.log("Got response: ", res);
        document.getElementById('response').innerHTML = res;
  }
  )
  .catch(err=>{
        console.log("Got error: ", err)
        document.getElementById('response').innerHTML = err;
  }
  )
}