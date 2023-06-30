let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

firstFrame = ()=>{
    document.querySelectorAll('img')[4].src = "rahul.jpg"
    document.querySelectorAll('img')[5].src = "akshay.jpg"
    document.querySelectorAll('img')[6].src = "anjali.jpg"


    document.querySelectorAll('pre')[2].textContent = "Co-Founder \n Rahul Singh Rajput"
    document.querySelectorAll('pre')[1].textContent = "Founder & C.E.O. \n Akshay Sinha"
    document.querySelectorAll('pre')[0].textContent = "Co-Founder \n Anjali Singh"
    
}



secondframe = ()=> {
    document.querySelectorAll('img')[5].src = "anjali.jpg"
    document.querySelectorAll('img')[6].src = "rahul.jpg"
    document.querySelectorAll('img')[4].src = "akshay.jpg"


    document.querySelectorAll('pre')[2].textContent = "Founder & C.E.O. \n Akshay Sinha"
    document.querySelectorAll('pre')[1].textContent = "Co-Founder \n Anjali Singh"
    document.querySelectorAll('pre')[0].textContent = "Co-Founder \n Rahul Singh Rajput"

}




thirdframe = ()=> {
    document.querySelectorAll('img')[6].src = "akshay.jpg"
    document.querySelectorAll('img')[4].src = "anjali.jpg"
    document.querySelectorAll('img')[5].src = "rahul.jpg"


    document.querySelectorAll('pre')[2].textContent = "Co-Founder \n Anjali Singh"
    document.querySelectorAll('pre')[1].textContent = "Co-Founder \n Rahul Singh Rajput"
    document.querySelectorAll('pre')[0].textContent = "Founder & C.E.O. \n Akshay Sinha"

}



FinalLoop = ()=>{
    setTimeout(firstFrame,0000);
    setTimeout(secondframe,4000);
    setTimeout(thirdframe,8000);
}

setTimeout(FinalLoop,0000);

setInterval(FinalLoop , 12000);


