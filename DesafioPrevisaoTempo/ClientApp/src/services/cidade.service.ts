import { HttpClient } from "@angular/common/http";
import { ICidade } from "../models/ICidade";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CidadeService {
  private urlApi: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.urlApi = `${this.baseUrl}/api/cidades`;
  }

  getAll(): Observable<ICidade[]> {
    return this.httpClient.get<ICidade[]>(this.urlApi);
  }

  getById(id): Observable<ICidade> {
    return this.httpClient.get<ICidade>(`${this.urlApi}/${id}`);
  }
  
  create(cidade: ICidade): Observable<Object> {
    return this.httpClient.post(this.urlApi, cidade);
  }

  update(cidade: ICidade): Observable<Object> {
    return this.httpClient.put(`${this.urlApi}/${cidade.id}`, cidade);
  }

  excluir(id): Observable<Object> {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }
}
