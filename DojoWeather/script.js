function loadPage(element){
    alert("Loading weather report...");
}
function hide(){
    var cookie = document.querySelector("#cookieTimeContainer")
    cookie.remove();
}
function convertTemps(){
var tempSpan = [75,65,80,66,69,61,78,70]
var daySpan = [
        document.querySelector("#span1"),
        document.querySelector("#span2"),
        document.querySelector("#span3"),
        document.querySelector("#span4"),
        document.querySelector("#span5"),
        document.querySelector("#span6"),
        document.querySelector("#span7"),
        document.querySelector("#span8")
    ]
    for(var i = 0; i<daySpan.length; i++){
        daySpan[i].innerText = tempSpan[i] + "°";
    }
    
    
}

console.log(daySpan);

