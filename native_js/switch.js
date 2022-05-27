function saySomething (action, state) {
    switch (action.type) {
        case 'Say mu':
        case 'Say gav':
        case 'Say meow': {
                return state
            }
        default: {
            return 'nothing'
        }
    } 
}

console.log(saySomething({type: 'Say mssu'}, 'ssss'));

