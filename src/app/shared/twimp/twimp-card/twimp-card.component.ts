import { Component, Input } from '@angular/core';

import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent {
  @Input() twimp!: Twimp;

  setFavorite():void{
    if(this.twimp.favorite)
      this.twimp.favorite=false;
    else
      this.twimp.favorite=true;
    console.log(this.twimp.favorite);
  }
}
