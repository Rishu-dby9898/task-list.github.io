function boom() {
    var lim = document.createElement("li");
    var txt = document.getElementById("1").value;
    var t1 = document.createTextNode(txt);


    lim.append(t1);


    if (txt === "") {
        alert("please input value");
    }
    else {
        document.getElementById("3").appendChild(lim);
    }
    document.getElementById("1").value = "";

    
}