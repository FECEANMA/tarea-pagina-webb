import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroDetaisectionComponent } from './hero-detaisection/hero-detaisection.component';
import { ProductComponent } from './product/product.component';
import { PanelComponent } from './panel/panel.component';
import { PanelendComponent } from './panelend/panelend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeroDetaisectionComponent,ProductComponent,PanelComponent,PanelendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
