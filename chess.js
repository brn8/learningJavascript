var b = document.getElementById("body");
var t = document.createElement("table");
b.appendChild(t);

function creatingTD(id, bgColor, name){
    var td = document.createElement("td");
    td.id=id;
    td.width = "150px";
    td.height = "150px";
    td.bgColor = bgColor;
    td.fontsize = "150px";
    td.style = "font-size:140px";
    td.setAttribute("onclick","myfunction("+id+")");
    td.className = name;
    if(name != undefined){
        td.innerHTML = name;
    }
    return td

}
function chessBoard(){
    for (let i=0; i<8; i++){
        var arr = ["a","b","c","d","e","f","g","h"];
        var pieces = [];
        pieces[7] = ["&#9820","&#9822","&#9821","&#9819","&#9818","&#9821","&#9822","&#9820"];
        pieces[6]= "&#9823";
        pieces[1] = "&#9817";
        pieces[0]= ["&#9814","&#9816","&#9815","&#9813","&#9812","&#9815","&#9816","&#9814"];
        tr(arr,i,pieces[i]);
    }
}
chessBoard();

function tr(arr,color,name){
    var tr = document.createElement("tr");
    t.appendChild(tr);
    for (let i=0; i<8; i++){
        var td = creatingTD(arr[i]+(8-color),(color%2==(color%2) && i%2==(color%2))?"grey":"white",(color==0||color==7)?name[i]:name);
        tr.appendChild(td);
    } 
}

function myfunction(id){
    var ids = id;
    var arr = ["a","b","c","d","e","f","g","h"];
    console.log(ids.className)
    console.log(document.getElementById(ids.id[0]+(parseFloat(ids.id[1]))));
    console.log(document.getElementById(ids.id[0]+(parseFloat(ids.id[1]))).className);
    if(document.getElementById(ids.id[0]+(parseFloat(ids.id[1]))).className=="&#9823" && document.getElementById(ids.id[0]+(parseFloat(ids.id[1])+1)).className=="undefined"){
        document.getElementById(ids.id[0]+(parseFloat(ids.id[1])+1)).bgColor="red";
    }

    if(document.getElementById(ids.id[0]+(parseFloat(ids.id[1]))).bgColor=="red" && document.getElementById(ids.id[0]+(parseFloat(ids.id[1]-1))).className=="&#9823"){
        ids.innerHTML="&#9823";
        ids.className="&#9823";
        document.getElementById(ids.id[0]+(parseFloat(ids.id[1])-1)).innerHTML="";
        document.getElementById(ids.id[0]+(parseFloat(ids.id[1])-1)).className="undefined";
        (document.getElementById(ids.id[0]+(parseFloat(ids.id[1])+1)).bgColor=="grey")?ids.bgColor="white":ids.bgColor="grey";
    }


    if(document.getElementById(String.fromCharCode(ids.id[0].charCodeAt(0) + 1)+(parseFloat(ids.id[1])+1)).className=="&#9817" && ids.className=="&#9823"){
        document.getElementById(String.fromCharCode(ids.id[0].charCodeAt(0) + 1)+(parseFloat(ids.id[1])+1)).bgColor="red";
    }
    if(ids.bgColor=="red" && ids.className=="&#9817"){
        ids.innerHTML="&#9823";
        ids.className="&#9823"; 
        document.getElementById(String.fromCharCode(ids.id[0].charCodeAt(0) - 1)+(parseFloat(ids.id[1])-1)).innerHTML="";
        document.getElementById(String.fromCharCode(ids.id[0].charCodeAt(0) - 1)+(parseFloat(ids.id[1])-1)).className="undefined";
    }

}
//-----------------------------------------------------------
// var tr8 = document.createElement("tr");
// t.appendChild(tr8);

// var tda8 = document.createElement("td");
// tr8.appendChild(tda8);
// tda8.id = "a8";
// tda8.width = "150px";
// tda8.height = "150px";
// tda8.bgColor = "grey";
// tda8.fontsize = "150px";
// tda8.style = "font-size:140px";
// tda8.innerHTML = "&#9820";

