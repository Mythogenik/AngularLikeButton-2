import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit{
  @Input()likes!: number;
  @Input()isLiked!: boolean;

  toggleLike() {
    if (!this.isLiked) {
      this.isLiked = true;
      this.likes--;
      console.log(this.likes);
      console.log(this.isLiked);
    } else {
      this.isLiked = false;
      this.likes++;
      console.log(this.likes);
      console.log(this.isLiked);
    }
  }
  
  constructor() { 
     }

  ngOnInit(): void {
    if (this.likes) {
      this.likes = 0 + this.likes;
    } else {
      this.likes = 0;
    }

    if (this.isLiked) {
      this.isLiked = false;
    } else {
      this.isLiked = true;
    }
  }
}