function Images(){
    this.imageObjects = [];
}

Images.prototype.get = function(imageObj){
    var result = [];
    if(imageObj){
        this.imageObjects.forEach(function(arrImageObj){
            if(arrImageObj.equals(imageObj)){
                result.push(arrImageObj);
            }
        });
    }

    return result;
};

Images.prototype.add = function(imageObj){
    var name = imageObj.name;
    var style = imageObj.style;
    var url = imageObj.url;
    var newImage = new image(name, style, url);
    this.imageObjects.push(newImage);
};

Images.prototype.update = function(imageObj, attributesObj){
    if(imageObj){
        this.imageObjects.forEach(function(arrImageObj){
            if(arrImageObj.equals(imageObj)){
                arrImageObj.updateAttribues(attributesObj);
            }
        });
    }
};

Images.prototype.delete = function(imageObj){
    if(imageObj){
        for(var index = 0 ; index<this.imageObjects.length; index++) {
            if (this.imageObjects[index].equals(imageObj)) {
                this.imageObjects.splice(index,1);
                index = index - 1;
            }
        }
    }
};





function image(name, style, url){
    this.name = name;
    this.style = style;
    this.url = url;
}

image.prototype.equals = function(object){
    for(var prop in object){
        if(prop === 'style'){
            return this.compareStyles(object[prop]);
        }
        else if(this[prop] !== object[prop]){
            return false;
        }
    }
    return true;
};

image.prototype.updateAttribues = function(attributeObject){
    for(var prop in attributeObject){
        if(prop !== 'style') {
            this[prop] = attributeObject[prop];
        }
        else{
            this.updateStyles(attributeObject[prop]);
        }
    }
};

image.prototype.compareStyles = function(styleObject){
    for(var prop in styleObject) {
        if(this['style']) {
            if (this['style'][prop] !== styleObject[prop]) {
                return false;
            }
        }
        else{
            return false;
        }
    }
    return true;
};

image.prototype.updateStyles = function(styleObject){
    for(var prop in styleObject){
        this['style'][prop] = styleObject[prop];
    }
};