// var tdb8 = document.createElement("td");
// tr8.appendChild(tdb8);
// tdb8.id = "b8";
// tdb8.width = "150px";
// tdb8.height = "150px";
// tdb8.fontsize = "150px";
// tdb8.style = "font-size:140px";
// tdb8.innerHTML = "&#9822";

// var tdc8 = document.createElement("td");
// tr8.appendChild(tdc8);
// tdc8.id = "c8";
// tdc8.width = "150px";
// tdc8.height = "150px";
// tdc8.bgColor = "grey";
// tdc8.fontsize = "150px";
// tdc8.style = "font-size:140px";
// tdc8.innerHTML = "&#9821";

// var tdd8 = document.createElement("td");
// tr8.appendChild(tdd8);
// tdd8.id = "d8";
// tdd8.width = "150px";
// tdd8.height = "150px";
// tdd8.fontsize = "150px";
// tdd8.style = "font-size:140px";
// tdd8.innerHTML = "&#9819";

// var tde8 = document.createElement("td");
// tr8.appendChild(tde8);
// tde8.id = "e8";
// tde8.width = "150px";
// tde8.height = "150px";
// tde8.bgColor = "grey";
// tde8.fontsize = "150px";
// tde8.style = "font-size:140px";
// tde8.innerHTML = "&#9818";

// var tdf8 = document.createElement("td");
// tr8.appendChild(tdf8);
// tdf8.id = "f8";
// tdf8.width = "150px";
// tdf8.height = "150px";
// tdf8.fontsize = "150px";
// tdf8.style = "font-size:140px";
// tdf8.innerHTML = "&#9821";

// var tdg8 = document.createElement("td");
// tr8.appendChild(tdg8);
// tdg8.id = "g8";
// tdg8.width = "150px";
// tdg8.height = "150px";
// tdg8.bgColor = "grey";
// tdg8.fontsize = "150px";
// tdg8.style = "font-size:140px";
// tdg8.innerHTML = "&#9822";

// var tdh8 = document.createElement("td");
// tr8.appendChild(tdh8);
// tdh8.id = "h8";
// tdh8.width = "150px";
// tdh8.height = "150px";
// tdh8.fontsize = "150px";
// tdh8.style = "font-size:140px";
// tdh8.innerHTML = "&#9820";
// //-----------------------------------------------------------
// var tr7 = document.createElement("tr");
// t.appendChild(tr7);

// var tda7 = document.createElement("td");
// tr7.appendChild(tda7);
// tda7.id = "a7";
// tda7.width = "150px";
// tda7.height = "150px";
// tda7.fontsize = "150px";
// tda7.style = "font-size:140px";
// tda7.innerHTML = "&#9823";

// var tdb7 = document.createElement("td");
// tr7.appendChild(tdb7);
// tdb7.id = "b7";
// tdb7.width = "150px";
// tdb7.height = "150px";
// tdb7.bgColor = "grey";
// tdb7.fontsize = "150px";
// tdb7.style = "font-size:140px";
// tdb7.innerHTML = "&#9823";

// var tdc7 = document.createElement("td");
// tr7.appendChild(tdc7);
// tdc7.id = "c7";
// tdc7.width = "150px";
// tdc7.height = "150px";
// tdc7.fontsize = "150px";
// tdc7.style = "font-size:140px";
// tdc7.innerHTML = "&#9823";

// var tdd7 = document.createElement("td");
// tr7.appendChild(tdd7);
// tdd7.id = "d7";
// tdd7.width = "150px";
// tdd7.height = "150px";
// tdd7.bgColor = "grey";
// tdd7.fontsize = "150px";
// tdd7.style = "font-size:140px";
// tdd7.innerHTML = "&#9823";

// var tde7 = document.createElement("td");
// tr7.appendChild(tde7);
// tde7.id = "e7";
// tde7.width = "150px";
// tde7.height = "150px";
// tde7.fontsize = "150px";
// tde7.style = "font-size:140px";
// tde7.innerHTML = "&#9823";

