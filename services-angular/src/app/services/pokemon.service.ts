import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = ''
  private pokedata: PokemonData | any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.api.url
  }

  getPokemon(name: string): Observable<PokemonData> {
    this.pokedata = this.http.get<PokemonData>(`${this.baseUrl}/${name}`)
    return this.pokedata
  }
}
