
export class Tag {
  constructor(public name: string) {
  }
}

export class Task {
  constructor(public tags: Tag[]) {
  }
}

export class TasksState {
  constructor(public tasks: Task[]) {
  }
}
