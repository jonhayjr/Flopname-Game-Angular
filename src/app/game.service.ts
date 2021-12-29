import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  blueTilesSelected = 0;
  redTilesSelected = 0;
  winner: string = '';

  gridKey = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red']
  ]

  checkForWinner(currentTile: string, currentTeam: string) {
    if (this.blueTilesSelected === 2) {
      this.winner = 'Blue';
    } else if (this.redTilesSelected === 2) {
      this.winner = 'Red';
    } else if (currentTile === 'assassin') {
      if (currentTeam === 'Red') {
        this.winner = 'Blue';
      } else if (currentTeam === 'Blue') {
        this.winner = 'Red';
      }
    }
    
    if (this.winner !== '') {
      return true;
    } else {
      return false;
    }
  }

  countTile(currentTile: string) {
    if (currentTile === 'blue') {
      this.blueTilesSelected ++;
    } else if (currentTile === 'red') {
      this.redTilesSelected ++;
    }
  }


}