import { Component } from '@angular/core';

@Component({
  selector: 'app-spam-visualizer',
  templateUrl: './spam-visualizer.component.html',
  styleUrls: ['./spam-visualizer.component.css']
})
export class SpamVisualizerComponent {
    postContainer: Array<String> = new Array<String>();
}
