var stringType = "String";

var numberType = 35;
var numberTypeZero = 0;

var boolTypeTrue = true;
var boolTypeFalse = false;

var nullType = null;

var undefinedType = undefined;

var jsonType = {
    name: "Yasin",
    surname: "Solak",
    age: undefined, 
};

function getName(id,name) {
    if(typeof id === "string"){
        console.log("id parametresinin type'ı stringtir.");
    }
}
getName("id1","Mehmet");

console.log("stringType : ",typeof stringType);
console.log("numberType : ",typeof numberType);
console.log("boolTypeTrue : ",typeof boolTypeTrue);
console.log("getName : ",typeof getName);
console.log("nullType : ",typeof nullType);
console.log("undefinedType : ",typeof undefinedType);
console.log("jsonType : ",typeof jsonType);
console.log("jsonType Name : ",typeof jsonType.name);