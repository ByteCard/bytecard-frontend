import { Cartao } from './../interfaces/cartao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  private readonly API = 'http://localhost:8080/cartao';

  constructor(private http: HttpClient) { }

  listar(): Observable<Cartao[]> {
    return this.http.get<any>(this.API).pipe(
      map((response: any) => response.content as Cartao[])
    );
  }

  cadastrar(cpf: string, limit: number): Observable<Cartao> {
    const url = `${this.API}/cadastro`;
    const body = { cpf, limit };
    return this.http.post<Cartao>(url, body);
  }

  alterarlimite(numberCard: number, limit: number): Observable<Cartao> {
    const url = `${this.API}/alteraLimite/${numberCard}`;
    const body = { limiteAlterado: limit };
    return this.http.post<Cartao>(url, body);
  }

  cartaoPesquisa(numberCard: number, cpf: string): Observable<Cartao> {
    const url = `${this.API}/pesquisa`;
    const body = { numberCard: numberCard, cpf: cpf};
    return this.http.post<Cartao>(url, body);
  }

  ativarCartao(numberCard: number): Observable<Cartao> {
    const url = `${this.API}/${numberCard}`;
    const body = {};
    return this.http.post<Cartao>(url, body);
  }

  desativarCartao(numberCard: number): Observable<Cartao> {
    const url = `${this.API}/desativaCard/${numberCard}`;
    const body = {};
    return this.http.post<Cartao>(url, body);
  }

}
