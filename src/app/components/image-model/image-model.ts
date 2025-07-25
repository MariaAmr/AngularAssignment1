import { Component, HostListener, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-image-model",
  imports: [CommonModule],
  templateUrl: "./image-model.html",
  styleUrl: "./image-model.css",
})
export class ImageModel {
  isOpen = false;
  imageSrc = "";

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:keydown.escape")
  onEscapeKey() {
    this.closeModal();
  }

  onOverlayClick(event: MouseEvent) {
    const content =
      this.elementRef.nativeElement.querySelector(".modal-content");
    if (!content.contains(event.target)) {
      this.closeModal();
    }
  }
  openModal(src: string) {
    this.imageSrc = src;
    this.isOpen = true;
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    this.isOpen = false;
    document.body.style.overflow = "auto";
  }
}
