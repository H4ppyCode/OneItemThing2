import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  items: { pseudo: string; montant: string }[] = [];

  constructor() {
    const itemsFromStorage = localStorage.getItem('items');
    // localStorage.clear(); ////Clear local storage
    if (itemsFromStorage) {
      this.items = JSON.parse(itemsFromStorage);
    } else {
      this.items = [
        { pseudo: 'PL', montant: '5€' },
        { pseudo: 'Atreus', montant: '10M' },
      ];
    }
  }

  ajouterUtilisateur(montantSaisi: string) {
    const montant = parseInt(montantSaisi, 10);
    if (isNaN(montant)) {
      return;
    }
    const nouvelUtilisateur = { pseudo: 'test', montant: montantSaisi + '€' };
    this.items.push(nouvelUtilisateur);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
