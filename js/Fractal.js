const sceneEl = document.querySelector('a-scene');

class Fractal {
    constructor(parent) {

        this.maxDepth = 4;
        this.depth = 0;

        if (parent) {
            this.maxDepth = parent.maxDepth;
            this.depth = parent.depth + 1;
        }
     

        this.createElement();
    }

    createElement () {
        this.entityEl = document.createElement('a-sphere');
        sceneEl.appendChild(this.entityEl);

        console.log('depth is ', this.depth, ' maxDepth is ', this.maxDepth)
        
        if (this.depth < this.maxDepth) {
            console.log('This was reached');
            this.child = new Fractal(this)
        }
    }
}

const fractal = new Fractal();