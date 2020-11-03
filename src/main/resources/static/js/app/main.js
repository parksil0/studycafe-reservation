$(document).ready(function() {
    $("#login").on("click", function() {
        $("#loginModal").show();
        $(".darkBack").show();
    });
    
    $("#closeBtn").on("click", function(){
        $("#loginModal").hide();
        $(".darkBack").hide();
    });
});