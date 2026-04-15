import axios from 'axios';
 
const api = axios.create({
  baseURL: 'http://localhost:8080/api/characters'
});

// 1. Get External Characters 
export const getExternalCharacters = async () => {
  const response = await api.get('/external');
  const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
  return data.results;
};

// 2. Save a character to PostgreSQL
export const saveFavorite = async (character) => {
  const response = await api.post('/favorites', {
    id: character.id,
    name: character.name,
    image: character.image
  });
  return response.data;
};

// 3. Get My Favorites from PostgreSQL
export const getMyFavorites = async () => {
  const response = await api.get('/favorites');
  return response.data;
};