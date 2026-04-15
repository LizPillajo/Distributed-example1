package com.example.backend.service;

import com.example.backend.model.FavoriteCharacter;
import com.example.backend.repository.FavoriteRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.List;

@Service
public class CharacterService {

    private final FavoriteRepository repository;
    private final RestTemplate restTemplate;

    public CharacterService(FavoriteRepository repository) {
        this.repository = repository;
        this.restTemplate = new RestTemplate();
    }

    // 1. API Rick and Morty
    public String getAllCharacters() {
        String url = "https://rickandmortyapi.com/api/character";
        // GET API 
        return restTemplate.getForObject(url, String.class);
    }

    // 2. Save in our Data Base
    public FavoriteCharacter saveFavorite(FavoriteCharacter favorite) {
        return repository.save(favorite);
    }

    // 3. Search in our Data Base
    public List<FavoriteCharacter> getMyFavorites() {
        return repository.findAll();
    }
}