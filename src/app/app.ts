import { Component, signal } from '@angular/core';

import { Navbar } from "./components/navbar/navbar";

import { Footer } from "./components/footer/footer";

import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("assignment1");
}
