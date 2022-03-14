# Конспект React
## Создание React приложения
 
Создание React прлиожения с использованием Typescript:

`$ npx create-react-app <project_name> --template typescript`

Расширение существующего типа, создание 'составного' типа:
```
type MyType = {
    title: string
    order: number 
}

type MyEntityType = MyType & {
    value: number
}
```