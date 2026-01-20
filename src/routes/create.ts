import Router from 'express';

const router = Router();

router.post('/create', (req, res) => {
    res.send('Create route');

    
})

export default router;
