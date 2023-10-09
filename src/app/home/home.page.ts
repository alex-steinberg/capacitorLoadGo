import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("HomePage constructor");
  }

  async golibFunction() {
    console.log("golibFunction 1");
    if ('LibGoPlugin' in Plugins) {
      const goLib = Plugins['LibGoPlugin'];
      const result = await goLib['GoodMorning']();
      console.log(`golibFunction Goodmorning answer: ${result.answer}`);
    }
    else {
      console.log("golibFunction no plugin");
    }
  }
  
  async ngAfterViewInit() {
    await this.golibFunction();
  }
}
