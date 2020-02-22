class Vector{

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    addVectors(vect) {
        this.x += vect.x;
        this.y += vect.y;
    }

    subtractVectors(vect) {
        this.x -= vect.x;
        this.y -= vect.y;
    }

    multiplyVectors(vect) {
        this.x *= vect.x;
        this.y *= vect.y;
    }

    divideVectors(vect) {
        this.x /= vect.x;
        this.y /= vect.y;
    }

    scaleVector(ax, ay) {
        this.x += ax;
        this.y += ay;
    }


}