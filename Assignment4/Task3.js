let memoryLeakArray = [];

function addData() {
    for (let i = 0; i < 1000; i++) {
        memoryLeakArray.push({ data: new Array(1000).fill("leak") });
    }
    console.log("Added data. Current array size:", memoryLeakArray.length);
}

function clearMemory() {
    memoryLeakArray = [];
    console.log("Memory cleared. Current array size:", memoryLeakArray.length);
}

setInterval(addData, 1000);

setTimeout(() => {
    clearInterval(addData);
    clearMemory();
}, 10000);