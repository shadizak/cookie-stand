'use strict';
 
 
var timeArray = [];
getTime();
var Seattle = {
    name:"Seattle",
    minCust: 23, 
    maxCust: 65,
    avgCookie: 6.3,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = randomNumberOfClients * Seattle.avgCookie
        } 
        this.cookiesPerH = arrayOfCookie
    },
     render: function(){
        var parentElement = document.getElementById("Report");

        var artical  = document.createElement('artical');
        parentElement.appendChild(artical)

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        artical.appendChild(h2);

        var ul = document.createElement('ul');
        artical.appendChild(ul);
        
        for (var i=0;i<13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }

     }
  }; 

  
  Seattle.cookiesPerH(Seattle.minCust, Seattle.maxCust);

  Seattle.render();
 
  
  var Tokyo = {
    name:"Tokyo",
    minCust: 3, 
    maxCust: 24,
    avgCookie: 1.2,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = randomNumberOfClients * Seattle.avgCookie
        } 
        this.cookiesPerH = arrayOfCookie
    },
     render: function(){
        var parentElement = document.getElementById("Report");

        var artical  = document.createElement('artical');
        parentElement.appendChild(artical)

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        artical.appendChild(h2);

        var ul = document.createElement('ul');
        artical.appendChild(ul);
        
        for (var i=0;i<13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }

     }
  }; 

  
  Tokyo.cookiesPerH(Tokyo.minCust, Tokyo.maxCust);
  Tokyo.render();


  var Dubai = {
    name:"Dubai",
    minCust: 3, 
    maxCust: 24,
    avgCookie: 1.2,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = randomNumberOfClients * Seattle.avgCookie
        } 
        this.cookiesPerH = arrayOfCookie
    },
     render: function(){
        var parentElement = document.getElementById("Report");

        var artical  = document.createElement('artical');
        parentElement.appendChild(artical)

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        artical.appendChild(h2);

        var ul = document.createElement('ul');
        artical.appendChild(ul);
        
        for (var i=0;i<13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }

     }
  }; 

  
  Dubai.cookiesPerH(Dubai.minCust, Dubai.maxCust);
  Dubai.render();


  
 function getTime(){
     for (var i =6 ; i <= 19;i++){
         if(i<=12){
            timeArray.push(i +"am");
         }else{
            timeArray.push(i -12 +"pm");
         }

     }
  } 
function generateRandomNumberOfClients (minValur,maxValue){
var randomVal = Math.random();
return Math.floor(Math.random() * (maxValue - minValur + 1)) + minValur; 
}