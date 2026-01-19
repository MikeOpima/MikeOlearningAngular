import { Component, signal } from '@angular/core';
// @ts-ignore
import { RouterOutlet } from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  fName = 'Mike';
  GOD: string = 'YHWH';
  currentYear: number = 2026;
  isLoggedIn: boolean = true;

}
