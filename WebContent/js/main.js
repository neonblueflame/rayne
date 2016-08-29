// code for making nav fly, then add Home

function setToActive(el, container, activeClass) {
	var els = container.children();
	
	for(var i = 0; i < els.length; i++) {
		$(els[i].tagName + ">" + el.prop("tagName"))
			.removeClass(activeClass);
	}
	el.addClass(activeClass);
}

$("#gallery-link>ul>li>a").click(function() {
	var goToPanelID = "#" + this.id.replace("link-", "");
	var goToPanelContainer = $(goToPanelID).parent();
	
	goToPanelContainer.animate({
		scrollTop: $(goToPanelID).position().top
	}, 500);
	
	setToActive($(this)
		, $(this).parent().parent()
		, "active-gallery-link");
	
	setToActive($(goToPanelID + ">h5")
		, $(goToPanelContainer)
		, "highlight");
})

$("nav>ul>li>a").click(function() {
	var goToPageID = "#" + this.id.replace("link-", "");
	$("body").animate({
		scrollTop: $(goToPageID).offset().top
	}, 500);
});

// code for setting click event for traditional 
// paintings thumbnails
for (var i = 1; i <= 7; i++) {
	var tradCount = "trad-" + i;
	console.log()
	$("#" + tradCount).click(function () {
		$("image-whole").css("background-image"
			, "url(../img/icon/gallery/" 
				+ tradCount + ".png)");
	});
}

// code for setting click event for digital 
// illustrations thumbnails
for (var i = 1; i <= 7; i++) {
	var digiCount = "digi-" + i;
	$("#" + digiCount).click(function () {
		$("image-whole").css("background-image"
			, "url(../img/icon/gallery/" 
				+ digiCount + ".png)");
	});
}

// code for setting click event for sketches 
// thumbnails
for (var i = 1; i <= 4; i++) {
	var sketCount = "sket-" + i;
	$("#" + sketCount).click(function () {
		$("image-whole").css("background-image"
			, "url(../img/icon/gallery/" 
				+ sketCount + ".png)");
	});
}

// code for setting click event for photography 
// thumbnails
for (var i = 1; i <= 4; i++) {
	var photCount = "phot-" + i;
	$("#" + photCount).click(function () {
		$("image-whole").css("background-image"
			, "url(../img/icon/gallery/" 
				+ photCount + ".png)");
	});
}