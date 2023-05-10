let res="&#98";
const h1=document.getElementsByTagName("p")[0];
function roll(){
     let dice=Math.floor(Math.random()*6)+1;
    let ans=res+(dice+55);
    h1.innerHTML=ans;
    setInterval(() => {
},3);

}