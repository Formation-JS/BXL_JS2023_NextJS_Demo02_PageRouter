import Layout from '@/containers/layout/layout.jsx';
import { getCountryAll, getCountryById } from '@/services/country.service.js';

// url: /country/2
export default function CountryDetail ({ country }) {

    return (
        <Layout>
            <h1 className='text-xl'>Détail d&apos;un produit</h1>
            <h2>{country.name} - {country.capital}</h2>
        </Layout>
    );
};

export function getStaticPaths() {

    // Récuperer les données possible
    const countries = getCountryAll();

    // Ensemble des parametre de routes possibles pour cette page
    const paths = countries.map(country => ({
        params: {
            id: country.id
        }
    }));

    return {
        paths: paths,
        fallback: false
    };
}

export function getStaticProps({ params }) {

    const country = getCountryById(params.id);

    return {
        props : {
            country
        }
    };
}