let galleryMax = 270;
/* On clicking a navigation item */
$("nav a").on("click", function () {
  setActive($(this));
});

/* generating palette background colors */
genPalette();

//Show/hide content
$("#portfolio .more").on("click", function () {
  let gallery = $(this).parent(),
    animateTime = 500;
  // console.log(gallery);

  gallery.toggleClass("active");
  if (gallery.hasClass("active")) {
    autoHeightAnimate(gallery, animateTime);
  } else {
    gallery.stop().animate({ height: '16em' }, animateTime);
  }
});

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
  var curHeight = element.height(), // Get Default Height
    autoHeight = element.css('height', 'auto').height(); // Get Auto Height
  element.height(curHeight); // Reset to Default Height
  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}


/* Generating palette colors */
function genPalette() {
  /* for each .color in a .palette */
  $(".palette .color").each(function () {
    /* set the background color to the text inside it */
    $(this).css("background-color", $(this).text());
  });
}

function setActive(navItem) {
  /* making sure no other classes are "active" */
  $("nav a").removeClass("active");
  $("section").removeClass("active");

  // //making sure portfolio stuff is hidden
  // $("#portfolio .gallery").each( function() {
  //     $(this).css("max-height", galleryMax);
  //     $("#portfolio .more").show();
  // })

  /* setting this anchor tag to active  */
  navItem.addClass("active");
  console.log(DataTransferItem);

  /* getting the id of the related section */
  let section = navItem.attr("href");

  /* making sure we got the right thing */
  console.log("Section:" + section);

  /* make the relative section active (to show content) */
  $(section).addClass("active");

  /* If Portfolio is active */
  // if(section === "#portfolio") { chkPortfolio(); }
}