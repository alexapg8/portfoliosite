window.onload = pageReady;

function pageReady(){
    var allImageS = document.getElementsByClassName('graphic-socialimg');
    var allImageL = document.getElementsByClassName('graphic-logoimg');
    var allImageP = document.getElementsByClassName('graphic-photoimg');
    var allImageI = document.getElementsByClassName('graphic-illusimg');

    for (var i = 1; i < allImageS.length; i++){
        allImageS[i].onclick = switchPicS;
    }
    for (var i = 1; i < allImageL.length; i++){
        allImageL[i].onclick = switchPicL;
    }
    for (var i = 1; i < allImageP.length; i++){
        allImageP[i].onclick = switchPicP;
    }
    for (var i = 1; i < allImageI.length; i++){
        allImageI[i].onclick = switchPicI;
    }

//CREATE FUNCTIONS TO CHANGE PICTURES
    function switchPicS () {
        allImageS[0].src = this.src;
    }
    function switchPicL () {
        allImageL[0].src = this.src;
    }
    function switchPicP () {
        allImageP[0].src = this.src;
    }
    function switchPicI () {
        allImageI[0].src = this.src;
    }
}

// Create ready function with jQuery
$ (document).ready(function () {
//Information about the project should be hidden first
    $('.web-projects-info').hide();
    $('.graphic-projects-info').hide();
// Create function to show the project info depending on which title they click
//it should disappear if they click it again
    $('h2').click(function() {
        $(this).next('.graphic-projects-info').slideToggle(2000);
    });
    $('h2').click(function() {
        $(this).next('.web-projects-info').slideToggle(2000);
    });

}); // End of ready function

