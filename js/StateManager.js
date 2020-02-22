class StateManager {

    constructor() {
        this.states = [];
        this.currentState = null;
    }

    pushState(state) {
        this.states.push(state);
        this.currentState = state;
    }

    popState() {
        this.states.pop();
        this.currentState = this.states[this.states.length-1];
    }

    handleInput(event) {
        this.currentState.handleInput(event);
    }

    update(dt) {
        this.currentState.update(dt);
    }

    draw(ctx) {
        this.currentState.draw(ctx);
    }

}