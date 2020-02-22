/*
*/

class Game {

    constructor(width, height) {
        this.window = new GameCanvas(width, height);
        this.stateMgr = new StateManager();
        this.assetMgr = new AssetManager();
    }

    async init() {
        const ctx = this.window.getContext();
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, this.window.width, this.window.height);
    }

}