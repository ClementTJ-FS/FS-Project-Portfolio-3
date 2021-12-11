$(document).ready(function() {
    //video-modal
    // Set iframe attributes when the show instance method is called
    $("#video-modal").on("show.bs.modal", function(event) {
        let link = $(event.relatedTarget); // the link
        let url = link.attr('href');      //the url
        $(this).find("iframe").attr({
            src : url,
            allow : "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    // stop video from playing when modal hidden
    $("#video-modal").on("hidden.bs.modal", function() {
        $("#video-modal iframe").removeAttr("src allow");
    });
});

//img-modal
$("#img-modal").on("show.bs.modal", function(event) {
    let link = $(event.relatedTarget); // the link
    let img = link.attr('href');      //the img src
    $(this).find("img").attr({
        src : img
    });
});