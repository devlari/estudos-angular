import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string = '';
  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.name = 'bulbasaur';
    this.searchPokemon()
  }


  changeName(): void {
    console.log(this.name)
  }

  searchPokemon(): void {
    this.service.getPokemon(this.name).subscribe(
      {
        next: (data) => {
          this.pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            types: data.types
          }
        }
      }
    )
  }

}
