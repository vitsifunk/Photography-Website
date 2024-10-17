// Image Click Handling
$('[src="Ekthesh BnW/DSC_0110.jpg"]').click(function() {
    $(this).attr('width', '400');
    $(this).attr('height', '300');
});

window.onload = function(){
    try {
        if(localStorage.getItem("cookie-enable")!="1"){
            document.getElementById("cookie-bar").style.display="block";
        }
        document.getElementById("save-cookie-example").addEventListener( "click", function() {
            localStorage.setItem("cookie-enable", "1");
            document.getElementById("cookie-bar").style.display="none";
        } );
    } catch( e ) {
        return false;
    }
}
