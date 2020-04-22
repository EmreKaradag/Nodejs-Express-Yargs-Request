var weather = require('./weather');
var location = require('./location');
var argv = require('yargs')
  .option('location',{
   alias : 'l',
    demand : false,
    describe : 'Hava durumu için lokasyon bilgisi',
    type : 'string'
})
  .help('help')
  .argv;


if (typeof argv.l === 'string' && argv.l.length > 0){
  console.log("Lokasyon Bilgisi Girildi...");
  weather(argv.l,function (currentWeather) {
    console.log(currentWeather);
  })
}else{
console.log("Lokasyon Bilgisi Girilmedi. Tahmin Ediliyor...");
  location(function (location) {
   if (!location){
       console.log("Lokasyon Bilgisi Alınamadı...")
     return;
   }else{

     weather(location.city,function (currentWeather) {
       console.log(currentWeather);
     });

   }
 })

}
