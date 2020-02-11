function add(){
    tem1=values()
    var x=Number(tem1[0])
    var y=Number(tem1[1])
    prints(x+y)
}
function sub(){
    tem1=values()
    var x=Number(tem1[0])
    var y=Number(tem1[1])
    prints(x-y)
}
function mult(){
    tem1=values()
    var x=Number(tem1[0])
    var y=Number(tem1[1])
    prints(x*y)
}
function div(){
    tem1=values()
    var x=Number(tem1[0])
    var y=Number(tem1[1])
    prints(x/y)
}
function values(){
    tem=[]
    var a=document.getElementById("n-1").value
    var b=document.getElementById("n-2").value
    if(a.length==0 || b.length==0){
        alert('please provide two numbers')
    }else{
        tem.push(a)
        tem.push(b)
        return tem 
    }
    
    
}
function prints(ans){
    document.getElementById("answer").innerHTML=`<p>The answer is : ${ans}`
}
