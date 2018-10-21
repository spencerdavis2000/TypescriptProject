import { SuperHero, Hero } from './superhero';

let employees: string[];

employees = ['Bob', 'Sally', 'Sam'];

let superhero: SuperHero[] = [];
superhero.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});

document.write('contents of array is ' + employees +'<br />');
document.write('superhero information is ' + superhero[0].realName + ' is really ' + superhero[0].superName + '<br />');
