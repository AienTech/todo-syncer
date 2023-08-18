export interface List {
  '@odata.type': string;
  id: string;
  displayName: string;
  isOwner: boolean;
  isShared: boolean;
  wellknownListName: string;
}

export interface Todo {
  '@odata.type': string;
  id: string;
  body: { '@odata.type': string; content?: string; contentType?: string };
  categories: string[];
  completedDateTime: {
    '@odata.type': string;
    dateTime: string;
    timeZone: string;
  };
  dueDateTime: { '@odata.type': string; dateTime: string; timeZone: string };
  importance: string;
  isReminderOn: boolean;
  recurrence: { '@odata.type': string; pattern: any; range: any };
  reminderDateTime: {
    '@odata.type': string;
    dateTime: string;
    timeZone: string;
  };
  status: string;
  title: string;
  createdDateTime: string;
  lastModifiedDateTime: string;
  bodyLastModifiedDateTime: string;
}
