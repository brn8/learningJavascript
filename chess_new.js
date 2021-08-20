var b = document.getElementById("body");
var t = document.createElement("table");
b.appendChild(t);
function main (){
    tr1();
    tr2();
    tr3();
    tr4();
    tr5();
    tr6();
    tr7();
    tr8();
}
main();

function flipColors(currentColor) {
    if (currentColor == "white") {
        return "grey";
    }
    if (curentColor == "grey") {
        return "white";
    }
}

function createTD(id, bgColor, name) {
    var td = document.createElement("td");
    td.id = id
    td. width = "150px";
    td.height = "150px";
    td.bgColor = bgColor;
    td.style = "font-size: 140px";
    if (name != undefined) {
        td.innerHTML = name;
    }
    return td
}

function createRow(currentColor) {
    for(let i = 0; i < 8; i++) {
        createTD(currentColor)
        currentColor = flipColors(currentColor);
    }
}

function tr1(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var name = ["&#9820","&#9822","&#9821","&#9819","&#9818","&#9821","&#9822","&#9820"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    for (let i=0; i<8; i++){
        let id = arr[i]+"8";
        let bgColor = (i%2==0)?"grey":"white";
        let td = createTD(id, bgColor, name[i])
        tr.appendChild(td);
    }
}
function tr2(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        let id = arr[i]+"8";
        let bgColor = (i%2==0)?"grey":"white";
        let td = createTD(id, bgColor, name[i])
        tr.appendChild(td);
    }
    
}
function tr3(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"6";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==0)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
    }
    
}
function tr4(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"5s";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==1)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
    }
    
}
function tr5(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"4";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==0)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
    }
    
}
function tr6(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"3";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==1)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
    }
    
}
function tr7(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"2";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==0)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
        td.innerHTML = "&#9817";
    }
    
}
function tr8(){
    var arr = ["a","b","c","d","e","f","g","h"];
    var name = ["&#9814","&#9816","&#9815","&#9813","&#9812","&#9815","&#9816","&#9814"];
    var tr = document.createElement("tr");
    t.appendChild(tr);
    
    for (let i=0; i<8; i++){
        var td = document.createElement("td");
        tr.appendChild(td);
        td.id = arr[i]+"1";
        td.width = "150px";
        td.height = "150px";
        td.bgColor = (i%2==1)?"grey":"white";
        // td.fontsize = "150px";
        td.style = "font-size:140px";
        td.innerHTML = name[i];
    }
    
}
