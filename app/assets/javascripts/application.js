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



$(function($) {
  function changeTab(e) {
    e.preventDefault();
    $("#tab ul li a.active").removeClass("active");
    $(this).addClass("active");
    showTab($(this).attr("href"));

  }

  function showTab(activeDiv) {
    $("#tab div").hide();
    $(activeDiv).show();
  }

  $("#tab li a").click(changeTab);
  $("#tab ul li:eq(0) a").click();

});

$(function($) {
  function changeTab(e) {
    e.preventDefault();
    $("#rtab ul li a.active").removeClass("active");
    $(this).addClass("active");
    showTab($(this).attr("href"));

  }

  function showTab(activeDiv) {
    $("#rtab div").hide();
    $(activeDiv).show();
  }

  $("#rtab li a").click(changeTab);
  $("#rtab ul li:eq(0) a").click();

});

