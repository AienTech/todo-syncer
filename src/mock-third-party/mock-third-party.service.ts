import { Injectable } from '@nestjs/common';
import { List, Todo } from './mock-third-party.interface';

@Injectable()
export class MockThirdPartyService {
  public lists: List[] = [
    {
      '@odata.type': '#microsoft.graph.todoTaskList',
      id: 'list1',
      displayName: 'Personal Tasks',
      isOwner: true,
      isShared: false,
      wellknownListName: 'personal',
    },
    {
      '@odata.type': '#microsoft.graph.todoTaskList',
      id: 'list2',
      displayName: 'Work Tasks',
      isOwner: true,
      isShared: true,
      wellknownListName: 'work',
    },
    {
      '@odata.type': '#microsoft.graph.todoTaskList',
      id: 'list3',
      displayName: 'Shopping List',
      isOwner: false,
      isShared: true,
      wellknownListName: 'shopping',
    },
  ];

  public todos: Todo[] = [
    {
      '@odata.type': '#microsoft.graph.todoTask',
      id: 'todo1',
      body: {
        '@odata.type': 'microsoft.graph.itemBody',
        content: 'Remember to buy milk',
      },
      categories: ['Shopping', 'Groceries'],
      completedDateTime: {
        '@odata.type': 'microsoft.graph.dateTimeTimeZone',
        dateTime: '2023-08-15T12:00:00',
        timeZone: 'UTC',
      },
      dueDateTime: {
        '@odata.type': 'microsoft.graph.dateTimeTimeZone',
        dateTime: '2023-08-17T12:00:00',
        timeZone: 'UTC',
      },
      importance: 'High',
      isReminderOn: true,
      recurrence: {
        '@odata.type': 'microsoft.graph.patternedRecurrence',
        pattern: {
          type: 'daily',
          interval: 1,
        },
        range: {
          type: 'endDate',
          startDate: '2023-08-01',
          endDate: '2023-08-30',
        },
      },
      reminderDateTime: {
        '@odata.type': 'microsoft.graph.dateTimeTimeZone',
        dateTime: '2023-08-17T10:00:00',
        timeZone: 'UTC',
      },
      status: 'Not started',
      title: 'Buy Milk',
      createdDateTime: '2023-08-14T10:00:00',
      lastModifiedDateTime: '2023-08-14T10:05:00',
      bodyLastModifiedDateTime: '2023-08-14T10:06:00',
    },
    {
      '@odata.type': '#microsoft.graph.todoTask',
      id: 'todo2',
      body: {
        '@odata.type': 'microsoft.graph.itemBody',
        content: 'Prepare for the meeting with the sales team',
      },
      categories: ['Work'],
      completedDateTime: null,
      dueDateTime: {
        '@odata.type': 'microsoft.graph.dateTimeTimeZone',
        dateTime: '2023-08-20T09:00:00',
        timeZone: 'UTC',
      },
      importance: 'Normal',
      isReminderOn: true,
      recurrence: null,
      reminderDateTime: {
        '@odata.type': 'microsoft.graph.dateTimeTimeZone',
        dateTime: '2023-08-20T08:30:00',
        timeZone: 'UTC',
      },
      status: 'Not started',
      title: 'Sales Meeting Prep',
      createdDateTime: '2023-08-10T08:00:00',
      lastModifiedDateTime: '2023-08-10T08:30:00',
      bodyLastModifiedDateTime: '2023-08-10T08:35:00',
    },
  ];

  public relations: Record<string, string[]> = {
    list1: ['todo1'],
    list2: ['todo2'],
    list3: [],
  };

  findAllList(): List[] {
    return this.lists;
  }

  findOneList(id: string): List | null {
    return this.lists.find((list) => list.id === id);
  }

  createList(todoList: List): void {
    if (this.lists.some((l) => l.id === todoList.id))
      throw new Error('list already exists');

    this.lists.push(todoList);
    this.relations[todoList.id] = [];
  }

  updateList(id: string, todoList: List): void {
    const index = this.lists.findIndex((t) => t.id === id);
    if (index > -1) this.lists[index] = todoList;
    else throw new Error('list cannot be found');
  }

  removeList(id: string): void {
    const exists = this.lists.some((t) => t.id === id);

    if (!exists) throw new Error('list cannot be found');

    this.lists = this.lists.filter((list) => list.id !== id);
    delete this.relations[id];
  }

  findAllTodo(lid: string): Todo[] {
    return this.todos.filter((t) => this.relations[lid].includes(t.id));
  }

  findOneTodo(lid: string, id: string): Todo {
    return this.todos.find(
      (todo) => todo.id === id && this.relations[lid].includes(todo.id),
    );
  }

  createTodo(lid: string, todo: Todo): void {
    const l = this.findOneList(lid);

    if (!l) throw new Error('list cannot be found');
    if (!this.relations[l.id]) this.relations[l.id] = [];

    this.todos.push(todo);
    this.relations[l.id].push(todo.id);
  }

  updateTodo(lid: string, id: string, todo: Todo): void {
    const index = this.todos.findIndex(
      (t) => t.id === id && this.relations[lid].includes(todo.id),
    );
    if (index > -1) {
      const { id, ...rest } = todo;
      this.todos[index] = { ...this.todos[index], ...rest };
    }
  }

  removeTodo(lid: string, id: string): void {
    this.todos = this.todos.filter(
      (todo) => todo.id !== id && this.relations[lid].includes(todo.id),
    );

    this.findAllList().forEach((l) => {
      this.relations[l.id] = this.relations[l.id].filter((t) => t !== id);
    });
  }
}
