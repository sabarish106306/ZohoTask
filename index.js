
const userDataElement = async() => {
  const response = await fetch("./asset/data/config.json").then(json=>(json.json()))
  const userElement = response.map((userData,index)=>(`<div class="peopleInfoWraper" id=${index}"  >
  <div class="peopleInfo"  >
      <div>
          <div class="nameTag">${userData.name}</div>
          <div class="subTitle">${userData.description}</div>
      </div>
      <div>
          <div>${userData.updatedTime}</div>
      </div>
  </div>
</div>
`))
  document.getElementById("userElementContainer").innerHTML = userElement;

}

window.onload(userDataElement())
