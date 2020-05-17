import {Component, OnInit, Output} from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {Department} from '../models/department.model';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  showForm = false;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    const fields = myForm.form.controls;
    const department: Department = {
      id: 0,
      name: fields.name.value,
      vacancyNumber: fields.vacancyNumber.value
    };
    this.showForm = false;
    this.departmentService.addDepartment(department);
  }

}
