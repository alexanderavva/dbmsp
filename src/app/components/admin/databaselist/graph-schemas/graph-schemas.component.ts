import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-graph-schemas',
  templateUrl: './graph-schemas.component.html',
  styleUrls: ['./graph-schemas.component.css']
})
export class GraphSchemasComponent implements OnInit {
 // theme: string | ThemeOption | undefined;
  theme: string | ThemeOption ="default" ;
  coolTheme = CoolTheme;
   options: EChartsOption = {
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
        data: [
          { value: 10, name: 'схема 1' },
          { value: 5, name: 'схема 2' },
          { value: 15, name: 'схема 3' },
          { value: 25, name: 'схема 4' },
          { value: 20, name: 'схема 5' },
          { value: 35, name: 'схема 6' },
          { value: 30, name: 'схема 7' },
          { value: 40, name: 'схема 8' }
        ]
      }
    ]
  };


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  changeData() {

    const mockData = [];
    for (let i = 0; i < 8; i++) {
      mockData.push("{ value:" + Math.round(Math.random() * 900 + 700)+", ");
    }
    this.options.series.data=mockData;
  }


  getData() {
/*
    this.api
      .getData()
      .then((data) => {
        this.mergeOption = { series: [{ data }] };
      })
      .catch((e) => {
        /** Error Handler */
      })
      .then(() => {
        this.loading = false;
      });*/
  }
}
