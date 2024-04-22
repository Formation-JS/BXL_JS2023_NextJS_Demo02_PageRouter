import countryData from '@/data/country.data.json';


export const getCountryAll = () => {
    return countryData;
};

export const getCountryCount = () => {
    return countryData.length;
};

export const getCountryById = (id) => {
    return countryData.find(p => p.id === id);
}