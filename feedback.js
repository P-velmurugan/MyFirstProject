// // // const formEl = document.forms.fullNameform;

// // // const { fullName, fullName, fullName, fullName, agree } = formEl.elements;

// // // const handleForm = (e) => {
// // //   e.preventDefault();
// // //   const res = new FormData(formEl);

// // //   // const finalRes = [...res.entries()];

// // //   // console.log(finalRes);

// // //   // const finalResult = finalRes.map( ([key,value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')

// // //   // console.log(finalResult);

// // //   const result = new URLSearchParams(res)

// // //   console.log(result.toString());

// // //   console.log(JSON.stringify(Object.fromEntries(res)));

// // // };

// // // formEl.addEventListener("submit", handleForm);

// // // const fullNameform = document.querySelector(".fullNameform button");

// // // console.log(fullNameform);

// // // const fetchData = (e) => {
// // //   e.preventDefault()
// // //   fetch('https://reqres.in/api/users?page=2',{
// // //     method:'GET',

// // //   }).then((value)=> value.json()).then((res) => console.log(res.data[0].first_name
// // //     ))
// // // };

// // // fullNameform.addEventListener("click", fetchData);

// // const fullNameform = document.querySelector(".feedbackform .hiddenField");
// // const formEl = document.forms.feedbackform;

// // const spanEl = document.querySelector('main span')
// // console.log(spanEl);

// // formEl.elements.fullName.addEventListener('focus',()=>{
// //   console.log('focused!');
// //   formEl.elements.fullName.style.backgroundColor = 'lightgray'
// //   formEl.elements.fullName.style.outline = 'none'
// //   formEl.elements.fullName.style.border = 'none'
// //   fullNameform.hidden = true
// // })
// // formEl.elements.fullName.addEventListener('blur',()=>{
// //   console.log('blur!');
// //   formEl.elements.fullName.style.backgroundColor = ''
// //   formEl.elements.fullName.style.outline = ''
// //   formEl.elements.fullName.style.border = ''
// // })
// // formEl.elements.fullName.addEventListener('input',(e)=>{
// //   console.log(`${e.target.value}`);
// //   formEl.elements.fullName.style.backgroundColor = ''
// //   formEl.elements.fullName.style.outline = ''
// //   formEl.elements.fullName.style.border = ''
// //   spanEl.innerText = `Hello ${e.target.value} `

// // })
// // // formEl.elements.fullName.addEventListener('change',(e)=>{
// // //   console.log(`change = ${e.target.value}`);
// // //   formEl.elements.fullName.style.backgroundColor = ''
// // //   formEl.elements.fullName.style.outline = ''
// // //   formEl.elements.fullName.style.border = ''

// // //   fullNameform.hidden = !fullNameform.hidden

// // // })

// // const handleForm = (e)=>{
// //   e.preventDefault()
// //   const formData = new FormData(formEl)
// //   console.log(formData);

// // }

// // formEl.addEventListener('submit',handleForm)

// const radioEl = document.forms.feedbackform;

// const raidoEle = document.querySelector(".raidoEl");

// const redioArr = [...radioEl.type];

// raidoEle.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   // if(e.target.value == 'Contributors'){
//   //   setTimeout(() => {
//   //     alert(`Yes thanks!`)
//   //   }, 1000);
//   // }
// });


// const agree = document.forms.feedbackform.agree

// console.log(agree);

// // agree.checked = true

// // agree.indeterminate = true

// // agree.select()

const country = document.forms.feedbackform.country

console.log(country.selectedIndex);

console.log(country.options[country.selectedIndex].value);

const may = document.createElement('option')
may.value = 'MAY'
may.text = 'Malaysia'

country.add(may,1)

const newEl = new Option('United Kingdocm','UK',true)

country.add(newEl)

console.log(may);

country.addEventListener('change',(e)=>{
  console.log(e.target.options[e.target.options.selectedIndex].value);
  console.log(e.target.options[e.target.options.selectedIndex].text);

  console.log(e.target.options);
})

 