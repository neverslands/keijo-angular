import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailplayer',
  templateUrl: './detailplayer.component.html',
  styleUrls: ['./detailplayer.component.css']
})
export class DetailplayerComponent implements OnInit {

  player$: Observable<Player>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
    ) {}

  ngOnInit() {
    this.player$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.playerService.getPlayer(params.get('id')))
    );
  }

  gotoPlayers(player: Player) {
    let playerID = player ? player.id : null;

    this.router.navigate(['/player']);
  }

  deletePlayer(id: number) {
    this.playerService
      .deletePlayer(id)
      .subscribe( data => console.log("OK"), error => console.log("KO"));
  }
}
