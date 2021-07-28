function myfunction(){
    format = document.getElementById("input").value;
    if(format==""){
      alert("Format name must be filled out");
      return false;
    }
    switch(format){
      case "Test":
      case "test":
        var existence = document.getElementById("testruns").innerHTML;
        var current = document.getElementById("input1").value;
        var inn = document.getElementById('testinn').innerHTML;
        var matchPlayed = document.getElementById('match').value; 
        var match = document.getElementById("testmatch").innerHTML;
        var notout = document.getElementById('testnotout').innerHTML;
        var notoutPlayer = document.getElementById('notout').value;
        var inningPlayed= document.getElementById("inn").value;
        var ballfaced = document.getElementById("ballfaced").value;
        var ballfacedPlayer = document.getElementById("testballfaced").innerHTML;
        if(matchPlayed==""){
          alert("Match played must be filled out");
          return false;
        }
        if(matchPlayed=="yes"||matchPlayed=="YES"|| matchPlayed=="Yes"){
          document.getElementById("testmatch").innerHTML=parseFloat(match)+1;
          if(current%1==0 && current>=0){
            if(inningPlayed=="yes"||inningPlayed=="YES"|| inningPlayed=="Yes"){
              if(notoutPlayer==""){
                alert("Please enter if Rohit was out or not");
                return false;
              }
              if(current==""){
                alert("please enter the runs");
                return false;
              }
              if(ballfaced==""){
                alert("please enter number of ball faced");
                return false;
              }
              if(notoutPlayer=="no"|| notoutPlayer=="No"||notoutPlayer=="NO"){
                document.getElementById('testnotout').innerHTML=parseFloat(notout)+1;
              }
              if(current>existence){
                document.getElementById("tesths").innerHTML=parseFloat(current);
              }
              document.getElementById('testinn').innerHTML=parseFloat(inn)+1;
              var total = parseFloat(existence) + parseFloat(current);
              document.getElementById("testruns").innerHTML=total;
              var average = total/(parseFloat(inn)-parseFloat(notout));
              document.getElementById("testavg").innerHTML=average.toFixed(1);
              document.getElementById("testballfaced").innerHTML=parseFloat(ballfacedPlayer)+parseFloat(ballfaced);
              var totoalballfaced = parseFloat(ballfacedPlayer)+parseFloat(ballfaced);
              document.getElementById("testsr").innerHTML=((total/totoalballfaced)*100).toFixed(1);
              break;
          }

          else{
            alert("No update on the Stats sheet since Rohit didn't played the inning")
          }
        }
      }
      case "ODI":
      case "odi":
      case "Odi":
        var existence = document.getElementById("odiruns").innerHTML;
        var current = document.getElementById("input1").value;
        var inn = document.getElementById('odiinn').innerHTML;
        var notout = document.getElementById('odinotout').innerHTML;
        var matchPlayed = document.getElementById('odimatch').value; 
        var match = document.getElementById("odimatch").innerHTML;
        if(matchPlayed=="yes"||matchPlayed=="YES"|| matchPlayed=="Yes"){
          document.getElementById("odimatch").innerHTML=parseFloat(matchPlayed)+1;
        }
        if(current%1==0){
            var total1 = parseFloat(existence) + parseFloat(current)
            var average = total1/(parseFloat(inn)-parseFloat(notout));
            document.getElementById("odiruns").innerHTML=total1;
            document.getElementById("odiavg").innerHTML=average.toFixed(1);
            break;
        }
        else{
            alert("please enter whole number");
            break;
        }
      case "T20":
      case "t20":
        var existence = document.getElementById("t20runs").innerHTML;
        var current = document.getElementById("input1").value;
        var match = document.getElementById("t20match").innerHTML;
        var inn = document.getElementById('t20inn').innerHTML;
        var notout = document.getElementById('t20notout').innerHTML;
        if(current%1==0){
            var total2 = parseFloat(existence) + parseFloat(current);
            var average = total2/(parseFloat(inn)-parseFloat(notout));
            document.getElementById("t20runs").innerHTML=total2;
            document.getElementById("t20match").innerHTML=parseFloat(match)+1;
            document.getElementById("t20avg").innerHTML=average.toFixed(1);
            break;
        }
        else{
            alert("please enter whole number");
            break;
        }
      case "IPL":
      case "ipl":
      case "Ipl":
        var existence = document.getElementById("iplruns").innerHTML;
        var current = document.getElementById("input1").value;
        var match = document.getElementById("iplmatch").innerHTML;
        var inn = document.getElementById('iplinn').innerHTML;
        var notout = document.getElementById('iplnotout').innerHTML;
        if(current%1==0){
            var total3 = parseFloat(existence) + parseFloat(current);
            var average = total3/(parseFloat(inn)-parseFloat(notout));
            document.getElementById("iplruns").innerHTML=total3;
            document.getElementById("iplmatch").innerHTML=parseFloat(match)+1;
            document.getElementById("iplavg").innerHTML=average.toFixed(1);
            break;
        }
        else{
            alert("please enter whole number");
            break;
        }
    }
  }

  function loadElements(){
    let divCard = document.createElement('div');
    divCard.setAttribute("id","card");
    document.body.appendChild(divCard)
    let card = document.getElementById('card');
    let cardHeader = document.createElement('h1');
    let cardImage = document.createElement("img");
    
    cardHeader.innerHTML="Rohit Sharma";
    cardImage.setAttribute("src","https://i.pinimg.com/236x/57/27/e7/5727e7eb4807853cd2799fc67a11cd1f--shikhar-dhawan-virat-kohli.jpg")
    
    card.appendChild(cardHeader);
    card.appendChild(cardImage)

    let letAbout=document.createElement('div');
    letAbout.setAttribute("id","about");
    document.body.appendChild(letAbout);
    let about = document.getElementById('about');
    let aboutHeader = document.createElement("h1");
    let aboutParagraph= document.createElement("p");
    
    aboutHeader.innerHTML="About";
    aboutParagraph.innerHTML="Rohit Gurunath Sharma is an Indian cricketer who represents the country in international cricket. On the domestic level, Rohit plays first-class cricket for Mumbai. Rohit is the present vice-captain for the Indian cricket team in limited-overs cricket. He is also the present captain of Mumbai Indians in the Indian Premier League."
    
    about.appendChild(aboutHeader);
    about.appendChild(aboutParagraph);

    let divCareer = document.createElement('div');
    divCareer.setAttribute("id", "career");
    document.body.appendChild(divCareer)
    let career = document.getElementById("career");
    let careerHeader = document.createElement("h2");
    let careerParagraph= document.createElement("p");
    let careerImage=document.createElement("img");
    let careerImage1=document.createElement("img");
    let careerImage2=document.createElement("img");
    let careerImage3=document.createElement("img");
    let careerImage4=document.createElement("img");
    
    careerHeader.innerHTML="IPL Career";
    careerParagraph.innerHTML="Rohit Sharma is the most successful captain and has led Mumbai Indians to 5 IPL titles.";
    careerImage.setAttribute("src","https://staticg.sportskeeda.com/editor/2018/12/39668-15453237226555-800.jpg");
    careerImage.setAttribute("height","100");
    careerImage.setAttribute("width","150");
    careerImage1.setAttribute("src","https://static.india.com/wp-content/uploads/2015/05/ipl-2015-champions.jpg")
    careerImage1.setAttribute("height","100");
    careerImage1.setAttribute("width","150");
    careerImage2.setAttribute("src","https://resources.platform.iplt20.com/IPL/photo/2017/05/21/f52b7519-0d52-4c4a-a47c-de5e26de159d/CI1I4728.JPG")
    careerImage2.setAttribute("height","100");
    careerImage2.setAttribute("width","150");
    careerImage3.setAttribute("src","https://resources.platform.iplt20.com/photo-resources/IPL/photo/2019/05/12/669be1f9-6664-402a-aa42-a83ccaa3a443/IMG_1133.JPG?width=2000&height=1333")
    careerImage3.setAttribute("height","100");
    careerImage3.setAttribute("width","150");
    careerImage4.setAttribute("src","https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/u4vjp5xs7mbfm2hyesv5")
    careerImage4.setAttribute("height","100");
    careerImage4.setAttribute("width","150");
    
    career.appendChild(careerHeader);
    career.appendChild(careerParagraph);
    career.appendChild(careerImage);
    career.appendChild(careerImage1);
    career.appendChild(careerImage2);
    career.appendChild(careerImage3);
    career.appendChild(careerImage4);

    let divCareer1=document.createElement('div');
    divCareer1.setAttribute("id", "career1");
    document.body.appendChild(divCareer1);
    let career1 = document.getElementById("career1");
    let career1Header = document.createElement("h2");
    let career1Paragraph = document.createElement("p");
    let career1Image=document.createElement("img");
    let career1Image1=document.createElement("img");
    let career1Image2=document.createElement("img");
    
    career1Header.innerHTML="International Career";
    career1Paragraph.innerHTML="Rohit made his international debut for India at a one-day match against Ireland in Belfast on 23 June 2007. Sharma started opening the Indian innings with Shikhar Dhawan in the 2013 ICC Champions Trophy, and the gamble turned out to be a huge success. He scored a mammoth 264 from 173 deliveries against Sri Lanka at Eden Gardens in Kolkata. Sharma was the recipient of the Golden Bat award for scoring the most number of runs in ICC World Cup 2019."
    career1Image.setAttribute("src","https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/11/rohit-pti-1542093868.jpg");
    career1Image.setAttribute("height","150");
    career1Image.setAttribute("width","200");
    career1Image1.setAttribute("src","https://pbs.twimg.com/media/D-zTcRMVUAAiIrM.png");
    career1Image1.setAttribute("height","150");
    career1Image1.setAttribute("width","200");
    career1Image2.setAttribute("src","https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/01/15/889642-rohit-sharma.jpg");
    career1Image2.setAttribute("height","150");
    career1Image2.setAttribute("width","200");
   
    career1.appendChild(career1Header);
    career1.appendChild(career1Paragraph);
    career1.appendChild(career1Image);
    career1.appendChild(career1Image1);
    career1.appendChild(career1Image2);

    let divOverview = document.createElement('div');
    divOverview.setAttribute("id","overview");
    document.body.appendChild(divOverview);
    let overview = document.getElementById("overview");
    let overviewHeader = document.createElement("h2");
    let overviewParagraph = document.createElement('p');
    let overviewParagraph1 = document.createElement('p');
    let overviewParagraph2 = document.createElement('p');
    let overviewParagraph3 = document.createElement('p');
    let overviewParagraph4 = document.createElement('p');
    

    overviewHeader.innerHTML="Overview";
    overviewParagraph.innerHTML="<b>Full Name:</b> Rohit Gurunath Sharma";
    overviewParagraph1.innerHTML="<b>Born: </b>April 30, 1987, Bansod, Nagpur, Maharashtra";
    overviewParagraph2.innerHTML="<b>Age:</b> 34";
    overviewParagraph3.innerHTML="<b>Height:</b> 5′ 7″";
    overviewParagraph4.innerHTML="<b>Role:</b> Top-order Batsman/Right-handed";


    overview.appendChild(overviewHeader);
    overview.appendChild(overviewParagraph);
    overview.appendChild(overviewParagraph1);
    overview.appendChild(overviewParagraph2);
    overview.appendChild(overviewParagraph3);
    overview.appendChild(overviewParagraph4);
    

    let statsInfo = document.createElement('div');
    statsInfo.setAttribute("id","stats");
    document.body.appendChild(statsInfo);
    let stats = document.getElementById("stats");
    let statsHeader = document.createElement("h2");
    let statsTable = document.createElement("table");
    let statsTr = document.createElement("tr");
    let trTh = document.createElement("th");
    let trTh1 = document.createElement("th");
    let trTh2 = document.createElement("th");
    let trTh3 = document.createElement("th");
    let trTh4 = document.createElement("th");
    let trTh5 = document.createElement("th");
    let trTh6 = document.createElement("th");
    let trTh7 = document.createElement("th");
    let trTh8 = document.createElement("th");

    let statsTr1 = document.createElement("tr");
    let tr1Th = document.createElement("th");
    let tr1Th1 = document.createElement("th");
    let tr1Th2 = document.createElement("th");
    let tr1Th3 = document.createElement("th");
    let tr1Th4 = document.createElement("th");
    let tr1Th5 = document.createElement("th");
    let tr1Th6 = document.createElement("th");
    let tr1Th7 = document.createElement("th");
    let tr1Th8 = document.createElement("th");

    let statsTr2 = document.createElement("tr");
    let tr2Th = document.createElement("th");
    let tr2Th1 = document.createElement("th");
    let tr2Th2 = document.createElement("th");
    let tr2Th3 = document.createElement("th");
    let tr2Th4 = document.createElement("th");
    let tr2Th5 = document.createElement("th");
    let tr2Th6 = document.createElement("th");
    let tr2Th7 = document.createElement("th");
    let tr2Th8 = document.createElement("th");

    let statsTr3 = document.createElement("tr");
    let tr3Th = document.createElement("th");
    let tr3Th1 = document.createElement("th");
    let tr3Th2 = document.createElement("th");
    let tr3Th3 = document.createElement("th");
    let tr3Th4 = document.createElement("th");
    let tr3Th5 = document.createElement("th");
    let tr3Th6 = document.createElement("th");
    let tr3Th7 = document.createElement("th");
    let tr3Th8 = document.createElement("th");

    let statsTr4 = document.createElement("tr");
    let tr4Th = document.createElement("th");
    let tr4Th1 = document.createElement("th");
    let tr4Th2 = document.createElement("th");
    let tr4Th3 = document.createElement("th");
    let tr4Th4 = document.createElement("th");
    let tr4Th5 = document.createElement("th");
    let tr4Th6 = document.createElement("th");
    let tr4Th7 = document.createElement("th");
    let tr4Th8 = document.createElement("th");

    trTh.innerHTML="Format";
    trTh1.innerHTML="Match";
    trTh2.innerHTML="Inn";
    trTh3.innerHTML="Not Out";
    trTh4.innerHTML="Runs";
    trTh5.innerHTML="HS";
    trTh6.innerHTML="Avg";
    trTh7.innerHTML="Ball Faced";
    trTh8.innerHTML="SR";

    tr1Th.innerHTML="Test<br>(2013-present)</br>";
    tr1Th1.innerHTML="39";
    tr1Th2.innerHTML="66";
    tr1Th3.innerHTML="8";
    tr1Th4.innerHTML="2679";
    tr1Th5.innerHTML="212";
    tr1Th6.innerHTML="46.2";
    tr1Th7.innerHTML="4627";
    tr1Th8.innerHTML="57.9";

    tr2Th.innerHTML="ODI<br>(2007-present)</br>";
    tr2Th1.innerHTML="227";
    tr2Th2.innerHTML="220";
    tr2Th3.innerHTML="32";
    tr2Th4.innerHTML="9205";
    tr2Th5.innerHTML="264";
    tr2Th6.innerHTML="49.0";
    tr2Th7.innerHTML="10354";
    tr2Th8.innerHTML="88.9";

    tr3Th.innerHTML="T20I<br>(2007-present)</br>";
    tr3Th1.innerHTML="111";
    tr3Th2.innerHTML="103";
    tr3Th3.innerHTML="15";
    tr3Th4.innerHTML="2864";
    tr3Th5.innerHTML="118";
    tr3Th6.innerHTML="32.5";
    tr3Th7.innerHTML="2061";
    tr3Th8.innerHTML="139.0";

    tr4Th.innerHTML="IPL<br>(2008-present)</br>";
    tr4Th1.innerHTML="207";
    tr4Th2.innerHTML="202";
    tr4Th3.innerHTML="28";
    tr4Th4.innerHTML="5480";
    tr4Th5.innerHTML="109";
    tr4Th6.innerHTML="31.5";
    tr4Th7.innerHTML="4199";
    tr4Th8.innerHTML="130.5";

    tr1Th1.setAttribute("id","testmatch");
    tr1Th2.setAttribute("id","testinn");
    tr1Th3.setAttribute("id","testnotout");
    tr1Th4.setAttribute("id","testruns");
    tr1Th5.setAttribute("id","tesths");
    tr1Th6.setAttribute("id","testavg");
    tr1Th7.setAttribute("id","testballfaced");
    tr1Th8.setAttribute("id","testsr");

    tr2Th1.setAttribute("id","odimatch");
    tr2Th2.setAttribute("id","odiinn");
    tr2Th3.setAttribute("id","odinotout");
    tr2Th4.setAttribute("id","odiruns");
    tr2Th5.setAttribute("id","odihs");
    tr2Th6.setAttribute("id","odiavg");
    tr2Th7.setAttribute("id","odiballfaced");
    tr2Th8.setAttribute("id","odisr");

    tr3Th1.setAttribute("id","t20match");
    tr3Th2.setAttribute("id","t20inn");
    tr3Th3.setAttribute("id","t20notout");
    tr3Th4.setAttribute("id","t20runs");
    tr3Th5.setAttribute("id","t20hs");
    tr3Th6.setAttribute("id","t20avg");
    tr3Th7.setAttribute("id","t20ballfaced");
    tr3Th8.setAttribute("id","t20sr");

    tr4Th1.setAttribute("id","iplmatch");
    tr4Th2.setAttribute("id","iplinn");
    tr4Th3.setAttribute("id","iplnotout");
    tr4Th4.setAttribute("id","iplruns");
    tr4Th5.setAttribute("id","iplhs");
    tr4Th6.setAttribute("id","iplavg");
    tr4Th7.setAttribute("id","iplballfaced");
    tr4Th8.setAttribute("id","iplsr");
 
    statsTable.appendChild(statsTr);
    statsTr.appendChild(trTh);
    statsTr.appendChild(trTh1);
    statsTr.appendChild(trTh2);
    statsTr.appendChild(trTh3);
    statsTr.appendChild(trTh4);
    statsTr.appendChild(trTh5);
    statsTr.appendChild(trTh6);
    statsTr.appendChild(trTh7);
    statsTr.appendChild(trTh8);
    statsTable.appendChild(statsTr1);
    statsTr1.appendChild(tr1Th);
    statsTr1.appendChild(tr1Th1);
    statsTr1.appendChild(tr1Th2);
    statsTr1.appendChild(tr1Th3);
    statsTr1.appendChild(tr1Th4);
    statsTr1.appendChild(tr1Th5);
    statsTr1.appendChild(tr1Th6);
    statsTr1.appendChild(tr1Th7);
    statsTr1.appendChild(tr1Th8);
    statsTable.appendChild(statsTr2);
    statsTr2.appendChild(tr2Th);
    statsTr2.appendChild(tr2Th1);
    statsTr2.appendChild(tr2Th2);
    statsTr2.appendChild(tr2Th3);
    statsTr2.appendChild(tr2Th4);
    statsTr2.appendChild(tr2Th5);
    statsTr2.appendChild(tr2Th6);
    statsTr2.appendChild(tr2Th7);
    statsTr2.appendChild(tr2Th8);
    statsTable.appendChild(statsTr3);
    statsTr3.appendChild(tr3Th);
    statsTr3.appendChild(tr3Th1);
    statsTr3.appendChild(tr3Th2);
    statsTr3.appendChild(tr3Th3);
    statsTr3.appendChild(tr3Th4);
    statsTr3.appendChild(tr3Th5);
    statsTr3.appendChild(tr3Th6);
    statsTr3.appendChild(tr3Th7);
    statsTr3.appendChild(tr3Th8);
    statsTable.appendChild(statsTr4);
    statsTr4.appendChild(tr4Th);
    statsTr4.appendChild(tr4Th1);
    statsTr4.appendChild(tr4Th2);
    statsTr4.appendChild(tr4Th3);
    statsTr4.appendChild(tr4Th4);
    statsTr4.appendChild(tr4Th5);
    statsTr4.appendChild(tr4Th6);
    statsTr4.appendChild(tr4Th7);
    statsTr4.appendChild(tr4Th8);
   


    statsHeader.innerHTML="Stats";

    stats.appendChild(statsHeader);
    stats.appendChild(statsTable);
    

    let formDiv = document.createElement('div');
    formDiv.setAttribute("id","inputtext");
    document.body.appendChild(formDiv);

    let form = document.getElementById("inputtext");
    let label = document.createElement("label");
    let input = document.createElement('input');
    let label1 = document.createElement("label");
    let inputs1 = document.createElement('input');
    let label2 = document.createElement("label");
    let input2 = document.createElement('input');
    let label3 = document.createElement("label");
    let input3 = document.createElement('input');
    let label4 = document.createElement("label");
    let input4 = document.createElement('input');
    let label5 = document.createElement("label");
    let input5 = document.createElement('input');
    let formButton = document.createElement('button');

    
    label.innerHTML='Format:';
    input.setAttribute('type',"text");
    input.setAttribute('id', 'input');
    label1.innerHTML='Match Played:';
    inputs1.setAttribute('type',"text");
    inputs1.setAttribute('id', 'match');
    label2.innerHTML='Inning Played:';
    input2.setAttribute('type',"text");
    input2.setAttribute('id', 'inn');
    label3.innerHTML='Was he Out?:';
    input3.setAttribute('type',"text");
    input3.setAttribute('id', 'notout');
    label4.innerHTML='Runs:';
    input4.setAttribute('type',"number");
    input4.setAttribute('id', 'input1');
    label5.innerHTML='Ball Faced:';
    input5.setAttribute('type',"number");
    input5.setAttribute('id', 'ballfaced');
    formButton.setAttribute('onclick','myfunction()');
    formButton.innerHTML="Submit";
  
    
    
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(label1);
    form.appendChild(inputs1);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(label4);
    form.appendChild(input4);
    form.appendChild(label5);
    form.appendChild(input5);
    form.appendChild(formButton)
 
  }


  