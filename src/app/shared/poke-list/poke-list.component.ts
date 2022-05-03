import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any
  public getAllPokemons: any

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      }
    )
  }

  public getSearch(value:string){

    // O método sempre irá filtrar de uma lista que contém todos os pokemons
    // assim a cada busca o filtro sempre será feito a partir da listagem completa
    const filter = this.setAllPokemons.filter( (res:any ) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    // Passo para o getAll o resultado do filtro.
    this.getAllPokemons = filter
    console.log(this.getAllPokemons); //Retorna o pokemon filtrado
    console.log(this.setAllPokemons); //Retorna a lista pré-carregada de 100 pokemons
  }

}
