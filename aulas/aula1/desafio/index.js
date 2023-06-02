const usernames = ["S4nt1ag", "weilemann", "volneiNeves", "Artoda", "Arawns1", "RodolphoGLC", "JoaoMarcoPiccoliCardoso", "luizitosuares", "DriRSantos", "BrenoRaeder", "boubeejul"];
const apiBaseUrl = "https://api.github.com/users/";

const apiUrls = usernames.map(username => apiBaseUrl + username);

function getUsersData() {
    const header = document.createElement("h1");
    header.id = "headerTop";
    header.textContent = "Lista de Usuarios"
    const userList = document.createElement("div");
    userList.id = "userList";
    apiUrls.forEach(apiUrl => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                const nome = data.name;
                const fotoPerfil = data.avatar_url;

                const userContainer = document.createElement("div");
                userContainer.className = "user-container";

                const nomeElement = document.createElement("h1");
                const linkPerfil = document.createElement("a");
                linkPerfil.href = data.html_url;
                linkPerfil.textContent = nome;
                nomeElement.appendChild(linkPerfil);
                const fotoPerfilElement = document.createElement("img");
                fotoPerfilElement.src = fotoPerfil;
                fotoPerfilElement.className = "user-image";

                userContainer.appendChild(nomeElement);
                userContainer.appendChild(fotoPerfilElement);

                userList.appendChild(userContainer);

                userContainer.addEventListener("mouseenter", () => {
                    userContainer.classList.add("user-highlight");
                });

                userContainer.addEventListener("mouseleave", () => {
                    userContainer.classList.remove("user-highlight");
                });
            })
            .catch(error => {
                console.error("Erro ao obter os dados do usuário:", error);
            });
    });

    document.body.appendChild(header);
    document.body.appendChild(userList);
}

getUsersData();

const userList = document.getElementById("userList");
const header = userList.previousSibling;

document.body.insertBefore(header, userList);

const style = document.createElement("style");
style.textContent = `
body {
    background-color: #552583;
    color: #FDB927;
}

#headerTop {
    text-align: center;
    background-color: black;
}
.user-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-container h1 {
  margin-right: 10px;
}

a {
    text-decoration: none;
    color: #FDB927;
}

.user-image {
  max-width: 100px;
  max-height: 100px;
  margin-left: auto;
}

#userList {
  display: flex;
  flex-direction: column;
}
.user-highlight {
    background-color: #552583;
    transition: background-color 0.3s ease;
  }
  
  .user-highlight:hover {
    background-color: #552599;
    opacity: 0.8;
  }
`;

document.head.appendChild(style);
