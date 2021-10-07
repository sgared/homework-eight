var homeContent= `<h1>HOME</h1></h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
d. Non vel exercitationem, doloremque tenetur accusantium iure.</p>
</p>
<p> nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam! mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p><img src="images/eftakher-alam-i1VQZsU86ok-unsplash.jpg" alt="" />`;

var aboutContent=`<h1>ABOUT</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
d. Non vel exercitationem, doloremque tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamaccusantium iure.</p>
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit </p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p> <img src="images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" alt="" />`;
var productsContent = `<h1>PRODUCTS</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
d. Non Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamvel exercitationem, doloremque tenetur accusantium iure.</p>
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti, mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p><img src="images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" alt="" />`;
var contactContent = `<h1>CONTACT</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a
d. Non vel Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti,corrupti, mollitia repudiandae, accusantium, quibusdamexercitationem, doloremque tenetur accusantium iure.</p>
</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit fugit corrupti, mollitia repudiandae, accusantium, quibusdam nulla voluptatibus soluta sed sequi ratione voluptatem recusandae quam!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel aliquid suscipit assumenda adipisci quasi.</p><img src="images/nathan-da-silva-k-rKfqSm4L4-unsplash.jpg" alt="" />`;

function initListeners(){
    $("nav a").click(function(evt){
        //this stores the id from the anchor tag. 
       let aID=evt.currentTarget.id;
       let contentID = aID + "Content";
       $("#app").html(eval(contentID));
    });
}

$(document).ready(function(){
 //alert("hi");
 //console.log("hi there, what are you doing?");
 initListeners();

 $("#app").html(homeContent);



});