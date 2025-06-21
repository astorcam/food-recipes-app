import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, RouterModule, FooterComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
