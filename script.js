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

	$.ajax({
		url:JSONURL,
	    success: function(data){
	    	callback(data);
	    }
	 });

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
	    
	    createThumbnails(data);
	    
	    // var raw = document.createElement('p');
	    // raw.innerText = JSON.stringify(rows);
	    // document.body.appendChild(raw);
	}


	// $(document).ready(function(){
	    
	//     $.ajax({
	//         url:JSONURL,
	//         success: function(data){
	//             callback(data);
	//         }
	//     });

	// });


	function createThumbnails(data){
		console.log("creating...");
		var pContainer = document.getElementById("thumbnails"); 
		console.log(pContainer);
		console.log(data.length);
		for(i = 0; i<data.length; i++){
			//create buttons li
			var title = data[i].title;
			var project = document.createElement("li");
			project.setAttribute("id",i);
			var projectText = document.createElement("p");
			projectText.setAttribute('class','projectTitle');
			projectText.innerHTML = title;
			project.appendChild(projectText);
			project.addEventListener('click',function(){
				console.log(this.classList);
				if(this.classList.contains('click')){
					//remove div with id id drop 
					// console.log(document.getElementById(this.childNodes[1].id));
					this.removeChild(document.getElementById(this.childNodes[1].id));
					this.removeAttribute("class");

				}
				else{
					this.setAttribute('class','click');
					//create div with id drop 
					var desc = document.createElement('div');
					desc.setAttribute('id','drop'); 
					desc.innerHTML = "Hellooooo";
					this.appendChild(desc);
					// console.log("data\t",data);
					writeDiv(data,this);


				}
	
				


			});
			pContainer.appendChild(project);



		}
	}



	function writeDiv(data,proj){
		console.log(proj);
		console.log(data);
	}

	// function projectClick(evt){
	// 	// console.log(index);
	// 	this.classList.toggle('click');
	// 	var desc = document.createElement('div');
	// 	desc.setAttribute('id','drop'); 
	// 	desc.innerHTML = "Hellooooo";
	// 	this.appendChild(desc);
	// 	console.log("data\t",data);
	// }
});