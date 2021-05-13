export default class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    Ingredients,
    steps,
    isGlutanFree,
    isVegan,
    isVegetarian,
    isLactosFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability; 
    this.complexity =  complexity;
    this.imageUrl =  imageUrl;
    this.duration =  duration;
    this.Ingredients =  Ingredients; 
    this.steps =  steps;
    this.isGlutanFree =  isGlutanFree;
    this.isVegan =    isVegan;
    this.isVegetarian =  isVegetarian;
    this.isLactosFree  =  isLactosFree;
  }
}
