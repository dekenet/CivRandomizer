import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamedataProvider } from '../../providers/gamedata/gamedata'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	game: string;
	difficulty: string;


	data: any;
	games: any;
	fields: Array<string>;

  constructor(public navCtrl: NavController, public gamedata: GamedataProvider) {
		this.data = gamedata.data;
		this.games = gamedata.games;
		this.fields = gamedata.fields;
	}
}
