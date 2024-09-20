import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/about', (req, res) => {
    const travels = 'Viaje a Alemania'
    res.render('about', {
        travels
    })
})

export default router;