

// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });




/*******************************************
            Strengths

    I want to give each strength its own button and then have it only update the corresponding strength        
********************************************/

$('#strengths').on('click', 'button', function () {
    $('.front').hide(); 
    $('.back').show();   

    console.log('Element Targeted');
})

$('.back').on('click', function(){
    $('.front').show();
    $('.back').hide();
})


/*******************************************
About me
********************************************/
var randomFact = ["Like most Colorado natives, I love to be outside. I am an avid cyclist and even compete with a racing team.", 
    "I am a very curious person and I love to learn new things. Ask me what I'm reading! I am always reading something, and sometimes many things. I am teaching myself how to write web apps and web sites with many different resources, from Code School and textbooks to meetups and friends.", 
    "I am a foodie. My wife and I are always trying new places to eat in the Denver and Boulder area. I also love to cook. My favorite thing to make is home made spaghetti squash bolagnese", 
    "I do yoga. It helps keep me centered and feeling strong. Although, I still can't stand on my head", 
    "I am an advocate for social justice, especially if it concerns education. I am passionate about critical pedagogy and have worked in low income schools. My dream is to create software to help bridge the achievement gap in real and meaningful ways", 
    "I watch documantaries when I get the chance. It doesn't matter what kind of documentary it is, as long as it is well done. My favorites are social commentaries", 
    "I try to stay healthy, whether that is through the food I eat or the activities I take part in. I also try not to preach about it too. No one likes that guy."
    ]

var $divOutput = $("#divOutput"); 

$("#about-me-button").on("click", function(){
    
    return divOutput.innerText = randomFact[Math.round(Math.random()*(randomFact.length-1))];;
    console.log("I did something");

});

/*******************************************
Footer
********************************************/
var today = new Date();

//Copyright
var year = today.getFullYear();
var footDate = document.getElementById('copy'); 
footDate.innerHTML = "Copyright &copy; " +"Patrick Seamars" + " " + year;

