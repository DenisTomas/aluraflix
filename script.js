//cataloging Movies 

//Movie 1

var urlList = ["https://i.pinimg.com/736x/72/61/67/72616709f3a5d440f17c88684be8040a.jpg", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"];
var titleList = ["Spider", "Spider 2"];

function refreshScreen() {
	var galeryElement = document.getElementById("galery")
	galeryElement.innerHTML = "";
	
  urlList.forEach(function(item, i) {
		var title = titleList[i];
		
		var newElement = "<div id=poster>";
		newElement += "<img src=" + item + ">";
		newElement += "<br>";
		newElement += "<label>" + title + "</label>";
		newElement += "</div>";
		
    galeryElement.innerHTML += newElement;
	})
}

function addTitle() {
	var inputUrlElement = document.getElementById("urlField")
	var inputUrlValue = inputUrlElement.value;
	var inputTitleElement = document.getElementById("titleField")
	var inputTitleValue = inputTitleElement.value;
	
	if (inputUrlValue.endsWith(".jpg") == false) {
		alert("URL Invalid. \n\n" + inputUrlValue);
		return
	}
	
	if (urlList.includes(inputUrlValue) == true) {
	  alert("This item already exist. \n\n " + inputUrlValue);
		return
	}	
	
	if (titleList.includes(inputTitleValue) == true) {
		alert("This item already exist. \n\n" + inputTitleValue);
		return
	}
	
	if (inputTitleValue.length === 0) {
		alert("Movie name box is empty")
		return
	}
	
	if (inputTitleValue.includes("#") == true) {
		alert("# is not allowed");
		return
	}
		
	urlList.push(inputUrlValue);
	titleList.push(inputTitleValue);
	refreshScreen();
	
	inputUrlElement.value = "";
	inputTitleElement.value = "";
}

refreshScreen();





