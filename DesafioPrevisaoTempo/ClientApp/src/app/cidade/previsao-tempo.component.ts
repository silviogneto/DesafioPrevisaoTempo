import { Component } from "@angular/core";
import { PrevisaoTempoService } from "../../services/previsao.service";
import { IForecast, IForecastItem } from "../../models/IForecast";
import { CidadeService } from "../../services/cidade.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ICidade } from "../../models/ICidade";

@Component({
  selector: 'previsao-tempo-view',
  templateUrl: './previsao-tempo.component.html',
  providers: [PrevisaoTempoService, CidadeService]
})
export class PrevisaoTempoComponent {
  public cidade: ICidade = {
    id: 0,
    nome: '',
    estado: '',
    pais: '',
    apiId: 0
  };
  public previsaoItens: IForecastItem[] = [];

  constructor(private service: PrevisaoTempoService, private cidadeService: CidadeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id']) {
        this.cidadeService.getById(p['id']).subscribe(
          cidade => {
            this.cidade = cidade;

            this.service.getForecastByLocation(cidade).subscribe(
              forecast => {
                // utiliza apenas a primeira hora de cada dia
                for (let item of forecast.list) {
                  if (item.dt_txt.getHours() === 0) {
                    this.previsaoItens.push(item);
                  }
                }
              },
              error => console.log(error));
          },
          error => console.log(error)
        );
      }
    });
  }
  
}
