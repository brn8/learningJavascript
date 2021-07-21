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

    let stats = document.getElementById('stats');
    let statsHeader = document.createElement("h2");
    let statsTable = document.createElement("table");
    let statsTr = document.createElement("tr");
    let statsTh = document.createElement("th");
    let statsTh1 = document.createElement("th");
    let statsTh2 = document.createElement("th");
    let statsTh3 = document.createElement("th");
    let statsTh4 = document.createElement("th");
    let statsTh5 = document.createElement("th");
    let statsTh6 = document.createElement("th");
    let statsTh7 = document.createElement("th");
    let statsTh8 = document.createElement("th");

    statsTh.innerHTML="Format";
    statsTh1.innerHTML="Match";
    statsTh2.innerHTML="Inn";
    statsTh3.innerHTML="Not Out";
    statsTh4.innerHTML="Runs";
    statsTh5.innerHTML="HS";
    statsTh6.innerHTML="Avg";
    statsTh7.innerHTML="Ball Faced";
    statsTh8.innerHTML="SR";
    
    
    statsTable.appendChild(statsTr);
    statsTr.appendChild(statsTh);
    statsTr.appendChild(statsTh1);
    statsTr.appendChild(statsTh2);
    statsTr.appendChild(statsTh3);
    statsTr.appendChild(statsTh4);
    statsTr.appendChild(statsTh5);
    statsTr.appendChild(statsTh6);
    statsTr.appendChild(statsTh7);
    statsTr.appendChild(statsTh8);


    statsHeader.innerHTML="Stats";
    
    stats.appendChild(statsHeader);

    let stats1Tr = document.createElement("tr");
    let stats1Th = document.createElement("th");
    let stats1Th1= document.createElement("th");
    let stats1Th2= document.createElement("th");
    let stats1Th3= document.createElement("th");
    let stats1Th4= document.createElement("th");
    let stats1Th5= document.createElement("th");
    let stats1Th6= document.createElement("th");
    let stats1Th7= document.createElement("th");
    let stats1Th8= document.createElement("th");



    stats1Th.innerHTML="Test<br>(2013-present)</br>";
    stats1Th1.innerHTML="39";
    stats1Th1.setAttribute("id","testmatch");
    stats1Th2.innerHTML="66";
    stats1Th2.setAttribute("id","testinn")

    statsTable.appendChild(stats1Tr);
    stats1Tr.appendChild(stats1Th)
    stats1Tr.appendChild(stats1Th1)
    stats1Tr.appendChild(stats1Th2)


    stats.appendChild(statsTable);

  }


  