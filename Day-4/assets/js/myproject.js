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
  const container = document.querySelector(".container-project");
  container.innerHTML = "";

  for (const data of datas) {
    const nodejsIcon = data.pronodejs
      ? `<div class="icon"><i class="fa-brands fa-node-js fa-2x"></i></div>`
      : "";
    const reactjsIcon = data.proreactjs
      ? `<div class="icon"><i class="fa-brands fa-react fa-2x"></i></div>`
      : "";
    const nextjsIcon = data.pronextjs
      ? `<div class="icon"><i class="fa-brands fa-golang fa-2x"></i></div>`
      : "";
    const typescriptIcon = data.protypescript
      ? `<div class="icon"><i class="fa-brands fa-square-js fa-2x"></i></div>`
      : "";

    const html = `
      <div class="list-project">
        <img src="${data.proimage}" />
        <a href="projectDetail.html" class="title-content">
          <h3>${data.proname}</h3>
        </a>

        <div class="title-durasi">
          <p>Durasi : 3 Bulan</p>
        </div>

        <div class="desc-content">
          <p>
            ${data.prodesc}
          </p>
        </div>

        <div class="cont-icons">
          ${nodejsIcon}
          ${reactjsIcon}
          ${nextjsIcon}
          ${typescriptIcon}
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

    container.insertAdjacentHTML("beforeend", html);
  }
}
