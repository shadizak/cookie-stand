'use strict';
 
 
var timeArray = [];
getTime();
var total = 0;
var Seattle = {
    name:"Seattle",
    minCust: 23, 
    maxCust: 65,
    avgCookie: 6.3,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        total = 0
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = Math.floor(randomNumberOfClients * Seattle.avgCookie)
           total = total + arrayOfCookie[i]
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
        
        for (var i=0;i<=13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }
        var li = document.createElement('li');

        li.textContent = 'Total: ' +total+' cookies';
        ul.appendChild(li);

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
        total = 0
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = Math.floor(randomNumberOfClients * Seattle.avgCookie)
           total = total + arrayOfCookie[i]
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
        
        for (var i=0;i<=13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }
        var li = document.createElement('li');

        li.textContent = 'Total: ' +total+' cookies';
        ul.appendChild(li);
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
        total = 0
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = Math.floor(randomNumberOfClients * Seattle.avgCookie)
           total = total + arrayOfCookie[i]
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
        
        for (var i=0;i<=13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }
        var li = document.createElement('li');

        li.textContent = 'Total: ' +total+' cookies';
        ul.appendChild(li);
     }
  }; 

  
  Dubai.cookiesPerH(Dubai.minCust, Dubai.maxCust);
  Dubai.render();


  var Paris = {
    name:"Paris",
    minCust: 20, 
    maxCust: 38,
    avgCookie: 2.3,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        total = 0
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = Math.floor(randomNumberOfClients * Seattle.avgCookie)
           total = total + arrayOfCookie[i]
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
        
        for (var i=0;i<=13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }
        var li = document.createElement('li');

        li.textContent = 'Total: ' +total+' cookies';
        ul.appendChild(li);
     }
  }; 

  
  Paris.cookiesPerH(Paris.minCust, Paris.maxCust);
  Paris.render();


  var Lima = {
    name:"Lima",
    minCust: 2, 
    maxCust: 16,
    avgCookie: 4.6,
    totla:0,
    cookiesPerH:  function(minValur,maxValue){
        var arrayOfCookie = [];
        total = 0;
        for(var i = 0 ; i < 14 ; i++){
             var randomNumberOfClients = generateRandomNumberOfClients(minValur,maxValue)
           arrayOfCookie[i] = Math.floor(randomNumberOfClients * Seattle.avgCookie)
           total = total + arrayOfCookie[i]
        } 
        console.log(this.totla)
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
        
        for (var i=0;i<=13;i++){
            var li = document.createElement('li');

            li.textContent = timeArray[i]+': '+ this.cookiesPerH[i]+' cookies';
            ul.appendChild(li);
        }

        var li = document.createElement('li');

        li.textContent = 'Total: ' +total+' cookies';
        ul.appendChild(li);

     }
  }; 

  
  Lima.cookiesPerH(Lima.minCust, Lima.maxCust);
  Lima.render();


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