import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Department} from '../models/department.model';
import {Worker} from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: 1,
      name: 'Engineering',
      vacancyNumber: 15
    },
    {
      id: 2,
      name: 'Human Resource',
      vacancyNumber: 3
    }
  ];
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

  constructor() {
  }

  getWorkers(departmentId: number): Observable<Worker[]>{
    console.log(this.workers.filter(elem => {
      return elem.departmentId === departmentId;
    }));
    console.log(departmentId);
    return of(this.workers.filter(elem => {
      return elem.departmentId === departmentId;
    }));
  }

  getDepartments(): Observable<Department[]> {
    return new Observable<Department[]>(
      subscriber => {
        subscriber.next(this.departments);
        subscriber.complete();
      }
    );
  }

  addDepartment(department){
    department.id = this.departments.length + 1;
    this.departments.push(department);
  }

  deleteDepartment(index){
    this.departments.splice(index, 1);
  }
}
