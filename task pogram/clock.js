function TimeIsIt(){
    let clock = new Date();

    let hour= clock.getHours();
    if(hour <10){ hour = "0"+hour}

    let mn = clock.getMinutes();
    if(mn <10){ mn = "0"+mn}

    let sec = clock.getSeconds();
    if(sec <10){ sec = "0"+sec}

    let timeIs = hour +  " : " + mn + " : " + sec;
    document.getElementById("time").innerText = timeIs;

  }
  setInterval(TimeIsIt,1000);