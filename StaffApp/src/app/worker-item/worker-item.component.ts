import {Component, Input, OnInit} from '@angular/core';
import {WorkerService} from '../services/worker.service';
import {Worker} from '../models/worker.model';

@Component({
  selector: 'app-worker-item',
  templateUrl: './worker-item.component.html',
  styleUrls: ['./worker-item.component.css']
})
export class WorkerItemComponent implements OnInit {
  @Input() worker: Worker;
  showInfo = false;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

  deleteWorker() {
    this.workerService.deleteWorker(this.worker.id);
  }


}
