import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import {ChartDatum, CoolTheme} from './cool-theme';
import { HttpClient } from '@angular/common/http';
import {number} from "echarts/types/dist/echarts";
import {Observable, of} from "rxjs";


interface ChartData {
  xAxisData: string[],
  seriesData: number[][],
  seriesLabels: string[]
}
@Component({
  selector: 'app-graph-schemas',
  templateUrl: './graph-schemas.component.html',
  styleUrls: ['./graph-schemas.component.css']
})
export class GraphSchemasComponent implements OnInit {

  /*public  class graphData   {
   name?:number ;
   value?: string ;
 }*/

 // theme: string | ThemeOption | undefined;
  theme: string | ThemeOption ="default" ;
    mockData:ChartDatum []= [];
  coolTheme = CoolTheme;
   options1: EChartsOption = {
    title: {
      left: '50%',
      text: 'Размер схем базы данных',
      subtext: 'Сервер serv',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: ['схема 1', 'схема 2', 'схема 3', 'схема 4', 'схема 5', 'схема 6', 'схема 7', 'схема 8']
    },
    autoResize:true,
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: this.mockData/*[
          { value: 10, name: 'схема 1' },
          { value: 5, name: 'схема 2' },
          { value: 15, name: 'схема 3' },
          { value: 25, name: 'схема 4' },
          { value: 20, name: 'схема 5' },
          { value: 35, name: 'схема 6' },
          { value: 30, name: 'схема 7' },
          { value: 40, name: 'схема 8' }
        ]*/
      }
    ]
  };
  options : Observable<EChartsOption> = of(this.options1);


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.mockData.splice(0,this.mockData.length);
    let c = new ChartDatum("инит схема 1",10);this.mockData.push(c);
    c = new ChartDatum("схема 2",20);this.mockData.push(c);
    c = new ChartDatum("схема 3",30);this.mockData.push(c);
    this.options = of(this.options1)
  }

  changeData() {

/*
    var ss ="";
    for (let i = 0; i < 7; i++) {
     // mockData.push("{ value:" + Math.round(Math.random() * 900 + 700)+", name: 'схема "+i+"'}, ");
      ss = ss.concat(" { value:" + Math.round(Math.random() * 900 + 700)+", name: 'схема "+i+"'}, ");
    }
    ss = ss.concat(" { value:" + Math.round(Math.random() * 900 + 700)+", name: 'схема 8'}  ");
   // mockData.push("{ value:" + Math.round(Math.random() * 900 + 700)+", name: 'схема 8'}, ");
    console.log(ss);

 */
 let c = new ChartDatum("схема 1",10);this.mockData.push(c);
    c = new ChartDatum("схема 2",20);this.mockData.push(c);
    c = new ChartDatum("схема 3",30);this.mockData.push(c);
console.log(this.mockData)
    this.options = of(this.options1)



   // this.options.series.data=ss;
  }

  /*
    getData()
      this.api
        .getData()
        .then((data) => {
          this.mergeOption = { series: [{ data }] };
        })
        .catch((e) => {

      })
      .then(() => {
        this.loading = false;
      });
  }*/
}
