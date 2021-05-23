import { Component, OnInit } from '@angular/core';
import { EtdientServiceService} from './etdient-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ListEtudient=[]
  constructor(private etudientservice:EtdientServiceService) { 

    
  }
  ngOnInit(): void {
    this.etudientservice.getAllUsers().subscribe(Result=>{
      this.ListEtudient=Result
    },err=>{
      console.log(err)
    })
    
    
  }
  title = 'ecole';
   date = Date() ;
}
