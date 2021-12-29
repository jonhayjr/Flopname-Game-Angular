
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  ngOnInit() {
  }

  keyDisplay = 'visibility:hidden';
  currentTeam = 'Red';
  teamTextColor = 'redtext';
  winningMessage = '';

  toggleKey() {
    if (this.keyDisplay === '') {
      this.keyDisplay = 'visibility: hidden'
    } else {
      this.keyDisplay = '';
    }
  }

  setTeam(color) {
    this.currentTeam = color;
    if (color === 'Red') {
      this.teamTextColor = 'redtext';
    } else {
      this.teamTextColor = 'bluetext';
    }
  }

  displayWinner(team) {
    this.winningMessage = 'The ' + team + ' team won!';
  }

}
