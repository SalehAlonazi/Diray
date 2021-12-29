    var container = document.getElementById("2Container");
    var containerM = document.getElementById("Container");

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = (today.getHours())/12 + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;


function newElement() {

    var cardCon = document.getElementById("cardss");
    var inputTitle = document.getElementById("Title").value;
    var inputSubject = document.getElementById("subject").value;

    if (inputTitle === "" || inputSubject === "") {
        alert("you have to enter somthing for me to work")
    } else {
        var d = document.createElement
        var carddiv = document.createElement("div");
        carddiv.setAttribute("class", "card")
        cardCon.appendChild(carddiv)
        var div = document.createElement("div");
        div.setAttribute("class", "card-body")
        carddiv.appendChild(div)
        var h5 = document.createElement("h5")
        var p = document.createElement("p")
        h5.setAttribute("class", "card-title")
        p.setAttribute("class", "card-text")
        div.appendChild(h5)
        div.appendChild(p)
        var t = document.createTextNode(inputTitle);
        var ts = document.createTextNode(inputSubject)
        h5.appendChild(t);
        p.appendChild(ts)
        p.insertAdjacentText("afterend",dateTime)
    
    }
}
