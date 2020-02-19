window.onload = function(){
    var clipboard = document.getElementById("clipboard");
    var buttonGo =  document.getElementById("gobutton");
   
    // go button event listener
    buttonGo.addEventListener("click",function(event){
        //var clipboard = document.getElementById("clipboard");
        
        //create the meme div, add meme class 
        
        var meme = document.createElement("div");
       
        meme.classList.add("meme");

        //create an image variable and assign it to the bg of the div
        //constrain image proportions to fit your meme div

        var picture = document.getElementById("picture_url").value;

        meme.style.backgroundImage = "url(" +  picture + ")";
        meme.style.backgroundPosition = "center center"
        
        //create vars for input box values

        var upperInput = document.querySelector("#upper_text").value.toUpperCase();
        var lowerInput = document.querySelector("#lower_text").value.toUpperCase();
        
        //create class for inner divs
       
        var upperText = document.createElement("div");
        upperText.innerText = upperInput;

        //Change innertext to value, find out HOW; -  .value!

        upperText.classList.add("innerdiv");
        upperText.setAttribute("id", "upper");

        var lowerText = document.createElement("div");
        lowerText.innerText = lowerInput;

        //****change innerText here too, find out how;
        lowerText.classList.add("innerdiv");
        lowerText.setAttribute("id", "lower");

        //create inner div for hovering X, attach ontop of  meme
        //how do you  overlay divs without forcing text to  move?

       /* var blackX = document.createElement("div");
        blackX.classList.add("blackx");
        blackX.innerText = "X";
        clipboard.appendChild(blackX); */


        //now append it all in order to the divs
        
     
        meme.appendChild(upperText);
        meme.appendChild(lowerText);
        clipboard.appendChild(meme);


    })

    //clear button event listener
    var buttonClear = document.getElementById("clearbutton")
    
    var memesAll = document.getElementsByClassName("meme");
    buttonClear.addEventListener("click", function(event){
     
    while (clipboard.hasChildNodes()){
        clipboard.removeChild(clipboard.lastChild);
    }

    })
 

}
//add mouse over and click events for the memes themselves, to delete them individually

//var existingMeme = document.getElementById("meme");

clipboard.addEventListener("click", function(event) {
    event.target.parentElement.remove();
})



/*  YOU  ARE TRYING TO IMPLEMENT THE BLACK X DIV, FOUND ABOVE LINE 47
LEARN HOW TO OVERLAY THE DIV WITHOUT PUSHING THE TEXT DIVS */