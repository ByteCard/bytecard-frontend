import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private readonly API = 'http://localhost:8080/compras';

  constructor(private http: HttpClient) { }

  visualizarFatura(date: string, cardNumber: number): Observable<any> {
    const url = `${this.API}/fatura`;
    const body = { date: date, numberCard: cardNumber };
    return this.http.post<any>(url, body);
  }

  obterValorTotalFatura(date: string, cardNumber: number): Observable<number> {
    return this.visualizarFatura(date, cardNumber).pipe(
      map((response: any) => response.valorTotal as number)
    );
  }

  cadastarCompra(numberCard: number, categoriaCompra: string, valor: number, estabelecimento: string): Observable<any> {
    const url = `${this.API}`;
    const body = {
      numberCard: numberCard,
      categoriaCompra: categoriaCompra,
      valor: valor,
      estabelecimento: estabelecimento
    };
    return this.http.post<any>(url, body);
  }

  relatorioCategoria(numberCard: number, date: string): Observable<any[]> {
    const url = `${this.API}/categoria`;
    const body = {
      numberCard: numberCard,
      date: date
    };
    return this.http.post<any>(url, body).pipe(
      map(response => response.dadosCategoriaRelatorios)
    );
  }

  relatorioCategoriaTotal(numberCard: number, date: string): Observable<number> {
    const url = `${this.API}/categoria`;
    const body = {
      numberCard: numberCard,
      date: date
    };
    return this.http.post<any>(url, body).pipe(
      map(response => response.valorTotalGasto)
    );
  }

  relatorioGeralCompraMaiorValor(date: string): Observable<number> {
    const url = `${this.API}/relatorio`;
    const body = {
      numberCard: 1234567890123456,
      date: date
    };
    return this.http.post<any>(url, body).pipe(
      map(response => response.compraMaiorValors)
    );
  }

  relatorioGeralComprouNada(date: string): Observable<number> {
    const url = `${this.API}/relatorio`;
    const body = {
      numberCard: 1234567890123456,
      date: date
    };
    return this.http.post<any>(url, body).pipe(
      map(response => response.comproNada)
    );
  }

  relatorioGeralComprouMais(date: string): Observable<number> {
    const url = `${this.API}/relatorio`;
    const body = {
      numberCard: 1234567890123456,
      date: date
    };
    return this.http.post<any>(url, body).pipe(
      map(response => response.comproMais)
    );
  }
}
