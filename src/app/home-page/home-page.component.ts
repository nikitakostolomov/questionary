import { Component, OnInit, Renderer2 } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestionService } from "../question.service";
import { ActivatedRoute } from "@angular/router";
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  questions = [];
  form = this.fb.group({
    count: [null, Validators.required],
  });
  idBlank: any;
  QuestionsForm = this.fb.group({
    question: [null],
    answer1: [null],
    answer2: [null],
    answer3: [null],
    answer4: [null],
  });
  // private sub: any;
  // id: number;
  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //
    //   // In a real app: dispatch action to load the details here.
    // });
  }
  setCount() {
    const count = this.form.value.count;
    for (let i = 0; i < count; i++) {
      this.questions.push({
        question: "",
        answers1: null,
        answers2: null,
        answers3: null,
        answers4: null,
      });
    }
  }
  saveQuestions(inputForm: FormGroup, index) {
    this.questions[index] = {
      question: inputForm.value.question,
      answer1: inputForm.value.answer1,
      answer2: inputForm.value.answer2,
      answer3: inputForm.value.answer3,
      answer4: inputForm.value.answer4,
    };
    this.QuestionsForm.reset();
  }

  sendQuestionBlank() {
    var id = this.questionService.sendNotes(this.questions, this.authService.userData.email);
    this.idBlank = id; 
  }
}
