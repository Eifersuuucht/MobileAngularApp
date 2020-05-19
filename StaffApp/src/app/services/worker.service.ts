import { Injectable } from '@angular/core';
import {Worker} from '../models/worker.model';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  workersChanged = new Subject<Worker[]>();
  lastDepartmentId: number;

  private workers: Worker[] = [
    {
      id: 1,
      lastName: 'Nitro',
      experienceInMonth: 15,
      position: 'Director',
      departmentId: 2
    },
    {
      id: 2,
      lastName: 'Laus',
      experienceInMonth: 2,
      position: 'Director',
      departmentId: 1
    },
    {
      id: 3,
      lastName: 'Skolnik',
      experienceInMonth: 33,
      position: 'Software Engineer',
      departmentId: 1
    },
    {
      id: 4,
      lastName: 'Nash',
      experienceInMonth: 11,
      position: 'HR Manager',
      departmentId: 2
    }
  ];

  constructor() { }

  getWorkers(departmentId: number): Observable<Worker[]>{
    this.lastDepartmentId = departmentId;
    return new Observable<Worker[]>(
      subscriber => {
        subscriber.next(this.workers.filter(elem => {
          return elem.departmentId === departmentId;
        }));
        subscriber.complete();
      }
    );
  }

  addWorker(worker: Worker){
    worker.id = this.workers.length + 1;
    this.workers.push(worker);
    this.workersChanged.next(this.workers.filter(elem => {
      return elem.departmentId === this.lastDepartmentId;
    }));
  }

  deleteWorker(id: number){
    const workerToDelete = this.workers.find(worker => worker.id === id);
    const indexToDelete = this.workers.indexOf(workerToDelete);
    this.workers.splice(indexToDelete, 1);
    this.workersChanged.next(this.workers.filter(elem => {
      return elem.departmentId === this.lastDepartmentId;
    }));
  }
}
