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

    $('#quote_font_buttons_container').hide();
    // Show-hide font buttons on hover
    $('#quote_quote, #quote_font_buttons_container').hover(
        function () {
            $('#quote_font_buttons_container').show();
        },
        function () {
            $('#quote_font_buttons_container').hide();
        });

    var maxQuoteFont = 80;
    var minQuoteFont = 3;

    $('#quote_font_plus').click(function(){
        var size = parseInt($('#quote_quote_text').css('font-size'));
        var newFontSize = Math.min(size + 1, maxQuoteFont);
        $('#quote_quote_text').css('font-size', newFontSize);
    });

    $('#quote_font_minus').click(function(){
        var size = parseInt($('#quote_quote_text').css('font-size'));
        var newFontSize = Math.max(size - 1, minQuoteFont);
        $('#quote_quote_text').css('font-size', newFontSize);
    });

});