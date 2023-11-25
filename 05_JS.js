const p1=new Promise( (res,rej)=>{
    setTimeout(()=>{
        console.log("Avanish");
        res();
    },1000)
})

p1.then(()=>{
    const p2=new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Nimish");
            res();
        })
    })
    p2.then(()=>{
        setTimeout(() => {
            console.log("Harshit");
        }, 1000);
    })
})

console.log("hello world");