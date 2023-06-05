const local = document.getElementById("location");
const temp = document.getElementById('tempdisplay');
const condition = document.getElementById('condition'); //*******
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
let input = document.getElementById('searchbar');
let back = document.getElementById('back'); //******** 
let btn = document.getElementById('btn');
let snow = "url('https://previews.123rf.com/images/coleong/coleong0801/coleong080100533/2434677-stock-image-of-a-snowing-winter-at-boston-massachusetts-usa-r-n.jpg')";
let thunderstorm = "url('https://www.cdc.gov/nceh/features/lightning-safety/lightning-safety_456px.jpg?_=99662')";
let cloudy = "url('https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2021/10/1024/512/partly_sunny_nyc.jpg?ve=1&tl=1')";
let rain = "url('https://massago.ca/wp-content/uploads/2018/06/blog-post_rain.jpg')";
let clear = "url('https://wallpaperset.com/w/full/9/c/e/483781.jpg')";
let drizzle = "url('https://media.istockphoto.com/id/982222848/photo/view-of-the-street-surface-during-rain.jpg?b=1&s=170667a&w=0&k=20&c=gvxWf5C1QEKpzuhGIRdOT50Hy2HYW1msTDXg3gPCTEw=')";
let fog = "url('https://wpcdn.us-east-1.vip.tn-cloud.net/www.wmdt.com/content/uploads/2021/01/fog-1.jpg')"; 

btn.addEventListener("click", function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=b414df3e46e184dd17ad397ad598f432`
    )
      .then((response) => response.json())
      .then(data)
      .catch((err) => alert("Please Enter Correct City Name"));
  });

  const data = (weather) => {
    temp.textContent = `${Math.floor(weather.main.temp)}°F`;
    condition.textContent = `${weather.weather[0].description}`;
    local.textContent = `${weather.name}, ${weather.sys.country}`;
    humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    wind.textContent = `Wind Speed: ${Math.round(weather.wind.speed)}mph ${windDirection(weather)}`;
     
    let x = weather.weather[0].id;
    if (x >= 200 && x < 300)
     {back.style.backgroundImage = thunderstorm}
        
        else if(x >= 300 && x < 400)
         {back.style.backgroundImage = drizzle}

        else if (x >= 500 && x < 600)
         {back.style.backgroundImage = rain}
        
        else if(x >= 600 && x < 700)
         {back.style.backgroundImage = snow}
        
        else if(x >= 700 && x < 799)
         {back.style.backgroundImage = fog}
        
        else if(x == 800)
         {back.style.backgroundImage = clear}

         else if(x > 800)
         {back.style.backgroundImage = cloudy}
    }
        
        
  

function windDirection(weather){
    let winddeg = weather.wind.deg
    let direction = ''

    if (winddeg > 0 && winddeg < 91){
        direction = `N`
    } 
    else if (winddeg > 90 && winddeg < 181){
        direction = `E`
    } 
    else if (winddeg > 180 && winddeg< 271){
        direction = `S`
    } 
    else {
        direction = `W`
    } 
    return direction
};
    



