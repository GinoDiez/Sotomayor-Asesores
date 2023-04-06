const headerNavMenu = document.getElementById('headerNavMenu');
const headerNavLinkItems = [...document.querySelectorAll('.header-nav__link-link')];

const headerScroll = () => {
    const header = document.getElementById('header');
    const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
    const headerNavLinks = [...document.querySelectorAll('.header-nav__link-item')];
    
    header.classList.toggle('header--scroll', window.scrollY > 0);
    headerNavMenuIcon.classList.toggle('header-nav__menu-icon--scroll', window.scrollY > 0);
    headerNavLinks.forEach((element) => {
        element.classList.toggle('header-nav__link--scroll', window.scrollY > 0);
    });
};

const toggleMenu = () => {
    const headerNavLinkList = document.getElementById('headerNavLinkList');
    headerNavLinkList.classList.toggle('header-nav__links-list--left-0');
};
    
window.addEventListener('scroll', headerScroll);
headerNavMenu.addEventListener('click', toggleMenu);
headerNavLinkItems.forEach((element) => {
    element.addEventListener('click', toggleMenu);
});

const boton = document.getElementById("boton");

boton.addEventListener('click', ()=>{
    Swal.fire({
        html:
        '<p>CARLOS ALLEN SOTOMAYOR TORRES</p>'+
        '<p>Abogado de la UNMSM; miembro del CAL. con más de 22 años de experiencia laboral. Especialista y experto en derecho administrativo, municipal, urbanístico e inmobiliario.</p>'+
        '<p>Experiencia Laboral:</p>'+
        '<p>Asesor Legal en la Gerencia de Asesoría Jurídica y Subgerencia de Habilitaciones Urbanas y Castro de la Gerencia de Desarrollo Urbano de la Municipalidad de San Martín de Porres (2000 a Setiembre 2014).</p>'+
        '<p>Conductor de su propio Estudio Jurídico (Desde Enero 2013 a 2020).</p>'+
        '<p>Abogado de la Secretaria Técnica de Apoyo a los Órganos Instructores del Procedimiento Administrativo Disciplinario y Sancionador de la Oficina General de Gestión de Recursos Humanos del Ministerio de Agricultura y Riego, de ese entonces (Octubre 2014 a 2015 y Febrero 2016).</p>'+
        '<p>Asesor Legal en la Subgerencia de Obras Privadas, Catastro y Control Urbano de la Gerencia de Desarrollo Urbano de la Municipalidad de La Victoria (Agosto 2020 a Abril 2021).</p>'+
        '<p>Titular Gerente de “Sotomayor Asesores : Abogados & Consultores EIRL” (2021).</p>'+
        '<p>Coordinador Legal de la Subgerencia de Licencias de Edificaciones Privadas de la Gerencia de Autorización y Control de la Municipalidad de Miraflores (Mayo 2021 a Junio 2022).</p>',
        imageHeight: 500,
        imageAlt: 'Reseña de Carlos'
      })
});