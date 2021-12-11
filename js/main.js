$(document).ready(function() {
    // Set iframe attributes when the show instance method is called
    $("#video-modal").on("show.bs.modal", function(event) {
        let link = $(event.relatedTarget); // link that triggered the modal
        let url = link.attr('href');      // Extract url from href
        $(this).find("iframe").attr({
            src : url,
            allow : "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        });
    });

    // Remove iframe attributes when the modal has finished being hidden from the user
    $("#video-modal").on("hidden.bs.modal", function() {
        $("#video-modal iframe").removeAttr("src allow");
    });
});