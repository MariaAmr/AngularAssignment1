import { Component, ViewChild } from '@angular/core';
import { Card } from "../card/card";
import { ImageModel } from '../image-model/image-model';

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [Card, ImageModel],
  templateUrl: "./portfolio.html",
  styleUrl: "./portfolio.css",
})
export class Portfolio {
  @ViewChild(ImageModel) imageModal!: ImageModel;

  image1 = { src: "images/poert1.png", alt: "Project 1" };
  image2 = { src: "images/port2.png", alt: "Project 2" };
  image3 = { src: "images/port3.png", alt: "Project 3" };
  image4 = { src: "images/poert1.png", alt: "Project 4" };
  image5 = { src: "images/port2.png", alt: "Project 5" };
  image6 = { src: "images/port3.png", alt: "Project 6" };

  openModal(imageSrc: string) {
    this.imageModal.openModal(imageSrc);
  }
}