// var tdf7 = document.createElement("td");
// tr7.appendChild(tdf7);
// tdf7.id = "f7";
// tdf7.width = "150px";
// tdf7.height = "150px";
// tdf7.bgColor = "grey";
// tdf7.fontsize = "150px";
// tdf7.style = "font-size:140px";
// tdf7.innerHTML = "&#9823";

// var tdg7 = document.createElement("td");
// tr7.appendChild(tdg7);
// tdg7.id = "g7";
// tdg7.width = "150px";
// tdg7.height = "150px";
// tdg7.fontsize = "150px";
// tdg7.style = "font-size:140px";
// tdg7.innerHTML = "&#9823";

// var tdh7 = document.createElement("td");
// tr7.appendChild(tdh7);
// tdh7.id = "h7";
// tdh7.width = "150px";
// tdh7.height = "150px";
// tdh7.bgColor = "grey";
// tdh7.fontsize = "150px";
// tdh7.style = "font-size:140px";
// tdh7.innerHTML = "&#9823";
// //-----------------------------------------------------------
// var tr6 = document.createElement("tr");
// t.appendChild(tr6);

// var tda6 = document.createElement("td");
// tr6.appendChild(tda6);
// tda6.id = "a6";
// tda6.width = "150px";
// tda6.height = "150px";
// tda6.bgColor = "grey";
// tda6.fontsize = "150px";
// tda6.style = "font-size:140px";

// var tdb6 = document.createElement("td");
// tr6.appendChild(tdb6);
// tdb6.id = "b6";
// tdb6.width = "150px";
// tdb6.height = "150px";
// tdb6.fontsize = "150px";
// tdb6.style = "font-size:140px";


// var tdc6 = document.createElement("td");
// tr6.appendChild(tdc6);
// tdc6.id = "c6";
// tdc6.width = "150px";
// tdc6.height = "150px";
// tdc6.bgColor = "grey";
// tdc6.fontsize = "150px";
// tdc6.style = "font-size:140px";


// var tdd6 = document.createElement("td");
// tr6.appendChild(tdd6);
// tdd6.id = "d6";
// tdd6.width = "150px";
// tdd6.height = "150px";
// tdd6.fontsize = "150px";
// tdd6.style = "font-size:140px";


// var tde6 = document.createElement("td");
// tr6.appendChild(tde6);
// tde6.id = "e6";
// tde6.width = "150px";
// tde6.height = "150px";
// tde6.bgColor = "grey";
// tde6.fontsize = "150px";
// tde6.style = "font-size:140px";


// var tdf6 = document.createElement("td");
// tr6.appendChild(tdf6);
// tdf6.id = "f6";
// tdf6.width = "150px";
// tdf6.height = "150px";
// tdf6.fontsize = "150px";
// tdf6.style = "font-size:140px";


// var tdg6 = document.createElement("td");
// tr6.appendChild(tdg6);
// tdg6.id = "g6";
// tdg6.width = "150px";
// tdg6.height = "150px";
// tdg6.bgColor = "grey";
// tdg6.fontsize = "150px";
// tdg6.style = "font-size:140px";

// var tdh6 = document.createElement("td");
// tr6.appendChild(tdh6);
// tdh6.id = "h6";
// tdh6.width = "150px";
// tdh6.height = "150px";
// tdh6.fontsize = "150px";
// tdh6.style = "font-size:140px";
// //-----------------------------------------------------------
// var tr5 = document.createElement("tr");
// t.appendChild(tr5);

// var tda5 = document.createElement("td");
// tr5.appendChild(tda5);
// tda5.id = "a5";
// tda5.width = "150px";
// tda5.height = "150px";
// tda5.fontsize = "150px";
// tda5.style = "font-size:140px";

// var tdb5 = document.createElement("td");
// tr5.appendChild(tdb5);
// tdb5.id = "b5";
// tdb5.width = "150px";
// tdb5.height = "150px";
// tdb5.bgColor = "grey";
// tdb5.fontsize = "150px";
// tdb5.style = "font-size:140px";


