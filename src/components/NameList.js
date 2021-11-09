import React from 'react'

function NameList() {
    const persons = [
        {
            id:1,
            name: 'krishna',
            age: 30,
            skill: 'react'
        },
        {
            id:1,
            name: 'ansari',
            age: 30,
            skill: 'flutter'
        },
        {
            id:1,
            name:'varma',
            age: 30,
            skill: 'java'
        },
        {
            id:1,
            name:'vamsi',
            age: 30,
            skill: 'spring'
        }
    ]
    const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)
    return (
        <div>{personList}</div>
    )

}

export default NameList

