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

    // Calculate the total price based on selected ingredients, base, and size
    calculatePrice() {
        const ingredientsCost = this.ingredients.reduce((total, ingredient) => total + Smoothie.prices.ingredients[ingredient], 0);
        const baseCost = Smoothie.prices.bases[this.base] || 0;
        const sizeCost = Smoothie.prices.sizes[this.size] || 0;
        return (ingredientsCost + baseCost + sizeCost).toFixed(2);
    }

    getDescription() {
        const description = `A ${this.size} smoothie with ${this.ingredients.join(", ")} and a ${this.base} base.`;
        const price = this.calculatePrice();
        return `${description} <br> Total: $${price}`;
    }
}

// Create smoothie and display order with price
function createSmoothie() {
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(input => input.value);
    const base = document.querySelector('input[name="base"]:checked')?.value;
    const size = document.querySelector('input[name="size"]:checked')?.value;

    if (ingredients.length && base && size) {
        const smoothie = new Smoothie(ingredients, base, size);
        document.getElementById("smoothieOutput").innerHTML = `<p>${smoothie.getDescription()}</p>`;
    } else {
        alert("Please select all options.");
    }
}
