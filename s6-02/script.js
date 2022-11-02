const listDepartment = [
    {
      departamentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departamentName: 'capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
]
  
//////////////////////////EXERCICIO 1//////////////////////////

function howManyDepartments(){
    return listDepartment.length;
}
//////////////////////////EXERCICIO 2//////////////////////////

function ChangeDepartmentName(currentDep, newDep){
    
    const find = (dep) => dep.departamentName == currentDep
    let index = listDepartment.findIndex(find)
    
    if(index !== -1){
        listDepartment[index].departamentName = newDep
        return listDepartment[index]
    }else {
        return `Departament not found`;
    }    

}
//////////////////////////EXERCICIO 3//////////////////////////

function giveTheDepartmentABreak(dept){
    let depart = listDepartment.find((dpt) => dpt.departamentName == dept);
    return depart == undefined ? `Departament not found`
        : depart.working == true ? depart.working = false
        : depart.working = true;
    

}

//////////////////////////EXERCICIO 4//////////////////////////

function insertNewDepartament(obj){
  let newDepart = listDepartment.push(obj);
  return listDepartment[listDepartment.length - 1];
}

//////////////////////////EXERCICIO 5//////////////////////////

function inserNewEmployeeInDepartament(depart, objPessoa){
  let found = listDepartment.find((dpt) => dpt.departamentName == depart);
  
  if(found == undefined){
    return 'Departament not found';
  } else {
    found.employees.push(objPessoa)
    return found;
  }
}

//////////////////////////EXERCICIO 6//////////////////////////

function howManyEmployeesInDepartament(depart){
  let found = listDepartment.find((dpt) => dpt.departamentName == depart);

  return found !== undefined ? found.employees.length : "Departament not found";
}

//////////////////////////EXERCICIO 7//////////////////////////

function departamentPayrollCalculation(depart){
  let found = listDepartment.find((dpt) => dpt.departamentName == depart);
  
  if(found !== undefined){
    let red = found.employees.reduce((a, b) => a + b.salary, 0);
    return red;

  } else {
    return "Departament not found"
  }
}

//////////////////////////EXERCICIO 8//////////////////////////

function isTheDepartamentYoungOrOld(depart){
  let found = listDepartment.find((dpt) => dpt.departamentName == depart);
  
  if(found !== undefined){
    let total = found.employees.reduce((a, b) => a + b.age, 0);
    let div = found.employees.length;
    let average = total/div;

    return `The average is ${average.toFixed(2)} departament young`;

  } else {
    return "Departament not found"
  }
}

//////////////////////////EXERCICIO 9//////////////////////////

function departamentAverageSalary(depart){

  let found = listDepartment.find((dpt) => dpt.departamentName == depart);
  
  if(found !== undefined){
    let total = found.employees.reduce((a, b) => a + b.salary, 0);
    let div = found.employees.length;
    let average = total/div;

    return `This departament average salary: R$ ${average.toFixed(2)}`;

  } else {
    return "Departament not found"
  }
}

//////////////////////////EXERCICIO 10//////////////////////////

function departamentSituation(depart, maxPayrol, MaxEmployees){
  let found = listDepartment.find((dpt) => dpt.departamentName == depart);
  if(found === undefined){
    
    return "Departament not found";
  } else {

    let sumPayrol = departamentPayrollCalculation(depart);
    let amountEmp = found.employees.length;
    if(maxPayrol >= sumPayrol && MaxEmployees >= amountEmp){
      return 'The department is healthy'
    }
    return "Departament not found"
  }

}