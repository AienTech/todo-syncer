import { Test, TestingModule } from '@nestjs/testing';
import { MockThirdPartyService } from './mock-third-party.service';
import { List, Todo } from './mock-third-party.interface';

describe('MockThirdPartyService', () => {
  let service: MockThirdPartyService;

  const mockList: List = {
    '@odata.type': '#microsoft.graph.todoTaskList',
    id: 'mock',
    displayName: 'Personal Tasks',
    isOwner: true,
    isShared: false,
    wellknownListName: 'personal',
  };

  const mockTodo: Todo = {
    '@odata.type': '#microsoft.graph.todoTask',
    id: 'mock',
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
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockThirdPartyService],
    }).compile();

    service = module.get<MockThirdPartyService>(MockThirdPartyService);
  });

  describe('Lists', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should return all lists', () => {
      expect(service.findAllList()).toEqual(service.lists);
    });

    it('should return a single list', () => {
      service.lists = [mockList];
      expect(service.findOneList('mock')).toEqual(mockList);
    });

    it('should create a list', () => {
      service.createList(mockList);
      expect(service.lists).toContainEqual(mockList);
    });

    it('should not create a list with duplicate ID', () => {
      service.lists = [mockList];
      expect(() => service.createList(mockList)).toThrow('list already exists');
    });

    it('should update a list', () => {
      service.lists = [mockList];
      const updatedList = { ...mockList, displayName: 'new name' };
      service.updateList('mock', updatedList);
      expect(service.lists[0]).toEqual(updatedList);
    });

    it('should remove a list', () => {
      service.lists = [mockList];
      service.removeList('mock');
      expect(service.lists).not.toContainEqual(mockList);
    });
  });

  describe('Todos', () => {
    it('should return all todos for a list', () => {
      service.todos = [mockTodo];
      service.relations['mock'] = ['mock'];
      expect(service.findAllTodo('mock')).toEqual([mockTodo]);
    });

    it('should return a single todo', () => {
      service.todos = [mockTodo];
      service.relations['mock'] = ['mock'];
      expect(service.findOneTodo('mock', 'mock')).toEqual(mockTodo);
    });

    it('should create a todo', () => {
      service.lists = [mockList];
      service.createTodo('mock', mockTodo);
      expect(service.todos).toContainEqual(mockTodo);
      expect(service.relations['mock']).toContain('mock');
    });

    it('should update a todo', () => {
      service.todos = [mockTodo];
      service.relations['mock'] = ['mock'];
      const updatedTodo = { ...mockTodo, title: 'updated todo' };
      service.updateTodo('mock', 'mock', updatedTodo);
      expect(service.todos[0]).toMatchObject(updatedTodo);
    });

    it('should remove a todo', () => {
      service.lists = [mockList];
      service.todos = [mockTodo];
      service.relations['mock'] = ['mock'];
      service.removeTodo('mock', 'mock');
      expect(service.todos).not.toContainEqual(mockTodo);
      expect(service.relations['mock']).not.toContain('mock');
    });
  });
});
