import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchRecipe: string = '';
  constructor(private router: Router) {}

  toggleNavbar() {
   const nav = document.getElementById("topnav");
  if (nav) {
    nav.classList.toggle("responsive");
  }
}

 onSearch() {
    const title = this.searchRecipe.trim();
    console.log(title)
    if (title) {
      this.router.navigate(['/recipes/searched', title.toLowerCase()]);
    }
  }
}
