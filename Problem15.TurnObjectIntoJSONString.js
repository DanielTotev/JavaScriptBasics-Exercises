function solve(args) {
    args = args.filter(a => a.length > 1);
    let object = {};
    for(let i = 0; i < args.length; i++){
        let tokens = args[i].split(" -> ");
        if(!isNaN(tokens[1])){
            tokens[1] = Number(tokens[1]);
        }
        object[tokens[0]] = tokens[1];
    }
    let objectAsJson = JSON.stringify(object);
    console.log(objectAsJson);

}