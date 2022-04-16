import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('hola mundo');
});

router.get('/nosotros', (req, res) => {
  const viajes = 'viaje a alemania';

  res.render('nosotros', {
    viajes,
  });
});

export default router;
