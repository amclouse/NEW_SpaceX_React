function toCamelCase(str) {
    if (str.includes("_")) {
        str.replace("_", " ")
        console.log(str)
    }
    return str; 
}

toCamelCase("hello_");
