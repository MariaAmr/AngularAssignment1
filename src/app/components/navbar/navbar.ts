import { Component, HostListener } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  isScrolled = false;
  private lastScrollPosition = 0;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const currentScrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (
      currentScrollPosition < this.lastScrollPosition &&
      currentScrollPosition < 100
    ) {
      this.isScrolled = true;
    } else if (
      currentScrollPosition > this.lastScrollPosition ||
      currentScrollPosition >= 50
    ) {
      this.isScrolled = false;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
  // Handle click animation
  animateClick(event: Event) {
    const link = event.target as HTMLElement;

    // Add clicked class
    link.classList.add("clicked");

    // Remove after animation completes
    setTimeout(() => {
      link.classList.remove("clicked");
    }, 600);
  }
}
