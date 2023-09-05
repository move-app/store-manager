import { Component } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  formatPhone(event: any){
    if(event.code.includes("Digit"))
      console.log(event);
    
  }
}
