const API_ID = 'f5fefae6';
const APP_KEY = 'f841dab120d696797bf961cdcb741b9c';

export function fetchRecipes(food = '') {
  food = food.trim();

  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`,
  )
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
