
const crews=['山田','佐藤','鈴木','原田'];
const positions=['Grill','Assembler','Fryer','Counter'];
let sel=null;
const c=document.getElementById('crew'),p=document.getElementById('pos');
crews.forEach(n=>{let d=document.createElement('button');d.textContent=n;d.onclick=()=>{sel=n;document.querySelectorAll('#crew button').forEach(x=>x.classList.remove('active'));d.classList.add('active')};c.appendChild(d);});
positions.forEach(n=>{let d=document.createElement('div');d.className='item';d.textContent=n+': 空き';d.onclick=()=>{if(sel)d.textContent=n+': '+sel};p.appendChild(d);});
function resetAll(){document.querySelectorAll('.item').forEach((e,i)=>e.textContent=positions[i]+': 空き');}
