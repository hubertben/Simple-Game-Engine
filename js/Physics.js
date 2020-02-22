
class Physics{

    constructor(entity, velocity = null) {
        this.entity = entity;
        this.velocity = velocity;
    }

    constructor(entity) {
        this.entity = entity;
    }

    start() {
        // Starting Code
    }

    update(deltaTime) {
        this.entity.updatePosition(this.velocity, deltaTime);
    }


}