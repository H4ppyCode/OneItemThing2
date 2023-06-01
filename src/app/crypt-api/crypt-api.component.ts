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

        const labels = [];
        const prices = [];

        for (let i = 0; i < btcData.length; i += 30) {
          const data = btcData[i];
          const date = new Date(data[0]);
          const month = date.toLocaleString('default', { month: 'long' });
          const year = date.getFullYear();
          const label = `${month} ${year}`;
          const price = data[1];

          labels.push(label);
          prices.push(price);
        }
          this.btcChart = new Chart('btcChart', {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'BTC Prix €',
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
           this.error =
            "Une erreur s'est produite lors de la récupération des données via API pour graphique.";
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
            "Une erreur s'est produite lors de la récupération des données via API pour le prix actuel.";
          console.error(error);
        }
      );
  }
}
