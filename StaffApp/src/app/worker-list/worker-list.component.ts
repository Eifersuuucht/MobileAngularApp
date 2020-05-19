import {Component, OnDestroy, OnInit} from '@angular/core';
import {Worker} from '../models/worker.model';
import {ActivatedRoute} from '@angular/router';
import {WorkerService} from '../services/worker.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit, OnDestroy {
  workers: Worker[];
  departmentId: number;
  subscription: Subscription;

  constructor(private workerService: WorkerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.departmentId = params.departmentId;
        this.getWorkers(params.departmentId);
      }
    );
    this.subscription = this.workerService.workersChanged.subscribe((workers: Worker[]) => {
      this.workers = workers;
    });
  }

  public trackItem(index: number, item: Worker) {
    return item.id;
  }

  getWorkers(numb: string) {
    const departmentId = +numb;
    this.workerService.getWorkers(departmentId).subscribe(
      (workers) => {
        this.workers = workers;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
