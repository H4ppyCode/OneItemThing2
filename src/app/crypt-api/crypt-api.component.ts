import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypt-api',
  templateUrl: './crypt-api.component.html',
  styleUrls: ['./crypt-api.component.css'],
})
export class CryptApiComponent {
  priceData: any = null;
  error: string = '';
  price: any = null;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.coinbase.com/v2/prices/spot?currency=EUR').subscribe(
      (data) => {
        this.priceData = data;
        this.price = Number(this.priceData.data.amount).toFixed(2);
      },
      (error) => {
        this.error =
          "Une erreur s'est produite lors de la récupération des données.";
        console.error(error);
      }
    );
  }
}
