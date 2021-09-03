import { IProduto } from '../interfaces/produtoInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:3001/produtos'

  constructor(private http: HttpClient) { }

  // Verbo Http - Post
  public create(produto: IProduto): Observable<IProduto> {
   return this.http.post<IProduto>(this.baseUrl, produto)
  }

  // Verbo Http - Get
  public read(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.baseUrl)
  }

  // Verbo Http - Get (Obtendo elemento pelo id)
  public readById(id: string): Observable<IProduto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<IProduto>(url);
  }

  // Verbo Http - Put
  public update(produto: IProduto): Observable<IProduto> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<IProduto>(url, produto)
  }

  // Verbo Http - Delete
  public delete(id: string): Observable<IProduto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<IProduto>(url)
  }

}
