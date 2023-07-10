    $(document).ready(function() {
        var swiper1 = new Swiper("#mySwiper-1", {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
        },
        });
    
        var swiper2 = new Swiper("#mySwiper-2", {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-2",
            prevEl: ".swiper-button-prev-2",
        },
        breakpoints: {
            0: {
            slidesPerView: 1,
            },
            520: {
            slidesPerView: 2,
            },
            950: {
            slidesPerView: 3,
            },
        },
        });
    
        const carrito = document.getElementById('carrito');
        const elementos1 = document.getElementById('lista-1');
        const elementos2 = document.getElementById('lista-2');
        const elementos3 = document.getElementById('lista-3');
        const lista = document.querySelector('#lista-carrito tbody');
        const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    
        cargarEventListeners();
    
        function cargarEventListeners() {
        elementos1.addEventListener('click', comprarElemento);
        elementos2.addEventListener('click', comprarElemento);
        elementos3.addEventListener('click', comprarElemento);
        carrito.addEventListener('click', eliminarElemento);
    
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
        }
    
        function comprarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const elemento = e.target.parentElement;
            leerDatosElemento(elemento);
        }
        }
    
        function leerDatosElemento(elemento) {
        const infoElemento = {
            imagen: elemento.querySelector('img').src,
            titulo: elemento.querySelector('h3').textContent,
            precio: elemento.querySelector('.precio').textContent,
            id: elemento.querySelector('.agregar-carrito').getAttribute('data-id')
        };
    
        insertarCarrito(infoElemento);
        }
    
        function insertarCarrito(elemento) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${elemento.imagen}" width="100">
            </td>
            <td>
                ${elemento.titulo}
            </td>
            <td>
                ${elemento.precio}
            </td>
            <td>
                <a href="#" class="borrar" data-id="${elemento.id}">X</a>
            </td>
        `;
    
        lista.appendChild(row);
        }
    
        function eliminarElemento(e) {
        e.preventDefault();
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.parentElement.remove();
        }
        }
    
        function vaciarCarrito() {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        return false;
        }
    });
    