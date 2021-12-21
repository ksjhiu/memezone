window.onload=getmeme
const container = document.querySelector('.templates');
let limit=3;
let page=1;
var after=""
 function getmeme(){
       fetch(`https://www.reddit.com/r/memes.json`)
       .then(response=>response.json())
       .then(body =>{
   
  for(let index=0;index<body.data.children.length;index++){
  if(body.data.children[index].data.post_hint==='image'){
     
    document.querySelector("img").src=body.data.children[index].data.url_overridden_by_dest
    document.querySelector("h4").textContent=body.data.children[index].data.title
     
  }
}

}

   );
}
// const  getmeme =async()=> {
//     const response = await fetch(`https://www.reddit.com/r/memes.json?limit=${limit}&page=${page}`)
//     console.log(response);
//     const data= await response.json();
//     console.log(data);
//     data.map((curElm,index)=>{
//     const htmlData = `
//  <div id="memes">
//  <h4>${curElm.title} </h4>
//  <img src="${curElm.url_overridden_by_dest}">
//  </div>`;
    
//     container.insertAdjacentHTML('beforeend',htmlData);
// })
// };
    //if(document.getElementById('memes')){
      //  document.getElementById('memes').remove()
    //}
    // let parentdiv = document.createElement('div')
    // parentdiv.id='memes'
    // fetch( `https://www.reddit.com/r/memes.json?after=${after}`)
    // .then(response =>response.json())
   
    //  }
    //  container.appendChild(parentdiv)
    
    // }
    // );
//}


//  function showdata() {
//     setTimeout(() => {
//         getmeme();
//     }, 300);
// }
// window.addEventListener('scroll',()=>{
//     const {scrollHeight , scrollTop , clientHeight}=document.documentElement;
//     if(scrollTop + clientHeight >=scrollHeight){
//         console.log('i m at bottom');
//         showdata();
//     }
// })