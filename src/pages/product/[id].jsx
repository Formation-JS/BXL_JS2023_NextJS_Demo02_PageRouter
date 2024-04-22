import Layout from '@/containers/layout/layout.jsx';
import { getProductAll, getProductById } from '@/services/product.service.js';

// url: /product/D4E5F6
export default function ProductDetail ({ product }) {

    return (
        <Layout>
            <h1 className='text-xl'>Détail d&apos;un produit</h1>
            <h2>{product.name}</h2>
            <p className='text-xs'>{product.desc}</p>
        </Layout>
    );
};

// Executer lors de build
export async function getStaticPaths() {

    // Récuperer les données possible
    const products = await getProductAll();

    // Ensemble des parametre de routes possibles pour cette page
    const paths = products.map(product => ({
        params: {
            id: product.id
        }
    }));

    return {
        paths: paths,
        fallback: 'blocking' /* Permet de générer les pages inconnues */
    };
}

export async  function getStaticProps({ params }) {

    const product = await getProductById(params.id);

    return {
        props : {
            product
        }
    };
}