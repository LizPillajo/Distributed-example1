import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export const CharacterCard = ({ character, onSave }) => {
  return (
    <Card sx={{ width: 280, margin: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom fontWeight="bold">
          {character.name}
        </Typography>
        
        <Button
          variant="contained"
          fullWidth
          sx={{ 
            backgroundColor: '#0d2149', 
            color: '#efb034',
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