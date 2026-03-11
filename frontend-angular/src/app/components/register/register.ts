import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  user = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateNaissance: '',
    password: ''
  };

  // Pour gérer le message modal
  message = '';
  messageType: 'success' | 'error' | '' = '';
  showAlert = false; // controler l'affichage

  private backendUrl = 'http://localhost:8080/users/register';

  constructor(private http: HttpClient) {}

  register(f: NgForm) {
    if (f.invalid) {
      this.showAlertMessage('Veuillez remplir tous les champs ❌', 'error');
      return;
    }

    const payload = { ...this.user };

    this.http.post<{ message: string }>(this.backendUrl, payload)
      .subscribe({
        next: (res) => {
          this.showAlertMessage(res.message || 'Inscription réussie 🎉', 'success');
          f.resetForm();
          this.user = { nom: '', prenom: '', email: '', telephone: '', dateNaissance: '', password: '' };
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.showAlertMessage(err.error?.message || 'Erreur serveur ❌', 'error');
        }
      });
  }

  showAlertMessage(msg: string, type: 'success' | 'error') {
    this.message = msg;
    this.messageType = type;
    this.showAlert = true; // afficher le modal
  }

  closeAlert() {
    this.showAlert = false;
    this.message = '';
    this.messageType = '';
  }
}
