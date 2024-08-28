import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  name: string = '';
  email: string = '';
  bio: string = '';
  saveCount: number = 0;
  isResetDisabled: boolean = true;

  reset(){
    this.name = '';
    this.email = '';
    this.bio = '';
    this.updateButtonsState();
  }

  save() {
    console.log('Profile saved:', {name: this.name, email: this.email, bio: this.bio});
    this.saveCount++;
  }

  updateButtonsState(){
    this.isResetDisabled = !this.name && !this.email && !this.bio;
  }

}
