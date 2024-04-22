import { addProduct } from '@/services/product.service.js';

export default function handler(req, res) {

    if(req.method !== 'POST') {
        res.sendStatus(405);
        return;
    }
    
    const product = JSON.parse(req.body);
    addProduct(product);

    res.status(201).json(product);
}
  