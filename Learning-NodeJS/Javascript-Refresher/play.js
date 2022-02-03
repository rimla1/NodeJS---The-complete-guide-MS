const myName = 'Almir';
let age = 19;
const hasHobbies = true

age = 20

const bioOfUser = (nameOfUser, ageOfUser, hasHobbiesUser) => {
    return ('My name is: ' + nameOfUser + ', my age: ' + ageOfUser + ' and have hobby is: ' + hasHobbiesUser + '.')
}


 console.log(bioOfUser(myName, age, hasHobbies))