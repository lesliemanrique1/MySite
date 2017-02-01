// const file = "data/projects.json"
// document.addEventListener("DOMContentLoaded",function(){
// 	//import json file 
	
// 	const projects = document.getElementById("projects");
// 	const projDiv = document.createElement("ul");
// 	projDiv.setAttribute("class","thumbnails");
// 	makeThumbnails(file);




// });
// function readTextFile(file, callback) {
//     const rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }



// //create project icons 
// var makeThumbnails = function(file){
// 	var task1 = function (){
// 	  	return new Promise (function(resolve, reject){
// 		    readTextFile(file, function(text){
// 			    var data = JSON.parse(text);
// 			    console.log('task1 called');
// 			    console.log(data);
// 			    resolve('task1 came back');
// 	   	 	}); 
//   		});
// 	};	
// 	task1();



// }


document.addEventListener("DOMContentLoaded",function(){
	var JSONURL = "https://spreadsheets.google.com/feeds/list/1WPEQSscDrI8Rdk5daHk7yXrEYdFBFBURfMbQzWtAQuY/1/public/basic?alt=json";

	var data = ""; 
	function callback(data){
	    var rows = [];
	    var cells = data.feed.entry;
	    
	    for (var i = 0; i < cells.length; i++){
	        var rowObj = {};
	        rowObj.title = cells[i].title.$t;
	        console.log(rowObj.title); 
	        var rowCols = cells[i].content.$t.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	        console.log("blah");
	        console.log("rowCols",rowCols);

	        
	        for (var j = 0; j < rowCols.length; j++){
	            var keyVal = rowCols[j].split(':');
	            if(j===6){
	                rowObj[keyVal[0].trim()] = keyVal[1].trim() + keyVal[2].trim();
	            }
	            else{
	                rowObj[keyVal[0].trim()] = keyVal[1].trim();
	            }
	            
	        }
	        rows.push(rowObj);
	    }

	    console.log("meep")


	    data = rows;
	    console.log(data[0]);
	    
	    // var raw = document.createElement('p');
	    // raw.innerText = JSON.stringify(rows);
	    // document.body.appendChild(raw);
	}


	$(document).ready(function(){
	    
	    $.ajax({
	        url:JSONURL,
	        success: function(data){
	            callback(data);
	        }
	    });

	});


	function createThumbnails(){
		var pContainer = document.getElementById("thumbnails"); 
		for(var i = 0; i<data.length; i++){
			//create buttons li
			v


		}
	}
});