/*
    Handles loading and retrieving of assets
*/

class AssetManager {

    constructor() {
        this.assets = {};
    }

    async loadAsset(path, name) {
        if (arguments.length === 1) {
            name = path;
        }
        const imagePromise = new Promise(resolve => {
            const img = new Image();
            img.src = path;
            this.assets[name] = { image: img, loaded: false };
            img.onload = resolve;
        });
        await imagePromise;
    }

    async loadAssets(assets) {
        const promises = [];
        for (const [path, name] of assets) {
            promises.push(new Promise(resolve => {
                const img = new Image();
                img.src = path;
                this.assets[name] = { image: img, loaded: false };
                img.onload = resolve;
            }));
        }
        await Promise.all(promises);
    }

    getAsset(name) {
        return this.assets[name].image;
    }

    doneLoading() {
        return this.assetCount === this.loadedCount;
    }

}