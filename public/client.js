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
  .then(res=>
       console.log("Got response: ", res)
  )
  .catch(err=>
        console.log("Got error: ", err)
  )
}