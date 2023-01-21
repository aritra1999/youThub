import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  formType: string;

  constructor() {
    this.formType = 'textArea';
  }

  ngOnInit(): void { }

  toggleForm() {
    this.formType == 'textArea' ? this.formType = 'linkArea' : this.formType = 'textArea';
  }

  submit() {
    
  }
}
