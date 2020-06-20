const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway=document.querySelector('.giveaway')
const deadline=document.querySelector('.deadline')
const items=document.querySelectorAll('.deadline-format h4')
// console.log(giveaway)

let tempDate=new Date()
let tempYear=tempDate.getFullYear()
let tempMonth=tempDate.getMonth()
let tempDay=tempDate.getDate()

//we can set up custom future date
// let futureDate=new Date(2021,5,21,23,0,0,0) //month is coynted from 0 .formzt y/m/d/h/m/s

const futureDate=new Date(tempYear,tempMonth,tempDay+10,11,20,0)
 
const year=futureDate.getFullYear() //2020
const hours=futureDate.getHours()
const minutes=futureDate.getMinutes()

let month=futureDate.getMonth() //eg- 1
month=months[month] //eg- january
console.log(month)

const date=futureDate.getDate() //eg- 23

const weekday=weekdays[futureDate.getDay()] //eg- sunday

giveaway.textContent=`giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}`



//future time in ms
const futureTime=futureDate.getTime();


function getRemainingTime(){
  const today=new Date().getTime()
   const t=futureTime-today //subtracting UNIX time aka ms
   console.log(t/1000/60/60/24)

   const oneDay=24*60*60*1000
   const oneHour=60*60*1000
   const oneMinute=60*1000

   let days=Math.floor(t/oneDay);
   console.log(days)

  let hours = Math.floor((t % oneDay) / oneHour) //eg- 20
  //  console.log(hours) 
   let minutes=Math.floor((t%oneHour)/oneMinute) //eg-59
  //  console.log(minutes) 
  let seconds = Math.floor((t % oneMinute) / 1000) //eg-54
  // console.log(seconds)

  const values=[days,hours,minutes,seconds]

  function format(item){
    if(item<10){
      return item=`0${item}`
    }
    return item
  }

  items.forEach((item,index)=>{
    item.innerHTML=format(values[index])
  })


  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML=`<h4 class="expired"> sorry this giveaway has expired</h4>`
  }

}

//countdown
let countdown=setInterval(getRemainingTime,1000)

getRemainingTime()