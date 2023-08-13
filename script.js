
let button=document.querySelectorAll('.btn');
let str="";
button.forEach((btn)=>{

    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML=="="){
            str=eval(str);
            document.querySelector('input').value=str;
        }

        else if(e.target.innerHTML=="DE"){
            str=str.toString().slice(0,-1);
            document.querySelector('input').value=str;
        }

        else if(e.target.innerHTML=="AC"){
            str="";
            document.querySelector('input').value=str;
        }

        else{

        console.log(e.target)
        str += e.target.innerHTML;
        document.querySelector('input').value=str;
        }

    })

})