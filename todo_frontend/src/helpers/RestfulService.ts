import { Observable, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'

export enum RestfulMethod {
  GET = 'GET'
}

export function request<T>(method: RestfulMethod, url: String, headers: Object) {
  const observable$ : Observable<T> = ajax({
    method: 'GET',
    url: 'http://localhost:9999/task',
    headers: {},
    withCredentials: false
  }).pipe(
    map(resp => console.log('response received: ', resp)),
    catchError(err => of('error occured in getTasks: ', err))
  )
  return observable$
}