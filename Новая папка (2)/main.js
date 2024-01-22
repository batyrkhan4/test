$("document").ready(function () {
    var images = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg"
    ];

    var currentIndex = 0;
    var slideshowInterval;

    function showImage(index) {
        $("#gallery img").attr("src", images[index]);
    }
    function updateIndicator() {
        $(".indicator-dot").removeClass("active");
        $(".indicator-dot:eq(" + currentIndex + ")").addClass("active");
    }

    function startSlideshow() {
        slideshowInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
            updateIndicator();
        }, 1000);
        $("#playPauseBtn").text("Stop");
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
        $("#playPauseBtn").text("Play");
    }

    $("#firstBtn").click(function () {
        currentIndex = 0;
        showImage(currentIndex);
        updateIndicator();
        stopSlideshow();
    });

    $("#prevBtn").click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        updateIndicator();
        stopSlideshow();
    });

    $("#nextBtn").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        updateIndicator();
        stopSlideshow();
    });

    $("#lastBtn").click(function () {
        currentIndex = images.length - 1;
        showImage(currentIndex);
        updateIndicator();
        stopSlideshow();
    });

    $("#playPauseBtn").click(function () {
        if (slideshowInterval) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    });
    showImage(currentIndex);
    for (var i = 0; i < images.length; i++) {
        $("#gallery-controls").append("<div class='indicator-dot'></div>");
    }
    updateIndicator();

    $(".indicator-dot").click(function () {
        currentIndex = $(this).index();
        showImage(currentIndex);
        updateIndicator();
        stopSlideshow();
    });
});