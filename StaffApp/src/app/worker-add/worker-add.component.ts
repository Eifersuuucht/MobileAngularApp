import {Component, Input, OnInit} from '@angular/core';
import {WorkerService} from '../services/worker.service';
import {Worker} from '../models/worker.model';


@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {
  @Input() departmentId: number;
  showForm = false;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    const fields = myForm.form.controls;
    const worker: Worker = {
      id: 0,
      lastName: fields.lastName.value,
      experienceInMonth: fields.experienceInMonth.value,
      position: fields.position.value,
      departmentId: +this.departmentId
    };
    this.showForm = false;
    this.workerService.addWorker(worker);
  }

}
