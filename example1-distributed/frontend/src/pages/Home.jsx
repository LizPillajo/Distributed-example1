import { useQuery } from '@tanstack/react-query';
import { getExternalCharacters, saveFavorite } from '../api/characterApi';
import { CharacterCard } from '../components/CharacterCard';
import { Grid, Typography, CircularProgress, Box, Alert } from '@mui/material';

export const Home = () => {
  const { data: characters, isLoading, isError, error } = useQuery({
    queryKey: ['externalCharacters'],
    queryFn: getExternalCharacters,
    retry: false,
  });

  const handleSave = async (character) => {
    try {
      await saveFavorite(character);
      alert('¡Personaje guardado en PostgreSQL!');
    } catch (error) {
      alert('Hubo un error al guardar');
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress size={60} sx={{ color: '#efb034' }} />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ padding: 4 }}>
        <Alert severity="error" variant="filled" sx={{ backgroundColor: '#0d2149', color: 'white' }}>
          Error de conexión: {error.message}. ¡Asegure that your backend is open in yhe docker!
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold" color="#0d2149">
        Rick and Morty Universe! 
      </Typography>
      
      <Grid container spacing={3}>
        {characters?.map(char => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={char.id}>
            <CharacterCard character={char} onSave={handleSave} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};