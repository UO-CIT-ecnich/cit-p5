
// Monster Class
module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife;
  }

  // UpdateLife function
  updateLife(lifeChangeAmount) {
    this.currentLife += lifeChangeAmount;
    this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
    this.isAlive = this.currentLife >= this.minimumLife;
  }

  // randomLifeDrain function
  randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    const lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
    this.updateLife(-lifeChangeAmount);
    console.log(`[${this.monsterName}] random power drain of ${lifeChangeAmount}`);
  }
};

// Random integer generating function, copied from previous project
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
