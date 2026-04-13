import { useQuery } from '@tanstack/react-query';
import { getExternalCharacters, saveFavorite } from '../api/characterApi';
import { CharacterCard } from '../components/CharacterCard';
import { Grid, Typography, CircularProgress, Box } from '@mui/material';

export const Home = () => {
  const { data: characters, isLoading } = useQuery({
    queryKey: ['externalCharacters'],
    queryFn: getExternalCharacters
  });

  const handleSave = async (character) => {
    try {
      await saveFavorite(character);
      alert('¡Personaje guardado en PostgreSQL!');
    } catch (error) {
      alert('Hubo un error al guardar');
    }
  };

  if (isLoading) return <CircularProgress sx={{ margin: 5 }} />;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold" color="#0d2149">
        Rick and Morty Universe
      </Typography>
      
      <Grid container spacing={3}>
        {characters?.map(char => (
          <Grid size={4} key={char.id}>
            <CharacterCard character={char} onSave={handleSave} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};