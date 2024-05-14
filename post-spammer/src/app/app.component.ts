import { Component } from '@angular/core';
import { SpamVisualizerComponent } from './spam-visualizer/spam-visualizer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-spammer';

  postContainer = new Array<String>();
  
  pushPosts(trashText: HTMLInputElement, spamAmount: HTMLInputElement): boolean{
    console.log(`text received is ${trashText.value}, spam amount is indeed ${spamAmount.value}`);
    let cont = Number(spamAmount.value);
    console.log(`cont is ${cont}`);
    for (let index = 0; index < cont; index++) {
      this.postContainer.push(trashText.value);
      
    }

    console.log(`array lenght is now ${this.postContainer.length}`)

    return false;
  }
}
