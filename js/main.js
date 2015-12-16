/*
Author: John McSwain
Date: 5/16/15
Purpose: No friggin reason



*/

var totalNumberOfTeams = 30;
var sportType;
var dataDiv = $("#dataDiv");
function setup(){
    sportType = $("#sportType").val(); //get the selected value
    switch(sportType){

        case "CFB":
            collegeArray = [
              "air-force",
            "akron",
          "alabama",
        "appalachian-state",
      "arizona",
    "arizona-state",
    "arkansas",
    "arkansas-state",
    "army",
    "auburn",
  "ball-state","baylor","boise-state","boston-college","bowling-green","buffalo","byu","california","central-michigan","charlotte","cincinnati","clemson","colorado","colorado-state","connecticut","duke","east-carolina","eastern-michigan","fiu","florida","florida-atlantic","florida-state","fresno-state","georgia","georgia-tech","georgia-southern","hawaii","houston","idaho","illinois","indiana","iowa","iowa-state","kansas","kansas-state","kent-state","kentucky","louisiana-tech","louisiana-monroe","louisville","lsu","marshall","maryland","memphis","miami-fl","miami-oh","michigan","michigan-state","middle-tennessee","minnesota","mississippi-state","missouri","navy","nebraska","nevada","new-mexico","new-mexico-state","north-carolina","north-carolina-state","north-texas","north-illinois","northwestern","notre-dame","ohio","ohio-state","oklahoma","oklahoma-state","old-dominion","ole-miss","oregon","oregon-state","penn-state","pittsburgh","purdue","rice","rutgers","san-diego-state","san-jose-state","smu","south-alabama","south-carolina","south-florida","southern-miss","stanford","syracuse","tcu","temple","tennessee","texas","texas-am","texas-state","texas-tech","toledo","troy","tulane","tulsa","uab","ucf","ucla","umass","unlv","usc","utah","utah-state","utep","utsa","vanderbilt","virgina","virginia-tech","wake-forest","washington","washington-state","west-virginia","western-kentucky","western-michigan","wisconsin","wyoming"];
            totalNumberOfTeams = collegeArray.length;
            break;
        case "MiLB":
            totalNumberOfTeams = 169;
            break;
    }
}
function fadeLogo(logoDivId,delayFactor){
    //console.log(delayFactor);
    $(logoDivId).delay(50*delayFactor).fadeIn(100);

}

$("#loadButton").click(function(){
    setup(); //initialize variables
    dataDiv.html(""); // reset the html so that clicking on the button doesn't keep adding the same images to the end of the list

    var currentCount;
    var upperLimit = 413+totalNumberOfTeams;
    if(sportType == "MiLB"){
        currentCount = 413;
        do{
            dataDiv.append("<div class=\"logoDiv\" style=\"display:none\" id=\"logoDiv"+currentCount+"\"><img src=\"http://www.milb.com/y2013/images/main_logo/t"+currentCount+"_main_logo.png\"></div>");
            //http://www.milb.com/y2013/images/main_logo/t573_main_logo.png
             fadeLogo("#logoDiv"+currentCount,currentCount % 413);
            currentCount++
        }while(currentCount < upperLimit);
    }else if(sportType == "CFB"){
      currentCount = 1;
      do{

          dataDiv.append("<div class=\"logoDiv\" style=\"display:none\" id=\"logoDiv"+currentCount+"\"><img src=\"http://winsipedia.useast.appfog.ctl.io/public/images/Team_logos/"+collegeArray[currentCount]+".120.png\"></div>");
          //http://static.foxsports.com/fe/images/CFB/TeamLogo/Large/259.png
          //http://static.foxsports.com/fe/images/NFL/TeamLogo/Large/21.png
          //http://static.foxsports.com/fe/images/MLB/TeamLogo/Large/28.png

           fadeLogo("#logoDiv"+currentCount,currentCount);
          currentCount++; //increment count by 1
      }while(currentCount < totalNumberOfTeams);
    }else{
        currentCount = 1;
        do{

            dataDiv.append("<div class=\"logoDiv\" style=\"display:none\" id=\"logoDiv"+currentCount+"\"><img src=\"http://static.foxsports.com/fe/images/"+sportType+"/TeamLogo/Large/"+currentCount+".png\"></div>");
            //http://static.foxsports.com/fe/images/CFB/TeamLogo/Large/259.png
            //http://static.foxsports.com/fe/images/NFL/TeamLogo/Large/21.png
            //http://static.foxsports.com/fe/images/MLB/TeamLogo/Large/28.png

             fadeLogo("#logoDiv"+currentCount,currentCount);
            currentCount++; //increment count by 1
        }while(currentCount <= totalNumberOfTeams);
    }
     fadeLogo("#logoDiv1");
    $(".logoDiv").css({"margin":"5px","border":"1px solid #aaa","float":"left","background-color":"#FFF"});
    $("img").css({"max-height":"100px"});

    $("img").error(function() {
        $(this).parent().remove();
    });
});
