import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EtdientServiceService {

  constructor(private http:HttpClient) 
  { }
    getAllUsers(){
      let  data = this.http.get<any>("localhost:8088/etudients");
      return data;
    }
  
}
