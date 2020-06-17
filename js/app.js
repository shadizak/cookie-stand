'use strict';
var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allcookieshops = [];
var cookieshopTable = document.getElementById('cookies-sold');
var storeForm = document.getElementById('store-form');

function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  allcookieshops.push(this);
  this.render()

}
CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShop.prototype.render = function () {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  var cookiesSold = 0;
  var totalCookiesSold = 0;

  for (var i = 0; i < operationHour.length; i++) {

    cookiesSold = this.cookiesPerHr();

    var tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.cookiesSoldPerHr.push(cookiesSold);

    totalCookiesSold += cookiesSold;
  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  cookieshopTable.appendChild(trElement);
};

function makeHeaderRow() { // Header Row Function
  var theadElement = document.createElement('thead');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (var i = 0; i < operationHour.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = operationHour[i];
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);
  console.log("EEEEE")
  cookieshopTable.appendChild(theadElement);
}

function totalCookiesPerHour() { // Bottom Totals
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Totals';
  trElement.appendChild(thElement);

  var grandTotalCookies = 0;

  for (var i = 0; i < operationHour.length; i++) {
    var totalCookies = 0;
    for (var j = 0; j < allcookieshops.length; j++) {
      totalCookies += allcookieshops[j].cookiesSoldPerHr[i];
      grandTotalCookies += allcookieshops[j].cookiesSoldPerHr[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotalCookies;
  trElement.appendChild(tdElement);
  cookieshopTable.appendChild(trElement);
}
//Calls function to generate arrays with random number of cookies
new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

function renderallcookieshops() {
  for (var i in allcookieshops) {
    allcookieshops[i].render();
  }
}


//Event Handler
function addNewStore(event) {

  var newStoreName = event.target.name.value;
  var addMinCustomers = parseInt(event.target.minCustomers.value);
  var addMaxCustomersseeeeee = parseInt(event.target.maxCustomers.value);
  var addAvgSale = parseFloat(event.target.avgSale.value);

  event.preventDefault();

  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgSale.value) {
    return alert('Oops, you forgot something! Please check your entries and try again.');
  }

  if (event.target.minCustomers.value < 0 || event.target.maxCustomers.value < 0 || event.target.avgSale.value < 0) {
    return alert('How are you putting negative values in here? Quit it, you\re not giving away customers and cookies.');
  }

  if (event.target.minCustomers.value > event.target.maxCustomers.value) {
    return alert('That\'s not how numbers work, nerd.');
  }
  deleterow('cookies-sold')
  new CookieShop(newStoreName, 2,22, 2.3);
   
  

  totalCookiesPerHour();
}

//Event Listener
storeForm.addEventListener('submit', addNewStore);
 
totalCookiesPerHour();


function deleterow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  table.deleteRow(rowCount -1);
}