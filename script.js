// This array holds all our recipe data. 
// Each object is a single recipe with its details.
const recipes = [
    {
        name: "Masala Chai",
        ingredients: ["water", "milk", "tea leaves", "ginger", "cardamom", "cloves", "cinnamon stick", "sugar"],
        instructions: "In a saucepan, add water, crushed ginger, cardamom, cloves, and a small cinnamon stick. Bring to a boil. Add tea leaves and let it simmer for a minute. Pour in milk and sugar to taste. Bring the chai to a boil, then reduce the heat and let it simmer for a few minutes to allow the flavors to infuse. Strain and serve hot.",
        difficulty: "easy"
    },
    {
        name: "Aloo Sabzi",
        ingredients: ["potato", "onion", "tomato", "salt", "oil", "turmeric powder", "coriander powder", "cumin seeds"],
        instructions: "Heat oil in a pan. Add cumin seeds and let them splutter. Add chopped onions and sauté until golden brown. Add finely chopped tomatoes and cook until they become soft. Stir in turmeric powder, coriander powder, and salt. Add cubed potatoes and mix well. Add about half a cup of water, cover the pan, and let it cook on a medium-low flame until the potatoes are tender. Garnish with fresh coriander leaves before serving.",
        difficulty: "easy"
    },
    {
        name: "Rice and Dal",
        ingredients: ["rice", "oil", "salt", "yellow lentils", "cumin seeds", "asafoetida", "ginger", "garlic", "green chili"],
        instructions: "Rinse both the rice and lentils separately until the water runs clear. In a pressure cooker, add the rinsed lentils, about 3 cups of water, and a pinch of salt and turmeric powder. Cook for 3-4 whistles. In a separate pot, boil rice with 2 cups of water and a pinch of salt until cooked. For the tempering (tadka), heat ghee or oil in a small pan. Add cumin seeds, asafoetida, finely chopped ginger, garlic, and green chili. Sauté until the garlic turns light brown. Pour this tempering over the cooked dal. Mix well and serve hot with the rice.",
        difficulty: "easy"
    },
    {
        name: "Chickpea Salad",
        ingredients: ["chickpeas", "onion", "tomato", "cucumber", "lemon juice", "salt", "black pepper"],
        instructions: "Rinse and drain 1 can of chickpeas. In a bowl, mix chickpeas with finely chopped onion, tomato, and cucumber. Squeeze in some lemon juice and sprinkle with salt and black pepper to taste. Mix well and serve chilled.",
        difficulty: "easy"
    },
    {
        name: "Chutney",
        ingredients: ["coriander leaves", "mint leaves", "onion", "ginger", "garlic", "green chili", "salt", "lemon juice"],
        instructions: "In a blender, combine fresh coriander and mint leaves. Add a piece of onion, ginger, garlic, green chili, and salt to taste. Squeeze in some lemon juice for a tangy flavor. Add a little water and blend everything into a smooth paste. Adjust seasoning as per your preference.",
        difficulty: "easy"
    },
    {
        name: "Chhole Bhature",
        ingredients: ["chickpeas", "onion", "tomato", "ginger-garlic paste", "chhole masala", "salt", "oil", "maida", "yogurt", "baking soda"],
        instructions: "Soak chickpeas overnight and boil them with a tea bag or cinnamon stick. For the chhole gravy, sauté onions, add tomato puree, ginger-garlic paste, and chhole masala. Add the boiled chickpeas and simmer. For the bhature dough, mix maida, yogurt, salt, and baking soda. Knead into a soft dough and let it rest. Roll out small ovals and deep-fry until puffed up and golden. Serve hot chhole with bhature.",
        difficulty: "intermediate"
    },
    {
        name: "Dal Makhani",
        ingredients: ["black lentils", "kidney beans", "onion", "tomato", "ginger-garlic paste", "butter", "cream", "salt", "spices"],
        instructions: "Soak black lentils and kidney beans overnight. Boil them with salt and water until soft. In a separate pan, heat butter and oil. Add chopped onions and cook until soft. Add ginger-garlic paste and tomato puree, then cook until the oil separates. Add the boiled lentils and beans. Mix well, add water to adjust consistency, and let it simmer for 15-20 minutes. Finish with a generous amount of cream and butter.",
        difficulty: "intermediate"
    },
    {
        name: "Dosa",
        ingredients: ["rice", "black lentils", "fenugreek seeds", "salt", "oil"],
        instructions: "Soak rice and black lentils (urad dal) with a few fenugreek seeds overnight. Grind them into a smooth batter, adding water as needed. Let the batter ferment for 8-12 hours in a warm place. Once fermented, add salt and mix. Heat a tawa or flat pan, lightly grease with oil. Pour a ladleful of batter and spread it thinly in a circular motion. Drizzle oil around the edges and cook until golden and crispy. Serve hot with chutney.",
        difficulty: "intermediate"
    },
    {
        name: "Dumplings",
        ingredients: ["all-purpose flour", "cabbage", "carrot", "onion", "garlic", "ginger", "salt", "pepper", "oil"],
        instructions: "For the dough, knead all-purpose flour with water to make a soft dough. Let it rest for 30 minutes. For the filling, finely chop cabbage, carrots, onion, garlic, and ginger. Sauté the vegetables in a little oil, add salt and pepper. Let the mixture cool. Roll out small circles from the dough, fill with the vegetable mixture, and shape them into dumplings. Steam them for 10-15 minutes and serve hot with Sauces.",
        difficulty: "intermediate"
    },
    {
        name: "Gulab Jamun",
        ingredients: ["khoya", "all-purpose flour", "baking powder", "sugar", "cardamom", "rose water", "oil"],
        instructions: "For the sugar syrup, boil water and sugar until it becomes slightly thick. Add cardamom and rose water. For the jamuns, mash khoya with a little flour and baking powder. Form small, smooth balls. Heat oil on low flame and deep-fry the jamun balls until they are golden brown. Immediately transfer the fried balls into the warm sugar syrup. Let them soak for at least 30 minutes before serving.",
        difficulty: "intermediate"
    },
    {
        name: "Idli",
        ingredients: ["rice", "black lentils", "salt"],
        instructions: "Soak rice and black lentils (urad dal) separately overnight. Grind both into a smooth paste. Mix the two batters and let them ferment overnight. Grease the idli molds. Pour the batter into the molds and steam for 10-15 minutes or until a toothpick comes out clean. Serve hot with chutney or sambar.",
        difficulty: "intermediate"
    },
    {
        name: "Ice Creams",
        ingredients: ["milk", "cream", "sugar", "flavoring - vanilla, chocolate, strawberry"],
        instructions: "In a saucepan, heat milk, cream, and sugar until the sugar dissolves. Let the mixture cool completely. Add your favorite flavoring like vanilla essence, cocoa powder, or strawberry syrup. Pour the mixture into a shallow container and freeze. Once it's partially set, use a blender to blend it into a smooth texture. Freeze again until solid. Repeat the blending step for a creamier result.",
        difficulty: "easy"
    },
    {
        name: "Milkshakes",
        ingredients: ["milk", "ice cream", "sugar", "fruit"],
        instructions: "In a blender, combine milk, a few scoops of your favorite ice cream, and sugar if needed. Add some fresh fruit like bananas or strawberries for a fruity flavor. Blend until smooth and creamy. Pour into a tall glass and serve chilled.",
        difficulty: "easy"
    },
    {
        name: "Chocolate Cake",
        ingredients: ["all-purpose flour", "sugar", "cocoa powder", "baking powder", "milk", "oil", "vanilla essence"],
        instructions: "Preheat oven and grease a cake tin. In a large bowl, mix flour, cocoa powder, baking powder, and sugar. In another bowl, mix milk, oil, and vanilla essence. Combine wet and dry ingredients and mix until smooth. Pour batter into the cake tin and bake for 25-30 minutes. Let it cool before serving.",
        difficulty: "intermediate"
    },
    {
        name: "Butterscotch Cake",
        ingredients: ["all-purpose flour", "sugar", "baking powder", "milk", "butter", "butterscotch essence"],
        instructions: "Preheat oven and grease a cake tin. In a large bowl, mix flour, baking powder, and sugar. In another bowl, mix milk, oil, and butterscotch essence. Combine wet and dry ingredients and mix until smooth. Pour batter into the cake tin and bake for 25-30 minutes. Let it cool before serving. You can also add crushed butterscotch candies for a crunchy texture.",
        difficulty: "intermediate"
    },
    {
        name: "Pancake",
        ingredients: ["all-purpose flour", "milk", "egg", "baking powder", "sugar", "salt", "butter"],
        instructions: "In a bowl, mix flour, sugar, baking powder, and salt. In a separate bowl, whisk together milk, egg, and melted butter. Pour the wet ingredients into the dry ingredients and whisk until just combined. Do not overmix; lumps are okay. Heat a lightly greased griddle or frying pan over medium-high heat. Pour about 1/4 cup of batter for each pancake. Cook until bubbles appear on the surface, then flip and cook until golden brown. Serve hot with maple syrup and fresh fruit.",
        difficulty: "easy"
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["paneer", "onion", "tomato", "salt", "oil", "butter", "ginger-garlic paste", "cream", "kasuri methi", "sugar"],
        instructions: "Chop onions, tomatoes, and blend them into a smooth paste. In a pan, melt butter and add oil. Add the ginger-garlic paste and sauté. Add the blended onion-tomato paste and cook until the raw smell is gone. Stir in red chili powder, turmeric, and garam masala. Add a small amount of sugar to balance the flavors. Add cubed paneer pieces and cream. Sprinkle a little crushed kasuri methi (fenugreek leaves) and mix gently. Simmer for 5 minutes and serve hot.",
        difficulty: "intermediate"
    },
    {
        name: "Palak Paneer",
        ingredients: ["paneer", "spinach", "onion", "tomato", "ginger-garlic paste", "cream", "salt", "oil", "garam masala"],
        instructions: "Blanch spinach in hot water for 2-3 minutes, then immediately transfer to ice water to retain the green color. Blend it into a smooth puree. In a pan, heat oil and sauté chopped onions until golden. Add ginger-garlic paste and cook for a minute. Add tomato puree and cook until the oil separates. Stir in garam masala, salt, and mix well. Add the spinach puree and simmer for 5 minutes. Finally, add paneer cubes and a dollop of cream. Mix gently and serve hot.",
        difficulty: "intermediate"
    },
    {
        name: "Poha",
        ingredients: ["poha", "onion", "mustard seeds", "curry leaves", "turmeric powder", "salt", "lemon juice"],
        instructions: "Rinse poha in a colander until it softens, but don't soak it. In a pan, heat oil. Add mustard seeds, let them splutter, then add curry leaves and chopped onions. Sauté onions until translucent. Add turmeric powder and salt. Mix in the soft poha gently. Sprinkle some lemon juice and garnish with fresh coriander.",
        difficulty: "easy"
    },
    {
        name: "Pav Bhaji",
        ingredients: ["potato", "cauliflower", "peas", "onion", "tomato", "butter", "oil", "pav bhaji masala", "salt", "pav"],
        instructions: "Boil and mash vegetables like potatoes, cauliflower, and peas. In a large pan, heat butter and oil. Sauté finely chopped onions, then add tomato puree and pav bhaji masala. Cook until the oil separates. Add the mashed vegetables and mix well. Add water to adjust consistency and let it simmer. Serve the bhaji with buttered pav and chopped onions.",
        difficulty: "easy"
    },
    {
        name: "Pasta",
        ingredients: ["pasta", "tomato puree", "onion", "garlic", "salt", "black pepper", "oil", "mixed herbs", "cheese"],
        instructions: "Boil pasta in salted water until al dente. Drain and set aside. In a pan, heat oil and sauté chopped garlic and onions. Add tomato puree, salt, black pepper, and mixed herbs. Cook for 5-7 minutes. Add the cooked pasta and toss well. Garnish with grated cheese and serve hot.",
        difficulty: "easy"
    },
    {
        name: "Pizza",
        ingredients: ["pizza base", "pizza sauce", "cheese", "onion", "bell peppers", "olives"],
        instructions: "Preheat oven. Place pizza base on a baking tray. Spread a layer of pizza sauce evenly. Sprinkle a generous amount of cheese. Arrange chopped onions, bell peppers, and olives on top. Bake in the preheated oven for 10-15 minutes or until the cheese is melted and the crust is golden brown. Slice and serve hot.",
        difficulty: "easy"
    },
    {
        name: "Samosas",
        ingredients: ["all-purpose flour", "potato", "peas", "oil", "salt", "spices"],
        instructions: "For the dough, mix flour, a pinch of salt, and a little oil. Knead into a firm dough and let it rest. For the filling, boil and mash potatoes. In a pan, heat oil, add spices, and sauté peas. Add the mashed potatoes and mix well. Fill the dough with the potato mixture, shape into samosas, and deep-fry until golden brown and crispy.",
        difficulty: "intermediate"
    },
    {
        name: "Simple Tomato Soup",
        ingredients: ["tomato", "salt", "black pepper", "bay leaf", "sugar"],
        instructions:"Chop tomatoes roughly. In a pot, add tomatoes, bay leaf, and water. Cook until the tomatoes are soft. Remove the bay leaf and let the mixture cool. Blend the mixture to a smooth consistency and strain it to remove seeds. Pour the strained soup back into the pot, add salt, black pepper, and a pinch of sugar. Heat the soup and serve hot, optionally with croutons.",
        difficulty: "easy"
    },
    {
        name: "Spring Rolls",
        ingredients: ["spring roll wrappers", "cabbage", "carrot", "onion", "garlic", "ginger", "salt", "pepper", "soy sauce", "oil"],
        instructions: "Julienne vegetables like cabbage and carrots. In a pan, heat oil and stir-fry chopped garlic, ginger, and onion. Add the vegetables and sauté. Add soy sauce, salt, and pepper. Let the filling cool down. Place a portion of the filling on a spring roll wrapper, fold, and roll. Seal the edges with a flour-water paste. Deep-fry the spring rolls until golden and crispy. Serve hot with a dipping sauce.",
        difficulty: "intermediate"
    },
    {
        name: "Upma",
        ingredients: ["semolina", "onion", "mustard seeds", "curry leaves", "urad dal", "chana dal", "water", "salt", "oil"],
        instructions: "Roast semolina in a dry pan until it turns aromatic. In a separate pan, heat oil. Add mustard seeds, urad dal, and chana dal. Fry until they turn golden. Add chopped onions and curry leaves. Sauté until onions are soft. Slowly pour hot water while stirring continuously to prevent lumps. Add salt and the roasted semolina. Cook until all the water is absorbed and the upma is fluffy.",
        difficulty: "easy"
    },
    {
        name: "Veg Cutlet",
        ingredients: ["potato", "carrot", "beans", "onion", "ginger-garlic paste", "semolina"],
        instructions: "Boil 2-3 potatoes and 1/2 cup each of chopped carrots and beans until soft. Mash the potatoes and mix with the boiled vegetables. In a separate pan, heat 1 tbsp oil and sauté 1 finely chopped onion until soft. Add 1 tsp ginger-garlic paste and cook for a minute. Add spieces and salt to taste. Mix this spice mixture with the mashed potatoes and vegetables. Form the mixture into small, flat patties. Coat each patty with semolina. Heat oil in a pan and shallow fry the cutlets on both sides until they are golden brown and crispy. Serve hot with chutney or ketchup.",
        difficulty: "intermediate"
    },
    {
        name: "Bread Roll",
        ingredients: ["bread", "potato", "onion", "peas", "cheese", "ginger"],
        instructions: "Boil 2 potatoes and mash them well. In a pan, heat 1 tbsp oil and sauté 1 finely chopped onion and 1 tsp grated ginger. Add boiled peas and mashed potatoes. Season with salt and your favorite spices. Let the mixture cool. Take a slice of bread and carefully trim off the brown edges. Dip the bread slice in water for a second, then squeeze out the excess water gently. Place a small amount of the potato filling in the center of the bread and add a small cube of cheese. Roll the bread tightly into a cylinder, sealing the ends. Heat oil in a deep pan and deep fry the rolls on medium heat until golden brown and crispy on all sides. Serve hot with mint chutney or tomato ketchup.",
        difficulty: "intermediate"
    },

    {
        name: "Veg Burger",
        ingredients: ["burger buns", "potato patty", "lettuce", "tomato", "onion", "cheese", "mayonnaise", "ketchup"],
        instructions: "Toast burger buns. Fry or grill the potato patty until golden brown. Place a lettuce leaf on the bottom bun, then add the patty. Top with a cheese slice, sliced tomatoes, and onions. Squeeze some mayonnaise and ketchup on the top bun. Close the burger and serve with fries.",
        difficulty: "easy"
    },
    {
        name: "Veg Grilled Sandwich",
        ingredients: ["bread", "cheese", "onion", "tomato", "potato", "butter", "chat masala", "black pepper"],
        instructions: "Boil a potato and mashed it in a bowl. Add chopped onion and tomato along with salt, black pepper, chat masala and mix it properly. Apply some Coriander Chutney on both slices of bread and fill it with prepared mixture and cheese. Grill it in a griller with butter. Serve it hot. ",
        difficulty: "easy"
    },
    {
        name: "Hung Curd Sandwich",
        ingredients: ["bread", "yogurt", "onion", "bell pepper", "carrot", "butter", "mix herbs"],
        instructions: "Take Greek Yougurt/ hund curt in a bowl. Add finely chopped onion, bell pepper and carrot in it along with salt, black pepper and mix herbs. Mix gently and spread this mixture on one bread and cover it with another. Toast it with butter on a pan or griller and Serve it with ketchup.",
        difficulty: "easy"
    },
    {
        name: "Veg Noodles",
        ingredients: ["noodles", "cabbage", "carrot", "beans", "onion", "soy sauce", "vinegar", "salt", "oil"],
        instructions: "Boil noodles according to package instructions. Drain and rinse with cold water. In a wok or large pan, heat oil on high heat. Add chopped garlic, ginger, and vegetables. Stir-fry for 2-3 minutes. Add soy sauce, vinegar, and salt. Add the boiled noodles and toss everything together until well combined. Serve hot.",
        difficulty: "easy"
    },
    {
        name: "Hot Chocolate",
        ingredients: ["milk", "cocoa powder", "sugar", "vanilla extract", "chocolate chips"],
        instructions: "In a saucepan, take 1 cup of milk. Add 2 tablespoons of cocoa powder and 2 tablespoons of sugar. Mix them well with a whisk until there are no lumps. Now, heat the saucepan on a medium-low flame, stirring continuously to prevent it from sticking to the bottom. Once the mixture is hot (but not boiling), add a few chocolate chips and a few drops of vanilla extract. Stir until the chocolate chips melt completely and the drink becomes rich and smooth. Pour it into a mug and enjoy your homemade hot chocolate!",
        difficulty: "easy"
    },
    {
        name: "Vegetable Biryani",
        ingredients: ["rice", "potato", "carrot", "beans", "onion", "tomato", "ginger-garlic paste", "biryani masala", "salt", "oil", "coriander leaves", "mint leaves"],
        instructions: "Soak basmati rice for 30 minutes. In a large pot, heat oil and fry sliced onions until crispy and brown. Remove the onions and set aside. In the same oil, add chopped potatoes, carrots, and beans. Fry until semi-cooked. Add ginger-garlic paste, tomatoes, biryani masala, and salt. Cook until the masala is well combined. Layer the drained rice on top of the vegetables. Add water, a handful of chopped coriander and mint leaves, and a layer of the fried crispy onions. Cover the pot tightly and cook on a very low flame until the rice is fully cooked and aromatic.",
        difficulty: "intermediate"
    }
];

