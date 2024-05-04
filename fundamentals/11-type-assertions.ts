const input = document.getElementById("input-field") as HTMLInputElement;


const inputSyntax = <HTMLInputElement> document.getElementById("input-field");


// rare case when you know the input is a string you need trick node
const inputSyntax2 = (document.getElementById("input-field") as any) as string;
