// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const paragraph = document.createElement("p");
const header = document.createElement("h3");
const divider = document.createElement("div");
const subHeader = document.createElement("h3");
const subParagraph = document.createElement("h1");

paragraph.textContent = "Hey, I'm red.";
header.textContent = "I'm a blue h3!";
divider.setAttribute("style", "border-style:solid; border-color: red; background: pink");
subHeader.textContent = "I'm in a div";
subParagraph.textContent = "ME TOO";

container.appendChild(paragraph);
container.appendChild(header);

divider.appendChild(subHeader);
divider.appendChild(subParagraph);
container.appendChild(divider);

//---------------------- buttons after here


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
	alert("Hello World");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
	console.log(e.target);
});

btn3.addEventListener("click", function(e) {
	e.target.style.background = "blue";
});


	
const btnContainer = document.querySelector("#btnContainer");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		alert(button.id);
	});
});
