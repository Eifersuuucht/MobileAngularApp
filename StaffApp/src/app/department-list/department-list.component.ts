import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {Department} from '../models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(
      (departments) => {
        this.departments = departments;

      }
    );
  }

}
