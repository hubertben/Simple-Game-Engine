class StateManager {

    constructor() {
        this.states = [];
        this.currentState = null;
    }

    pushState(state) {
        this.states.push(state);
    }

    popState() {
        this.states.pop();
    }

    update(dt) {
        this.currentState.update(dt);
    }

    draw(ctx) {
        this.currentState.draw(ctx);
    }

}