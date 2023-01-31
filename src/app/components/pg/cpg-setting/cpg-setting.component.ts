import {Component, OnInit, Sanitizer } from '@angular/core';
import {SPgSettingService} from "../../../services/pg/spg-setting.service";
import {IPgSetting} from "../../../interfaces/pg/ipg-setting";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';

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
  _sanitizer?: Sanitizer
  constructor(private _pgSetting:SPgSettingService, private activateRoute: ActivatedRoute,   private sanitizer: DomSanitizer ) {
    this.id = activateRoute.snapshot.params['id'];
    this._sanitizer=sanitizer;
    console.log("sanit ", this._sanitizer)
    console.log(" CPgSettingComponent constructor ", this.id)

  }

  ngOnInit(): void {
    this._pgSetting.getAll().subscribe(
      data => {
console.log("this._pgSetting.getAll()")
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
    this._pgSettingFiltered =  JSON.parse(JSON.stringify(this._pgSettingBean))

    //   [...this._pgSettingBean]
    // this._pgSettingBean.forEach( item =>{
    //   this._pgSettingFiltered.push(item)
    // })
    // this._pgSettingFiltered=   Array.from( this._pgSettingBean);
    if (/*!value||*/value.length==0){
      console.log("filterSetting value.length==0",value," size ", this._pgSettingBean.length)
      this.filterName="";

    return;
    }
console.log("filterSetting val=", value, " filterName=",this.filterName)
   var _pgSettingFilterednew : IPgSetting[]=[]

      if (value.length > 1) {
        this._pgSettingFiltered = this._pgSettingBean.filter(a => a.name.startsWith(value)|| a.name.includes(value, 0) );

      } else {

        //console.log(a.name.includes(value, 0))
        this._pgSettingFiltered = this._pgSettingBean.filter(a => a.name.startsWith(value) );



      }
    this._pgSettingFiltered =  JSON.parse(JSON.stringify(this._pgSettingFiltered ))
    // @ts-ignore
    this._pgSettingFiltered.map(b => {
      b.name = this.filterSetBoldStr(b.name, value)
      return b
    })
    console.log(" sett ", this._pgSettingBean)
    console.log(" filtered ", this._pgSettingFiltered)
  }

  /*
  sanitize(str:string) {
  let   _ret:string | null=this.sanitizer.sanitize(SecurityContext.HTML, str);
  console.log("sanitize ",_ret)
  if (_ret!=null)   return _ret
  else return "null";

  }*/

  filterSetBoldStr(valueStr: string, strToBold: string ) {
   // console.log(" filterSetBold value=", valueStr)
    // @ts-ignore
    //this._pgSettingFiltered.map(a => a.name=this.sanitize( this.replaceAll(a.name,this.filterName,"<b>"+this.filterName+"</b>")))

      let s=this.replaceAll(valueStr,strToBold,"<b>"+strToBold+"</b>")
    //  console.log("sanitize 1 ",s)

      return s

  }


 replaceAll(strSource: string, search: string, replace: string) {
   // console.log("str s",strSource, " ser ", strSource, " replace ",replace)
    return strSource.split(search).join(replace);
  }


  filerChange(str:string) {
    this.filterSetting(str)
console.log("filterChange ", str)
  }
}
