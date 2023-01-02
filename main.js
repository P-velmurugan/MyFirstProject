const food = document.getElementById("textInput");
const listCount = document.getElementById("listCount");
const foodList = document.getElementsByClassName("foodList");
const foodListImg = document.querySelector("#img");
const main = document.getElementById("main");
const alertBox = document.getElementsByClassName("alertBox");
const bottomBox = document.getElementsByClassName("bottomBox");
const dubplicate = document.getElementsByClassName("dubplicate");
const resync = document.getElementById("resync");
const inputBtn = document.getElementById("inputBtn");

function createAlert() {
  const div = document.createElement("div");
  const textNode = document.createTextNode("Success");
  div.className = "alertBox";
  div.append(textNode);
  main.prepend(div);
}
// createAlert();

const handleInputFood = () => {
  if (food.value != '') {
    const foodItem = document.createElement("li");
    const div = document.createElement("div");
    const removeEle = document.createElement("div");
    const liText = document.createTextNode(food.value);
    foodItem.className = "foodItem";
    div.append(liText);
    removeEle.append("❌");
    foodItem.append(div, removeEle);
    removeEle.setAttribute("onclick", "removeEle(event)");
    foodItem.append(div, removeEle);
    foodList[0].append(foodItem);
    localStorage.setItem('fooditem',JSON.stringify([...JSON.parse(localStorage.getItem('fooditem') || '[]'),{'foodItem':food.value}]))
    food.value = ''
    refreshPage()
  }
}

inputBtn.addEventListener('click', handleInputFood)

food.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    handleInputFood()
  } else if (e.key == 'keyZ') {
    food = ''
  }
})
function removeEle(event) {
  let removeItem = event.target.parentNode;
  removeItem.remove();
  console.log(event.target.parentNode);
  refreshPage()
}

function refreshPage(){
  listCount.innerText = `You Have ${foodList[0].children.length} list.`
  // if(foodList[0].children.length > 0){
  //   console.log(foodList[0].children.length);
  //   listCount.innerText = `You Have ${foodList[0].children.length} list.`
  //   console.log(foodListImg);
  //   foodListImg.hidden = true)
  //   listCount.hidden = false
  // }else{
  //   listCount.hidden = true
  //   foodListImg.hidden = false
  // }

  foodList[0].children.length > 0 
  ? ((foodListImg.hidden = true),(listCount.hidden = false))
  : ((listCount.hidden = true) , (foodListImg.hidden = false))
}

document.addEventListener('DOMContentLoaded',()=>{
  var res = JSON.parse(localStorage.getItem('fooditem'))
  res.forEach((item)=> {
    console.log(item.foodItem);
      const foodItem = document.createElement("li");
      const div = document.createElement("div");
      const removeEle = document.createElement("div");
      const liText = document.createTextNode(item.foodItem);
      foodItem.className = "foodItem";
      div.append(liText);
      removeEle.append("❌");
      foodItem.append(div, removeEle);
      removeEle.setAttribute("onclick", "removeEle(event)");
      foodItem.append(div, removeEle);
      foodList[0].append(foodItem);
      food.value = ''
      refreshPage()
  })
})