import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { fbind } from 'q';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  addPlayerForm = this.fb.group({
    nom: ['Nom'],
    prenom: ['Prenom'],
    style: ['Style']
  });

  constructor(private fb: FormBuilder, private playerService: PlayerService) {}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addPlayerForm.value);

    this.playerService
      .addPlayer(this.addPlayerForm.value)
      .subscribe( data => console.log("OK"), error => console.log("KO"));
  }
}
