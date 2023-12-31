import { Component ,OnInit} from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';



@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent  implements OnInit{
  public chart: any;
ngOnInit(){
 this.chart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 15, 3, 9, 2, 3],
            backgroundColor: [
                'rgba(450, 200, 400, 0.2)',
           
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2,

        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive:true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

}

