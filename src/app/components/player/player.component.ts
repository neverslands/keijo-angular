import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];

  nom: string;

  constructor(private playerService: PlayerService){
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(all => {
      this.players = all;

      this.nom = this.players[0].nom;
    })
  }
}