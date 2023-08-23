
let unit =107,amount;
if(unit<=100)
{
    amount=50+(unit*0.7)
}
else if(unit>105 && unit >=300)
{
    amount=110+((unit-100)*0.9)
}
else
{
    amount=40+70+180+((unit-400)*0.10)
    if(amount >=400)
    {
    amount=amount*2.15;
    }
}

console.log(amount);