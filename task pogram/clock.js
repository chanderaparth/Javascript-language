function WhatTimeIsIt(){
    //FOR TIME
       let clock = new Date();
       let hour= clock.getHours();
       if(hour <10){ hour = "0"+hour}
       let mn = clock.getMinutes();
      if(mn <10){ mn = "0"+mn}
      let sec = clock.getSeconds();
      if(sec <10){ sec = "0"+sec}
      let timeIs = hour +  " : " + mn + " : " + sec;
      document.getElementById("time").innerText = timeIs;
    //For date
    let day = clock.getDate();
    if(day < 10){ day = "0"+day;}
    let month = (clock.getMonth()) + 1;
    if (month < 10) { month = "0"+month;}
    let year = clock.getFullYear();
    let date = day + " - " + month+ " - " + year;
    document.getElementById("date").innerText = date;
  }
  setInterval(WhatTimeIsIt,1000);