class Monster {
  constructor(language) {
    this.language = language;
    this.type = " "; 
    this.stomach = [];
  }
  
  eat(food_item){
    this.stomach.push(food_item); 
    return this.stomach; 
  }
  
  speak(sentence){
    console.log(this.type + ' says ' + sentence);
  }
}

class Gremlin extends Monster {
  
  speak(sentence) {
    let words = sentence.split(" ");
    let newWords = words.map(w => w = this.language);
    console.log(newWords.join(" "));
   }
  
}

var hungryMonster = new Monster(" "); 
hungryMonster.type = "Hungry Monster"; 

hungryMonster.eat("pig"); 
hungryMonster.eat("cow"); 
hungryMonster.eat("dog"); 
console.log(hungryMonster.stomach); 
hungryMonster.speak("I am want to eat"); 

var hungryGremlin = new Gremlin("gar"); 
hungryGremlin.type = "Hungry Gremlin"; 

console.log("\nGremlin: ");
hungryGremlin.eat("chicken"); 
hungryGremlin.eat("rabbit"); 
console.log(hungryGremlin.stomach); 
hungryGremlin.speak("I like Chicken"); 