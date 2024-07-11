let x=0;
let  newStorage=[];


let newStorageStr=localStorage.getItem("newStorage");
 if (newStorageStr){
  newStorage=JSON.parse(newStorageStr) 
 }
 else{
  storageSetter();
 }
 function storageSetter(){

  for( let i=0;i<itemsStorage.length;i++){
    newStorage[i]={};
   
    newStorage.length=itemsStorage.length
    
   
  }
}
displayItems();


let NewContainer=[];
let NewContainerStr=localStorage.getItem("NewContainer");


if (NewContainerStr){
  NewContainer=JSON.parse(NewContainerStr);
 
}
else{
NewContainer=[];

}
function displayItems(){
  for(let i =0;i<10;i++){
    let itemsjs=document.querySelector('.items-main');
    if (itemsjs===null){
      return;
    }else{
      itemsjs.innerHTML+=`
      <div class="item-visible">
              <div  ><button onclick="dataSaver(${itemsStorage[i].id}),updater()"><img class="image" src="${itemsStorage[i].itemsimage}" alt="wait"></button></div>
              <h2 id="name-comp">${itemsStorage[i].itemsname}</h2>
              <p>${itemsStorage[i].itemsDescription}</p>
              <span id="actualprice">${itemsStorage[i].itemsNEWprice}</span>
              <span id="before-price">${itemsStorage[i].itemsORGprice}</span>
              <span id="discount">${itemsStorage[i].itemsDiscount}</span>
            </div>
      `
    }
    
  }
};


  function dataSaver(itemsID){
   
    console.log(itemsID)
    NewContainer.push(itemsID)
    localStorage.setItem("NewContainer",JSON.stringify(NewContainer));
    updater();
};

updater();
function updater(){
  
  let newElement=document.querySelector('.numbers');
  if (newElement===null){
    return;
  }
  if (NewContainer.length>0){
    newElement.innerHTML=NewContainer.length
    newElement.classList.add('updateNumbers');
  }
  else{
    newElement.classList.remove('updateNumbers');
  }
 
}







