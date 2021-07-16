function myfunction(){
    format = document.getElementById("input").value;
    switch(format){
      case "Test":
      case "test":
        var existence = document.getElementById("testruns").innerHTML;
        var current = document.getElementById("input1").value;
        var total = parseFloat(existence) + parseFloat(current)
        document.getElementById("testruns").innerHTML=total
        break;
      case "ODI":
      case "odi":
      case "Odi":
        var existence = document.getElementById("odiruns").innerHTML;
        var current = document.getElementById("input1").value;
        var total1 = parseFloat(existence) + parseFloat(current)
        document.getElementById("odiruns").innerHTML=total1;
        break;
      case "T20":
      case "t20":
        var existence = document.getElementById("t20runs").innerHTML;
        var current = document.getElementById("input1").value;
        var total2 = parseFloat(existence) + parseFloat(current)
        document.getElementById("t20runs").innerHTML=total2;
        break;
      case "IPL":
      case "ipl":
      case "Ipl":
        var existence = document.getElementById("iplruns").innerHTML;
        var current = document.getElementById("input1").value;
        var total3 = parseFloat(existence) + parseFloat(current)
        document.getElementById("iplruns").innerHTML=total3;
        break;
    }
  }