var request = require('request');

module.exports = function (location,callback) {

 var encodedLocation = encodeURIComponent(location);

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" +encodedLocation+ ",tr&appid=9e3346845b66b308e6777aba68fc3ff4&units=metric";

  if (!location){
    return callback("Lokasyon bilgisi girilmedi...");
  }

  request({
    url : url,
    json : true
  },function (error,response,body) {
    if (error){
      callback("Hava Durumu Alınamadı!!")
    }else{
      callback(body.name + "  hava sıcaklığı :  " + body.main.temp);

    }
  });

  callback("Hava Durumu Alındı!!!")
};


