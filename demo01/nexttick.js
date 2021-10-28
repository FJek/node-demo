process.nextTick(function(){
    console.log('2')
})

// 程序即将退出时的回调函数, 类似 go 的 defer
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

console.log('a')