import { Component, Input, OnInit } from "@angular/core";
import { QuestionService } from "../question.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-show-answers",
  templateUrl: "./show-answers.component.html",
  styleUrls: ["./show-answers.component.css"],
})
export class ShowAnswersComponent implements OnInit {
  @Input() questions: any;
  blank;
  idBlonk: string;
  error = '';

  constructor(
    private userService: QuestionService,
    private fb: FormBuilder,
    private authService: AuthService, 
  ) { 
    this.error = '';}
  ngOnInit() { this.error = '';}

  search(el) {
    this.error = '';
    var currUser  = this.authService.userData.email;
    this.userService.serachInBd(el.value).subscribe((details) => {
      if (currUser ==  details["creator"]){
      this.blank = details["answers"];
      this.questions = details["questions"];
      } else {
        this.error = 'You cant see the answers as you are not creator of this test';
      }
    });
    
  }
}
