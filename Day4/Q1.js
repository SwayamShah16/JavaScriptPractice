"use strict";
class Doctor {
    doc_id;
    doc_name;
    Special;
    constructor(doc_id, doc_name, Special) {
        this.doc_id = doc_id;
        this.doc_name = doc_name;
        this.Special = Special;
    }
    displayInfo() {
        console.log(this.doc_id);
        console.log(this.doc_name);
        console.log(this.Special);
    }
}
const doc = new Doctor(1355, "Terry", "Ortho");
doc.displayInfo();
