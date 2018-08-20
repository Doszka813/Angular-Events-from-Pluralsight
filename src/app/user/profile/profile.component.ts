import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {TOASTR_TOKEN, Toastr } from '../../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
     this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
     this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
     this.profileForm = new FormGroup({
       firstName: this.firstName,
       lastName: this.lastName
     });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile saved', 'Succes');
    }
  }

  validateLastName() {
    return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched;
  }

  validateFirstName() {
    return this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched;
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
