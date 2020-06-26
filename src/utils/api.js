const request = require('request')

function getWeather(address,callback){
    const url ="http://api.weatherstack.com/current?access_key=a5ca3d35be99a4aa8964a19ba6899fec&query="+ address +"&units=f"

    request({url:url,json:true},function(err,response){
        try{
        if(err){
            callback({error:"Something went wrong in the request.",forecast:undefined,temp:undefined})
        }
        else if(!response.body)
            callback({error:"Something went wrong in the request.",forecast:undefined,temp:undefined})
        else
            callback({err:undefined,forecast:response.body.current.weather_descriptions,temp:response.body.current.temperature});
        }
        catch(e){
            callback({error:"Something went wrong in the request.",forecast:undefined,temp:undefined})
        }
    })
}

module.exports=getWeather
