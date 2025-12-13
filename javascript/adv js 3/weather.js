// let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={d237fabe691d5e6dc1ea050590db4365}`

// upar wale ki jagah hum lat and long hatta ke ye niche wala url bhi use kr skte h jisme jiski madad se api call kr skte h 
// OneCall = Zyada bada data pack (forecast + hourly + alerts)
// Weather = Chhota data pack (sirf current weather)

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`


//USING THEN TO CLEAN RAW DATA TO REAL DATA
/*function getWeather(city) {
    let apikey = `d237fabe691d5e6dc1ea050590db4365`;
     fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
     ) 
     .then(raw => raw.json())
     .then((real) => {
        console.log(real);
        
     })
}
getWeather("delhi") */

//USING ASYNC AWAIT FOR DATA ACCEPTANCE FROM API AND MAKING IT REAL
/*async function getWeather(city) {
    try{
        let apikey = `d237fabe691d5e6dc1ea050590db4365`; //Apikey ko function ke bahar global variable bana do to bhi fetch use karega.
     let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
     ) 

     if(!raw.ok){
        throw new Error("city na mili bhaiya ya fir kachu galat hogya ")
     } //raw.ok sirf HTTP status code check karta hai (200–299 OK) “data kyu nahi aa raha” ye nahi batata —sirf itna batata hai: request fail hui ya nahi
     
     let real = await raw.json();
     console.log(real); // agar raw.ok true hai, to error throw nahi hoga aur hum JSON parse karenge.

    }
    catch(err){
        console.log(err.message);     //Agar koi error hoti hai, to wo catch block me aayegi aur hum error message print karte hain.
    }
}

getWeather("greater noida")*/

let btn = document.querySelector('#btn');
let input = document.querySelector('#city');
let Cname = document.querySelector('#city-name');
let temperature = document.querySelector('#temp');
let conditon = document.querySelector('#cond');

async function getWeather(city) {

   try {
      let apikey = `d237fabe691d5e6dc1ea050590db4365`; 
      let raw = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      )

      if (!raw.ok) {
         throw new Error("city na mili bhaiya ya fir kachu galat hogya ")
      }

      let real = await raw.json();
      
      result.innerHTML = ``

   }
   catch (err) {
      console.log(err.message);
   }
}

btn.addEventListener(`click`, function () {
   let city = input.value;
   getWeather(city);
});





