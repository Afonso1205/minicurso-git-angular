import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  constructor(public taskService: TaskService) {}
}
