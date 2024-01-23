//Question.1.
document.getElementById('remove').addEventListener('click',function(){
document.getElementById('colorSelect').removeChild(document.getElementById('colorSelect').firstElementChild)
})

//Question.2.
function changeColor(){
    let clickColor=document.getElementById('colorSelectChange').value;
    document.getElementById('textColor').style.color=clickColor; 
} 

//Question.3.
function getNames() {
    var firstName = document.getElementById("form1").elements["fname"].value;
    var lastName = document.getElementById("form1").elements["lname"].value;
    
    return {
      firstName: firstName,
      lastName: lastName
    };
  }

//Question.4.
function findSphereVolume(){
    let radius=document.getElementById('radius').value;
    if(radius<=0){
        alert("Please Provide a valid number");
         volume="";
    }else {
        let volume= (4/3)*Math.PI*radius**3;
        document.getElementById('volume').value=volume;
    } }

//Question.5.
document.getElementById("showImage").onclick = showImage;

function showImage() {
  var images = [
    {link: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    width: "240",
    height: "160"},
    {link: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    width: "320",
    height: "195"},
    {link: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
    width: "500",
    height: "343"}
];
  
  var random = Math.floor(Math.random() * images.length);
  
  var image = document.createElement("img");
  image.src = images[random].link;
  image.width = images[random].width;
  image.height = images[random].height;
  
  var elImgs = document.getElementsByTagName("img");
  
  if (elImgs.length > 0) {
    document.body.replaceChild(image, elImgs[0]);
  } else {
    document.body.appendChild(image);
  }
}

//Question.6.
function redirectSite(){
    window.open('https://www.amazon.in/');
  }

//Question.7.
function diffURL(){
    window.location.href='https://www.amazon.in';
 }

 //Question.8.
function displayDetails() {
    let url = window.location.href;
    let parser = document.createElement('a');
    parser.href = url;

    let protocol = parser.protocol;
    let hostname = parser.hostname;
    let query = parser.search;

    let details = "Protocol: " + protocol + "<br>";
    details += "Hostname: " + hostname + "<br>";
    details += "Query Parameters: " + query;

    document.getElementById("details").innerHTML = details;
}

  //Question.9.
  function reloadPage(){
    location.reload();
  }

  //Question.10.
  let getWidthHeight = function () {
    document.getElementById("width").innerHTML ="Width of the screen : " + screen.width;
    document.getElementById("height").innerHTML ="Height of the screen : " + screen.height;
 };

 //Question.11.
 function countdown() { 
    var count = 10;
    var timer = setInterval(function() { 
       count--;
       document.getElementById("timer").innerHTML = count;
          if (count == 0) {
             clearInterval(timer);
             alert("Countdown reached zero!");
          }
        }, 1000);
     }