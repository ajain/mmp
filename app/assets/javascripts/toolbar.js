// function moveScroller() {
//     var move = function() {
//         var st = $(window).scrollTop();
//         var ot = $(".toolbar-anchor").offset().top;
//         var s = $(".toolbar");
//         if(st > ot) {
//             s.css({
//                 position: "fixed",
//                 top: "0px"
//             });
//         } else {
//             if(st <= ot) {
//                 s.css({
//                     position: "relative",
//                     top: ""
//                 });
//             }
//         }
//     };
//     $(window).scroll(move);
//     move();
// }

//   $(function() {
//     moveScroller();
//   });


$(document).ready(function() {
    // Cache selectors for faster performance.
    var $window = $(window),
        $mainMenuBar = $('.toolbar'),
        $mainMenuBarAnchor = $('.toolbar-anchor');

    // Run this on scroll events.
    $window.scroll(function() {
        var window_top = $window.scrollTop();
        var div_top = $mainMenuBarAnchor.offset().top;
        if (window_top > div_top) {
            // Make the div sticky.
            $mainMenuBar.addClass('stick');
            $mainMenuBarAnchor.height($mainMenuBar.height());
        }
        else {
            // Unstick the div.
            $mainMenuBar.removeClass('stick');
            $mainMenuBarAnchor.height(0);
        }
    });
});