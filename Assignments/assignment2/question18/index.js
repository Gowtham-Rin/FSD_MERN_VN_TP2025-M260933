function examstart(callback){
    setTimeout(() => {
        console.log(`Exam started`);
        callback();
    },1000);
}


function DeclearResult(callback){
    setTimeout(() => {
        console.log(`Result Decleared`);
        callback();
    },2000)
}
function EvaluateExam(callback){
    setTimeout(() =>{
        console.log(`Evaluating Exam`);
        callback();
    },1500);
   

}

examstart(() =>{
    EvaluateExam( () =>{
        DeclearResult();
    });
});

