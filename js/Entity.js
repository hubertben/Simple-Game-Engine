/*
    Base class for entities in the game
*/

class Entity{

    constructor() {
        this.x = 0;
        this.y = 0;

        this.velocity = new Vector();
    }

    updatePosition(velocity, deltaTime){
        this.x += this.velocity.x + deltaTime;
        this.y += this.velocity.y + deltaTime;
        
    }

}