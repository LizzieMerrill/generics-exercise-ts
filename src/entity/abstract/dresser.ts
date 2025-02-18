//generic Drawer class: holds one type of clothing item
class Drawer<T> {
    private items: T[] = [];
  
    //returns true if the drawer is empty, false otherwise
    get isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    //adds an item on top of the drawer
    addItem(item: T): void {
      this.items.push(item);
    }
  
    //removes and returns the top item or undefined if empty
    removeItem(): T | undefined {
      return this.items.pop();
    }
  
    //removes all items and returns them as an array
    removeAll(): T[] {
      const allItems = [...this.items];
      this.items = [];
      return allItems;
    }
  }
  
  //generic Dresser class: contains three drawers (top, middle, bottom)
  class Dresser<Top, Middle, Bottom> {
    public top: Drawer<Top> = new Drawer<Top>();
    public middle: Drawer<Middle> = new Drawer<Middle>();
    public bottom: Drawer<Bottom> = new Drawer<Bottom>();
  }
  
  //example clothing types
  type Socks = { style: string; color: string };
  type Shirt = { style: string; size: string };
  type Pants = { waist: number; length: number };
  
  //demo function
  function demoDresser(): void {
    //create a dresser with three drawers for Socks, Shirts, and Pants
    const myDresser = new Dresser<Socks, Shirt, Pants>();
  
    //add one item to each drawer
    myDresser.top.addItem({ style: "ankle", color: "black" });
    myDresser.middle.addItem({ style: "t-shirt", size: "M" });
    myDresser.bottom.addItem({ waist: 32, length: 34 });
  
    //remove and display the top item from each drawer
    console.log("Top drawer (socks):", myDresser.top.removeItem());
    console.log("Middle drawer (shirts):", myDresser.middle.removeItem());
    console.log("Bottom drawer (pants):", myDresser.bottom.removeItem());
  
    //check the isEmpty and removeAll functionality
    console.log("Top drawer is empty:", myDresser.top.isEmpty);
    myDresser.middle.addItem({ style: "polo", size: "L" });
    myDresser.middle.addItem({ style: "dress shirt", size: "M" });
    console.log("All items removed from middle drawer:", myDresser.middle.removeAll());
  }
  
  demoDresser();
  