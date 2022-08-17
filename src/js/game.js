import Counters from "./Counters";


export default class Game {
    constructor() {
        this.counters = new Counters();
        this.cells = Array.from(document.querySelectorAll('.cell '));
        this.interval = null;
    }

    damage(event) {
        if (!event.target.classList.contains('goblin')) {
            return;
        }
        this.counters.increaseDamaged();
        event.target.removeEventListener('click', this.damage);
        if (this.counters.damagedCounter === 10) {
            this.win();
        }
        document.querySelector('.goblin').remove();
        clearInterval(this.interval);
        this.punchGoblin();
    }

    punchGoblin() {
        if (document.querySelector('.goblin')) {
            document.querySelector('.goblin').remove();
            this.counters.increaseHealthy();
            clearInterval(this.interval);
            if (this.counters.healthyCounter === 5) {
                this.fail();
            }
        }
        let randomIndex = Math.floor(Math.random() * this.cells.length);
        while (randomIndex === this.previousIndex) {
            randomIndex = Math.floor(Math.random() * this.cells.length);
        }
        const randomCell = this.cells[randomIndex];
        this.previousIndex = randomIndex;
        const goblin = document.createElement('div');
        goblin.classList.add('goblin');
        randomCell.appendChild(goblin);
        goblin.addEventListener('click', this.damage.bind(this));
        this.interval = setInterval(this.punchGoblin.bind(this), 1000);
    }

    win() {
        alert('You win!');
        this.counters.damagedDiv.innerText = 0;
        this.counters.damagedCounter = 0;
        this.counters.healthyDiv.innerText = 0;
        this.counters.healthyCounter = 0;
    }

    fail() {
        alert('You lose!');
        this.counters.damagedDiv.innerText = 0;
        this.counters.damagedCounter = 0;
        this.counters.healthyDiv.innerText = 0;
        this.counters.healthyCounter = 0;
    }
}