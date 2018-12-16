import {Injectable} from '@angular/core';
import {Pattern} from '../models/pattern';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Metric} from '../models/metric';
import {Keyword} from '../models/keyword';

@Injectable({
  providedIn: 'root'
})
export class PabreService {

  private baseURL = 'http://217.172.12.199:9408/pabre-ws/api/';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getKeywords(): Observable<Keyword[]> {
    return this.http.get<Keyword[]>(this.baseURL + 'keywords')
      .pipe(
        tap(a => this.log(`fetched ${a.length} keywords.`)),
        catchError(this.handleError('getKeywords', [])
        )
      );
  }

  getKeyword(id: number): Observable<Keyword> {
    const url = `${this.baseURL}keywords/${id}`;
    return this.http.get<Keyword>(url).pipe(
      tap(_ => this.log(`fetched keyword id = ${id}.`)),
      catchError(this.handleError<Keyword>(`getKeyword id=${id}`))
    );
  }

  getMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(this.baseURL + 'metrics')
      .pipe(
        tap(a => this.log(`fetched ${a.length} metrics.`)),
        catchError(this.handleError('getMetrics', [])
        )
      );
  }

  getMetric(id: number): Observable<Metric> {
    const url = `${this.baseURL}metrics/${id}`;
    return this.http.get<Metric>(url).pipe(
      tap(_ => this.log(`fetched metric id = ${id}.`)),
      catchError(this.handleError<Metric>(`getMetric id=${id}`))
    );
  }

  getPatterns(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>(this.baseURL + 'patterns')
      .pipe(
        tap(a => this.log(`fetched ${a.length} patterns.`)),
        catchError(this.handleError('getPatterns', [])
        )
      );
  }

  getPattern(id: number): Observable<Pattern> {
    const url = `${this.baseURL}patterns/${id}`;
    return this.http.get<Pattern>(url).pipe(
      tap(_ => this.log(`fetched pattern id = ${id}.`)),
      catchError(this.handleError<Pattern>(`getPatterm id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PabreService: ${message}`);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
