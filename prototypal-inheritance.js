// A demonstration of prototypal inheritance in JS

const a = function(x) {
    this.x = x;
    a.prototype.getX = function() {
      return this.x;
    }
  }
  
  const b = function(x, y) {
    a.call(this, x)
    this.y = y;
    this.getY = function() {
      return this.y;
    }
  }
  
  b.prototype = Object.create(a.prototype);
  
  const newA = new a(5);
  const newB = new b(6, 7);
  
  console.log(newB.getY());