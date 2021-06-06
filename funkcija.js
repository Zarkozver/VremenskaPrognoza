function NovaProg() {
    var l = document.getElementById("ddlist");
    var sg = l.options[l.selectedIndex].value;
    document.getElementById("prognoza").src = "https://naslovi.net/vremenska-prognoza/" + sg;
}