import { Component, OnInit } from '@angular/core';
import { BackendService } from '../api/backend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  processing = false;
  date: any;
  constructor(private _backend: BackendService) { }

  ngOnInit(): void {
    this.getDate()
  }

  getDate() {

    this.date = new Date().getFullYear();
  }

  // PERSONAL INFO FORM
  form = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64), Validators.minLength(2)]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),

  });


  disableForm() {
    this.form.controls['name'].disable();
    this.form.controls['email'].disable();
    this.form.controls['subject'].disable();
    this.form.controls['message'].disable();

  }

  enableForm() {
    this.form.controls['name'].enable();
    this.form.controls['email'].enable();
    this.form.controls['subject'].enable();
    this.form.controls['message'].enable();
  }

  get f() {

    return this.form.controls;

  }



  protected sendEmail() {
    this.disableForm
    this.processing = true
    const email = {
      name: this.form.get("name")?.value,
      email: this.form.get("email")?.value,
      subject: this.form.get("subject")?.value,
      message: this.form.get("message")?.value

    }
    console.log(email)
    this._backend.sendEmail(email).subscribe({
      next: () => {
        alert("message envoyé")
        //enable form
        this.enableForm
        this.processing = false

      },
      error: () => {
        alert("echec")
        //enable form
        this.enableForm
        this.processing = false

      },
      complete: () => {
        //enable form
        this.enableForm
        this.processing = false

      }
    })
  }


}
