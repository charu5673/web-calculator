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
let buttons=document.querySelector("#buttons");
let firstNo=null,secondNo=null,operand=null,dc=0,prev,shiftf=false;
let display=document.querySelector("#display");
document.addEventListener("keydown",function(e){kclicked(e)});
buttons.addEventListener("click",function(e){clicked(e)});
function clicked(e)
{
    let clName=e.target.c5lassName;
    let idName=e.target.id;
    let txt=e.target.textContent;
    if(clName=="number")
        {
            if(firstNo==null&&secondNo==null&&operand==null)
                {
                    firstNo=parseInt(txt);
                    display.textContent=firstNo;
                }
            else if(secondNo==null&&operand==null)
                {
                    if(dc==0)
                        {
                            firstNo=firstNo*10+parseInt(txt);
                            display.textContent=firstNo;
                        }
                    else
                    {
                        if(txt=="0")
                            display.textContent=display.textContent+"0";
                        firstNo=firstNo+parseInt(txt)/(10**dc);
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                        if(txt!="0")
                        display.textContent=firstNo;
                        dc++;
                    }
                }
            else if(secondNo==null)
                {
                    secondNo=parseInt(txt);
                    display.textContent=secondNo;
                }
            else
                {
                    if(dc==0)
                        {
                            secondNo=secondNo*10+parseInt(txt);
                            display.textContent=secondNo;
                        }
                    else
                    {
                        if(txt=="0")
                            display.textContent=display.textContent+"0";
                        secondNo=secondNo+parseInt(txt)/(10**dc);
                        secondNo=Math.round(secondNo*(10**dc))/(10**dc);
                        if(txt!="0")
                        display.textContent=secondNo;
                        dc++;
                    }
                }
        }
    else if(clName=="decimal")
        {
            if(dc==0)
                {
                    if(firstNo==null||(firstNo!=null&&operand!=null&&secondNo==null))
                        {
                            dc=1;
                            display.textContent="0.";
                        }
                    else if(secondNo==null&&operand==null)
                        {
                            dc=1;
                            display.textContent=firstNo+".";
                        }
                    else
                        {
                            dc=1;
                            display.textContent=secondNo+".";
                        }
                }
        }
    else if(clName=="operator")
        {
            if(!(firstNo==null&&secondNo==null&&operand==null))
                {
                    if(operand=="+")
                        firstNo=add(firstNo,secondNo);
                    else if(operand=="-")
                        firstNo=subtract(firstNo,secondNo);
                    else if(operand=="*")
                        firstNo=multiply(firstNo,secondNo);
                    else if(operand=="/")
                        firstNo=divide(firstNo,secondNo);
                    if(dc==0)
                        firstNo=Math.round(firstNo*1000)/1000;
                    else
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                    display.textContent=firstNo;
                    secondNo=null;
                }
            operand=txt;
            dc=0;
        }
    else if(idName=="equal")
        {
            if(!(firstNo==null&&secondNo==null&&operand==null))
                {
                    if(operand=="+")
                        firstNo=add(firstNo,secondNo);
                    else if(operand=="-")
                        firstNo=subtract(firstNo,secondNo);
                    else if(operand=="*")
                        firstNo=multiply(firstNo,secondNo);
                    else if(operand=="/")
                        firstNo=divide(firstNo,secondNo);
                    if(dc==0)
                        firstNo=Math.round(firstNo*1000)/1000;
                    else
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                    display.textContent=firstNo;
                    secondNo=null;
                    operand=null;
                    dc=0;
                }
        }
    else if(idName=="C")
        {
            dc=0;
            display.textContent="";
            secondNo=null;
            operand=null;
            firstNo=null;
        }
    prev=e;
}
function kclicked(e)
{
    let ktxt,kc;
    if(e.keyCode==16)
        {
            shiftf=true;
            return;
        }
    if(shiftf)
        {
            if(e.key=="=")
                {
                    ktxt="+";
                    kc=43;
                }
            else if(e.key=="8")
                {
                    ktxt="*";
                    kc=42;
                }
            shiftf=false;
        }
    else
    {
        ktxt=e.key;
        kc=e.keyCode;
    }
    if(clName=="number")
        {
            if(firstNo==null&&secondNo==null&&operand==null)
                {
                    firstNo=parseInt(txt);
                    display.textContent=firstNo;
                }
            else if(secondNo==null&&operand==null)
                {
                    if(dc==0)
                        {
                            firstNo=firstNo*10+parseInt(txt);
                            display.textContent=firstNo;
                        }
                    else
                    {
                        if(txt=="0")
                            display.textContent=display.textContent+"0";
                        firstNo=firstNo+parseInt(txt)/(10**dc);
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                        if(txt!="0")
                        display.textContent=firstNo;
                        dc++;
                    }
                }
            else if(secondNo==null)
                {
                    secondNo=parseInt(txt);
                    display.textContent=secondNo;
                }
            else
                {
                    if(dc==0)
                        {
                            secondNo=secondNo*10+parseInt(txt);
                            display.textContent=secondNo;
                        }
                    else
                    {
                        if(txt=="0")
                            display.textContent=display.textContent+"0";
                        secondNo=secondNo+parseInt(txt)/(10**dc);
                        secondNo=Math.round(secondNo*(10**dc))/(10**dc);
                        if(txt!="0")
                        display.textContent=secondNo;
                        dc++;
                    }
                }
        }
    else if(clName=="decimal")
        {
            if(dc==0)
                {
                    if(firstNo==null||(firstNo!=null&&operand!=null&&secondNo==null))
                        {
                            dc=1;
                            display.textContent="0.";
                        }
                    else if(secondNo==null&&operand==null)
                        {
                            dc=1;
                            display.textContent=firstNo+".";
                        }
                    else
                        {
                            dc=1;
                            display.textContent=secondNo+".";
                        }
                }
        }
    else if(clName=="operator")
        {
            if(!(firstNo==null&&secondNo==null&&operand==null))
                {
                    if(operand=="+")
                        firstNo=add(firstNo,secondNo);
                    else if(operand=="-")
                        firstNo=subtract(firstNo,secondNo);
                    else if(operand=="*")
                        firstNo=multiply(firstNo,secondNo);
                    else if(operand=="/")
                        firstNo=divide(firstNo,secondNo);
                    if(dc==0)
                        firstNo=Math.round(firstNo*1000)/1000;
                    else
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                    display.textContent=firstNo;
                    secondNo=null;
                }
            operand=txt;
            dc=0;
        }
    else if(idName=="equal")
        {
            if(!(firstNo==null&&secondNo==null&&operand==null))
                {
                    if(operand=="+")
                        firstNo=add(firstNo,secondNo);
                    else if(operand=="-")
                        firstNo=subtract(firstNo,secondNo);
                    else if(operand=="*")
                        firstNo=multiply(firstNo,secondNo);
                    else if(operand=="/")
                        firstNo=divide(firstNo,secondNo);
                    if(dc==0)
                        firstNo=Math.round(firstNo*1000)/1000;
                    else
                        firstNo=Math.round(firstNo*(10**dc))/(10**dc);
                    display.textContent=firstNo;
                    secondNo=null;
                    operand=null;
                    dc=0;
                }
        }
    else if(idName=="C")
        {
            dc=0;
            display.textContent="";
            secondNo=null;
            operand=null;
            firstNo=null;
        }
    prev=e;
}