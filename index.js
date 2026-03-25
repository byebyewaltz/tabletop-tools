/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  return isSpellPrepared || hasScroll;
  /* this function assesses whether a wizard can cast a spell based on two conditions: whether the spell is prepared and whether the wizard has a scroll of the spell. The function uses the logical OR operator (||) to return true if either condition is true. If the spell is prepared, the wizard can cast it regardless of whether they have a scroll. If the spell is not prepared but the wizard has a scroll, they can still cast it. The function will only return false if both conditions are false, meaning the spell is not prepared and the wizard does not have a scroll. */
}
console.log(canCastSpell(true, false)); // true
/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  return hiding || !aware;
  // TODO
  /* this function determines whether a creature is hidden from an observer based on two conditions: whether the creature is actively hiding and whether the observer is aware of the creature. The function uses the logical OR operator (||) to return true if either condition is true. If the creature is actively hiding, it is hidden regardless of the observer's awareness. If the creature is not actively hiding but the observer is not aware of it, it is still hidden. The function will only return false if both conditions are false, meaning the creature is not hiding and the observer is aware of it. */
}

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  return attack >= ac;
  // TODO
  /* this function evaluates whether a strike hits a target based on the attack value and the target's armor class (AC). The function returns true if the attack value is greater than or equal to the AC, indicating that the strike successfully hits the target. If the attack value is less than the AC, the function returns false, meaning the strike misses. This simple comparison allows us to determine the outcome of an attack in a tabletop game scenario. */
}

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  return attack >= ac + 10;
  // TODO
  /* this function checks if a strike is a critical hit by comparing the attack value to the target's armor class (AC). A strike is considered a critical hit if the attack value is at least 10 points higher than the AC. The function returns true if this condition is met, indicating a critical hit, and false otherwise. This allows us to determine not only if an attack hits but also if it hits with exceptional force, which can have additional effects in a game context. */
}

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  // TODO
  /* this function calculates the total hit points (HP) of a creature after healing. It takes into account the creature's maximum HP, current HP, and the amount to heal. The function adds the heal amount to the current HP but ensures that the total does not exceed the maximum HP. If the sum of current HP and heal amount is greater than max HP, the function returns max HP; otherwise, it returns the sum. This ensures that a creature cannot have more HP than its defined maximum. */
}

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  // TODO
  /* this function calculates a character's proficiency bonus based on their level and proficiency rank. The proficiency bonus is determined by a predefined table that assigns a bonus value to each rank: untrained (0), trained (level + 2), expert (level + 4), master (level + 6), and legendary (level + 8). The function takes the character's level and rank as input and returns the corresponding proficiency bonus according to the table. This allows characters to enhance their skill attempts based on their expertise in that skill. */
}

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  // TODO
  /* this function calculates the cover bonus to a creature's armor class (AC) based on whether the creature is behind an obstacle and whether it is actively taking cover. If the creature is behind an obstacle but not taking cover, it receives a +2 bonus to its AC. If the creature is actively taking cover while behind an obstacle, it receives a +4 bonus to its AC. If the creature is not behind an obstacle, it receives no bonus to its AC. The function uses conditional statements to determine the appropriate bonus based on the input parameters. */
}

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  // TODO
  /* this function calculates the remaining hit points (HP) of a creature after taking damage. It first checks if the damage taken is greater than or equal to double the creature's maximum HP, in which case the creature dies instantly and the function returns -1. If the damage does not cause instant death but reduces the creature's HP to 0 or below, the function returns 0, indicating that the creature is unconscious or incapacitated. If the damage is less severe, the function subtracts the damage from the current HP and returns the remaining HP, ensuring that it does not go below 0 unless the creature is dead. */
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // TODO
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // TODO
}
