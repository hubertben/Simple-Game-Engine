class Vector {

    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    /*
        Adds vector to this vector
    */

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    /*
        Subtracts vector from this vector
    */

    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    /*
        Multiplies vector to this vector
    */

    multiply(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
    }

    /*
        Divides vector from this vector
    */

    divide(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
    }

    /*
        Scales This vector by a Constant
    */

    scale(c) {
        this.x *= c;
        this.y *= c;
    }

    /*
        Returns the dot product of 2 vectors
    */

    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    setMagnitude(magnitude) {
        const dir = this.direction();
        this.x = Math.cos(dir) * magnitude;
        this.y = Math.sin(dir) * magnitude;
    }

    direction() {
        return Math.atan2(this.y, this.x);
    }

    setDirection(angle) {
        const magnitude = this.magnitude();
        this.x = Math.cos(angle) * magnitude;
        this.y = Math.sin(angle) * magnitude;
    }

    clear() {
        this.x = 0;
        this.y = 0;
    }

}