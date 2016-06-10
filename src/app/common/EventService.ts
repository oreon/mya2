import {Injectable, EventEmitter}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import {BaseEntity}  from './BaseEntity'

@Injectable()
export  class EventService<T extends BaseEntity>{

    public itemAdded$: EventEmitter<T>;
   // private todoList: TodoItem[] = [];

    constructor() {
        this.itemAdded$ = new EventEmitter<T>();
    }

    // public list(): TodoItem[] {
    //     return this.todoList;
    // }

    public add(item: T): void {
        //this.todoList.push(item);
        this.itemAdded$.emit(item);
    }

}