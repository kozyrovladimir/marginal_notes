#Basic

##For a first: create context by 'createContext':
```js
interface ContextDataInteface {
    value: string,
    setValue: () => void
}

export const ContextData = createContext<ContextDataInteface >({setValue: () =>{}, value: 'null'});
```

##For a second: wrap components in ContextData.Provider:

```js
<ContextData.Provider value={{value: value, setValue: changeValue}}>
    <div className="App">
        <h2 style={{textAlign: "center"}}>React Form</h2>
        <button onClick={changeValue}>
            ssss
        </button>
        <Routes>
            <Route index element={<Step1/>}/>
            <Route path='/step2' element={<Step2/>}/>
            <Route path='/step3' element={<Step3/>}/>
            <Route path='/result' element={<Result/>}/>
        </Routes>

    </div>
</ContextData.Provider>
```

##You can access to data by hook 'useContext':

```js
const value = useContext(ContextData);
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Step1</h2>
            <h2 style={{textAlign: "center"}}>{value.value}</h2>
        </div>
    );
```