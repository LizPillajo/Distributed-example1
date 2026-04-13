import { useQuery } from '@tanstack/react-query';
import { getMyFavorites } from '../api/characterApi';
import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress, Box } from '@mui/material';

export const Favorites = () => {
  const { data: favorites, isLoading } = useQuery({
    queryKey: ['myFavorites'],
    queryFn: getMyFavorites
  });

  if (isLoading) return <CircularProgress sx={{ margin: 5 }} />;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold" color="#efb034">
        My Favorites (PostgreSQL)
      </Typography>
      
      <Grid container spacing={3}>
        {favorites?.map(fav => (
          <Grid size={4} key={fav.id}>
            <Card sx={{ width: 280, margin: 2, borderRadius: 2, boxShadow: 3 }}>
              <CardMedia component="img" height="250" image={fav.image} alt={fav.name} />
              <CardContent>
                <Typography variant="h6" align="center" fontWeight="bold">
                  {fav.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};