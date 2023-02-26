let datas = [];
function getData(event) {
  event.preventDefault();

  let proname = document.getElementById("input-project").value;
  let prostdate = document.getElementById("input-stdate").value;
  let proendate = document.getElementById("input-endate").value;
  let prodesc = document.getElementById("input-description").value;

  let pronodejs = document.querySelector("#node-js").checked;
  let proreactjs = document.querySelector("#react-js").checked;
  let pronextjs = document.querySelector("#next-js").checked;
  let protypescript = document.querySelector("#type-script").checked;

  let rawimage = document.getElementById("input-upload").files;

  proimage = URL.createObjectURL(rawimage[0]);

  let data = {
    proname,
    prostdate,
    proendate,
    prodesc,
    pronodejs: pronodejs == true ? true : false,
    proreactjs: proreactjs == true ? true : false,
    pronextjs: pronextjs == true ? true : false,
    protypescript: protypescript == true ? true : false,
    proimage,
    author: "Afif Mardani P",
  };

  datas.push(data);
  showData();
}

function showData() {
  document.querySelector(".container-project").innerHTML = "";

  // Looping use (for Loop) for show Card Project
  for (let i = 0; i < datas.length; i++) {
    document.querySelector(".container-project").innerHTML += `
  <div class="list-project" >
    <img src="${datas[i].proimage}" />
    <a href="projectDetail.html" class="title-content">
      <h3>${datas[i].proname}</h3>
    </a>

    <div class="title-durasi">
      <p>Durasi : 3 Bulan</p>
    </div>

    <div class="desc-content">
      <p>
      ${datas[i].prodesc}
      </p>
    </div>

    <div class="cont-icons">
    ${
      datas[i].pronodejs
        ? `<div class="icon">
    <i class="fa-brands fa-node-js fa-2x"></i>
  </div>`
        : ""
    }
  ${
    datas[i].proreactjs
      ? `<div class="icon">
    <i class="fa-brands fa-react fa-2x"></i>
  </div>`
      : ""
  }
  ${
    datas[i].pronextjs
      ? `<div class="icon">
    <i class="fa-brands fa-golang fa-2x"></i>
  </div>`
      : ""
  }
  ${
    datas[i].protypescript
      ? `<div class="icon">
    <i class="fa-brands fa-square-js fa-2x"></i>
  </div>`
      : ""
  }
    </div>

    <div class="cont-btn">
      <div class="btn-edit">
        <button type="button">Edit</button>
      </div>

      <div class="btn-delete">
        <button type="button">Delete</button>
      </div>
    </div>
  </div>
      `;
  }
}
