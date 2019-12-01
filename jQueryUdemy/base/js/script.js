$(function() {

  /*let blueBox = $('.blue-box');
  $(blueBox).hover(function(){
	$(this).stop().fadeTo(500, 0.7);
  }, function(){
	$(this).stop().fadeTo(500, 1);
  })*/
  /*$(".red-box").fadeOut(2000);
  $(".green-box").fadeOut(2000);
  $(".red-box").fadeIn(1000);
  $(".red-box").fadeTo(1000, 0.5);*/
  /*$(".red-box").fadeTo(3000, 0.2);
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(1000, 0.8);*/ // fadeIn(), fadeOut(), fadeTo(), fadeToggle()
  // fadeOut makes element display: none while fadeTo only change opacity NOT display
  // show(), hide() and toggle()
  // slideUp(2000), slideDown(2000), slideToggle(2000)
  /*$("p").slideUp(2000);
  $("p").slideDown(2000);*/
  /*$(".blue-box").animate({
	"margin-left":"200px"
  }, 2000);*/
  /*$(".blue-box").animate({
	"margin-left":"200px",
	"opacity": "0",
	"height": "50px",
	"width": "50px",
	"margin-top": "25px",
  }, 1000);
  $("p").animate({
	"font-size":"20px",
	
  }, 1000);*/	//string syntax or camelCase
  /*$(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);
  $(".blue-box").delay(2000).fadeTo(1000, 0.8); // delay() function
  $(".red-box").fadeTo(1000, 0, function(){
	alert("This is the callback: Animation finished.");
  });*/
  /*$(".red-box").fadeTo(1000, 0, function(){
	$(".green-box").fadeTo(1000,0,function(){
		$(".blue-box").fadeTo(1000,0);
	});
  });
  $(".lightbox").delay(500).fadeIn(1000);*/
  /*$("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");*/
  /*$("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");*/
  //$("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // methods for filtering
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li").filter(function(index){return index % 3 === 2;}).css("background-color", "rgba(180, 180, 30, 0.8)");
  //$("li:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)"); // ne e preporachitelno
  $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // adding new elements to the dom
  $("ul ul:first").append();
});

//$(function() {
  //$("ul ul:first").append("<li>Im gonna be the last item</li>");
  //$("<li>Im gonna be the last sub-item</li>").appendTo($("ul ul:first"));
  //$("ul ul:first").prepend("<li>Im gonna be the first item</li>");
  //$("<li>Im gonna be the last sub-item</li>").prependTo($("ul ul:first"));
  //$(".red-box").after("<div class='red-box'>Another red</div>");
  //$(".blue-box").before("<div class='blue-box'>Blue friend</div>");
  //$("li").replaceWith("<li>Replaced.</li>");
  //$("li").replaceWith(function(){return "<li>Replaced with function.</li>"});
  let firstListItem = $("li:first");
  //$("p:first").replaceWith(firstListItem);
  //$(".red-box, .blue-box").replaceWith("<div class='green-box'>Another green</div>");
  //$("<div class='green-box'>Another green</div>").replaceAll(".red-box, .blue-box");
  // removing elements and content
  //$("li").remove();
  //$("form").children().not("input:text, textarea, br").remove();
  //$(".red-box, .blue-box, .green-box").empty();

  //manipulating attributes and properties
  /*let specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  specialLink.attr("href", "https://google.com");
  let checkBox = $("input:checkbox");
  console.log(checkBox.prop("checked"));
  console.log(checkBox.attr("checked"));
  let textInput = $("input:text");
  console.log(textInput.val());
  let rangeInput = $("input[type='range']");
  console.log(rangeInput.val());*/
  /*let galleryImage = $(".gallery").find("img:first");
  let images = [
	"images/laptop-mobile_small.jpg",
	"images/laptop-on-table_small.jpg",
	"images/people-office-group-team_small.jpg",
  ];

  let i = 0;
  setInterval(function(){
	i = (i + 1) % images.length;
	galleryImage.fadeOut(function(){
	  $(this).attr("src", images[i]);
	  $(this).fadeIn(2000);
	});
	console.log(galleryImage.attr("src"));
  }, 2000);*/

  // changing the css properties of elements
  /*$(".gallery").css("display", "none") //.hide()
  let redBox = $(".red-box");
  console.log(redBox.css("width"));
  console.log(redBox.width());

  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "18px");
  redBox.css("width", "+=20px");

  let properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);
  console.log(properties["font-size"]);

  //adding and removing css classes
  $("a").addClass("fancy-link"); // class="..."
  $("p:first").addClass("large emphasize");
  $("li li").addClass(function(index){
  	$(this).addClass("item-" + index);
  });
  $("div").addClass(function(index, currentClass){
  	if (currentClass === "dummy") {
  		return "red-box";
  	}
  });
  $(".red-box").removeClass("red-box").addClass("blue-box");

  // changing the data of an element
  let gallery = $(".gallery");
  let images = [
	"images/laptop-mobile_small.jpg",
	"images/laptop-on-table_small.jpg",
	"images/people-office-group-team_small.jpg",
  ];
  gallery.data("availableImages", images);
  console.log(gallery.data("availableImages"));
  gallery.data("name", "The awesome gallery");
  console.log(gallery.data());
  gallery.removeData("name");
  console.log(gallery.data("name"));

  // retrieving and changing the content of an element
  let firstPar = $("p:first");
  console.log(firstPar.text());
  console.log(firstPar.html());
});*/

  //06 
  //adding click handlers
