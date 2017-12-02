import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GamedataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamedataProvider {
	public data: any = {
		civ5: {
			leader:['Random','Ahmad al-Mansur','Alexander','Ashurbanipal','Askia','Attila','Augustus Caesar','Bismarck','Boudicca','Casimir III','Catherine','Darius I','Dido','Elizabeth','Enrico Dandolo','Gajah Mada','Gandhi','Genghis Khan','Gustavus Adolphus','Haile Selassie','Harald Bluetooth','Harun al-Rashid','Hiawatha','Isabella','Kamehameha','Maria I','Maria Theresa','Montezuma','Napoleon','Nebuchadnezzar II','Oda Nobunaga','Pacal','Pachacuti','Pedro II','Pocatello','Ramesses II','Ramkhamhaeng','Sejong','Shaka','Suleiman','Theodora','Washington','William','Wu Zetian'],
			difficulty:['Settler','Chieftain','Warlord','Prince','King','Emperor','Immortal','Diety'],
			speed:['Online','Quick','Standard','Epic','Marathon'],
			mapType:['Amazon','Amazon Plus','Americas','Ancient Lakes','Arborea','Archipelago','Asia','Bering Strait','Boreal','British Isles','Caribbean','Continents','Continents Plus','Donut','Earth','Europe','Eastern United States','Four Corners','Fractal','Frontier','Great Plains','Great Plains Plus','Hemispheres','Highlands','Ice Age','Inland Sea','Japanese Mainland','Lakes','Large Islands','Mediterranean','Mesopotamia','North vs. South','Oval','Pangaea','Pangaea Plus','Rainforest','Ring','Sandstorm','Shuffle','Skirmish','Small Continents','Terra','Tilted Axis','Tiny Islands','West vs. East'],
			mapSize:['Duel','Tiny','Small','Standard','Large','Huge'],
			victory:['Culture','Domination','Religion','Science','Score'],
			mod:['on','off']
		},
		civ6: {
			leader:['Random','Alexander','Catherine','Cleopatra','Cyrus','Frederick','Gahndi','Gilgamesh','Gorgo','Harald','Hojo','Jadwiga','John','Montezuma','Mvemba','Pedro','Pericles','Peter','Philip','Qin','Saladin','Teddy','Tomyris','Trajan','Victoria'],
			difficulty:['Settler','Chieftain','Warlord','Prince','King','Emperor','Immortal','Diety'],
			speed:['Online','Quick','Standard','Epic','Marathon'],
			mapType:['Continents','Fractal','InlandSea','IslandPlates','Pangaea','Shuffle','4-LeafClover','6-ArmedSnowflake','Earth','TrueStartEarth'],
			mapSize:['Duel','Tiny','Small','Standard','Large','Huge'],
			victory:['Culture','Domination','Religion','Science','Score']
		}
	};

	public fields: any = [
		'Leader',
		'Difficulty',
		'Speed',
		'Map Type',
		'Map Size',
		'Victory'
	];

	public games: any = {
		'Civ 5': 'civ5',
		'Civ 5 Vox Populi': 'civ5',
		'Civ 6': 'civ6'
	}

  constructor(public http: HttpClient) {
    
  }
}
