import { RecipeDetails, Recipe } from "./recipe.model";

// export const RECIPES: RecipeDetails[] = [
//   {
//     id: '1',
//     title: 'Spanish Omelette',
//     category: 'Lunch',
//     ingredients: ['4 eggs', '2 large potatoes', '1 onion', 'Salt', 'Olive oil'],
//     steps: [
//       'Peel and slice the potatoes and onion thinly.',
//       'Fry the potatoes and onion in olive oil until tender.',
//       'Beat the eggs with a pinch of salt.',
//       'Mix the potatoes and onion with the beaten eggs.',
//       'Cook the mixture in a pan until golden on both sides.'
//     ]
//   },
//   {
//     id: '2',
//     title: 'Pancakes',
//     category: 'Breakfast',
//     ingredients: ['1 cup flour', '1 egg', '1 cup milk', '1 tbsp sugar', 'Butter'],
//     steps: [
//       'Mix the flour, sugar, egg, and milk in a bowl.',
//       'Beat until smooth.',
//       'Heat a pan and melt a bit of butter.',
//       'Pour some batter and cook on both sides until golden.',
//       'Serve with honey, fruits, or jam.'
//     ]
//   },
//   {
//     id: '3',
//     title: 'Caesar Salad',
//     category: 'Lunch',
//     ingredients: ['Romaine lettuce', 'Chicken breast', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
//     steps: [
//       'Wash and chop the lettuce.',
//       'Cook the chicken breast and slice it.',
//       'In a bowl, mix lettuce with chicken, croutons, and cheese.',
//       'Add Caesar dressing and mix well.',
//       'Serve cold.'
//     ]
//   },
//   {
//     id: '4',
//     title: 'Curry Chicken',
//     category: 'Dinner',
//     ingredients: ['500g chicken breast', '1 onion', '1 can coconut milk', '2 tbsp curry powder', 'Oil'],
//     steps: [
//       'Cut chicken into pieces and brown in a pan with oil.',
//       'Add chopped onion and cook until soft.',
//       'Stir in curry powder.',
//       'Add coconut milk and cook on medium heat for 20 minutes.',
//       'Serve with white rice.'
//     ]
//   },
//   {
//     id: '5',
//     title: 'Baked Salmon',
//     category: 'Dinner',
//     ingredients: ['2 salmon fillets', '1 lemon', 'Fresh herbs (dill, thyme)', 'Olive oil', 'Salt and pepper'],
//     steps: [
//       'Preheat oven to 180°C.',
//       'Place fillets on a baking tray with parchment paper.',
//       'Drizzle with olive oil, lemon juice, salt, pepper, and herbs.',
//       'Bake for 15–20 minutes until cooked through.',
//       'Serve with salad or vegetables.'
//     ]
//   },
//   {
//     id: '6',
//     title: 'Apple Pie',
//     category: 'Desserts',
//     ingredients: ['3 apples', '1 pie crust', '2 tbsp sugar', '1 tsp cinnamon', 'Butter'],
//     steps: [
//       'Preheat oven to 180°C.',
//       'Peel and slice the apples.',
//       'Place the crust in a pie dish and arrange apples on top.',
//       'Sprinkle with sugar and cinnamon, and add butter pieces.',
//       'Bake for 30–40 minutes until golden.'
//     ]
//   },
//   {
//     id: '7',
//     title: 'Scrambled Eggs',
//     category: 'Breakfast',
//     ingredients: ['3 eggs', '1 tbsp butter', 'Salt', 'Pepper'],
//     steps: [
//       'Beat the eggs with salt and pepper.',
//       'Heat a pan with butter.',
//       'Pour in the eggs and stir constantly over low heat.',
//       'Cook until soft but set.',
//       'Serve hot.'
//     ]
//   },
//   {
//     id: '8',
//     title: 'Valencian Paella',
//     category: 'Lunch',
//     ingredients: ['Rice', 'Mixed seafood', 'Bell pepper', 'Peas', 'Fish stock', 'Saffron'],
//     steps: [
//       'Sauté seafood and vegetables in a paella pan.',
//       'Add rice and saffron and mix well.',
//       'Add hot fish stock.',
//       'Cook over medium heat without stirring for 20 minutes.',
//       'Let rest for 5 minutes before serving.'
//     ]
//   },
//   {
//     id: '9',
//     title: 'Chocolate Brownie',
//     category: 'Desserts',
//     ingredients: ['200g chocolate', '100g butter', '3 eggs', '100g sugar', '70g flour'],
//     steps: [
//       'Melt the chocolate with butter.',
//       'Beat the eggs with sugar until fluffy.',
//       'Add melted chocolate and mix.',
//       'Add sifted flour and mix gently.',
//       'Bake at 180°C for 20–25 minutes.'
//     ]
//   },
//   {
//     id: '10',
//     title: 'Margherita Pizza',
//     category: 'Dinner',
//     ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil leaves', 'Olive oil'],
//     steps: [
//       'Roll out the dough on a baking tray.',
//       'Top with tomato sauce and mozzarella slices.',
//       'Bake at 220°C for 10–15 minutes.',
//       'Add fresh basil leaves and a drizzle of olive oil.',
//       'Serve hot.'
//     ]
//   },
//   {
//     id: '11',
//     title: 'Churros with Chocolate',
//     category: 'Desserts',
//     ingredients: ['1 cup flour', '1 cup water', 'Pinch of salt', 'Sugar', 'Oil for frying', 'Melting chocolate'],
//     steps: [
//       'Boil water with salt and add flour at once.',
//       'Mix until smooth dough forms.',
//       'Place dough in a piping bag and shape the churros.',
//       'Fry in plenty of oil until golden.',
//       'Serve sprinkled with sugar and hot chocolate.'
//     ]
//   },
//   {
//     id: '12',
//     title: 'Yogurt with Granola',
//     category: 'Breakfast',
//     ingredients: ['1 plain yogurt', '1/2 cup granola', 'Fresh fruits (strawberries, banana, blueberries)', 'Honey'],
//     steps: [
//       'Place yogurt in a bowl.',
//       'Add granola on top.',
//       'Add chopped fruits.',
//       'Drizzle with honey to taste.',
//       'Serve immediately.'
//     ]
//   }
// ];

export let MOCK_RECIPES: Recipe[] = [];
export let MOCK_RECIPE_DETAIL: RecipeDetails[] = [];
