//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    //type assertion
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const phoneElement = document.getElementById('phone')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const experianceElement = document.getElementById('experiance')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;
   if (nameElement&& emailElement&&phoneElement&&educationElement&&experianceElement&&skillsElement){
    const name = nameElement.value ;
    const email = emailElement.value ;
    const phone= phoneElement.value ;
    const education= educationElement.value ;
    const experiance= experianceElement.value ;
    const skills= skillsElement.value ;
   
    //create resume output
    const resumeOutput=`
    <h2>Resume</h2>
    <p><strong.Name:</strong><spam id ="edit-name"class="editable">${name}</spam></p>
  <p><strong.email:</strong><spam id ="edit-email"class="editable">${email}</spam></p>
    <p><strong.phone:</strong><spam id ="edit-phone"class="editable">${phone}</spam></p>
      <h3>Education</h3>
      <pid ="edit-education"class="editable">>${education}</p>
           <h3>Experiance</h3>
      <pid ="edit-experiance"class="editable">>${experiance}</p>
           <h3>skills</h3>
      <pid ="edit-skills"class="editable">>${skills}</p>`;
      const resumeOutputElement=document.getElementById("resumeOutput")
      if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput}
        
        
        makeEditable();
        
      }else{
        console.error("one or more output elements are missing")
      }


});
function makeEditable(){
  const editableElements =document.querySelectorAll(".editable");
  editableElements.forEach(element=>{
    element.addEventListener('click',function(){
      const currentElement =element as HTMLElement;
      const currentvalue=currentElement.textContent||"";
      //replace content
      if (currentElement.tagName==="p"||currentElement.tagName==="SPAN"){
        const input =document.createElement("input")
        input.type="text"
        input.value=currentvalue
        input.classList.add('editing.input')
        input.addEventListener('blur',function(){}
        )
        currentElement.style.display='none'
        currentElement.parentNode?.insertBefore(input,currentElement)
        input.focus()


      }
    })
  })
}