import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card1',
  templateUrl: './course-card1.component.html',
  styleUrls: ['./course-card1.component.css']
})
export class CourseCard1Component {

  completionPercentage = 80;
  totalStudents = 130;
  totalHours = 16;
  visitedPeople = [
    { avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg' },
    { avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Rohit_Sharma_in_2012.jpg' },
    { avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/69/KL_Rahul_at_Femina_Miss_India_2018_Grand_Finale_%28cropped%29.jpg' },
    { avatar: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Yuvraj-Singh.jpg' },
    { avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg' },
  ]
  
}
