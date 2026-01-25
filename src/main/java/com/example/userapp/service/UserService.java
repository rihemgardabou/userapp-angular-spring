package com.example.userapp.service;

import org.springframework.stereotype.Service;
import com.example.userapp.model.User;
import com.example.userapp.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void register(User user) {
        // Vérifier si l'email existe déjà
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Utilisateur déjà inscrit");
        }

        // Sauvegarder l'utilisateur
        userRepository.save(user);
    }
}
