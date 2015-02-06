$(document).ready(function($) {
  function changeInitiativeTab(e) {
    e.preventDefault();
    $(".linkbar>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showInitiativeTab($(this).attr("href"));

  }

  function showInitiativeTab(activeDiv) {
    $("#main-content>div").hide();
    $(activeDiv).show();
  }

  $(".linkbar>ul>li>a").click(changeInitiativeTab);
  $(".linkbar>ul>li:eq(0)>a").click();

});