abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickName:string
    ) {}

    abstract getNickName():void

    getFullName(){
        return `${this.firstName} ${this.lastName}` 
    }
}

class Player extends User {
    getNickName() {
        console.log(this.nickName)
    }
}

const nico = new Player("nico","las","니꼬");
 nico.getFullName()



 //단어 사전    
 type Words = {
    [key:string]:string//object type 선언
}

class Dict {  
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term:string) {
        return this.words[term]
    }
}

 
class Word {
    constructor (
        public term:string,
        public def :string,
        ){}
    }
    
    const kimchi = new Word("kimchi","한국의 음식")
    
    const dict = new Dict()

    dict.add(kimchi)
    console.log(dict.def("kimchi"))
    function Class() {
        return (
            <div>
                d
            </div>
        )
    }

export default Class;