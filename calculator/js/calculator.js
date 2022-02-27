let btn=document.querySelectorAll('#btn')
for(let x of btn)
{
    x.addEventListener('click',function(){
       let key =this.innerHTML
        if(key=='ac')
        {
            document.querySelector('.screen').innerHTML='';
        }else if(key=='c')
        {
         let b=document.querySelector('.screen').innerHTML.slice(0,-1)
         document.querySelector('.screen').innerHTML= b;
        }else if(key=='=')
        {
            let result = document.querySelector('.screen').innerHTML;
               result = eval(result);
               console.log(result)
            document.querySelector('.screen').innerHTML=result;
        }
        
        
        else{
            document.querySelector('.screen').innerHTML += key 
        }
    })
}