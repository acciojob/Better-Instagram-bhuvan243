//your code here
const container = document.getElementById("parent");
const images = document.getElementsByClassName("image");

function onDragStart(event) {
    console.log("dragstart");
    event.dataTransfer.setData("sourceId", event.target.id);
}
function onDragOver(event) {
	event.preventDefault();
}
function onDrop(event) {
	const sourceElementId = event.dataTransfer.getData("sourceId");
	const sourceElement = document.getElementById(sourceElementId);
	const destinationElement = event.target;

	const sourceNextElement = sourceElement.nextElementSibling;
	const destinationNextElement = destinationElement.nextElementSibling;

	// now swap the divs
	container.insertBefore(destinationElement, sourceNextElement);
	container.insertBefore(sourceElement, destinationNextElement);
	
}

// now for loop to all image div for drag events
for (let i=0; i<images.length; i++){
	images[i].addEventListener("dragstart", onDragStart);
	images[i].addEventListener("dragover", onDragOver);
	images[i].addEventListener("drop", onDrop);
}