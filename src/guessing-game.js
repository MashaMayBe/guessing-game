class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round(this.min+Math.abs(this.max-this.min)/2);
    }

    lower() {
        this.max = Math.round(this.min+Math.abs(this.max-this.min)/2);
    }

    greater() {
        this.min += Math.round(Math.abs(this.max-this.min)/2);
    }
}

module.exports = GuessingGame;
