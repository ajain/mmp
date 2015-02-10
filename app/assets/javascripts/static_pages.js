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

// $(document).ready(function($) {
//   function changeInitiativeTab(e) {
//     e.preventDefault();
//     $(".linkbar>ul>li>a.active").removeClass("active");
//     $(this).addClass("active");
//     showInitiativeTab($(this).attr("href"));

//   }

//   function showInitiativeTab(activeDiv) {
//     $("#main-content>div").hide();
//     $(activeDiv).show();
//   }

//   $(".footer-2015>a").click(changeInitiativeTab);

// });

$(document).ready(function($) {
  function changeInstallerTab(e) {
    e.preventDefault();
    $(".installers>ul>li>a.active").removeClass("active");
    $(this).addClass("active");
    showInstallerTab($(this).attr("href"));

  }

  function showInstallerTab(activeDiv) {
    $(".installer-details>div").hide();
    $(activeDiv).show();
  }

  $(".installers>ul>li>a").click(changeInstallerTab);
  $(".installers>ul>li:eq(0)>a").click();

});