var numbers=[];
numbers[0]="0";

function seven(){
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"7";
}
function eight(){
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"8";
}
function nine(){
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"9";
}
function four() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"4";
}
function five(){
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"5";
}
function six() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"6";
    }
function one() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"1";
    }
function two() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"2";
    }
function three() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"3";
    }
function zero() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+"0";
    }
function decimal() {
    document.getElementById("equa").innerHTML=document.getElementById("equa").innerHTML+".";
    }
function plus() {
        if (numbers[0]=="0"){
            numbers[0]=document.getElementById("equa").innerHTML;
            numbers[1]="a";
            document.getElementById("equa").innerHTML="";
        }
        else if(numbers[1]==null){
            numbers[1]="a";
        }
        else if(numbers[1]=="s"||"d"||"p"){
            numbers[1]="a";
        }
        else{
            var one=numbers[0];
            var two=document.getElementById("equa").innerHTML;
            var current;
            if(numbers[1]=="a"){
                current=parseFloat(one)+parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="a"
                numbers[0]=current;
            }
            else if(numbers[1]=="s"){
                current=parseFloat(one)-parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="a"
                numbers[0]=current;
            } 
           else if(numbers[1]=="d"){
                current=parseFloat(one)/parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="a"
                numbers[0]=current;
            } 
            else if(numbers[1]=="p"){
                current=parseFloat(one)*parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="a"
                numbers[0]=current;
            }

        }

    }
function minus() {
        if (numbers[0]=="0"){
            numbers[0]=document.getElementById("equa").innerHTML;
            numbers[1]="s";
            document.getElementById("equa").innerHTML="";
        }
        else if(numbers[1]==null){
            numbers[1]="s";
        }
        else if(numbers[1]=="d"||"a"||"p"){
            numbers[1]="s";
        }
        else{
            var one=numbers[0];
            var two=document.getElementById("equa").innerHTML;
            var current;
            if(numbers[1]=="a"){
                current=parseFloat(one)+parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="s"
                numbers[0]=current;
            }
            else if(numbers[1]=="s"){
                current=parseFloat(one)-parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="s"
                numbers[0]=current;
            } 
           else if(numbers[1]=="d"){
                current=parseFloat(one)/parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="s"
                numbers[0]=current;
            } 
            else if(numbers[1]=="p"){
                current=parseFloat(one)*parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="s"
                numbers[0]=current;
            }
    }
}
function divide() {
       if (numbers[0]=="0"){
            numbers[0]=document.getElementById("equa").innerHTML;
            numbers[1]="d";
            document.getElementById("equa").innerHTML="";
        }
        else if(numbers[1]==null){
            numbers[1]="d";
        }
        else if(numbers[1]=="s"||"a"||"p"){
            numbers[1]="d";
        }
        else{
            var one=numbers[0];
            var two=document.getElementById("equa").innerHTML;
            var current;
            if(numbers[1]=="a"){
                current=parseFloat(one)+parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="d"
                numbers[0]=current;
            }
            else if(numbers[1]=="s"){
                current=parseFloat(one)-parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="d"
                numbers[0]=current;
            } 
           else if(numbers[1]=="d"){
                current=parseFloat(one)/parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="d"
                numbers[0]=current;
            } 
            else if(numbers[1]=="p"){
                current=parseFloat(one)*parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="d"
                numbers[0]=current;
            }
    }
}
function mult() {
       if (numbers[0]=="0"){
            numbers[0]=document.getElementById("equa").innerHTML;
            numbers[1]="p";
            document.getElementById("equa").innerHTML="";
        }
        else if(numbers[1]==null){
            numbers[1]="p";
        }
        else if(numbers[1]=="s"||"a"||"d"){
            numbers[1]="p";
        }
        //else if(numbers[1]!=null){
        //    numbers[1]="p";
        //}
        else{
            var one=numbers[0];
            var two=document.getElementById("equa").innerHTML;
            var current;
            if(numbers[1]=="a"){
                current=parseFloat(one)+parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="p"
                numbers[0]=current;
            }
            else if(numbers[1]=="s"){
                current=parseFloat(one)-parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="p"
                numbers[0]=current;
            } 
           else if(numbers[1]=="d"){
                current=parseFloat(one)/parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="p"
                numbers[0]=current;
            } 
            else if(numbers[1]=="p"){
                current=parseFloat(one)*parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="p"
                numbers[0]=current;
            }
    }
}
function clears() {
        document.getElementById("equa").innerHTML="";
        document.getElementById("solution").innerHTML="Current: ";
        numbers[0]="0";
        numbers[1]=null;
}
function equals() {
       if (numbers[0]=="0"){
            numbers[1]=null;
        }
        else if(numbers[1]==null||document.getElementById("equa")=="0"){

        }

        else{
            var one=numbers[0];
            var two=document.getElementById("equa").innerHTML;
            var current;
            if(numbers[1]=="a"){
                current=parseFloat(one)+parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]=null
                numbers[0]=current;
            }
            else if(numbers[1]=="s"){
                current=parseFloat(one)-parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]=null
                numbers[0]=current;
            } 
           else if(numbers[1]=="d"){
                current=parseFloat(one)/parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]=null
                numbers[0]=current;
            } 
            else if(numbers[1]=="p"){
                current=parseFloat(one)*parseFloat(two);
                document.getElementById("solution").innerHTML="Current: "+current;
                document.getElementById("equa").innerHTML="";
                numbers[1]="";
                numbers[0]=current;
            }
    }
}

    