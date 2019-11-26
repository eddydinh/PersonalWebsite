$(document).ready(function () {
    ResizeHome();
    RepositionViewWorkButton();
    
});
$(window).resize(function () {
    ResizeHome()
    RepositionViewWorkButton();
});
const RepositionViewWorkButton = () =>{
    let welcomeDivTopPosition = $("#welcomeDiv").css("top");
    let welcomeDivHeight = $("#welcomeDiv").css("height");
    const offsetY = parseFloat(welcomeDivHeight);
    welcomeDivTopPosition = parseFloat(welcomeDivTopPosition) + offsetY;
    $("#viewWorkButton").css("top", welcomeDivTopPosition);
    
}
const ResizeHome = () => {
    $("#particles-js").width($(window).width());
    $("#particles-js").height($(window).height());

}
// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
    setTimeout(() => {
        $('.modal-content-container').addClass('animateScale');
    }, 100);
}

// Close the Modal
function closeModal() {
    setTimeout(() => {
        $('.modal-content-container').removeClass('animateScale');
    }, 500);
    document.getElementById('myModal').style.display = "none";
    
    resetDisplay();

}

function resetDisplay(){
    $("#firstPic").show();
    $("#iframeVid").hide();
    $("#iframeVid").attr('src',"");
    $("#prevArrow").show();
    $("#forwardArrow").show();
}

function displayFirstIframe(){
    $("#firstPic").hide();
    $("#iframeVid").show();
    $("#prevArrow").hide();
    $("#forwardArrow").hide();
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    let currentSlideIndex = slideIndex;
    let direction = n;
    showSlides(slideIndex += n, currentSlideIndex, direction);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }


    slides[slideIndex - 1].style.display = "inline-block";

}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
};
const hoverWhite = (e) => {
    $(e.target.firstChild).css({
        "background": "white",
        color: "#eb3957"
    });


};
const turnBackRed = (e) => {
    $(e.target.firstChild).css({
        "background": "#eb3957",
        color: "white"
    });
};
const modalInfoOf = (projectname) => {
    var title, subtext, descrip, link;
    if (projectname === "wandrscape") {
        title = "WANDRSCAPE";
        subtext = "The Centre for Culture and Technology";
        descrip = "Wandrscape takes in information about all the artworks scattered around UBC-Okanagan Campus and display them as markers on a real-time rendered map. A responsive web-app written in Jquery, PHP intergrated with Google Maps API.";
        link = "https://digitalmedia.ok.ubc.ca/wandrscape/";
        
    } else if (projectname === "naramata") {
        title = "NARAMATA PHOTO VIEWER APP";
        subtext = "Kelowna Naramata Museum";
        descrip = "This simple web-app accepts information of close to a thousand photos to efficiently load, sort, and display them on a touch screen. A combination of CSS, Javascript, and HTML Canvas provides the users with intuitive and dynamic experiences.";
        link = "https://digitalmedia.ok.ubc.ca/naramata/";
        
    }else if (projectname === "soundscape") {
        title = "SOUNDSCAPE";
        subtext = "Kettle Valley Railway";
        descrip = "Scalable, resilient backend built from scratch with Node.js, PostgreSQL. Responsive frontend built with REACT in combination with Redux. The web-app provides a “sound-walk” experience. That is, the audio outputs respond to user’s current location.";
        link = "https://digitalmedia.ok.ubc.ca/kvr/admin";
      
    }
    
    else if (projectname === "ourloveboard") {
        
        title = "OUR LOVE BOARD";
        subtext = "A Chrome Extension";
        descrip = "A Chrome Extension built from React.js, Redux, Chrome API, and Firebase Users can sign up for an account and pair up with a partner. The couple will share a same digital drawing board, which they can use to leave each other daily romantic messages.";
        link = "https://chrome.google.com/webstore/detail/ourloveboard/onlndhcgomlelaijooogpbhdelhmhepj";
       
    }
    else if (projectname === "theGame"){
        title = "WELCOME TO THE GAME";
        subtext = "A Java remade";
        descrip = " A Java remake of a popular game, adhering strictly to OOP principles and practices with design patterns and data structures for optimal coherence, efficiency, and minimal coupling. Accompanied by thorough unit tests.";
        link = "https://github.com/eddydinh/WelcomeToTheGameJava";
        
    }
    
    PassInfoToModal(projectname, title, subtext, descrip, link);

};
const PassInfoToModal = (projectname, title, subtext, description, link) => {
    $(".mySlides").each(function (index) {
        $($(this).children()[0]).css('width', "100%");
        let imageSource = '';
        if((projectname=="theGame") && (index == 0)){
            displayFirstIframe();
            $("#iframeVid").attr('src', "https://www.youtube.com/embed/HFvxQrYmhng?cc_load_policy=1&cc_lang_pref=en");
            
        }
        else if ((projectname=="ourloveboard")&& (index == 0)){
           
       
            imageSource = "images/" + projectname + index + ".gif";
            
        }else{
            imageSource = "images/" + projectname + index + ".png"; 
        }
        
        
        if(projectname=="ourloveboard"){
             $($(this).children()[0]).css('width', "45%");
        }
    

        

        $($(this).children()[0]).attr('src', imageSource.toString());
    });
    let captionContainer = $(".caption-container");

    captionContainer.children("h1")[0].innerText = title;
    captionContainer.children("p")[0].innerText = subtext;
    captionContainer.children(".detail")[0].innerText = description;
    $(captionContainer.children("a")[0]).attr("href", link);
};
const TravelTo = (dest) => {
    let anchor = dest;
    console.log(anchor);
    $('html, body').animate({
        scrollTop: $('#' + anchor).offset().top
    }, 400);
};