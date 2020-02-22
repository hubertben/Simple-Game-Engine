class Vector{

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    /*
        Adds Vector to this Vector
    */

    addVectors(vect) {
        this.x += vect.x;
        this.y += vect.y;
    }

    /*
        Subtracts Vector from this Vector
    */

    subtractVectors(vect) {
        this.x -= vect.x;
        this.y -= vect.y;
    }

    /*
        Multiplies Vector to this Vector
    */

    multiplyVectors(vect) {
        this.x *= vect.x;
        this.y *= vect.y;
    }

    /*
        Divides Vector from this Vector
    */

    divideVectors(vect) {
        this.x /= vect.x;
        this.y /= vect.y;
    }

    /*
        Scales This Vector by a Constant
    */

    scaleVectorSingleConstant(c) {
        this.x += c;
        this.y += c;
    }

    /*
        Scales each component of This Vector by their respective constant
    */

    scaleVectorDoubleConstant(cx, cy) {
        this.x += cx;
        this.y += cy;
    }
}