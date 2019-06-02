import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectsComponent } from './viewprojects.component';
import { projects } from 'src/app/Models/projects';


import {projectDetails} from '../Models/projects';

import {TaskmanagerserviceService} from '../shared/taskmanagerservice.service';

import { Observable , from} from 'rxjs';

describe('ViewprojectsComponent', () => {
  let component: ViewprojectsComponent;
  let fixture: ComponentFixture<ViewprojectsComponent>;
  let service : TaskmanagerserviceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return project details', () => {

    const projectDetails : project[] = [
      {
        project_id = 1,
    project:'Universal 1',
    startdate:'2019-03-02',
    enddate:'2019-10-10',
    priority:1,
    numberoftasks:1,
    completed:'Yes'
      }
    ];

    spyOn(service,'GetAllProjects').and.callFake(() =>
      {
        return from([projectDetails]);
      }
    );

    component.ngOnInit();

    expect(component.projectDetails).toEqual(projectDetails);

     

    expect(component).toBeTruthy();
  });
});
