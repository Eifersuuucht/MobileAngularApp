import { Component, OnInit } from '@angular/core';
import {Worker} from '../models/worker.model';
import {ActivatedRoute} from '@angular/router';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers: Worker[];

  constructor(private departmentService: DepartmentService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.getStudents(params.departmentId)
    );
  }

  getStudents(numb: string) {
    const departmentId = +numb;
    this.departmentService.getWorkers(departmentId).subscribe(
      (workers) => {
        this.workers = workers;
      }
    );
  }
}