$(function() {
  /*$("#btn-click").click(function(event){
    console.log(event);
    alert("This button is clicked");
  });
  $(".red-box").click(function(){
    $(this).fadeTo(500, 0.5);
  });
  $(".red-box").click(); // vse edno ti si kliknal(avtomatichno klikvane pri zarejdane na stranitsata)
  //adding hover handlers
  $("#btn-hover").hover(function(){
    alert("This button is hovered");
  });
  $(".green-box").hover(function(){
    $(this).text("I was hovered");
  });
    //adding mouseenter mouseleave
  let blueBox = $(".blue-box");
    /*blueBox.mouseenter(function(){
      $(this).stop().fadeTo(500, 0.7);
    });
    blueBox.mouseleave(function(){
      $(this).stop().fadeTo(500, 1);
      });*/
    // hover(handlerIn, handlerOut)*/
    /*blueBox.hover(function(){
      $(this).stop().fadeTo(500, 0.7);
    }, function(){
      $(this).stop().fadeTo(500, 1);
    });*/
    //adding the same handler for multiple events
    /*$("html").on("click keydown", function(){
      console.log("Mouse was clicked or key was pressed");
    });*/
      /*let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg",
  ];
  let i = 0;
  $(".gallery").find("img").on("click", function(){
    i = (i + 1) % images.length;
    $(this).fadeOut(function(){
      $(this).attr("src", images[i]).fadeIn();
    });
  });*/
 // modularizing event handlers no more inline
 function logEvent(){
  console.log("Mouse was clicked or key was pressed");
 }
  $("html").on("click keydown", logEvent);
    let images = [
  "images/laptop-mobile_small.jpg",
  "images/laptop-on-table_small.jpg",
  "images/people-office-group-team_small.jpg",
  ];
  let i = 0;
  let galleryImage = $(".gallery").find("img");
  galleryImage.on("click", switchToNextImage);
    function switchToNextImage(){
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function(){
      galleryImage.attr("src", images[i]).fadeIn();
    });
  }

  // delegated events
  /*$("p").click(function(){
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph.</p>");*/// tuk praviloto se
  //prilaga samo varhu elementite koito veche sa v stranitsata, ne se prilagat varhu dinamichno
  //sasdadenite 

  $("#content").on("click", "p", function(){
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph.</p>"); // tuk se prilaga i varhu
  //dinamichno dobaveniq element
  $("body").on("mouseenter", "li", function(){
    $(this).css("color", "red");
  });

  // passing additional data to event
  $("#btn-click").click({
    user: "Peter",
    domain: "petersommerhoff.com"
  }, function(){
    greetUser(event.data);
  });

  function greetUser(userdata){
    username = userdata.user || "Anonymous";
    domain = userdata.domain || "example.com";
    alert("Welcome back " + username + "from " + domain + "!");
  }
});