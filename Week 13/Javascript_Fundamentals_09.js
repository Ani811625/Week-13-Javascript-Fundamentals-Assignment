const arr=[1,2,999,56,"Mithun",1234,"PW"];
let l=arr.length;
let i;
for( i=0;i<l;i++)
{
  if((typeof arr[i])=="string")
  {
    console.log("The first string element of the array is found:",arr[i]);
    break;
  }
}