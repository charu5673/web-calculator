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
let firstNo=null,secondNo=null,operand=null,dc=0;
let display=document.querySelector("#display");
document.addEventListener("keydown",function(e){kclicked(e)});
buttons.addEventListener("click",function(e){bclicked(e)});
function clicked(clName,idName,txt)
{
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
    else if(idName=="back")
        {
            console.log("back");
            if(secondNo==null&&operand==null)
                {
                    firstNo=firstNo.toString();
                    if(dc==1)
                        {
                            dc=0;
                            display.textContent=firstNo;
                        }
                    else
                    {
                    if(firstNo.length==0||firstNo=="0"||firstNo=='0.')
                        firstNo=null;
                    else
                    {
                        if(dc!=0)
                            dc--;
                    firstNo=firstNo.substring(0,firstNo.length-1);
                    firstNo=firstNo*1;
                    }
                    display.textContent=firstNo;
                    if(dc==1)
                        display.textContent=display.textContent+".";
                }
                }
            else if(secondNo!=null&&operand!=null)
                {
                    secondNo=secondNo.toString();
                    if(dc==1)
                        {
                        dc=0;
                        display.textContent=secondNo;
                        }
                        else
                        {
                    if(secondNo.length==0||secondNo=="0"||secondNo=='0.')
                        secondNo=null;
                    else
                    {
                        if(dc!=0)
                            dc--;
                        secondNo=secondNo.substring(0,secondNo.length-1);
                        secondNo=secondNo*1;
                    }
                    display.textContent=secondNo;
                    if(dc==1)
                        display.textContent=display.textContent+".";
                }
                }
            else if(secondNo==null&&operand!=null)
                {
                    operand=null;
                }
        }
}
function kclicked(e)
{
    let clName;
    let idName;
    let txt;
    let kc=e.keyCode;
    let k=e.key;
    if(kc<=57&&kc>=48&&k!="*")
        {
            clName="number";
            idName=k;
            txt=k;
        }
    else if(kc==191||kc==56||kc==189||(kc==187&&k!="="))
        {
            clName="operator";
            idName=k;
            txt=k;
        }
    else if(kc==190)
        {
            clName="decimal";
            idName=".";
            txt=".";
        }
    else if(kc==67)
        {
            clName="";
            idName="C";
            txt="C";
        }
    else if(kc==187)
        {
            clName="";
            idName="equal";
            txt=k;
        }
    else if(kc==8)
        {
            clName="";
            idName="back";
            txt="Back";
        }
    clicked(clName,idName,txt);
}
function bclicked(e)
{
    let clName=e.target.className;
    let idName=e.target.id;
    let txt=e.target.textContent;
    clicked(clName,idName,txt);
}