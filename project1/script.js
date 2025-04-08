 function  person (  firstName ,lastName ,age ,id ){

 this.firstName = firstName ;
 this.lastName = lastName;
 this.age = age;
 this.id  = id;
 }
  
  const Person1 = new person("Rahul" ,"Verma" ,21,5566)

  console.log(Person1.age);
  

  document.getElementById('demo').innerHTML=` function  person (  firstName ,lastName ,age ,id ){<br>

 this.firstName = firstName ; <br>
 this.lastName = lastName;<br>
 this.age = age;<br>
 this.id  = id;<br>
 }<br>
  
  const Person1 = new person("Rahul" ,"Verma" ,21,5566)<br>

   Result :<br>
   ${Person1.firstName}<br>
    ${Person1.lastName}<br>
    ${Person1.age}<br>
    ${Person1.id}<br>
   <br>`