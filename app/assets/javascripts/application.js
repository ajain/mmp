// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require lightSlider.min
//= require turbolinks
//= require_tree .
//= require waypoints.min




// FOR ABOUT SUB-NAV

$(function($) {
  function changeAboutTab(e) {
    e.preventDefault();
    $("#about-tab>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showAboutTab($(this).attr("href"));

  }

  function showAboutTab(activeDiv) {
    $("#about-tab>div").hide();
    $(activeDiv).show();
  }

  $("#about-tab>ul>li >a").click(changeAboutTab);
  $("#about-tab>ul>li:eq(0)>a").click();

});

// FOR RESOURCES SUB-NAV
$(function($) {
  function changeResourcesTab(e) {
    e.preventDefault();
    $("#resources-tab>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showResourcesTab($(this).attr("href"));

  }

  function showResourcesTab(activeDiv) {
    $("#resources-tab>div").hide();
    $(activeDiv).show();
  }

  $("#resources-tab>ul>li>a").click(changeResourcesTab);
  $("#resources-tab>ul>li:eq(0)>a").click();

});

// FOR THE DICTIONARY SELECTOR
$(function($) {
  function changeDictionaryTab(e) {
    e.preventDefault();
    $("#solar-dictionary-tab>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showDictionaryTab($(this).attr("href"));

  }

  function showDictionaryTab(activeDictionaryDiv) {
    $("#solar-dictionary-tab>div").hide();
    $(activeDictionaryDiv).show();
    $(".download").show();
  }

  $("#solar-dictionary-tab>ul>li>a").click(changeDictionaryTab);
  $("#solar-dictionary-tab>ul>li:eq(0)>a").click();

});

// FOR THE FAQ SELECTOR
$(function($) {
  function changefaqTab(e) {
    e.preventDefault();
    $("#solar-faq-tab>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showfaqTab($(this).attr("href"));

  }

  function showfaqTab(activefaqDiv) {
    $("#solar-faq-tab>div").hide();
    $(activefaqDiv).show();
    $(".download").show();
  }

  $("#solar-faq-tab>ul>li>a").click(changefaqTab);
  $("#solar-faq-tab>ul>li:eq(0)>a").click();

});



$(document).ready(function() {
  $("#lightSlider").lightSlider({
    slideMargin:20,
    gallery:true,
    currentPagerPosition:'middle',
    slideMove:1,
    minSlide:1,
    maxSlide:1,
   });
});

$(document).ready(function(){
$('#nav-main>li>a').click(
    function(e)
    {
        $('#nav-main>li>a').removeClass('active');
        $(e.currentTarget).addClass('active');
    }
);
});

$(function($) {
  function changeInstallationsTab(e) {
    e.preventDefault();
    $("#installations-tab>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showInstallationsTab($(this).attr("href"));

  }

  function showInstallationsTab(activeDiv) {
    $("#installations-tab>div").hide();
    $(activeDiv).show();
  }

  $("#installations-tab>ul#sub-nav>li>a").click(changeInstallationsTab);
  $("#installations-tab>ul#sub-nav>li:eq(0)>a").click();

});



// WAYPOINTS - couldn't get this to work
$('').waypoint(function() {
  notify('Basic example callback triggered.');
});