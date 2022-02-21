const clock = document.querySelector("h2#clock");
const famous = document.querySelector(("#famous"));

function getClock(){
    const day = new Date;
    const hours = day.getHours();
    const minutes = day.getMinutes();
    const seconds = day.getSeconds();

    clock.innerText = `${hours}`+"시 "+`${minutes}`+"분 "+`${seconds}` + "초";
}

getClock();
setInterval(getClock,1000);

function getFamous(){
    const famousSay = [{
        say:"널 사랑하지 않아", by:"어반자카파"
    },{
        say:"Marry you", by:"super junior"
    },{
        say:"평생 곁에 있을게 아이두 널 사랑하는 걸 아이두", by:"냠냠맨"
    },
    ];
    const famousSpan1 = document.querySelector("#famous p:first-child");
    const famousSpan2 = document.querySelector("#famous p:last-child");
    const famousLength = Math.floor(Math.random()*famousSay.length);
    
    famousSpan1.innerText = famousSay[famousLength].say;
    famousSpan2.innerText = famousSay[famousLength].by;    
}

getFamous();
setInterval(getFamous,2000);