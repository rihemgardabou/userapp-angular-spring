package com.example.userapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.userapp.model.User;
import com.example.userapp.service.UserService;

import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> body) {
        try {
            // إنشاء ال User يدوياً
            User user = new User();
            user.setNom(body.get("nom"));
            user.setPrenom(body.get("prenom"));
            user.setEmail(body.get("email"));
            user.setTelephone(body.get("telephone"));
            user.setPassword(body.get("password"));

            // تحويل التاريخ
            String dateStr = body.get("dateNaissance");
            if (dateStr != null && !dateStr.isEmpty()) {
                try {
                    user.setDateNaissance(LocalDate.parse(dateStr));
                } catch (Exception e) {
                    return ResponseEntity.badRequest().body(Map.of("message", "Format date invalide"));
                }
            }

            // تسجيل المستخدم
            userService.register(user);
            return ResponseEntity.ok(Map.of("message", "Inscription réussie"));
        } catch (RuntimeException ex) {
            // Email déjà existant
            return ResponseEntity.badRequest().body(Map.of("message", ex.getMessage()));
        } catch (Exception ex) {
            ex.printStackTrace(); // باش تشوف الخطأ في console
            return ResponseEntity.status(500).body(Map.of("message", "Erreur serveur interne"));
        }
    }
}
