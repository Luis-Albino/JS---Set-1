const target = document.getElementById("target");

function styleElement (element,newColor,newSize,newBackground) {
    function NewElement (obj) {
        for (let prop in obj) {
            this[prop] = obj[prop];
        }
        this.style.color = newColor;
        this.style.fontSize = newSize;
        this.style.background = newBackground;
    };

    let newElement = new NewElement(element);
    element.parentNode.replaceChild(newElement,element);
};

styleElement(target,"red","35px","blue");