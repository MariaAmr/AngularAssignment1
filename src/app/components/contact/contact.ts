import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  imports: [FormsModule],
  templateUrl: "./contact.html",
  styleUrl: "./contact.css",
})
export class Contact {
  formData = {
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  };

  userNameFocused = false;
  userAgeFocused = false;
  userEmailFocused = false;
  userPasswordFocused = false;
}
