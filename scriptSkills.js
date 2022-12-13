document.getElementById("computerList").style.visibility = "hidden";
document.getElementById("languageList").style.visibility = "hidden";
document.getElementById("sportList").style.visibility = "hidden";
document.getElementById("honorsList").style.visibility = "hidden";
document.getElementsByClassName("footer")[0].style.position = "fixed";
document.getElementsByClassName("footer")[0].style.bottom = "0";
document.getElementsByClassName("footer")[0].style.width = "100%";
document.getElementsByClassName("fa-angle-up")[0].style.display = "none";
document.getElementsByClassName("fa-angle-up")[1].style.display = "none";
document.getElementsByClassName("fa-angle-up")[2].style.display = "none";
document.getElementsByClassName("fa-angle-up")[3].style.display = "none";

function hideOrShow(id) {
  var box = document.getElementById(id);
  if (box.style.visibility == "hidden") {
    box.style.visibility = "visible";
    if (id == "computerList") {
      document.getElementsByClassName("footer")[0].style.position = "initial";
    }
    switch (id) {
      case "computerList":
        document.getElementsByClassName("fa-angle-up")[0].style.display =
          "inline";
        document.getElementsByClassName("fa-angle-down")[0].style.display =
          "none";
        break;
      case "languageList":
        document.getElementsByClassName("fa-angle-up")[1].style.display =
          "inline";
        document.getElementsByClassName("fa-angle-down")[1].style.display =
          "none";
        break;
      case "sportList":
        document.getElementsByClassName("fa-angle-up")[2].style.display =
          "inline";
        document.getElementsByClassName("fa-angle-down")[2].style.display =
          "none";
        break;
      case "honorsList":
        document.getElementsByClassName("fa-angle-up")[3].style.display =
          "inline";
        document.getElementsByClassName("fa-angle-down")[3].style.display =
          "none";
        break;
      default:
        break;
    }
  } else {
    box.style.visibility = "hidden";
    if (id == "computerList") {
      document.getElementsByClassName("footer")[0].style.position = "fixed";
      document.getElementsByClassName("footer")[0].style.bottom = "0";
      document.getElementsByClassName("footer")[0].style.width = "100%";
    }
    switch (id) {
      case "computerList":
        document.getElementsByClassName("fa-angle-up")[0].style.display =
          "none";
        document.getElementsByClassName("fa-angle-down")[0].style.display =
          "inline";
        break;
      case "languageList":
        document.getElementsByClassName("fa-angle-up")[1].style.display =
          "none";
        document.getElementsByClassName("fa-angle-down")[1].style.display =
          "inline";
        break;
      case "sportList":
        document.getElementsByClassName("fa-angle-up")[2].style.display =
          "none";
        document.getElementsByClassName("fa-angle-down")[2].style.display =
          "inline";
        break;
      case "honorsList":
        document.getElementsByClassName("fa-angle-up")[3].style.display =
          "none";
        document.getElementsByClassName("fa-angle-down")[3].style.display =
          "inline";
        break;
      default:
        break;
    }
  }
}
