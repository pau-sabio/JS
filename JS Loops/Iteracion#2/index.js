const alumns = [
    { name: "Pepe Viruela", T1: false, T2: false, T3: true },
    { name: "Lucia Aranda", T1: true, T2: false, T3: true },
    { name: "Juan Miranda", T1: false, T2: true, T3: true },
    { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
    { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const approvedAlumns = alumns.map(function (alumn) {
    let approvedAlumn = alumn
    if((alumn.T1===true && alumn.T2===true) || (alumn.T1===true && alumn.T3===true) || (alumn.T2===true && alumn.T3===true)){
        approvedAlumn.isApproved = true;
        console.log(`Felicidades ${alumn.name} has aprobado el semestre`)
    }else {
        approvedAlumn.isApproved = false;
        console.log(`Lo sentimos ${alumn.name} has suspendido el semestre`)
    }
    return approvedAlumn;
});

console.log(approvedAlumns)