// var tdc5 = document.createElement("td");
// tr5.appendChild(tdc5);
// tdc5.id = "c5";
// tdc5.width = "150px";
// tdc5.height = "150px";
// tdc5.fontsize = "150px";
// tdc5.style = "font-size:140px";


// var tdd5 = document.createElement("td");
// tr5.appendChild(tdd5);
// tdd5.id = "d5";
// tdd5.width = "150px";
// tdd5.height = "150px";
// tdd5.bgColor = "grey";
// tdd5.fontsize = "150px";
// tdd5.style = "font-size:140px";


// var tde5 = document.createElement("td");
// tr5.appendChild(tde5);
// tde5.id = "e5";
// tde5.width = "150px";
// tde5.height = "150px";
// tde5.fontsize = "150px";
// tde5.style = "font-size:140px";


// var tdf5 = document.createElement("td");
// tr5.appendChild(tdf5);
// tdf5.id = "f5";
// tdf5.width = "150px";
// tdf5.height = "150px";
// tdf5.bgColor = "grey";
// tdf5.fontsize = "150px";
// tdf5.style = "font-size:140px";


// var tdg5 = document.createElement("td");
// tr5.appendChild(tdg5);
// tdg5.id = "g5";
// tdg5.width = "150px";
// tdg5.height = "150px";
// tdg5.fontsize = "150px";
// tdg5.style = "font-size:140px";


// var tdh5 = document.createElement("td");
// tr5.appendChild(tdh5);
// tdh5.id = "h5";
// tdh5.width = "150px";
// tdh5.height = "150px";
// tdh5.bgColor = "grey";
// tdh5.fontsize = "150px";
// tdh5.style = "font-size:140px";
// //-----------------------------------------------------------
// var tr4 = document.createElement("tr");
// t.appendChild(tr4);

// var tda4 = document.createElement("td");
// tr4.appendChild(tda4);
// tda4.id = "a4";
// tda4.width = "150px";
// tda4.height = "150px";
// tda4.bgColor = "grey";
// tda4.fontsize = "150px";
// tda4.style = "font-size:140px";

// var tdb4 = document.createElement("td");
// tr4.appendChild(tdb4);
// tdb4.id = "b4";
// tdb4.width = "150px";
// tdb4.height = "150px";
// tdb4.fontsize = "150px";
// tdb4.style = "font-size:140px";


// var tdc4 = document.createElement("td");
// tr4.appendChild(tdc4);
// tdc4.id = "c4";
// tdc4.width = "150px";
// tdc4.height = "150px";
// tdc4.bgColor = "grey";
// tdc4.fontsize = "150px";
// tdc4.style = "font-size:140px";


// var tdd4 = document.createElement("td");
// tr4.appendChild(tdd4);
// tdd4.id = "d4";
// tdd4.width = "150px";
// tdd4.height = "150px";
// tdd4.fontsize = "150px";
// tdd4.style = "font-size:140px";


// var tde4 = document.createElement("td");
// tr4.appendChild(tde4);
// tde4.id = "e4";
// tde4.width = "150px";
// tde4.height = "150px";
// tde4.bgColor = "grey";
// tde4.fontsize = "150px";
// tde4.style = "font-size:140px";


// var tdf4 = document.createElement("td");
// tr4.appendChild(tdf4);
// tdf4.id = "f4";
// tdf4.width = "150px";
// tdf4.height = "150px";
// tdf4.fontsize = "150px";
// tdf4.style = "font-size:140px";


// var tdg4 = document.createElement("td");
// tr4.appendChild(tdg4);
// tdg4.id = "g4";
// tdg4.width = "150px";
// tdg4.height = "150px";
// tdg4.bgColor = "grey";
// tdg4.fontsize = "150px";
// tdg4.style = "font-size:140px";

