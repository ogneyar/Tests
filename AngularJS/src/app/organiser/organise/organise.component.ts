import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateService } from 'src/app/shared/date.service';
import { Task, TasksService } from 'src/app/shared/tasks.service';
import { switchMap } from "rxjs/operators";
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-organise',
  templateUrl: './organise.component.html',
  styleUrls: ['./organise.component.scss']
})
export class OrganiseComponent implements OnInit {

  form: FormGroup;
  tasks: Task[] = [];

  constructor(public dateService: DateService,
              public tasksService: TasksService) { 
  }

  ngOnInit(): void {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  submit() {
    const {title} = this.form.value;

    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }

    this.tasksService.create(task).subscribe(t => {
      this.tasks.push(task)
      this.form.reset()
    }, err => console.log(err))
  }

  remove(task: Task) {
    this.tasksService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, err => console.log(err))
  }

}
