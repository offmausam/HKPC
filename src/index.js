import "bootstrap";
import "./sass/main.scss";

$(document).ready(function () {
  $("#mobileIcon").click(function () {
    $(this).toggleClass("open");
  });
});
