import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../config';
import {ChartData, DashBoardModal} from './dash-board.modal';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  staticBoardData : DashBoardModal | undefined;
  chartData : ChartData[] | undefined;
  time : string | undefined;
  options: any;
  xAxisData : string[] = [];
  data1 : number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var time = new Date();
    this.time = time.toLocaleString('en-US');
    this.http.get(`${config.covidApiUrl}`).subscribe((res:any)=>{
      this.staticBoardData = res.data as DashBoardModal;
    });

    this.http.get(`${config.chartUrl}`).subscribe((res:any)=>{
      this.chartData = res.data.splice(0,25);
      console.log(this.chartData);

      if(this.chartData){
        this.chartData?.forEach(data=>{
          this.xAxisData.push(data.date);
          this.data1.push(data.cases_count)
        })
      }
      this.assignValue();
    });

  }
  assignValue(){

    this.options = {
      legend: {
        data: ['Active Case'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Active Case',
          type: 'line',
          data: this.data1,
          animationDelay: (idx:any) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx:any) => idx * 5,
    };
  }

}
