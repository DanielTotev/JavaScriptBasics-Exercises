function solve(args) {
    let object = {};
    for(let i = 0; i < args.length - 1; i++){
        if(args[i].length <= 1){
            continue;
        }
        let tokens = args[i].split(" ");
        let key = tokens[0];
        let value = tokens[1];
        if(object[key] === undefined){
            object[key] = [];
            object[key].push(value);
            continue
        }
        object[key].push(value);
    }
    let key = args[args.length - 1];
    if(object[key] === undefined){
        console.log("None");
        return;
    }
    console.log(object[key].join("\n"))
}