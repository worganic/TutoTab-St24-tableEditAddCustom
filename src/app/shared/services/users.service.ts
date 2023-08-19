import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Users } from 'src/app/shared/interface/users';
import { Cacheable } from 'ts-cacheable';

const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  dataUser: Users[] | undefined;
  url: string = "http://localhost:3000/users";

  @Cacheable({ cacheBusterObserver: cacheBuster$, maxAge: 60 * 5 * 1000 })
  geUsers(): Observable<Users[]> {

    //console.log("UsersService | geUsers");
    const response = this._http.get<any>(this.url);
    //console.log("UsersService | geUsers / response : ", response);
    return response;
  }

  deleteCached() {
    //console.log("UsersService - deleteCached / Suppression du cache.");
    cacheBuster$.next();// Supprime le cache.
    return true;
  }

  /**
   * delUser
   * @param element 
   */
  delUser(element: any) {
    let endPoints = element.id;
    const url = this.url + "/" + endPoints;
    const response = this._http.delete(url).subscribe(data => {
      console.log(data);
    });
  }

  /**
 * editUser
 * @param element 
 */
  editUser(element: Users) {
    let endPoints = element.id;
    console.log("UsersService | editUser / element : ", element);
    const url = this.url + "/" + endPoints;
    const response = this._http.put(url, element).subscribe(data => {
      console.log(data);
    });
  }

/**
  * addUser
  * @param element 
  */
  addUser(element: Users) {
    let endPoints = element.id;
    const url = this.url;
    const response = this._http.post(url, element).subscribe(data => {
      console.log(data);
    });
  }
}
