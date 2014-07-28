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
//= require_tree .



jQuery(function($) {
  function changeAboutTab(e) {
    e.preventDefault();
    $("#about-tab ul li a.active").removeClass("active");
    $(this).addClass("active");
    showAboutTab($(this).attr("href"));

  }

  function showAboutTab(activeDiv) {
    $("#about-tab div").hide();
    $(activeDiv).show();
  }

  $("#about-tab ul li a").click(changeAboutTab);
  $("#about-tab ul li:eq(0) a").click();

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

  function showDictionaryTab(activeDiv) {
    $("#solar-dictionary-tab>div").hide();
    $(activeDiv).show();
  }

  $("#solar-dictionary-tab>ul>li>a").click(changeDictionaryTab);
  $("#solar-dictionary-tab>ul>li:eq(0)>a").click();

});
