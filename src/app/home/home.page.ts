import { Component } from '@angular/core';
import { LibGoPlugin } from "../app.plugins";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  answer = 'loading answer...'

  constructor() {
    console.log("HomePage constructor");
  }

  async golibFunction() {
    console.log("golibFunction 1");
    if (!!LibGoPlugin) {
      const { answer } = await LibGoPlugin.GoodMorning();
      this.answer = answer
      console.log(`golibFunction Goodmorning answer: ${answer}`);
    }
    else {
      console.log("golibFunction no plugin");
    }
  }

  async ngAfterViewInit() {
    await this.golibFunction();
  }
}
