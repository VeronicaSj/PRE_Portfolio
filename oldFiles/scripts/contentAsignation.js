async function loadHTML(id, file) {
    try {
        const res = await fetch(file);

        if (!res.ok) {
            throw new Error(`Error ${res.status}: No se pudo cargar ${file}`);
        }

        const html = await res.text();
        const container = document.getElementById(id);

        if (!container) {
            console.warn(`Elemento con id="${id}" no encontrado en el DOM.`);
            return;
        }

        container.innerHTML = html;
    } catch (err) {
        const fallback = document.getElementById(id);
        if (fallback) {
            fallback.innerHTML = `
                <div class="bg-red-100 text-red-700 p-4 rounded">
                    No se pudo cargar <strong>${file}</strong>.
                </div>
            `;
        }
    }
}

function cargarPagina(seccion) {

  switch (seccion) {
    case 'blog':
        loadBlog();
        break;

    case 'about': 
        loadMainPage();
        window.location.href = "../index.html#about";
        break;
    case 'experience':
        loadMainPage();
        window.location.href = "../index.html#experience";
        break;
    case 'skills':
        loadMainPage();
        window.location.href = "../index.html#skills";
        break;
    case 'education':
        loadMainPage();
        window.location.href = "../index.html#education";
        break;
    case 'contact':
        loadMainPage();
        window.location.href = "../index.html#contact";
        break;
  }
}

function loadMainPage() {
    loadHTML("content", "../components/mainPage/main.html");
    loadHTML("about", "../components/mainPage/about.html");
    loadHTML("experience", "../components/mainPage/experience.html");
    loadHTML("skills", "../components/mainPage/skills.html");
    loadHTML("education", "../components/mainPage/education.html");
    loadHTML("contact", "../components/mainPage/contact.html");
}

function loadBlog() {
    loadHTML("content", "../components/blog/blog.html");
    fetch('../components/blog/posts.json')
        .then(res => res.json())
        .then(posts => {
            const container = document.getElementById('posts-container');

            posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "border-b pb-4";

            article.innerHTML = `
                <h2 class="text-2xl font-semibold text-blue-700">
                <a href="post.html?slug=${post.slug}" class="hover:underline">${post.title}</a>
                </h2>
                <p class="text-sm text-gray-500">${new Date(post.date).toLocaleDateString()}</p>
                <p class="mt-2 text-gray-700">${post.summary}</p>
                <a href="post.html?slug=${post.slug}" class="text-blue-500 hover:underline mt-2 inline-block">Leer más →</a>
            `;

            container.appendChild(article);
            });
        });
}

loadHTML("content", "../components/mainPage/main.html");