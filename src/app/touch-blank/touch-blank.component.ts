import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../question.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-touch-blank',
  templateUrl: './touch-blank.component.html',
  styleUrls: ['./touch-blank.component.css']
})
export class TouchBlankComponent implements OnInit {
  blank;
  idBlonk: string;
  form = this.fb.group({
    answer: [null],
  });
  progres = 0;
  currentQestion;
  creator: string;
  numberPage = 0;
  resultBlank = [];
  stopNextButton = false;
  constructor(private userService: QuestionService, private fb: FormBuilder, private authService: AuthService) {
  }
  ngOnInit() {
  }

  search(el) {
    this.userService.serachInBd(el.value).subscribe(details => {
      this.blank = details["questions"];
      this.idBlonk = el.value;
      this.currentQestion = this.blank[0];
    });

  }
  nextPage(form, q) {
    if (this.numberPage < this.blank.length) {
      this.resultBlank[this.numberPage] = {
        question: q,
        answer: form.value.answer
      }
      this.numberPage++;
      this.progres = (this.numberPage / this.blank.length) * 100;
      this.form.reset();
    }
  }
  sendData() {
   
    this.userService.sendData( this.resultBlank, this.authService.userData.email, this.idBlonk);
  }
}
