import { Component, ViewEncapsulation  } from '@angular/core';
import { UserService } from '../firebase-service/user.svc';

@Component({
  selector: 'sl-app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  encapsulation: ViewEncapsulation.None,  // Use to disable CSS Encapsulation for this component
  providers: [UserService]
})
export class AppComponent { }
