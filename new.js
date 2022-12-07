function search(){
    let place = placeVal.value;
//  console.log(place);
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=8ac5c4d57ba6a4b3dfcf622700447b1e`)
.then((result)=>{
    result.json()
    .then((data)=>{
        // console.log(data);
        if(result.status>=200 && result.status<300){
            displayData(data)
        } else{
            out2.innerHTML=`invalid entry`;
             out1.innerHTML=``;
        }
        
    })
}
)
}
function displayData(data){
    htmlData_one = ``;
    htmlData_two = ``;
   
    let country= data.sys['country'];
    // console.log(country);
    let humidity = data.main['humidity'];
    // console.log(humidity);
    let wind= data.wind['speed'];
    // console.log(wind);
    let pressure = data.main['pressure']
    // console.log(pressure);
    let temp= data.main['temp'];
    // console.log(temp);
    let feels= data.main['feels_like'];
    // console.log(feels);
    let time = data.timezone;
    // console.log(time);
    let name= data.name;
    // console.log(name);
    // console.log( new Date(data.dt*1000+(data.timezone*1000)));
    // console.log( new Date(data.dt*1000-(data.timezone*1000)));
    var today = new Date();
    console.log(today);

    // stdTime= new Date((data.dt - data.timezone) * 1000);

    // stdTime=new Date(data.dt*1000+(data.timezone*1000));
    // console.log(stdTime)
    // const dt = new Date(data.dt * 1000);
    // console.log(dt);
    // const sunrise = new Date(data.sys.sunrise * 1000);
    // console.log(sunrise);
    // const sunset = new Date(data.sys.sunset * 1000);
    // console.log(sunset);

    htmlData_two=` <div class="card" style="backgroundcolor:grey">
                    
                        <div class="card-body">
                            <h5 class="card-title text-light">Weather Details</h5>
            
                         </div >
                             <ul class="list-group list-group-flush">
                                <li class="list-group-item text-light">country</li>
                                <li class="list-group-item">${country}</li>
                                <li class="list-group-item text-light">humidity</li>
                                <li class="list-group-item">${humidity}</li>
                                <li class="list-group-item text-light">wind</li>
                                <li class="list-group-item">${wind}</li>
                                <li class="list-group-item text-light">pressure</li>
                                <li class="list-group-item">${pressure}</li>

                             </ul>
        

                </div>`;
                htmlData_one =`<div class=list>
                        <ul class="text-dark ">
                            <li>${temp}</li>
                            <li>feels like ${feels}</li>
                            <li>${name}</li>
                            <li>${today}</li>
                        </ul>
                    </div>`
                out2.innerHTML = htmlData_two;
                out1.innerHTML = htmlData_one;
}
