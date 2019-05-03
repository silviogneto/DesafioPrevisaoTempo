import { Component } from "@angular/core";
import { PrevisaoTempoService } from "../../services/previsao.service";

@Component({
  selector: 'previsao-tempo-view',
  templateUrl: './previsao-tempo.component.html',
  providers: [PrevisaoTempoService]
})
export class PrevisaoTempoComponent {

  constructor(private service: PrevisaoTempoService) { }

  ngOnInit() {
    this.service.getForecastByLocation({ id: 0, nome: '', estado: ''});
  }
  
}
