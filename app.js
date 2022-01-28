//checking if jQuery is alive!
$(function () {
    console.log("Let's get ready to party with jQuery!");
})
//adding class of image-center to all images
$("article img").addClass("image-center");
//removing last paragraph in the article 
$("article p:last-child").remove();
//Setting the font size of the title to be a random
//pixel size from 0 to 100.
$("#title").css("font-size", Math.random() * 100);
//Add an item to the list; 
$("ol").append($("<li>", { text: "I can add to lists with jQuery!" }));
//  Scratch that; the list is silly. Empty the aside and put a paragraph
//    in it apologizing for the list's existence.
$("aside")
    .empty()
    .append($("<p>", { text: "Sorry about that list" }));
//  When you change the numbers in the three inputs on the bottom,
//    the background color of the body should change to match whatever
//    the three values in the inputs are.  
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
});
//  Add an event listener so that when you click on the image,
//    it is removed from the DOM.

$("img").on('click', function (e) {
    $(e.target).remove();
});