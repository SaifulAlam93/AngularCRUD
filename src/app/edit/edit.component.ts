import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { User } from '../INRERFACE/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!:number;

  user!:User;
  userForm!: FormGroup;
  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),
    })         
    this.id = this.route.snapshot.params['userID'];
    this.service.getByID(this.id).subscribe({
      next:(res:any)=>{
        this.user = res;
        this.userForm = new FormGroup({
          id: new FormControl(this.user.id),
          name: new FormControl(this.user.name),
          address: new FormControl(this.user.address),
        })         
      },
      error:console.log
    })
    }


    editData(){
this.service.updateUser(this.userForm.value).subscribe({
  next: ()=>{
    this.router.navigateByUrl('/')
  },
  error:console.log
})

    }
}
