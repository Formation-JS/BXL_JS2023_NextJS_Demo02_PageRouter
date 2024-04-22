import Layout from '@/containers/layout/layout.jsx';
import { getCountryAll } from '@/services/country.service.js'
import Link from 'next/link.js';

// url : /country
export default function CountryList({ countries }) {

    return (
        <Layout>
            <h1 className='text-xl'>Liste des produits</h1>
            <section>
                {countries.map(country => (
                    <article key={country.id}>
                        <Link href={'/country/' + country.id}>
                            {country.name}
                        </Link>
                    </article>
                ))}
            </section>
        </Layout>
    )
};


// Les méthodes "getStaticProps" (SSG) et "getServerSideProps" (SSR) permet d'injecté des données
// à la page lors de la génération de celle-ci
// Une seul des 2 méthodes doit être utilisé !

// Méthode "getStaticProps" executé uniquement lors de build de l'application (en prod)
export async function getStaticProps() {

    // Récuperation des données necessaire à la page
    const countries = getCountryAll();

    // Envoi des données vers la page via ses props
    return {
        props: {
            countries
        }
    }
}
