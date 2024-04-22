import fs from 'node:fs/promises';

// Utilisation d'un fichier JSON pour le stockage
//! Version PROTOTYPE ! 
//! Ceci NE DOIT PAS être fait en PROD 👿

export const getProductAll = async () => {
    const productData = await fs.readFile("src/data/product.data.json");
    const products = JSON.parse(productData);

    return products;
};

export const getProductCount = async() => {
    const productData = await fs.readFile("src/data/product.data.json");
    const products = JSON.parse(productData);

    return products.length;
};

export const getProductById = async (id) => {
    const productData = await fs.readFile("src/data/product.data.json");
    const products = JSON.parse(productData);

    return products.find(p => p.id === id);
}

export const addProduct = async ({name, desc, price}) => {
    const productAdded = {
        id: "TEST",
        name,
        desc,
        price
    };

    const productData = await fs.readFile("src/data/product.data.json");
    const products = JSON.parse(productData);

    products.push(productAdded);

    await fs.writeFile("src/data/product.data.json", JSON.stringify(products), {
        flag: 'w'
    });

    return productAdded;
}