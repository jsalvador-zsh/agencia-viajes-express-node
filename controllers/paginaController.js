import { Viaje } from "../models/Viaje.js"

const paginaInicio = (req, res) => {

    res.render('index', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => {

    res.render('about', {
        pagina: 'Nosotros'
    })
}
const paginaTestimoniales = (req, res) => {

    res.render('testimonials', {
        pagina: 'Testimoniales'
    })
}
const paginaViajes = async (req, res) => {
    //Consultar db
    const viajes = await Viaje.findAll();
    console.log(viajes);
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes: viajes
    })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({ where: { slug: slug }});
        res.render('viaje', {
            pagina: 'Información viaje',
            resultado
        })
    } catch(error) {
        console.log(error)
    }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}