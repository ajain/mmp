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
//= require turbolinks
//= require jgallery.min
//= require tinycolor-0.9.16.min
//= require_tree .




jQuery(function($) {
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

  $("#installations-tab>ul>li>a").click(changeInstallationsTab);
  $("#installations-tab>ul>li:eq(0)>a").click();

});

$( function(){
    $( "#gallery" ).jGallery( {
        "transition":"scaleDownCenter_scaleUpCenter",
        "transitionBackward":"scaleDownUp_scaleUp",
        "transitionCols":"1",
        "transitionRows":"1",
        "thumbnailsPosition":"left",
        "thumbType":"image",
        "backgroundColor":"black",
        "textColor":"white",
        "mode":"standard"
    } );
} );