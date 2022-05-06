interface SStorage<T> {
    [key:string]:T
}

class LocalStorage<T> {//API디자인
    private storage: SStorage<T> = {}
    set(key:string,value:T) {
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStorage<string>() 

stringsStorage.get("key")
stringsStorage.set("hello","how")

const booleansStorage = new LocalStorage<boolean>()

booleansStorage.get("xxx")
booleansStorage.set("hello",true)

function Polymorphism() {
    return (
        <div>
            d
        </div>
    )
}

export default Polymorphism;