// var tdh4 = document.createElement("td");
// tr4.appendChild(tdh4);
// tdh4.id = "h4";
// tdh4.width = "150px";
// tdh4.height = "150px";
// tdh4.fontsize = "150px";
// tdh4.style = "font-size:140px";
// //-----------------------------------------------------------
// var tr3 = document.createElement("tr");
// t.appendChild(tr3);

// var tda3 = document.createElement("td");
// tr3.appendChild(tda3);
// tda3.id = "a3";
// tda3.width = "150px";
// tda3.height = "150px";
// tda3.fontsize = "150px";
// tda3.style = "font-size:140px";

// var tdb3 = document.createElement("td");
// tr3.appendChild(tdb3);
// tdb3.id = "b3";
// tdb3.width = "150px";
// tdb3.height = "150px";
// tdb3.bgColor = "grey";
// tdb3.fontsize = "150px";
// tdb3.style = "font-size:140px";


// var tdc3 = document.createElement("td");
// tr3.appendChild(tdc3);
// tdc3.id = "c3";
// tdc3.width = "150px";
// tdc3.height = "150px";
// tdc3.fontsize = "150px";
// tdc3.style = "font-size:140px";


// var tdd3 = document.createElement("td");
// tr3.appendChild(tdd3);
// tdd3.id = "d3";
// tdd3.width = "150px";
// tdd3.height = "150px";
// tdd3.bgColor = "grey";
// tdd3.fontsize = "150px";
// tdd3.style = "font-size:140px";


// var tde3 = document.createElement("td");
// tr3.appendChild(tde3);
// tde3.id = "e3";
// tde3.width = "150px";
// tde3.height = "150px";
// tde3.fontsize = "150px";
// tde3.style = "font-size:140px";


// var tdf3 = document.createElement("td");
// tr3.appendChild(tdf3);
// tdf3.id = "f3";
// tdf3.width = "150px";
// tdf3.height = "150px";
// tdf3.bgColor = "grey";
// tdf3.fontsize = "150px";
// tdf3.style = "font-size:140px";


// var tdg3 = document.createElement("td");
// tr3.appendChild(tdg3);
// tdg3.id = "g3";
// tdg3.width = "150px";
// tdg3.height = "150px";
// tdg3.fontsize = "150px";
// tdg3.style = "font-size:140px";


// var tdh3 = document.createElement("td");
// tr3.appendChild(tdh3);
// tdh3.id = "h3";
// tdh3.width = "150px";
// tdh3.height = "150px";
// tdh3.bgColor = "grey";
// tdh3.fontsize = "150px";
// tdh3.style = "font-size:140px";
// //-----------------------------------------------------------
// var tr2 = document.createElement("tr");
// t.appendChild(tr2);

// var tda2 = document.createElement("td");
// tr2.appendChild(tda2);
// tda2.id = "a2";
// tda2.width = "150px";
// tda2.height = "150px";
// tda2.bgColor = "grey";
// tda2.fontsize = "150px";
// tda2.style = "font-size:140px";
// tda2.innerHTML = "&#9823";

// var tdb2 = document.createElement("td");
// tr2.appendChild(tdb2);
// tdb2.id = "b2";
// tdb2.width = "150px";
// tdb2.height = "150px";
// tdb2.fontsize = "150px";
// tdb2.style = "font-size:140px";
// tdb2.innerHTML = "&#9823";

// var tdc2 = document.createElement("td");
// tr2.appendChild(tdc2);
// tdc2.id = "c2";
// tdc2.width = "150px";
// tdc2.height = "150px";
// tdc2.bgColor = "grey";
// tdc2.fontsize = "150px";
// tdc2.style = "font-size:140px";
// tdc2.innerHTML = "&#9823";

// var tdd2 = document.createElement("td");
// tr2.appendChild(tdd2);
// tdd2.id = "d2";
// tdd2.width = "150px";
// tdd2.height = "150px";
// tdd2.fontsize = "150px";
// tdd2.style = "font-size:140px";
// tdd2.innerHTML = "&#9823";

