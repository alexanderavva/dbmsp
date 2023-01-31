import { Component, OnInit } from '@angular/core';
import {Databaselist} from "../../../../interfaces/admin/databaselist";
import {DatabaseslistService} from "../../../../services/admin/databaseslist/databaseslist.service";
import {first} from "rxjs/operators";
import * as _dash from 'lodash';
import {BehaviorSubject, of} from "rxjs";
@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {
  //npm i --save lodash
//npm install @types/lodash --save

  databaseList: Databaselist [] = [];
  databaseFilteredList: Databaselist [] = [];
  filterVal?:string
  sortingColumn?:string
  sortingOrder:string="asc"
  //subjB:BehaviourSubject

  databaseFilteredListSubj:BehaviorSubject<Databaselist []>  ;

  constructor(private dblistService:DatabaseslistService   ) {
//npm i --save lodash
    this.databaseFilteredListSubj= new  BehaviorSubject<Databaselist []> (this.databaseFilteredList);
  }

  ngOnInit(): void {
    //   this.dblistService.getDatabases().subscribe(res =>{
    //   this.databaseList=res;
    // });
    this.dblistService.getDatabases().pipe(first()).subscribe(res => {
      this.databaseFilteredList = res;
      this.databaseList = res;

    });

    this.databaseFilteredListSubj.subscribe(x => {
      this.databaseFilteredList = x;
      console.log("databaseFilteredListSubj. works", x)
    });


  }

  // @ts-ignore
  tableSort(sort: string) {
    console.log(" sort clicked field=", sort)
    if (this.sortingColumn==sort){
      if (this.sortingOrder=="asc") this.sortingOrder="desc"
      else this.sortingOrder=="asc"
    }
    else {
      this.sortingColumn=sort;
      this.sortingOrder=="asc"
    }
   // this.filterVal=sort;

      console.log("sort ",this.sortingColumn , " direction ",this.sortingOrder)
      const items = [...this.databaseFilteredList  ];
     // this.databaseFilteredList
      //const data

    console.log(" sort sortingColumn=", this.sortingColumn," order = ",this.sortingOrder)
    console.log(" before=", this.databaseFilteredList)
    // @ts-ignore
    this.databaseFilteredList=   _dash.orderBy(/*items*/ this.databaseFilteredList,[this.sortingColumn],[ this.sortingOrder])
    console.log(" after=", this.databaseFilteredList)
      this.databaseFilteredListSubj.next(this.databaseFilteredList);
    console.log("_dash.orderBy data ",this.databaseFilteredList)
    }


}
