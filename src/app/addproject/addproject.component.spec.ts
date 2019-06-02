import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectComponent } from './addproject.component';

import {userdetails} from '../Models/userdetails';

import {TaskmanagerserviceService} from '../shared/taskmanagerservice.service';

import { Observable , from} from 'rxjs';

import 'rxjs/Observable/from';
//import { from } from 'rxjs/internal/observable/from';

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;
  let service : TaskmanagerserviceService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set user details', () => {

    const userdata : userdetails[] =[
    {
      user_id :  1,
      firstname :  'Sachin',
      lastname : 'Tendulkar',
      employee_id : 'Emp001',
      project_id : 1,
      task_id : 1 
    },

    {
      user_id :  2,
      firstname :  'Sourav',
      lastname : 'Ganguly',
      employee_id : 'Emp002',
      project_id : 1,
      task_id : 1 
    }
  ];

    spyOn(service,'GetAllUsers').and.callFake(() =>
      {
        return from([userdata]);
      }
    );

    component.getAllUsers();

    expect(component.userdata).toEqual(userdata);
  });
});