// Dummy reviews data
const reviews = [
    { text: "This is a great tool! So easy to find new recipes.", author: "Anjali S." },
    { text: "Love the 'Surprise Me!' button, it's so fun!", author: "Karan P." },
    { text: "Simple, fast, and very useful. Highly recommend!", author: "Priya V." }
];

// Get references to all the HTML elements we need to interact with
const ingredientsCheckboxes = document.querySelectorAll('.ingredients-list input[type="checkbox"]');
const difficultyRadios = document.querySelectorAll('.difficulty-filters input[type="radio"]');
const recipesContainer = document.querySelector('.recipes-container');
const surpriseMeBtn = document.getElementById('surpriseMeBtn');
const reviewsContainer = document.getElementById('reviews-container');
const submitReviewBtn = document.getElementById('submitReviewBtn');
const reviewTextarea = document.getElementById('reviewText');
const shareRecipeBtn = document.getElementById('shareRecipeBtn');

// A function to display recipes on the page
function displayRecipes(recipeList) {
    recipesContainer.innerHTML = ''; // First, clear any recipes that are already shown
    
    // If no recipes are found, show a message
    if (recipeList.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found with these ingredients and filters. Try selecting something else!</p>';
        return;
    }
    
    // Loop through the list of recipes and create an HTML card for each one
    recipeList.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card'); // Add a CSS class for styling
        
        // Use a template literal to easily create the HTML content
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        
        recipesContainer.appendChild(recipeCard); // Add the new card to the recipes container
    });
}

