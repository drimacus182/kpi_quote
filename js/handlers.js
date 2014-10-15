$(document).ready(function () {

    // Fancy button for file upload
    $('#browse-click').on('click', function () { // use .live() for older versions of jQuery
        $('#input_img').click();
        return false;
    });
    // ---------------------------------

    $('#zoom_buttons_container').hide();

    // Show-hide zoom buttons on hover
    $('#quote_photo, #zoom_buttons_container').hover(
        function () {
            $('#zoom_buttons_container').show();
        },
        function () {
            $('#zoom_buttons_container').hide();
    });
    //-----------------------------------




});