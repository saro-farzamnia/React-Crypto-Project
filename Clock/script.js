const clock = document.getElementById("clock");

setInterval(()=>{
    const realTime = new Date();
    const time = realTime.toLocaleDateString();
    clock.innerText = time
},1000)