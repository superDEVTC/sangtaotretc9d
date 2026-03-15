let data=[]

function showHome(){

home.style.display="block"
report.style.display="none"
dashboard.style.display="none"

}

function showReport(){

home.style.display="none"
report.style.display="block"
dashboard.style.display="none"

}

function showDashboard(){

home.style.display="none"
report.style.display="none"
dashboard.style.display="block"

update()

}

function sendReport(){

let n=name.value
let c=class.value
let t=type.value
let l=location.value

data.push({n,c,t,l})

alert("Đã gửi báo cáo")

}

function update(){

total.innerText=data.length

let v=data.filter(x=>x.t=="Bạo lực học đường").length
let r=data.filter(x=>x.t=="Vi phạm nội quy").length

violence.innerText=v
rule.innerText=r

let html=""

data.forEach(x=>{

html+=`<tr>

<td>${x.n}</td>
<td>${x.c}</td>
<td>${x.t}</td>
<td>${x.l}</td>

</tr>`

})

list.innerHTML=html

new Chart(chart,{

type:"pie",

data:{
labels:["Bạo lực","Vi phạm"],
datasets:[{data:[v,r]}]
}

})

}