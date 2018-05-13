class Fighter {
    constructor(name = "Agent Smith", power = 9000, health = 1000000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    hit(enemy, point = 1) {
        enemy.setDamage(point * this.power);
    }

    setDamage(damage = 0) {
        this.health = this.health - damage;
        console.log(`health: ${this.health}`);
    }
}

