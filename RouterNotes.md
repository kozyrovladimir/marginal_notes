#React Router Dom examples/templates

##Basic template:

```typescript
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="login" element={<LogIn/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
                <Route path="restore-password" element={<RestorePassword/>}/>
                <Route path="new-password" element={<NewPassword/>}/>
                <Route path="test-page" element={<TestPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
```
