class Doctor{
    doc_id:Number  
    doc_name:String
    Special:String

    constructor(doc_id:Number,doc_name:String,Special:String){
        this.doc_id = doc_id
        this.doc_name = doc_name
        this.Special = Special
    }
    displayInfo():void{
        console.log(this.doc_id);
        console.log(this.doc_name);
        console.log(this.Special);
    }
}

const doc = new Doctor(1355,"Terry","Ortho")
doc.displayInfo();