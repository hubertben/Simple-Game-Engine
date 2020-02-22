/*
    Base class for entities in the game
*/

class Entity{

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.velocity = new Vector();
    }
    
    setPosition(x, y){
        this.x = x;
        this.y = y;
    }

    updatePosition(velocity, deltaTime){
        this.x += this.velocity.x + deltaTime;
        this.y += this.velocity.y + deltaTime;
    }

}