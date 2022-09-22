window.onscroll = function() {
  scrollFunction();
};

// var navBar = document.getElementById("navBar");
var gnb =document.querySelectorAll("#navBar .gnb > li > a");
var lang =document.querySelectorAll("#navBar .lang > a");

function styleChange(str1, str2, str3){
  // navBar.style.cssText = "background-color:"+str1;
  document.querySelector("#navBar .logo a.white").style.cssText = "display:"+str2;
  document.querySelector("#navBar .logo a.black").style.cssText = "display:"+str3;

  for(var i = 0; i <gnb.length; i++){
      gnb[i].style.cssText = "color:"+str1;
  }      

  for(var i = 0; i <lang.length; i++){
    lang[i].style.cssText = "color:"+str1;
  }
}


function scrollFunction() {

  // 스크롤 이벤트가 발생했을 때
  // document.body.scrollTop > 20 이면 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {    
    navBar.style.cssText = "background-color:white;";
    styleChange("black", "none", "block");
    
    $("#navBar").mouseout(function(){
      navBar.style.cssText = "background-color:white;";
      styleChange("black", "none", "block");
    });


  // 스크롤 이벤트가 발생했을 때
  // document.body.scrollTop <= 20 이면 
  } else { 
      navBar.style.cssText = "background-color:;";
      styleChange("white", "block", "none");

    
      $("header").mouseover(function(){
        navBar.style.cssText = "background-color:white;";
        styleChange("black", "none", "block");
      });
      
      
      $("header").mouseout(function(){
        navBar.style.cssText = "background-color:;";
        styleChange("white", "block", "none");
      });

    
  }
}