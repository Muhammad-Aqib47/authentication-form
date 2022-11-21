function reg(){
    let a = document.getElementById("nme").value
    let b = document.getElementById("pass").value
    let c = document.getElementById("em").value
    
    let  data = `
    <h2> Username : ${a} </h2>
    <h2> Password : ${b} </h2>
    <h2> Email : ${c} </h2>
    `;
    
    
    document.getElementById("dta").innerHTML = data
}
