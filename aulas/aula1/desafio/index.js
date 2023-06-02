const usernames = ["S4nt1ag", "weilemann", "Artoda", "Arawns1", "RodolphoGLC", "JoaoMarcoPiccoliCardoso", "luizitosuares", "DriRSantos", "BrenoRaeder", "boubeejul", "bastosrodrigo", "AllanFerreiraGomes", "matheusborgesm", "tamirys2506", "filipe-oliv95", "V-Maxxin", "roberta2105", "PauloVitorLessa"];
const apiBaseUrl = "https://api.github.com/users/";
const apiUrls = usernames.map(username => apiBaseUrl + username);

function getUsersData() {
    const header = document.createElement("h1");
    header.id = "headerTop";
    header.textContent = "Lista de Usuários";
    const userList = document.createElement("div");
    userList.id = "userList";

    Promise.all(apiUrls.map(apiUrl => fetch(apiUrl)
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
            userContainer.addEventListener("mouseenter", () => {
                userContainer.classList.add("user-highlight");
            });
            userContainer.addEventListener("mouseleave", () => {
                userContainer.classList.remove("user-highlight");
            });
            userList.appendChild(userContainer);
        })
        .catch(error => {
            console.error("Erro ao obter os dados do usuário:", error);
        }))
    )
    .then(() => {
        const userContainers = Array.from(userList.children);
        userContainers.sort((a, b) => {
            const nomeA = a.querySelector("h1").textContent.toLowerCase();
            const nomeB = b.querySelector("h1").textContent.toLowerCase();
            return nomeA.localeCompare(nomeB);
        });

        userContainers.forEach(userContainer => {
            userList.appendChild(userContainer);
        });
    })
    .catch(error => {
        console.error("Erro ao buscar dados dos usuários:", error);
    });

    document.body.appendChild(header);
    document.body.appendChild(userList);
}

getUsersData();

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
    border-radius: 50%;
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
