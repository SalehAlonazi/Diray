    var container = document.getElementById("2Container");
    var containerM = document.getElementById("Container");

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;





    var dateTime = date + ' ' + strTime;
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
        p.after(dateTime)
        // p.insertAdjacentText("afterend",dateTime)
    
    }
}