// The main function that filters recipes based on user selections
function filterRecipes() {
    // Get all the ingredients that are currently checked
    const selectedIngredients = Array.from(ingredientsCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Get the selected difficulty level
    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
    
    // Filter the main recipes array
    const filteredRecipes = recipes.filter(recipe => {
        // Check if the recipe includes ALL the selected ingredients
        const hasAllIngredients = selectedIngredients.every(ingredient => 
            recipe.ingredients.includes(ingredient)
        );
        
        // Check if the recipe matches the selected difficulty level
        const matchesDifficulty = selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;
        
        // Return true if both conditions are met
        return hasAllIngredients && matchesDifficulty;
    });
    
    // Display the filtered results
    displayRecipes(filteredRecipes);
}

// Function for the "Surprise Me!" button
function getRandomRecipe() {
    // Pick a random number between 0 and the total number of recipes
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    displayRecipes([randomRecipe]); // Display a single recipe
}

// Function to display dummy reviews
function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<p>"${review.text}"</p><small>- ${review.author}</small>`;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Function to handle review submission
function handleReviewSubmit() {
    const reviewText = reviewTextarea.value;
    if (reviewText.trim() !== '') {
        alert("Thank you for your review! We've received it.");
        reviewTextarea.value = ''; // Clear the text area
    } else {
        alert("Please write something before submitting.");
    }
}

// Function to handle recipe sharing form
function handleRecipeShare() {
    const recipeName = document.getElementById('recipeName').value;
    const recipeDetails = document.getElementById('recipeDetails').value;
    
    if (recipeName.trim() !== '' && recipeDetails.trim() !== '') {
        alert(`Thank you for sharing your recipe for "${recipeName}"! We'll review it shortly.`);
        document.getElementById('recipeName').value = '';
        document.getElementById('recipeDetails').value = '';
    } else {
        alert("Please fill out all the fields to share your recipe.");
    }
}

// Add event listeners to all checkboxes and radio buttons
// This will re-run the filter function whenever a choice is changed
ingredientsCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterRecipes);
});
difficultyRadios.forEach(radio => {
    radio.addEventListener('change', filterRecipes);
});

// Add event listener for the "Surprise Me!" button
surpriseMeBtn.addEventListener('click', getRandomRecipe);

// Add event listener for the review submission button
submitReviewBtn.addEventListener('click', handleReviewSubmit);

// Add event listener for the recipe sharing button
shareRecipeBtn.addEventListener('click', handleRecipeShare);

// Run the filter function and display reviews once when the page first loads
filterRecipes();
displayReviews();