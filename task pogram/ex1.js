let num = function number(a)
{
	a = a + '';
	return a.split('').reverse().join('');
}
console.log(Number(num(15438)));