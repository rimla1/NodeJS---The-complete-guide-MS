const person1 =  {
    name: 'Almir',
    age: '19',
    city: 'Novi Pazar'
}

const person2 =  {
    name: 'Amel',
    age: '27',
    city: 'Beograd'
}

const nameOfPerson = ({name}) => {
    // console.log(name)
}

const nameAndAgeOfPerson = ({name, age}) => {
    // console.log(name, age)
}

nameOfPerson(person2)

nameAndAgeOfPerson(person1)