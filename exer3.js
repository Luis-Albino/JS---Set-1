const target = document.getElementById("target");

function styleElement (domElement,newColor = "black",newSize = "20px",newBackground = "white") {
    domElement.style.color = newColor;
    domElement.style.fontSize = newSize;
    domElement.style.background = newBackground;
};

styleElement(target,"red","35px","blue");
