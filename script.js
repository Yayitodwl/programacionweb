const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});


const productos = document.querySelectorAll('.producto');

productos.forEach(producto => {
  producto.addEventListener('mouseover', () => {
    const descripcion = producto.querySelector('p');
    descripcion.style.display = 'block';
  });

  producto.addEventListener('mouseout', () => {
    const descripcion = producto.querySelector('p');
    descripcion.style.display = 'none';
  });
});
