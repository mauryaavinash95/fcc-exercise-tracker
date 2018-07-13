function submitNewUser(){
  console.log("Button clicked");
  let username = document.getElementById("username").value;
  fetch("https://tart-forger.glitch.me/api/exercise/new-user", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({username: "u"})
  })
  .then(res=>
       console.log("Got response: ", res)
  )
  .catch(err=>
        console.log("Got error: ", err)
  )
}