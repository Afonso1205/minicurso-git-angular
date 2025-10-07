import { Component } from '@angular/core';
import { TaskService } from './service/task.service';
import { TaskList } from './task-list/task-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
