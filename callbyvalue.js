function one(){
    var a=[100]
    two(a)
    console.log('One:'+a[0])
}


function two(a){
    a[0]=a[0]+1//Increment
    console.log('Two:'+a[0]);
}

one();