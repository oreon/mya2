import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

export interface Todo {
  id: number;
  createdAt: number;
  value: string;
}

export class TodosService {
  todos$: Observable<Todo[]>;
  private _todosObserver: Observer<Todo[]>;
  private _dataStore: {
    todos: Todo[];
  };

  constructor(private _http: Http) {
    this._dataStore = { todos: [] };

    this.todos$ = new Observable(observer =>  this._todosObserver = observer).share();
  }

  loadAll() {
    this._http.get('/api/todos').map(response => response.json()).subscribe(data => {
      this._dataStore.todos = data;
      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not load todos.'));
  }

  load(id: any) {
    this._http.get(`${this._baseUrl}/todos/${id}`).map(response => response.json()).subscribe(data => {
      let notFound = true;

      this._dataStore.todos.forEach((item, index) => {
        if(item.id === data.id) {
          this._dataStore.todos[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this._dataStore.todos.push(data);
      }

      this._todosObserver.next(this._dataStore.todos);
    }, error => console.log('Could not load todo.'));
  }

  create(todo: Todo) {
    this._http.post('/api/todos', todo)
        .map(response => response.json()).subscribe(data => {
          this._dataStore.todos.push(data);
          this._todosObserver.next(this._dataStore.todos);
        }, error => console.log('Could not create todo.'));
    }

  update(todo: Todo) {
    this._http.put(`/api/todos/${todo.id}`, todo)
        .map(response => response.json()).subscribe(data => {
          this._dataStore.todos.forEach((todo, i) => {
            if (todo.id === data.id) { this._dataStore.todos[i] = data; }
          });

          this._todosObserver.next(this._dataStore.todos);
        }, error => console.log('Could not update todo.'));
  }

  remove(todoId: number) {
    this._http.delete(`/api/todos/${todoId}`).subscribe(response => {
      this._dataStore.todos.forEach((t, index) => {
        if (t.id === todo.id) { this._dataStore.todos.splice(index, 1); }
      });

      this._todosObserver.next(this._dataStore.todos);
  }, error => console.log('Could not delete todo.'));
}
}
