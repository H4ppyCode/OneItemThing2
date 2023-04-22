import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface blog {title: any, body: any;}

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
  }

  title: any;
  body: any;

  SendToFirebase(){

    //Collect inputs
    const title: any = this.title
    const body: any = this.body

    console.log(title)
    console.log(body)

    //Send inputs
    const blog: blog={title,body}
    this.firestore.collection('Blogs').doc(this.title).set(blog);
  }

}
