$("nav a").on("click", function() {
    /* making sure no other classes have the class of active; */
    $("nav a").removeClass("active");
    $("section").removeClass("active");
    
    /* setting this anchor tag to active  */
    $(this).addClass("active");
    
    /* getting the id of the related section */
    let section = $(this).attr("href");
    
    /* making sure we got the right thing */
    console.log("Section:" + section);
    
    /*make the relative section active (to show content) */
    $(section).addClass("active");
});  

genPalette();

function genPalette() {
    $(".palette .color").each( function() {
        $(this).css("background-color", $(this).text());
    });
    
}