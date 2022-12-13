document.getElementById("hiddenBox").style.display = "none";

function hideOrShow() {
    var box = document.getElementById("hiddenBox");
    if (box.style.display == "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}