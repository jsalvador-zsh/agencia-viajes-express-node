import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
} from '../controllers/paginaController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/about', paginaNosotros)
router.get('/testimonials', paginaTestimoniales)
router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)

export default router;