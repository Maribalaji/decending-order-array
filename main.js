var arr=prompt("Enter a array length");
var a=[];
var b=[];
var temp;
for(let i=0;i<arr;i++){
	a[i]=prompt("Enter a "+(i+1)+"value");
}
document.write("a="+a+"<br>");
 
for(let i=0;i<arr;i++){
	for(let j=i+1;j<arr;j++){
		if(a[i]<a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
	}
}
b.push(a[i]);
}
document.write("Descending order:"+b);
