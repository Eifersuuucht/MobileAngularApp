import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {Department} from '../models/department.model';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.css']
})
export class DepartmentItemComponent implements OnInit {
  @Input() department: Department;
  showInfo = false;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  deleteDepartment() {
    this.departmentService.deleteDepartment(this.department.id);
  }

}
