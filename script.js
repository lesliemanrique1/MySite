var file = "data/projects.json"
document.addEventListener("DOMContentLoaded",function(){
	//import json file 
	
	const projects = document.getElementById("projects");
	const projDiv = document.createElement("ul");
	projDiv.setAttribute("class","thumbnails");
	makeThumbnails(file);




});
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



//create project icons 
var makeThumbnails = function(file){
	var task1 = function (){
	  	return new Promise (function(resolve, reject){
		    readTextFile(file, function(text){
			    var data = JSON.parse(text);
			    console.log('task1 called');
			    console.log(data);
			    resolve('task1 came back');
	   	 	}); 
  		});
	};	
	task1();



}
