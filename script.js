let button = document.querySelector("button");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"
    if(weather==="rainy"){
        document.getElementsByTagName("p")[0].innerHTML="Bring an umbrella!";
    }else{
        document.getElementsByTagName("p")[0].innerHTML="Enjoy the sun!";
    }

});