import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.html",
  styleUrl: "./card.css",
})
export class Card {
  @Input() imageSrc: string = "";
  @Input() altText: string = "portfolio image";
  @Output() imageClicked = new EventEmitter<string>();

  onClick() {
    this.imageClicked.emit(this.imageSrc);
  }
}
