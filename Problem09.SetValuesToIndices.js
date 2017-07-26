function setValues(args) {
    let length = Number(args[0]);
    let arr = new Array(length);
    for(let i = 0; i < length; i++){
        arr[i] = 0;
    }
    for(let i = 1; i < args.length; i++){
        let tokens = args[i].split(' ').filter(x => x !== '-');
        let index = Number(tokens[0]);
        let value = tokens[1];
        arr[index] = value;
    }
    console.log(arr.join("\n"));
}

setValues(['5', '0 - 3', '3 - -1', '4 - 2']);