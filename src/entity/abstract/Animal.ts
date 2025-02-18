export abstract class Animal {
  name: string;
  trainingPriority: number;

  constructor(name: string, trainingPriority: number) {
    this.name = name;
    this.trainingPriority = trainingPriority;
  }

  /**
   * generic method to sort an array of Animals (or subclasses) by trainingPriority
   * returns a new array sorted in ascending order (lowest priority first)
   */
  static getSorted<T extends Animal>(animals: T[]): T[] {
    //using a shallow copy to avoid side effects on the original array
    return [...animals].sort((a, b) =>
      a.trainingPriority < b.trainingPriority ? -1 : 1
    );
  }

  /**
   * generic method to create a string listing each animal's name and training priority
   */
  static getTrainingPriorityList<T extends Animal>(animals: T[]): string {
    return animals
      .map(
        (animal) =>
          `${animal.name}'s training priority: ${animal.trainingPriority}\n`
      )
      .join("");
  }
}
