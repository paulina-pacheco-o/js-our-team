const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainer = document.getElementById(`teamContainer`);

let cards = ``

for (let i = 0; i < teamMembers.length; i++) {

  const member = teamMembers[i];
  const { name, role, email, img } = member;

  cards += `<div class="col-4 mt-5 ml-3 mb-5">
          <div class="card bg-dark border-0">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${img}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-white">${name}</h5>
                  <p class="card-text text-white">${role}</p>
                  <p class="card-text"><small class="text-primary">${email}</small></p>
                </div>
              </div>
            </div>
          </div>`
}

