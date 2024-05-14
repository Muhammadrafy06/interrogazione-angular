import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postContainer = new Array<string>();

  title(title: any): void {
    
  }

  SendPost(_title: HTMLInputElement, _content: HTMLInputElement): boolean{
    let title = _title.value;
    let value = _content.value;

    return false;
  }
}
