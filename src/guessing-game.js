class GuessingGame {
    constructor(number) {
        this.number = number;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.half = Math.round((this.maxValue + this.minValue) / 2)

        let randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue) + this.minValue);

        if (this.half < this.number){
            this.greater();
        } else if (this.half > this.number){
            this.lower();
        }
        randomNumber = Math.ceil((this.maxValue + this.minValue) / 2);
        return randomNumber;
    }

    lower() {
        this.maxValue = Math.round((this.maxValue + this.minValue) / 2);
    }

    greater() {
        this.minValue = Math.round((this.maxValue + this.minValue) / 2);
    }
}

module.exports = GuessingGame;
