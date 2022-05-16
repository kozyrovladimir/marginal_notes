# Конспект React и TypeScript

## Создание React приложения

Создание React прлиожения с использованием Typescript:

`$ yarn create-react-app <project_name> --template typescript`

Расширение существующего типа, создание 'составного' типа:

```typescript
type MyType = {
  title: string;
  order: number;
};

type MyEntityType = MyType & {
  value: number;
};
```

Создание enum:

```typescript
enum TaskStatus {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
}
```

Установка uuid:

```typescript
yarn add uuid

yarn add uuid
```

Установка redux-thunk:

```typescript
    yarn redux-thunk
```

Подключение redux-thunk к store:

```typescript
export const store = createStore(rootReducer, applyMiddleware(thunk));
```
