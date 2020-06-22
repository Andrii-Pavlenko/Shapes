import * as PIXI from "pixi.js";

export class Shapes {
  private app: PIXI.Application;

  private gravity: number;

  private countPerSecond: number;

  private surfaceArea: number;

  private count: number;

  private oldTime: number;

  private elementsOnScreen = [];

  constructor() {
    this.app = new PIXI.Application({
      width: 600,
      height: 400,
      backgroundColor: 0xffffff,
    });
    document.querySelector("#gameContainer").appendChild(this.app.view);

    this.app.renderer.plugins.interaction.on("mouseup", (e) => {
      this.generateElement(e);
    });

    PIXI.Loader.shared.load();
    requestAnimationFrame.bind(this);

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

  private generator = () => {
    let newTime = Date.now();
    let deltaTime = newTime - this.oldTime;

    if (deltaTime < 0) deltaTime = 0;
    if (deltaTime > 1000 / this.countPerSecond) {
      this.generateElement(null);
      this.oldTime = newTime;
    }
    this.moveElements();
  };

  private elementCount() {
    let count: number = this.elementsOnScreen.length;
    this.showVirableInText("numberShapes", count, "numberShapesChild");
  }

  private showSurfaceArea() {
    let amount: number = this.elementsOnScreen.reduce((acc, curr) => {
      return acc + Number(curr.area);
    }, 0);

    this.showVirableInText("surfaceArea", amount, "surfaceAreaChild");
  }

  private showVirableInText(parentElement, childrenValue, childrenElement) {
    const childNode = document.createElement("span");
    childNode.id = childrenElement;
    childNode.innerText = childrenValue + "";
    document.querySelector(`#${childrenElement}`) &&
      document
        .querySelector(`#${parentElement}`)
        .removeChild(document.querySelector(`#${childrenElement}`));
    document.querySelector(`#${parentElement}`).appendChild(childNode);
  }

  private generateElement(e) {
    let elementsNames = Object.keys(this.elements);

    let elementName =
      elementsNames[Math.floor(Math.random() * elementsNames.length)];
    const random = new PIXI.Graphics();
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

    random.on("click", (ev) => {
      for (let i = 0; i < this.elementsOnScreen.length; i++) {
        const element = this.elementsOnScreen[i];
        if (this.elementsOnScreen[i].id === ev.currentTarget["id"]) {
          this.app.stage.removeChild(element);
          this.elementsOnScreen.splice(i, 1);
        }
      }
      ev.stopImmediatePropagation();
    });

    this.app.stage.addChild(random);
    this.elementsOnScreen.push(random);

    this.elementCount();
    this.showSurfaceArea();
  }

  private moveElements(delta = null) {
    for (let i = 0; i < this.elementsOnScreen.length; i++) {
      const element = this.elementsOnScreen[i];
      element.position.y += this.gravity;
      if (element.position.y - element.height / 2 > this.app.renderer.height) {
        this.app.stage.removeChild(element);
        this.elementsOnScreen.splice(i, 1);
      }
    }
  }

  private getRandomColor() {
    const letters: string = "0123456789ABCDEF";
    let color: string = "0x";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private initializeButtonClicks() {
    document.getElementById("addGravity").addEventListener("click", (e) => {
      this.gravityCalculation(true);
    });

    document
      .getElementById("decreaseGravity")
      .addEventListener("click", (e) => {
        this.gravityCalculation(false);
      });

    document.getElementById("addInterval").addEventListener("click", (e) => {
      this.intervalCalculation(true);
    });

    document
      .getElementById("decreaseInterval")
      .addEventListener("click", (e) => {
        this.intervalCalculation(false);
      });
  }

  private createCircule(circle) {
    circle.drawCircle(0, 0, 50);
    circle.area = Math.round(Math.PI * Math.pow(circle.width / 2, 2));
  }

  private createEllipse = (ellipse) => {
    ellipse.drawEllipse(0, 0, 50, 30);
    ellipse.area = Math.round(
      (((Math.PI * ellipse.width) / 2) * ellipse.height) / 2
    );
  };

  private createRectangle(rect) {
    rect.drawRect(0, 0, 100, 100);
    rect.area = Math.round(rect.width * rect.height);
  }

  private createTriangle = (triangle) => {
    const coordinates = [0, 0, 0, 50, 50, 0];
    triangle.drawPolygon(coordinates);
    triangle.area = this.calculatePolygonArea(coordinates);
  };

  private createPentagon = (pentagon) => {
    const coordinates = [0, 0, 50, 0, 70, 25, 25, 70, 0, 50];
    pentagon.drawPolygon(coordinates);
    pentagon.area = this.calculatePolygonArea(coordinates);
  };

  private createHexagon = (hexagon) => {
    const coordinates = [0, 0, 50, 0, 70, 25, 70, 70, 25, 70, 0, 50];
    hexagon.drawPolygon(coordinates);
    hexagon.area = this.calculatePolygonArea(coordinates);
  };

  private createRandom = (random) => {
    const coordinates = [
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
    for (let i = 0; i < coordinates.length; i += 4) {
      const line = [];
      for (let j = i; j < coordinates.length; j++) {
        if (i === 0) {
          if (j < 6) {
            line.push(coordinates[j]);
          }
        } else if (i > 3 && i < coordinates.length - 4 && line.length < 6) {
          line.push(coordinates[j]);
        } else if (line.length < 6) {
          if (j === coordinates.length - 1) {
            line.push(coordinates[j], coordinates[0], coordinates[1]);
          } else {
            line.push(coordinates[j]);
          }
        }
      }
      random.bezierCurveTo(...line);
    }

    random.closePath();
    random.area = this.calculatePolygonArea(coordinates);
  };

  private calculatePolygonArea = (arr) => {
    const x = [];
    const y = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        y.push(arr[i]);
      } else {
        x.push(arr[i]);
      }
    }
    return this.polygonArea(x, y, x.length);
  };

  private polygonArea = (X, Y, numPoints) => {
    let area = 0;
    let j = numPoints - 1;

    for (let i = 0; i < numPoints; i++) {
      area += (X[j] + X[i]) * (Y[j] - Y[i]);
      j = i;
    }
    return Math.abs(area / 2);
  };

  private resize() {
    const gameContainer: HTMLElement = document.querySelector("#gameContainer");
    const containerWidth: number = gameContainer.clientWidth;
    const containerHeight: number = gameContainer.clientHeight;
    this.app.renderer.resize(containerWidth, containerHeight);
  }

  private gravityCalculation(add: boolean) {
    if (add) {
      this.gravity = Number((this.gravity + 0.1).toFixed(1));
    } else {
      this.gravity = Number((this.gravity - 0.1).toFixed(1));
      if (this.gravity < 0.1) {
        this.gravity = 0.1;
      }
    }
    this.showVirableInText("gravity", this.gravity, "gravitylChild");
  }

  private intervalCalculation(add: boolean) {
    if (add) {
      this.countPerSecond = Math.round(this.countPerSecond + 1);
    } else {
      this.countPerSecond = Math.round(this.countPerSecond - 1);
      if (this.countPerSecond < 1) {
        this.countPerSecond = 1;
      }
    }

    this.showVirableInText("interval", this.countPerSecond, "intervalChild");
  }

  private elements = {
    circle: this.createCircule,
    rect: this.createRectangle,
    triangle: this.createTriangle,
    ellipse: this.createEllipse,
    pentagon: this.createPentagon,
    hexagon: this.createHexagon,
    random: this.createRandom,
  };
}

window.onload = function () {
  new Shapes();
};
