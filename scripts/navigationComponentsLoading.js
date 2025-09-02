async function loadHTML(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}
loadHTML("header", "../components/navigation/header.html");
loadHTML("footer", "../components/navigation/footer.html");