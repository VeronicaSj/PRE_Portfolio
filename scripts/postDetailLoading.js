function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const slug = getSlug();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      document.getElementById('post-title').textContent = 'Artículo no encontrado';
      return;
    }

    document.title = post.title;
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = new Date(post.date).toLocaleDateString();
    document.getElementById('post-content').innerHTML = post.content;
  });