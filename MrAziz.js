let name = ['Alex', 'John', 'Bob', 'amir', 'Azizbek', 'Tyler'];
let name2 = ['tavlat', 'arslan', 'steve', 32, true, 45]
let NewName 
name = name.concat(name2)
name = name.slice(0, -3)
NewName = name.filter((nam)=> nam.charAt(0).toUpperCase() === 'A')

console.log(NewName)