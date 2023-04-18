import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{


  header: string = "Create Employee.";

  userForm!: FormGroup;

  constructor(private service : ApiService){}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
    })
    
  }

  printData(){
console.log(this.userForm.value);
this.service.createUser(this.userForm.value).subscribe({
  next: (res: any) => {
    alert("Data Saved..")
  },
  error:console.log
}
)

  }


}
