
class Physics {

    constructor(entity, velocity=null) {
        this.entity = entity;
        this.velocity = velocity || new Vector();
        this.acceleration = new Vector();
    }

    applyForce(vec) {
        this.entity.acceleration.add(vec);
    }

    update(deltaTime) {
        this.velocity.add(this.acceleration.scale(deltaTime));
        this.entity.position.add(this.velocity);
        this.acceleration.clear();
    }

}
