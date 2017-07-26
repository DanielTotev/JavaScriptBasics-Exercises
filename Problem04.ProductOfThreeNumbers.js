function guessProductSign(args){
    args = args.map(Number);
    if(args.indexOf(0) > -1){
        console.log('Positive');
        return;
    }
    let negativeNumbersCount = args.filter(x => x < 0).length;
    if(negativeNumbersCount % 2 === 0)
        console.log('Positive');
    else
        console.log('Negative');
}

guessProductSign(['5', '-4', '-3'])