/*
    Base class for entities in the game
*/

class Entity {

    constructor(x, y) {
        this.position = new Vector(x, y);
        this.physics = new Physics(this);
    }

    update(deltaTime) {
        this.physics.update(deltaTime);
    }

}