const target = document.getElementById("target");

function applyStyle (newColor = "black",newSize = "20px",newBackground = "white") {
    this.style.color = newColor;
    this.style.fontSize = newSize;
    this.style.background = newBackground;
}

function styleElement (domElement,newColor,newSize,newBackground) {
    applyStyle.call(domElement,newColor,newSize,newBackground)
};

styleElement(target,"red","35px","blue");
