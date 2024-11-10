class Smoothie {
    constructor(ingredients, base, size) {
        this.ingredients = ingredients;
        this.base = base;
        this.size = size;
}

// Pricing for ingredients, bases, and sizes
static prices = {
    ingredients: {
        Banana: 1.5,
        Strawberry: 2.0,
        Blueberry: 2.0,
        Mango: 3.0,
    },
    bases: {
        "Almond Milk": 1.0,
        "Coconut Water": 1.2,
        "Regular Milk": 0.8,
    },
    sizes: {
        Small: 3.0,
        Medium: 4.5,
        Large: 6.0,
    },
};
