import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUsersApi = "http://localhost/api/getusers.php";
  public addUsersApi = "http://localhost/api/adduser.php";
  public getUserApi = "http://localhost/api/getuser.php";
  public editUserApi = "http://localhost/api/edituser.php";
  public deleteUserApi = "http://localhost/api/deleteuser.php";
  
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.getUsersApi);
  }

  addUser(user: User): Observable<User>{
    return this._http.post<User>(this.addUsersApi, user);
  }

  getUser(id: number): Observable<User>{
    return this._http.post<User>(this.getUserApi, id);
  }

  updateUser(user: User): Observable<User>{
    return this._http.post<User>(this.editUserApi, user);
  }

  deleteUser(id: number): Observable<User>{
    return this._http.post<User>(this.deleteUserApi, id);
  }

}
