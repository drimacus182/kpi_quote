function escapeWhiteChars(string) {
    return string.replace(/  /g, '&nbsp; ').replace(/\n/g, '<br/>');
}

function onQuoteTextChange() {
    var input = $('#input_quote');
    var quote = $('#quote_quote_text');

    quote.html(escapeWhiteChars(input.val()));
    console.log(input.val());
}

function onTutornameChange() {
    var input = $('#input_tutorname');
    var tutor = $('#quote_tutorname_text');

    tutor.html(escapeWhiteChars(input.val()));
    console.log(input.val());
}

function onFacultyChange() {
    var input = $('#input_faculty');
    var faculty = $('#quote_faculty_text');

    faculty.html(escapeWhiteChars(input.val()));
    console.log(input.val());
}

var zoom_plus_ratio = 1.1;
var zoom_minus_ratio = 1.0/zoom_plus_ratio;

function onZoomPlus() {
    var img = $('#tutor_img');
    var cur_width = img.width();
    var cur_height = img.height();

    img.width(cur_width*zoom_plus_ratio);
    img.height(cur_height*zoom_plus_ratio);
}

function onZoomMinus() {
    var img = $('#tutor_img');
    var cur_width = img.width();
    var cur_height = img.height();

    img.width(cur_width*zoom_minus_ratio);
    img.height(cur_height*zoom_minus_ratio);
}

$("#input_img").change(function(){
    readURL(this);
});

$('#input_quote').on('change keydown paste input', onQuoteTextChange);
$('#input_tutorname').on('change keydown paste input', onTutornameChange);
$('#input_faculty').on('change keydown paste input', onFacultyChange);

$('#img_plus').click(onZoomPlus);
$('#img_minus').click(onZoomMinus);


function imageAutoScale() {
    var img = $('#tutor_img');

    img.css('left', '');
    img.css('top', '');
    img.css('width', '');
    img.css('height', '');

    var desired_w = 300;
    var desired_h = 400;
    var w = img.width();
    var h = img.height();

    var x_scale = desired_w/w;
    var y_scale = desired_h/h;

    var scale = Math.min(x_scale, y_scale);

    if (scale>=1) return;

    img.width(w*scale);
    img.height(h*scale);
}

function readURL(input) {
    if (input.files && input.files[0]) {

        var file = input.files[0];
        if (file.size > 5 * 1024 * 1024) {
            alert("Розмір зображення має бути меншим за 5 Мб");
            return
        }

        var reader = new FileReader();

        reader.onload = function (e) {
            var img = $('#tutor_img');
            img.attr('src', e.target.result);

            imageAutoScale();

            img.draggable();
            img.css('cursor', 'all-scroll');
        };

        reader.readAsDataURL(file);
    }
}

function generateImage() {

    html2canvas($('#main_quote_container').get(0), {
        onrendered: function(canvas) {
//            $('#output_image').append(canvas);
            var image = canvas.toDataURL("image/png");//.replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
            $('#image_download').attr('href', image);
            $('#image_download').attr('download', "quote.png");
            $('#image_download').get(0).click();
        }
//        ,
//        width: 800,
//        height: 400
    });
}



