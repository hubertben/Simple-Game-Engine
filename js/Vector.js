class Vector {

    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
    
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
    
    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }
    
    multiply(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
    }

    divide(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
    }

    scale(c) {
        this.x *= c;
        this.y *= c;
    }

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
