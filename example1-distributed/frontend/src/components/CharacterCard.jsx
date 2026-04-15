import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const CharacterCard = ({ character, onSave }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: 'cover' }} 
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant="h6" align="center" gutterBottom fontWeight="bold" color="#0d2149">
          {character.name}
        </Typography>
        
        <Button
          variant="contained"
          fullWidth
          sx={{ 
            backgroundColor: '#0d2149', 
            color: '#efb034',
            marginTop: 2,
            '&:hover': { backgroundColor: '#1a3a75' } 
          }}
          onClick={() => onSave(character)}
        >
          Save Favorite
        </Button>
      </CardContent>
    </Card>
  );
};