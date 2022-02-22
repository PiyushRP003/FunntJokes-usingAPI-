
 const jokes = document.querySelector("#joke");
 const jokeBtn = document.querySelector("#jokebtn");




const CallingJokes = ()=>{

    const setHeader = {
        headers:{
            Accept : "application/json"
        }
    }


      fetch("https://icanhazdadjoke.com",setHeader)
      .then((res)=>res.json())
      .then((data)=>{
        jokes.innerHTML = data.joke;
      })
      .catch((err)=>{
           console.log(err);
      })
}

 jokeBtn.addEventListener("click" , CallingJokes);
 CallingJokes();