import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-crypt-api',
  templateUrl: './crypt-api.component.html',
  styleUrls: ['./crypt-api.component.css'],
})
export class CryptApiComponent {
  btcChart: Chart | undefined;
  priceData: any = null;
  error: string = '';
  price: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=365'
      )
      .subscribe(
        (response) => {
          const btcData = response.prices; // Tableau des prix [timestamp, prix]

          const labels = btcData.map((data: (string | number | Date)[]) => {
            const date = new Date(data[0]);
            const month = date.toLocaleString('default', { month: 'long' });
            const year = date.getFullYear();
            return `${month} ${year}`;
          });

          const prices = btcData.map((data: any[]) => data[1]);

          this.btcChart = new Chart('btcChart', {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'BTC Price',
                  data: prices,
                  borderColor: 'blue',
                  fill: false,
                },
              ],
            },
            options: {
              responsive: true,
            },
          });
        },
        (error) => {
          console.error(error);
        }
      );

    this.http
      .get('https://api.coinbase.com/v2/prices/spot?currency=EUR')
      .subscribe(
        (data) => {
          this.priceData = data;
          this.price = Number(this.priceData.data.amount).toFixed(2);
        },
        (error) => {
          this.error =
            "Une erreur s'est produite lors de la récupération des données via API.";
          console.error(error);
        }
      );
  }
}
