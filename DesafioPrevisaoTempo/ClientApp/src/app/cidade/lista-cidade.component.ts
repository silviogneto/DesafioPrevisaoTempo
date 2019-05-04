import { Component } from "@angular/core";
import { CidadeService } from "../../services/cidade.service";
import { ICidade } from "../../models/ICidade";
import { Router } from "@angular/router";

@Component({
  selector: 'lista-cidade',
  templateUrl: './lista-cidade.component.html',
  providers: [CidadeService]
})
export class ListaCidadeComponent {
  public cidades: ICidade[];

  constructor(private service: CidadeService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      cidades => this.cidades = cidades,
      error => console.log(error)
    );
  }

  editar(id) {
    this.router.navigate([`/cidades/${id}/editar`]);
  }

  excluir(cidade: ICidade) {
    if (confirm(`Excluir a cidade '${cidade.nome}'?`)) {
      console.log('é pra excluir');
      this.service.excluir(cidade.id).subscribe(() => this.getAll(), error => console.log(error));
    }
  }

  previsaoTempo(id) {
    this.router.navigate([`/cidades/${id}/previsaoTempo`]);
  }
}
