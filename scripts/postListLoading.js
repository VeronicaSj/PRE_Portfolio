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