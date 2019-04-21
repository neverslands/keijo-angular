import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keijo } from '../models/keijo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeijoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Keijo[]> {
    return this.http.get<Keijo[]>('/api/keijo');
  }
}
