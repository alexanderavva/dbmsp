import { Component, OnInit } from '@angular/core';
import {SPgSettingService} from "../../../services/pg/spg-setting.service";
import {IPgSetting} from "../../../interfaces/pg/ipg-setting";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cpg-setting',
  templateUrl: './cpg-setting.component.html',
  styleUrls: ['./cpg-setting.component.css']
})
export class CPgSettingComponent implements OnInit {
  errorMessage="";
public _pgSettingBean : IPgSetting[]=[];
  public _pgSettingFiltered : IPgSetting[]=[];
  filterName: string="";
  public id: number | undefined;
  constructor(private _pgSetting:SPgSettingService,private activateRoute: ActivatedRoute  ) {
    this.id = activateRoute.snapshot.params['id'];
    console.log(" CPgSettingComponent constructor ", this.id)

  }

  ngOnInit(): void {
    this._pgSetting.getAll().subscribe(
      data => {

        this._pgSettingBean = data;
        this._pgSettingFiltered= data;
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );

    //this._pgSettingBean= this._pgSetting.getAll();
  }

  filterSetting(value: string) {
console.log("filterSetting val=", value, " filterName=",this.filterName)
   var _pgSettingFilterednew : IPgSetting[]=[]
    if (value.length==0) {
      this._pgSettingFiltered= this._pgSettingBean;
    }
    else {
      if (value.length > 1) {
        this._pgSettingFiltered = this._pgSettingBean.filter(a => a.name.startsWith(value)|| a.name.includes(value, 0) );
      } else {

        //console.log(a.name.includes(value, 0))
        this._pgSettingFiltered = this._pgSettingBean.filter(a => a.name.startsWith(value) );
      }
    }
  }

  filerChange() {

  }
}
