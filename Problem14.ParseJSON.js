function solve(args) {
    args = args.filter(a => a.length > 1);
    let objectArray = [];
    for(let i = 0; i < args.length; i++){
        let object = JSON.parse(args[i]);
        objectArray.push(object);
    }
    for(let obj of objectArray){
        console.log(`Name: ${obj.name}\r\nAge: ${obj.age}\r\nDate: ${obj.date}`)
    }
}