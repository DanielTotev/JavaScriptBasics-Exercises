function setValueToKey(args){
    let arr = [];
    for(let i = 0; i < args.length - 1; i++){
        let tokens = args[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        arr[key] = value;
    }
    let specialKey = args[args.length - 1];
    let elementToPrint = arr[specialKey];
    if (elementToPrint === undefined){
        console.log("None");
    }else{
        console.log(elementToPrint);
    }
}

setValueToKey(['key value', 'key eulav', 'key test2', '4 test3', '4 test5', '4'])

