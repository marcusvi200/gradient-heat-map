class GradientHeatMap {
    /**
     * @author Marcus Vinicius Oliveira Silva
     * @version 0.9.11
     * @description Added the comment of the class's midForce parameter and changed the README
     * @version 0.9.10
     * @description This class changes, in the form of a gradient color, according to the informed percentage, an object passed in its construction.
     * This object must be an element and cannot be text.
     * 
     */


    /**
     * @description Apply gradient color based on a percentage
     * @param {Object} object 
     * @param {String} startColor 
     * @param {String} middleColor
     * @param {String} endColor 
     * @param {Number} percentage 
     * @param {Boolean} displayPercentage
     * @param {position_GradientHeatMap} position 
     * @param {Number} minForce 
     * @param {Number} midForce 
     * @param {Number} maxForce 
     */
    constructor(object, startColor = "#ffffff", middleColor = "#999999", endColor = "#000000", percentage = 0, displayPercentage = false, position = position_GradientHeatMap.right, minForce = 300, midForce = 100, maxForce = 0) {
        this._object = object;

        this._startColor = startColor;
        this._middleColor = middleColor;
        this._endColor = endColor;

        this._position = position;

        this._displayPercentage = displayPercentage;

        this._maxForce = minForce;
        this._midForce = midForce;
        this._minForce = maxForce;

        this._percentage = percentage;

        this.initialize();
    }

    initialize() {
        if (this._checkColors() && this._checkObject() && this._checkPercentage()) {
            let obj = this._object.getElementsByClassName("F9Qyztg9KHNg_class");

            if (obj.length == 0) {
                let elementDiv = document.createElement('DIV');
                elementDiv.className = "F9Qyztg9KHNg_class";
                elementDiv.style.position = "absolute";
                elementDiv.style.color = (this._displayPercentage ? '' : 'transparent');

                this._object.append(elementDiv);
            }

            return this;
        } else {
            console.error('Impossible to continue.', 'Check the parameters!');
        }
    }

    /**
     * @description Set gradient color on object
     * @param {position_GradientHeatMap} position 
     * @param {Number} percentage
     * @param {String} startColor
     * @param {String} middleColor
     * @param {String} endColor
     */
    run(position = this._position, percentage = this._percentage, startColor = this._startColor, middleColor = this._middleColor, endColor = this._endColor) {
        this._position = position;
        this._percentage = percentage;
        this._startColor = startColor;
        this._middleColor = middleColor;
        this._endColor = endColor;

        if (this._checkColors() && this._checkObject() && this._checkPercentage()) {
            let minPercent = this._map(percentage, Math.abs(this._maxForce) * -1, Math.abs(this._minForce));
            let midPercent = this._map(percentage, Math.abs(this._midForce) * -1, Math.abs(this._maxForce));
            let maxPercent = this._map(percentage, Math.abs(this._minForce) * -1, Math.abs(this._maxForce));

            this._object.style.background = `linear-gradient(${position}, ${this._endColor} ${minPercent}%, ${this._middleColor} ${midPercent}%, ${this._startColor} ${maxPercent}%)`;

            let obj = this._object.getElementsByClassName("F9Qyztg9KHNg_class");
            obj[0].innerHTML = (percentage != null ? `${percentage}%` : `0%`);
            obj[0].style.color = `linear-gradient(${position}, ${this._endColor} ${minPercent}%, ${this._middleColor} ${midPercent}%, ${this._startColor} ${maxPercent}%)`;

        } else {
            console.error('Impossible to continue.', 'Check the parameters!');
        }
    }

    /**
     * @description Map between two values
     * @param {Number} percentage 
     * @param {Number} in_min 
     * @param {Number} in_max 
     */
    _map(percentage, in_min, in_max) {
        return (((in_max - in_min) * (percentage / 100) + in_min)).toFixed(0);
    }

    _checkColors() {
        if (typeof this._startColor != 'string' || typeof this._middleColor != 'string' || typeof this._endColor != 'string' ||
            this._startColor.substr(0, 1) != '#' || this._middleColor.substr(0, 1) != '#' || this._endColor.substr(0, 1) != '#' ||
            this._startColor.length != 7 || this._middleColor.length != 7 || this._endColor.length != 7) {

            console.error('Color is not string!', `Color should be for example: #FFFFFF`);
            return false;
        }

        return true;
    }

    _checkObject() {
        if (typeof this._object != 'object') {
            console.error('Object is not object.', `Object is: ${typeof this._object}`);
            return false;
        }

        return true;
    }

    _checkPercentage() {
        if (this._percentage >= 0 && this._percentage <= 100 && this._percentage != null) {
            return true;
        } else {
            console.error('Percent must be between 0 to 100.', `Percentage is with: ${this._percentage}`);
            return false;
        }
    }

    get object() {
        return this._object;
    }

    get startColor() {
        return this._startColor;
    }

    get endColor() {
        return this._endColor;
    }

    get value() {
        return this._percentage;
    }

}

const position_GradientHeatMap = {
    'top': 'to top',
    'right': 'to right',
    'left': 'to left',
    'bottom': 'to bottom',
    'top_right': 'to top right',
    'top_left': 'to top left',
    'bottom_right': 'to bottom right',
    'bottom_left': 'to bottom left'
};