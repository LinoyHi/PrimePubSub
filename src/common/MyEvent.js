class MyEvent {
    constructor(){
        this.events = {}
    }
    
    on(type,mylistenerfunc){
        if(!this.events[type]){this.events[type]=[]}
        this.events[type].push(mylistenerfunc)
    }
    
    emmit(type, ...args){
        this.events[type]?.forEach(func=>func(...args))
    }
}

export default MyEvent