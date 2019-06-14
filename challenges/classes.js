// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(cAttr){
//     this.length = cAttr.length;
//     this.width =  cAttr.width;
//     this.height = cAttr.height;
//   }

// CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }

// const surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }
  

class CMaker {
    constructor(cAttr){
        this.length = cAttr.length;
        this.width =  cAttr.width;
        this.height = cAttr.height;  
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }


}

const cube = new CMaker({ 
    width: 5,
    height: 5,
    length: 4
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.