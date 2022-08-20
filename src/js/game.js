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
        if (this.counters.damagedCount === 10) {
            this.win();
        }
        document.querySelector('.goblin').remove();
        clearInterval(this.interval);
        this.punchGoblin();
    }

    punchGoblin() {
        if (document.querySelector('.goblin')) {
            document.querySelector('.goblin').remove();
            this.counters.decreaseHealth();
            clearInterval(this.interval);
            if (this.counters.healthCount === 4) {
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
        this.counters.damaged.innerText = 0;
        this.counters.damagedCount = 0;
        this.counters.health.innerText = 0;
        this.counters.healthCount = 0;
    }

    fail() {
        alert('You lose!');
        this.counters.damaged.innerText = 0;
        this.counters.damagedCount = 0;
        this.counters.health.innerText = 0;
        this.counters.healthCount = 0;
    }
}