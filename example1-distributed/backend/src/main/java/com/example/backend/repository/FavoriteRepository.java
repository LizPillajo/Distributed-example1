package com.example.backend.repository;

import com.example.backend.model.FavoriteCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteCharacter, Long> {
}