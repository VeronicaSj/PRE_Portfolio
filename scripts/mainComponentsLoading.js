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
        console.error(err);
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

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("about", "../components/mainPage/about.html");
    loadHTML("experience", "../components/mainPage/experience.html");
    loadHTML("skills", "../components/mainPage/skills.html");
    loadHTML("education", "../components/mainPage/education.html");
    loadHTML("contact", "../components/mainPage/contact.html");
});