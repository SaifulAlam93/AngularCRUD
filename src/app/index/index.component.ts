import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  constructor(private service : ApiService){}

  tableData: any[] = []
  
  ngOnInit(): void {
  this.getList();
  }

  getList(){
    this.service.getAllUser().subscribe((data: any) => {
      this.tableData = data;
      console.log(this.tableData);
    })
  }

  deleteData(id: number){
    this.service.delete(id).subscribe({
      next:() => {alert('Data Deleted..')
      this.getList();}
    })
  }

}
