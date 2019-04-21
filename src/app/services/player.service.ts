import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}
*/

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  //Permet de récupérer tous les players
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('/api/player');
  }

  //Permet de récupérer un player
  getPlayer(id: number | string) {
    return this.getPlayers().pipe(
      map((players: Player[]) => players.find(player => player.id === Number(id)))
    );
  }

  //Permet d'ajouter un player
  addPlayer(player: Player): Observable<any> {
    return this.http.post('/api/player', player);
  }

  //Permet de supprimer un player
  deletePlayer(id: Number): Observable<{}> {
    return this.http.delete(`/api/player/${id}`);
  }
}
