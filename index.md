<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Meme generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="main">
       <div class="title"><h1>MEME GENERATOR</h1></div> 
       <section><h2>CREATE YOUR OWN MEMES</h2></section> 
        <section><h3>Make multiple memes - load a few into the clipboard!</h3><br>
        <h5>for best results keep images to 500 x 500px max</h5><br></section>
        
       <form action="#">
        <label for="image">PICTURE</label><br>
        <input type="text" class="textbox" id="picture_url" placeholder="Image URL here"> <br>
        <label for="upper_text"> UPPER TEXT</label><br>
        <input type="text" class="textbox" id="upper_text" placeholder="Funny Statement Number one"> <br>
        <label for="lower_text"> LOWER TEXT</label><br>
        <input type="text" class="textbox" id="lower_text" placeholder="Funny Statement Number two"> <br><br>
        <input type="button" class = "submit" value="GO!" id="gobutton">  <input type="reset" class = "submit" id = "resetbutton" value="RESET!">
       </form>
    </div> 
    <section class = "cliptitle">
       <h2>CLIPBOARD</h2>
       <input type="button" class="submit" value = "CLEAR!" id="clearbutton">
    </section>
      
   
    
            <div class="clipboard" id="clipboard"></div>

            
 <footer>
         &copy; Boris Gladkikh 2020 <br><br><br>
        <a href="https://www.borisgladkikh.com" target="_blank">Visit Site</a>

    </footer>
    </div>
   
    <script src="script.js"></script>
</body>
</html>