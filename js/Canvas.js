/*
    Provides access to canvas
*/

class GameCanvas {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.querySelector('#gameCanvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    getContext() {
        return this.ctx;
    }

}