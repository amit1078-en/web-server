console.log('Client side javascript file is loaded!')




const weatherForm  = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageSecond = document.querySelector('#message-2');

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const location = search.value;
    messageOne.textContent='loading...';
    messageSecond.textContent="";
    if(location=="")
    {

        alert("Please Enter a Valid Location");
        return ;
    }
    console.log(location);

    fetch('https://web-server-swxt.onrender.com/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent=data.error;
            console.log(data.error)
        } else {
            console.log(data.location)
            messageOne.textContent=data.location;
            messageSecond.textContent=data.forecast;
            console.log(data.forecast)
        }
    })
})


})

