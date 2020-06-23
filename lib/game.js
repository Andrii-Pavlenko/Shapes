(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("PIXI")) : factory(root["PIXI"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __importStar(__webpack_require__(2));
var Shapes = /** @class */ (function () {
    function Shapes() {
        var _this = this;
        this.elementsOnScreen = [];
        this.generator = function () {
            var newTime = Date.now();
            var deltaTime = newTime - _this.oldTime;
            if (deltaTime < 0)
                deltaTime = 0;
            if (deltaTime > 1000 / _this.countPerSecond) {
                _this.generateElement(null);
                _this.oldTime = newTime;
            }
            _this.moveElements();
        };
        this.createEllipse = function (ellipse) {
            ellipse.drawEllipse(0, 0, 50, 30);
            ellipse.area = Math.round((((Math.PI * ellipse.width) / 2) * ellipse.height) / 2);
        };
        this.createTriangle = function (triangle) {
            var coordinates = [0, 0, 0, 50, 50, 0];
            triangle.drawPolygon(coordinates);
            triangle.area = _this.calculatePolygonArea(coordinates);
        };
        this.createPentagon = function (pentagon) {
            var coordinates = [0, 0, 50, 0, 70, 25, 25, 70, 0, 50];
            pentagon.drawPolygon(coordinates);
            pentagon.area = _this.calculatePolygonArea(coordinates);
        };
        this.createHexagon = function (hexagon) {
            var coordinates = [0, 0, 50, 0, 70, 25, 70, 70, 25, 70, 0, 50];
            hexagon.drawPolygon(coordinates);
            hexagon.area = _this.calculatePolygonArea(coordinates);
        };
        this.createRandom = function (random) {
            var coordinates = [
                40,
                40,
                50,
                0,
                70,
                30,
                120,
                10,
                110,
                55,
                140,
                90,
                100,
                100,
                90,
                140,
                50,
                110,
                10,
                120,
                30,
                70,
                0,
                50,
            ];
            random.moveTo(coordinates[0], coordinates[1]);
            for (var i = 0; i < coordinates.length; i += 4) {
                var line = [];
                for (var j = i; j < coordinates.length; j++) {
                    if (i === 0) {
                        if (j < 6) {
                            line.push(coordinates[j]);
                        }
                    }
                    else if (i > 3 && i < coordinates.length - 4 && line.length < 6) {
                        line.push(coordinates[j]);
                    }
                    else if (line.length < 6) {
                        if (j === coordinates.length - 1) {
                            line.push(coordinates[j], coordinates[0], coordinates[1]);
                        }
                        else {
                            line.push(coordinates[j]);
                        }
                    }
                }
                random.bezierCurveTo.apply(random, line);
            }
            random.closePath();
            random.area = _this.calculatePolygonArea(coordinates);
        };
        this.calculatePolygonArea = function (arr) {
            var x = [];
            var y = [];
            for (var i = 0; i < arr.length; i++) {
                if (i % 2 == 0) {
                    y.push(arr[i]);
                }
                else {
                    x.push(arr[i]);
                }
            }
            return _this.polygonArea(x, y, x.length);
        };
        this.polygonArea = function (X, Y, numPoints) {
            var area = 0;
            var j = numPoints - 1;
            for (var i = 0; i < numPoints; i++) {
                area += (X[j] + X[i]) * (Y[j] - Y[i]);
                j = i;
            }
            return Math.abs(area / 2);
        };
        this.elements = {
            circle: this.createCircule,
            rect: this.createRectangle,
            triangle: this.createTriangle,
            ellipse: this.createEllipse,
            pentagon: this.createPentagon,
            hexagon: this.createHexagon,
            random: this.createRandom,
        };
        this.app = new PIXI.Application({
            width: 600,
            height: 400,
            backgroundColor: 0xffffff,
        });
        document.querySelector("#gameContainer").appendChild(this.app.view);
        this.app.renderer.plugins.interaction.on("pointerdown", function (e) {
            _this.generateElement(e);
        });
        PIXI.Loader.shared.load();
        window.addEventListener("resize", this.resize.bind(this));
        this.gravity = 1;
        this.countPerSecond = 1;
        this.oldTime = Date.now();
        this.resize();
        this.initializeButtonClicks();
        this.app.ticker.add(this.generator);
        this.showVirableInText("gravity", this.gravity, "gravitylChild");
        this.showVirableInText("interval", this.countPerSecond, "intervalChild");
        this.app.ticker.start();
    }
    Shapes.prototype.elementCount = function () {
        var count = this.elementsOnScreen.length;
        this.showVirableInText("numberShapes", count, "numberShapesChild");
    };
    Shapes.prototype.showSurfaceArea = function () {
        var amount = this.elementsOnScreen.reduce(function (acc, curr) {
            return acc + Number(curr.area);
        }, 0);
        this.showVirableInText("surfaceArea", amount, "surfaceAreaChild");
    };
    Shapes.prototype.showVirableInText = function (parentElement, childrenValue, childrenElement) {
        var childNode = document.createElement("span");
        childNode.id = childrenElement;
        childNode.innerText = childrenValue + "";
        document.querySelector("#" + childrenElement) &&
            document
                .querySelector("#" + parentElement)
                .removeChild(document.querySelector("#" + childrenElement));
        document.querySelector("#" + parentElement).appendChild(childNode);
    };
    Shapes.prototype.generateElement = function (e) {
        var _this = this;
        var elementsNames = Object.keys(this.elements);
        var elementName = elementsNames[Math.floor(Math.random() * elementsNames.length)];
        var random = new PIXI.Graphics();
        random.beginFill(+this.getRandomColor());
        random.name = elementName;
        this.elements[elementName](random);
        random.endFill();
        switch (elementName) {
            case "circle":
                random.pivot.set(0, -50);
                break;
            case "ellipse":
                random.pivot.set(0, -30);
                break;
            case "random":
                random.pivot.set(30, 30);
                break;
            default:
                random.pivot.set(0, 0);
                break;
        }
        random.x = e
            ? e.data.global.x
            : Math.random() * (this.app.renderer.width - random.width / 2);
        random.y = e ? e.data.global.y : 0 - random.height;
        random.interactive = true;
        random.buttonMode = true;
        random["id"] = Math.random();
        random.on("pointerdown", function (ev) {
            for (var i = 0; i < _this.elementsOnScreen.length; i++) {
                var element = _this.elementsOnScreen[i];
                if (_this.elementsOnScreen[i].id === ev.currentTarget["id"]) {
                    _this.app.stage.removeChild(element);
                    _this.elementsOnScreen.splice(i, 1);
                }
            }
            ev.stopImmediatePropagation();
        });
        this.app.stage.addChild(random);
        this.elementsOnScreen.push(random);
        this.elementCount();
        this.showSurfaceArea();
    };
    Shapes.prototype.moveElements = function (delta) {
        if (delta === void 0) { delta = null; }
        for (var i = 0; i < this.elementsOnScreen.length; i++) {
            var element = this.elementsOnScreen[i];
            element.position.y += this.gravity;
            if (element.position.y - element.height / 2 > this.app.renderer.height) {
                this.app.stage.removeChild(element);
                this.elementsOnScreen.splice(i, 1);
            }
        }
    };
    Shapes.prototype.getRandomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "0x";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    Shapes.prototype.initializeButtonClicks = function () {
        var _this = this;
        document.getElementById("addGravity").addEventListener("click", function (e) {
            _this.gravityCalculation(true);
        });
        document
            .getElementById("decreaseGravity")
            .addEventListener("click", function (e) {
            _this.gravityCalculation(false);
        });
        document.getElementById("addInterval").addEventListener("click", function (e) {
            _this.intervalCalculation(true);
        });
        document
            .getElementById("decreaseInterval")
            .addEventListener("click", function (e) {
            _this.intervalCalculation(false);
        });
    };
    Shapes.prototype.createCircule = function (circle) {
        circle.drawCircle(0, 0, 50);
        circle.area = Math.round(Math.PI * Math.pow(circle.width / 2, 2));
    };
    Shapes.prototype.createRectangle = function (rect) {
        rect.drawRect(0, 0, 100, 100);
        rect.area = Math.round(rect.width * rect.height);
    };
    Shapes.prototype.resize = function () {
        var gameContainer = document.querySelector("#gameContainer");
        var containerWidth = gameContainer.clientWidth;
        var containerHeight = gameContainer.clientHeight;
        this.app.renderer.resize(containerWidth, containerHeight);
    };
    Shapes.prototype.gravityCalculation = function (add) {
        if (add) {
            this.gravity = Number((this.gravity + 0.1).toFixed(1));
        }
        else {
            this.gravity = Number((this.gravity - 0.1).toFixed(1));
            if (this.gravity < 0.1) {
                this.gravity = 0.1;
            }
        }
        this.showVirableInText("gravity", this.gravity, "gravitylChild");
    };
    Shapes.prototype.intervalCalculation = function (add) {
        if (add) {
            this.countPerSecond = Math.round(this.countPerSecond + 1);
        }
        else {
            this.countPerSecond = Math.round(this.countPerSecond - 1);
            if (this.countPerSecond < 1) {
                this.countPerSecond = 1;
            }
        }
        this.showVirableInText("interval", this.countPerSecond, "intervalChild");
    };
    return Shapes;
}());
exports.Shapes = Shapes;
window.onload = function () {
    new Shapes();
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ })
/******/ ]);
});