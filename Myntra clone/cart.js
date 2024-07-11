  let newCycle = document.querySelector('.bag-items');
  CartItems();
  console.log(Array.isArray(NewContainer))
 function CartItems(){
  let innerHTML='';  
  if (newCycle===null){
    return;
   }
  if (NewContainer.length===0){
    newCycle.innerHTML='';
   }
   
  for( i =0;i<(NewContainer.length);i++){
   
 
  
  
   
    x= NewContainer[i];

    innerHTML+=`
    <div class="element">
    
    <div class="image-box"  >
    <img src="${itemsStorage[x].itemsimage}" class="image-box"alt="image1">
    </div>
    <div class="items-DES">
     ${itemsStorage[x].itemsDescription}
    </div>
     <div  onclick="DeleteData(${NewContainer.indexOf(x)})"><button class="delete">X</button></div>
    </div>
    `
    newCycle.innerHTML=innerHTML;
 
  }
 }
   

      function DeleteData(x){
        NewContainer.splice(x,1);

  
    localStorage.setItem("NewContainer",JSON.stringify(NewContainer));
   updater()
    console.log(NewContainer.length)
    CartItems()
      }
  



    
    



