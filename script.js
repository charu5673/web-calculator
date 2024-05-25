function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    if(b==0)
        return "Not happening :<";
    return a/b;
}
let firstNo=null,secondNo=null,operand=null;
let displays=document.querySelector("#display");
let buttons=document.querySelector("#buttons");
function operate(a,b,op)
{
    switch(op)
        {
            case '+':return(add(a,b));break;
            case '-':return(subtract(a,b));break;
            case '/':return(divide(a,b));break;
            case '*':return(multiply(a,b));break;
        }
}
buttons.addEventListener("click",function(e){display(e)});
function display(e)
{
            if(e.target.id=="C")
                {
                    displays.textContent="";
                    firstNo=null;
                    secondNo=null;
                    operand=null;
                }
    else if(firstNo==null&&secondNo==null&&operand==null)
        {
            if(e.target.className=="number")
                {
            firstNo=parseInt(e.target.textContent);
            displays.textContent=firstNo;
                }
        }
    else if(secondNo==null&&operand==null)
        {
            if(e.target.className=="number")
                {
                    firstNo=firstNo*10+parseInt(e.target.textContent);
                    displays.textContent=firstNo;
                }
            else if(e.target.className=="operator")
                {
                    operand=e.target.textContent;
                }
        }
    else if(secondNo==null)
        {
            if(e.target.className=="number")
            {
            secondNo=parseInt(e.target.textContent);
            displays.textContent=secondNo;
            }
        }
    else
        {
            if(e.target.className=="number")
                {
            secondNo=secondNo*10+parseInt(e.target.textContent);
            displays.textContent=secondNo;
                }
            else if(e.target.className=="operator")
            {
                firstNo=operate(firstNo,secondNo,operand);
                secondNo=null;
                operand=e.target.textContent;
                if(typeof(firstNo)=="number")
                firstNo=Math.round(firstNo*1000)/1000;
                displays.textContent=firstNo;
                    if(typeof(firstNo)!="number")
                        firstNo=null;
            }
            else if(e.target.id=="="&&firstNo!=null&&secondNo!=undefined&&secondNo!=null&&firstNo!=undefined&&operand!=null)
                {
                    firstNo=operate(firstNo,secondNo,operand);
                    secondNo=null;
                    operand=null;
                if(typeof(firstNo)=="number")
                firstNo=Math.round(firstNo*1000)/1000;
                    displays.textContent=firstNo;
                    if(typeof(firstNo)!="number")
                        firstNo=null;
                }
                else{
                    displays.textContent="hello";
                }
        }
}