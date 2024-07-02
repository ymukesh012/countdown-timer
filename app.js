const endDate = "10 July 2024 05:30 PM";

let endDateElement=document.getElementById("end-date");
endDateElement.innerText=endDate;


const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff =(end.getTime()-now.getTime())/1000; /* to convert millisecond into second*/
console.log(diff);


if (diff<0) return; // will stop time when 0,it will no display minus time

// convert into days
inputs[0].value = Math.floor(diff/3600/24);
//convert into hours
inputs[1].value = Math.floor(diff/3600) % 24;
//convert into minutes
inputs[2].value = Math.floor(diff/60) % 60;
//convert into seconds
inputs[3].value = Math.floor(diff) % 60;
}

//initial call
clock()


/** 
 1 day=24hrs
 1 hr =60 mins
 60 min =3600 sec
**/

setInterval(()=>{
        clock()
},
    1000)

    