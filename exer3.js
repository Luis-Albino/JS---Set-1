const target = document.getElementById("target");

Object.prototype.styleElement = function (newColor,newSize,newBackground) {
    this.style.color = newColor?newColor:"black";
    this.style.fontSize = newSize?newSize:"20px";
    this.style.background = newBackground?newBackground:"white";
};

target.styleElement("red","35px","blue");
