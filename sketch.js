var cities;
var city;
var today;


function setup() {

  cities = createSelect();
  cities.option('New York,NY');
  cities.option('Miami, FL');
  cities.option('Los Angeles, CA');
  //Change these cities and/or add your own

  cities.changed(loadCity);
  loadCity();

  createCanvas(400,400);

}

function draw() {



  if(city){ //Your drawing should go inside this if statement

//change background based on temperature
    if (city.main.temp <30){
      background("#F2F2F2");
    }else if (city.main.temp>30 && city.main.temp<45){
      background("#AED6F1");
    }else if (city.main.temp>45 && city.main.temp<65){
      background ("#EDBB99");
    }else if (city.main.temp>65 && city.main.temp<100){
      background("#F1948A");
    }

//city name
    textSize(30);
    fill("#6E6E6E");
    text(city.name,10,40);
    textSize(15);

//day, time, and weather
    var today = new Date();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0]= "Sunday";
    weekday[1]= "Monday";
    weekday[2]= "Tuesday";
    weekday[3]= "Wednesday";
    weekday[4]= "Thursday";
    weekday[5]= "Friday";
    weekday[6]= "Saturday";

    var n = weekday[d.getDay()];
    var h = today.getHours();
    var mm = today.getMinutes();

    today = n+' '+h+':'+mm;

    textSize(20);
    text(today,10,65);
    text(city.weather[0].main, 10,85);

//temperature
    textSize(80);
    fill('black');
    text(int(city.main.temp), 155,180);
    textSize(15);
    text('°F',245,135);

//sunrise
  if(city.sunrise||city.sunset){
    noStroke();
    fill("#F7DC6F");
    ellipse(200,400,100,100);
  }else{
    noStroke();
    fill("#F7DC6F");
    ellipse(200,280,100,100);
    }
  }
}


//These functions below load the weather data and save it to the city variable.
//There is no need to edit these functions.
function loadCity(){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cities.value()+
   '&APPID=f02124924447c73bc1d1626b1bee5f45&units=imperial';//set units=metric if you prefer Celcius
  loadJSON(url,setCity);
}
function setCity(data){
  city = data;
}
