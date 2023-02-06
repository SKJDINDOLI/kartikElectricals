
let mp_submenu=()=>{
   // document.getElementById('mp_subMenu').setPointerCapture(pointerId);
   document.getElementById('subMenu').style.display="flex";
//    document.getElementById('mp_submenu').addEventListener("mousein", ()=> {
//     document.getElementById('subMenu').style.display="none";},true );
   document.getElementById('mp_submenu').addEventListener("pointerleave", (e)=> {
      document.getElementById('subMenu').style.display="none";
    },false );
  
}
let hamebergar=()=>{
   
      if( document.querySelector(".nav").style.display!="flex"){
         document.querySelector(".nav").style.display="flex";
      }else{
         document.querySelector(".nav").style.display="none";
      }
   
}
let contIcon=()=>{
   document.querySelector(".contDesc").style.display="flex";
//    document.querySelector(".contIcon").addEventListener("mousein", ()=>{document.querySelector(".contDesc").style.display="block"},true );
  document.querySelector(".contIcon").addEventListener("pointerleave", (e)=>{document.querySelector(".contDesc").style.display="none";
},false );
  
}
if(document.getElementById('customersReview')){
    prev=document.getElementById('prev');
    next=document.getElementById('next');
    let customerCard=1;
    
    for(let i=1;i<=4;i++){
        document.getElementById('p'+i).addEventListener('click', (e)=>{
            customerCard=e.target.id.substr(1, );
            
            for(let k=1;k<=4;k++){
                if(k==customerCard){
                    document.getElementById('customerCard'+customerCard).style.display="block";
                    document.getElementById('p'+k).classList.add("btnActive");
                    
                }else{
                    document.getElementById('customerCard'+k).style.display="none";
                    document.getElementById('p'+k).classList.remove("btnActive");
                }
            }
        
        });
    }
    prev.addEventListener('click',()=>{
        customerCard--;
        if(customerCard<=0){
            // prev.removeEventListener('click');
            customerCard=1;
        }
            for(let k=1;k<=4;k++){
                if(k==customerCard){
                    document.getElementById('customerCard'+customerCard).style.display="block";
                    document.getElementById('p'+k).classList.add("btnActive");
                }else{
                    document.getElementById('customerCard'+k).style.display="none";
                    document.getElementById('p'+k).classList.remove("btnActive");
                }
            }
    });
    next.addEventListener('click',()=>{
        customerCard++;
        if(customerCard>=5){
            customerCard=4;
        }
            for(let k=1;k<=4;k++){
                if(k==customerCard){
                    document.getElementById('customerCard'+customerCard).style.display="block";
                    document.getElementById('p'+k).classList.add("btnActive");
                    // document.getElementById('customerCard'+customerCard).style.transition="1s ease-in-out";
                    
                }else{
                    document.getElementById('customerCard'+k).style.display="none";
                    document.getElementById('p'+k).classList.remove("btnActive");
                }
            }
    });
}
        