
var axios =require('axios');

const WEATHER_URL='http://api.openweathermap.org/data/2.5/weather?appid=3c300c8a571734d10bee3d12daafd184&units=metric';

module.exports={

    getTemp: function(location){

        var el=encodeURIComponent(location); // javascript function encoded it will remove the unusual character like ' london' there is one extra space

        var url=`${WEATHER_URL}&q=${el}`;

        return axios.get(url).then(function(res){

            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);

            }
 
 
            else{
                return res.data.main.temp;
            }
        },function(res){(res.data.message);
        })
    }
}