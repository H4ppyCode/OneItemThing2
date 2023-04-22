import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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
    this.FeedContent();
  }

  //Var de Send
  title: any;
  body: any;

  //Var de Feed
  blogpost: Observable<any> | undefined;
  blogpost_collection: AngularFirestoreCollection<'Blogs'> | undefined;

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


  FeedContent(){

    this.blogpost_collection = this.firestore.collection('Blogs');
    this.blogpost = this.blogpost_collection.valueChanges();

  }

}
