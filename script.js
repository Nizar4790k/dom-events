var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement("p");
	var text = document.createTextNode(input.value);
	
	
	li.addEventListener("click",function toggle(){

		var classList = li.classList
	
		if(classList.contains("done")){
			classList.remove("done");
	
		}else{
			classList.add("done");
		}

		console.log("toggling");
	
	});
	
	
	p.appendChild(text);


	
	

	var button = document.createElement("button");
	var textButton = document.createTextNode("Delete");
	button.appendChild(textButton);
	button.classList.add("deleteButton");

	button.addEventListener("click", function deleteElement(){
	var lastElement =ul.childNodes.length-1;
	ul.removeChild(ul.childNodes[lastElement]);
	

	});
	
	li.appendChild(text);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





