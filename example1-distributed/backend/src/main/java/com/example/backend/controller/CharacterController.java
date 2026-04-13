package com.example.backend.controller;

import com.example.backend.model.FavoriteCharacter;
import com.example.backend.service.CharacterService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/characters") 
@CrossOrigin(origins = "*") // Allows your frontend to access this API
public class CharacterController {

    private final CharacterService service;

    public CharacterController(CharacterService service) { 
        this.service = service;
    }

    // Endpoint: GET /api/characters/external (Fetches data from Rick & Morty)
    @GetMapping("/external") 
    public String getExternalCharacters() { 
        return service.getAllCharacters();
    }

    // Endpoint: GET /api/characters/favorites (Fetches from your DB)
    @GetMapping("/favorites")
    public List<FavoriteCharacter> getMyFavorites() { 
        return service.getMyFavorites();
    }

    // Endpoint: POST /api/characters/favorites (Saves to your DB)
    @PostMapping("/favorites")
    public FavoriteCharacter saveFavorite(@RequestBody FavoriteCharacter favorite) {
        return service.saveFavorite(favorite);
    }
}