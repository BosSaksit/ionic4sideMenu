import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tts',
  templateUrl: './tts.page.html',
  styleUrls: ['./tts.page.scss'],
})
export class TtsPage implements OnInit {

  getText: any

  constructor(public tts: TextToSpeech) { }

  ngOnInit() {
  }

  sayText() {
    this.tts.speak(this.getText)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
    console.log(this.getText);

  }

}
