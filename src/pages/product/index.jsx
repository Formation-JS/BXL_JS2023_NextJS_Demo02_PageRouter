import Layout from '@/containers/layout/layout.jsx';
import { getProductAll } from '@/services/product.service.js'
import Link from 'next/link.js';

// url : /product
export default function ProductList({ products }) {

    return (
        <Layout>
            <h1 className='text-xl'>Liste des produits</h1>
            <section>
                {products.map(product => (
                    <article key={product.id}>
                        <Link href={'/product/' + product.id}>
                            {product.name} {product.price}
                        </Link>
                    </article>
                ))}
            </section>
        </Layout>
    )
};


// Méthode "getServerSideProps" executé a chaque requete
export async function getServerSideProps(context) {

    // La variable "context" permet d'acceder au info de la requete (context.req / context.res)

    // Récuperation des données necessaire à la page
    const products = await getProductAll();

    // Envoi des données vers la page via ses props
    return {
        props: {
            products
        }
    }
}