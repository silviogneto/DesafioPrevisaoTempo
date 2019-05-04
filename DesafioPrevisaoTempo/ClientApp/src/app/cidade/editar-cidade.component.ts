import { Component } from "@angular/core";
import { CidadeService } from "../../services/cidade.service";
import { ICidade } from "../../models/ICidade";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css'],
  providers: [CidadeService]
})
export class EditarCidadeComponent {
  private cidade: ICidade = {
    id: 0,
    nome: '',
    estado: '',
    pais: '',
    apiId: 0
  };

  constructor(private service: CidadeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id']) {
        this.service.getById(p['id']).subscribe(
          cidade => this.cidade = cidade,
          error => console.log(error)
        );
      }
    });
  }

  salvar(cidade: ICidade) {
    let retorno: Observable<Object>;

    if (cidade.id > 0) {
      retorno = this.service.update(cidade);
    } else {
      retorno = this.service.create(cidade);
    }

    retorno.subscribe(
      () => this.router.navigate(['/']),
      error => console.log(error)
    );
  }
}
