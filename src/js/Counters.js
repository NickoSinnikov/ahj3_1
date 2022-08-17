export default class Counters {
    constructor() {
        this.damaged = document.querySelector('.damaged');
        this.health = document.querySelector('.health');
        this.damagedCount = 0;
        this.healthCount = 4;
    }

    increaseDamage() {
        this.damagedCount++;
        this.damaged.innerText = this.damagedCount;
    }

    decreaseHealth() {
        this.healthCount -= 1;
        this.health.innerText = this.healthCount;
    }


}