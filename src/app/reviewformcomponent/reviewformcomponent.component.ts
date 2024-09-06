import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-reviewformcomponent',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './reviewformcomponent.component.html',
  styleUrl: './reviewformcomponent.component.css'
})
export class ReviewformcomponentComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  currentRating: number = 0;
  comment:string='';

  rate(rating: number): void {
    this.currentRating = rating;
    // You can now store this `currentRating` as part of the review form submission
    console.log('Selected Rating:', this.currentRating);
  }

  submitReview(): void {
    const reviewData = {
      rating: this.currentRating,
      comment: 'Your comment here'
    };
  }

}
