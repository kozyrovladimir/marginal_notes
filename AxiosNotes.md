# Axios

## Base template

```ecmascript 6
    import axios from "axios";

    const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
        headers: {
            'API-KEY': '3223364a-e08c-4c98-95ce-1ba38befaf20'
        }
    })

    export const todolistAPI = {
        getTodolists() {
            return instance.get<Array<TodolistType>>('todo-lists');
        },
        createTodolist(title: string) {
            return instance.post<CreateTodolistResponseType>('todo-lists', {title});
        },
        deleteTodolist(id: string) {
            return instance.delete<DeleteTodolistResponseType>(`todo-lists/${id}`);
        },
        updateTodolistTitle(id: any, title: any) {
            return instance.put(`todo-lists/${id}`, {title});
        },
        getTasks(todolistId: string) {
            return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`);
        },
        createTasks(todolistId: string, title: string) {
            return instance.post<CreateTaskResponseType>(`todo-lists/${todolistId}/tasks`, {title});
        },
        changeTask(todolistId: string, taskId: string, changes: TaskChangesType) {
            return instance.post<CreateTaskResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, {...changes});
        },
        deleteTask(todolistId: string, taskId: string,) {
            return instance.delete<DeleteTaskResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
        }
    }

    function  onClickHandler() {
        todolistAPI.deleteTodolist(inputState)
            .then((res) => {
                setState(res.data)
            })
    }
```

## Базовый get запрос:

```ecmascript 6
    axios.get('https://localhost').then(response => {
            console.log(response.data);
        }).catch(error=> {
            console.log(error); 
    });
```

## Get запрос с uri параметрами:

```ecmascript 6
     export const todolistAPI = {
        getTodolists() {
            return instance.get<Array<TodolistType>>('todo-lists', {params:
                    {
                        min: 3,
                        max: 9,
                        page: 1,
                    }
            }
            });
        },
```
