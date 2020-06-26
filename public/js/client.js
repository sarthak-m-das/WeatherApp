const form=document.querySelector("#f")
const search=document.querySelector('.sr')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const address=search.value
    const url="http://localhost:3000/weather?address="+address

    document.querySelector("#r1").innerHTML="Result:"
    document.querySelector("#r2").innerHTML="Loading..."

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            const {error,address,forcast,temp}=data;
            if(error)
            document.querySelector("#r2").innerHTML=error
            else
            document.querySelector("#r2").innerHTML="Forecast of "+address+" is "+forcast+" .Expected temperature is "+temp+".";
        })
    })
})