function operateOnArray(args) {
    let arr = [];
    for(let i = 0; i < args.length; i++){
        let tokens  = args[i].split(' ');
        let command = tokens[0];
        let index = Number(tokens[1]);

        if(command === "add"){
            arr.push(index);
        }else if(command === "remove"){
            if (index < 0 || args[index] === undefined)
                 continue;
            arr.splice(index, 1);
            for(index in arr)
                index -= 1;
        }

    }
    console.log(arr.join('\n'));
}


operateOnArray(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);