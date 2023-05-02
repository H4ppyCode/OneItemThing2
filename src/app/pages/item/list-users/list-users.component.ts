import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  items = [
    { pseudo: 'PL', montant: '5€' },
    { pseudo: 'Atreus', montant: '10M' },
    { pseudo: 'Louis', montant: '20M' },
    { pseudo: 'Row 4, Column 1', montant: 'Row 4,  2' },
  ];
}
