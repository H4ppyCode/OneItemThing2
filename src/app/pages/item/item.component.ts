import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface blog {pseudo: any, email: any; sum: any}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.FeedContent();
  }

  //Var de Send
  pseudo: any;
  email: any;
  sum: any;

  //Var de Feed
  item: Observable<any> | undefined;
  item_collection: AngularFirestoreCollection<'Item0'> | undefined;

  SendToFirebase(){

    //Collect inputs
    const pseudo: any = this.pseudo
    const email: any = this.email
    const sum: any = this.sum

    console.log(pseudo)
    console.log(email)
    console.log(sum)

    //Send inputs
    const blog: blog={pseudo,email,sum}
    this.firestore.collection('Item0').doc(this.email).set(blog);
  }


  FeedContent(){

    this.item_collection = this.firestore.collection('Item0', ref => ref.orderBy('sum', 'desc'));
    this.item = this.item_collection.valueChanges();

  }

}
