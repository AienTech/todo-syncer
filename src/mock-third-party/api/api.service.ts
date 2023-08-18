import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';
import { List, Todo } from '../mock-third-party.interface';

@Injectable()
export class ApiService {
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = `http://localhost:${this.configService.getOrThrow(
      'APP_PORT',
    )}/mock-third-party`;
  }

  public getAllLists = async () => {
    return await axios.get<undefined, AxiosResponse<List[]>>(`${this.baseUrl}`);
  };

  public getOneList = async (id: string) => {
    return await axios.get<undefined, AxiosResponse<List>>(
      `${this.baseUrl}/${id}`,
    );
  };

  public createList = async (todoList: List) => {
    return await axios.post(`${this.baseUrl}`, todoList);
  };

  public updateList = async (id: string, todoList: List) => {
    return await axios.put(`${this.baseUrl}/${id}`, todoList);
  };

  public removeList = async (id: string) => {
    return await axios.delete(`${this.baseUrl}/${id}`);
  };

  public getAllTodos = async (lid: string) => {
    return await axios.get(`${this.baseUrl}/${lid}/todos`);
  };

  public getOneTodo = async (lid: string, id: string) => {
    return await axios.get(`${this.baseUrl}/${lid}/todos/${id}`);
  };

  public createTodo = async (lid: string, todo: Todo) => {
    return await axios.post(`${this.baseUrl}/${lid}/todos`, todo);
  };

  public updateTodo = async (lid: string, id: string, todo: Todo) => {
    return await axios.put(`${this.baseUrl}/${lid}/todos/${id}`, todo);
  };

  public removeTodo = async (lid: string, id: string) => {
    return await axios.delete(`${this.baseUrl}/${lid}/todos/${id}`);
  };
}
