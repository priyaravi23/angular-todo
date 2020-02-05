import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have addTodo`, () => {
    TestBed.createComponent(TodoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.addTodo).toBeTruthy();
  });
});
