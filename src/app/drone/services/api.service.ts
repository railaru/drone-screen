import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ToyInterface from '../interfaces/toy.interface';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';


  /**
   * Handle Http GET operation for all toys.
   * Let the app continue.
   */
  fetchToys(): Observable<ToyInterface[]> {
    return this.http.get<ToyInterface[]>(this.apiUrl)
      .pipe(
        tap(() => console.log('fetched toys')),
        catchError(this.handleError<ToyInterface[]>('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
