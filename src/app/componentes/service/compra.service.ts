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

}
