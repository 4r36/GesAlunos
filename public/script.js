function getData(){
fetch('http://localhost:5100/bd')
.then(res => res.json())
.then(data => processData(data))
.catch(function(err){

alert('Ocurreu um problema')
})
}

function processData(data){
    const tblalunos = document.getElementById('alunos')
    tblalunos.innerHTML =''
    for(let i=0;i <100;i++){
    let nome= data[i].nomeUtilizador 
    let email=data[i].email
    let nascimento=data[i].dataNascimento
    let ID=data[i].idutilizadores
    tblalunos.innerHTML += `<tr>
                                <th>${nome}</th>
                                <td>${email}</td>
                                <td>${nascimento}</td>
                                <td>
                                <button type="button" class="btn btn-outline-light">ver mais</button>
                                <button onclick="showID(${ID});" type="button" class="btn btn-outline-light">editar</button>
                                <button type="button" class="btn btn-outline-danger">eleminar</button>
                                </td>
                                
                                
                                
                            </tr>`
}
}


function showID(ID){
    console.log(ID)


}