// var tde2 = document.createElement("td");
// tr2.appendChild(tde2);
// tde2.id = "e2";
// tde2.width = "150px";
// tde2.height = "150px";
// tde2.bgColor = "grey";
// tde2.fontsize = "150px";
// tde2.style = "font-size:140px";
// tde2.innerHTML = "&#9823";

// var tdf2 = document.createElement("td");
// tr2.appendChild(tdf2);
// tdf2.id = "f2";
// tdf2.width = "150px";
// tdf2.height = "150px";
// tdf2.fontsize = "150px";
// tdf2.style = "font-size:140px";
// tdf2.innerHTML = "&#9823";

// var tdg2 = document.createElement("td");
// tr2.appendChild(tdg2);
// tdg2.id = "g2";
// tdg2.width = "150px";
// tdg2.height = "150px";
// tdg2.bgColor = "grey";
// tdg2.fontsize = "150px";
// tdg2.style = "font-size:140px";
// tdg2.innerHTML = "&#9823";

// var tdh2 = document.createElement("td");
// tr2.appendChild(tdh2);
// tdh2.id = "h2";
// tdh2.width = "150px";
// tdh2.height = "150px";
// tdh2.fontsize = "150px";
// tdh2.style = "font-size:140px";
// tdh2.innerHTML = "&#9823";
// //-----------------------------------------------------------
// var tr1 = document.createElement("tr");
// t.appendChild(tr1);

// var tda1 = document.createElement("td");
// tr1.appendChild(tda1);
// tda1.id = "a1";
// tda1.width = "150px";
// tda1.height = "150px";
// tda1.fontsize = "150px";
// tda1.style = "font-size:140px";
// tda1.innerHTML = "&#9820";

// var tdb1 = document.createElement("td");
// tr1.appendChild(tdb1);
// tdb1.id = "b1";
// tdb1.width = "150px";
// tdb1.height = "150px";
// tdb1.bgColor = "grey";
// tdb1.fontsize = "150px";
// tdb1.style = "font-size:140px";
// tdb1.innerHTML = "&#9822";

// var tdc1 = document.createElement("td");
// tr1.appendChild(tdc1);
// tdc1.id = "c1";
// tdc1.width = "150px";
// tdc1.height = "150px";
// tdc1.fontsize = "150px";
// tdc1.style = "font-size:140px";
// tdc1.innerHTML = "&#9821";

// var tdd1 = document.createElement("td");
// tr1.appendChild(tdd1);
// tdd1.id = "d1";
// tdd1.width = "150px";
// tdd1.height = "150px";
// tdd1.bgColor = "grey";
// tdd1.fontsize = "150px";
// tdd1.style = "font-size:140px";
// tdd1.innerHTML = "&#9819";

// var tde1 = document.createElement("td");
// tr1.appendChild(tde1);
// tde1.id = "e1";
// tde1.width = "150px";
// tde1.height = "150px";
// tde1.fontsize = "150px";
// tde1.style = "font-size:140px";
// tde1.innerHTML = "&#9818";

// var tdf1 = document.createElement("td");
// tr1.appendChild(tdf1);
// tdf1.id = "f1";
// tdf1.width = "150px";
// tdf1.height = "150px";
// tdf1.bgColor = "grey";
// tdf1.fontsize = "150px";
// tdf1.style = "font-size:140px";
// tdf1.innerHTML = "&#9821";

// var tdg1 = document.createElement("td");
// tr1.appendChild(tdg1);
// tdg1.id = "g1";
// tdg1.width = "150px";
// tdg1.height = "150px";
// tdg1.fontsize = "150px";
// tdg1.style = "font-size:140px";
// tdg1.innerHTML = "&#9822";

// var tdh1 = document.createElement("td");
// tr1.appendChild(tdh1);
// tdh1.id = "h1";
// tdh1.width = "150px";
// tdh1.height = "150px";
// tdh1.bgColor = "grey";
// tdh1.fontsize = "150px";
// tdh1.style = "font-size:140px";
// tdh1.innerHTML = "&#9820";
// //-----------------------------------------------------------