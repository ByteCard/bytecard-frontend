import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class clienteService {

  private readonly API = 'http://localhost:8080/cliente'

  private readonly APICADASTRO = 'http://localhost:8080/cliente/cadastra'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.APICADASTRO, cliente);
  }

  editar(cpfAntigo: String, cliente : Cliente): Observable<Cliente> {
    const url = `${this.API}/altera/${cpfAntigo}`
    return this.http.put<Cliente>(url, cliente)
  }

  excluir(cpf: string): Observable<Cliente> {
    const url = `${this.API}/${cpf}`
    return this.http.delete<Cliente>(url)
  }

  buscarPorCpf(cpf: string): Observable<Cliente> {
    const url = `${this.API}/pesquisaClient/${cpf}`
    return this.http.get<Cliente>(url)
  }

}
