document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            });
        });
    }
});

$( document ).ready(function() {
    var username = "mail";
    var hostname = "etiennebaque.com";
    $(".emailAddress").html(username + "@" + hostname);

    $('.delete').click(function() {
        toggleMap();
        $("#contactModal").removeClass('is-active');
    });

    $('.modal-background').click(function() {
        toggleMap();
        $("#contactModal").removeClass('is-active');
    });

    $('#contactLink, .contact-popup').click(function() {
        if (location.pathname == "/") {
            $("#contact")[0].scrollIntoView()
            $("#contact").effect("highlight", {color: "#dcffcf"}, 1500);
        } else {
            toggleMap();
            $("#contactModal").addClass('is-active');
        }

        if ($('.navbar-burger').hasClass('is-active')) {
            $('.navbar-burger').click()
        }

    });

    $( document ).tooltip({
        position: {
            my: "center bottom-10 right-15",
            at: "center top",
            using: function( position, feedback ) {
              $(this).css(position);
              $("<div>")
                .addClass(feedback.vertical)
                .addClass(feedback.horizontal)
                .appendTo(this);
            }
          }
    });
});

function toggleMap() {
  if (location.pathname == "/oaf-runs/") {
    $('#mapid').toggle();
  }
}
