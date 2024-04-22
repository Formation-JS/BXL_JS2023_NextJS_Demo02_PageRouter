import Layout from '@/containers/layout/layout.jsx';

export default function Home() {

  const handleTestProduct = () => {
    const productTest = {
      name: 'test',
      desc: `Ceci est un test : ${new Date().toISOString()}`,
      price: 49
    };

    fetch('/api/product/add', {
      body: JSON.stringify(productTest),
      method: 'POST'
    });
  }

  return (
    <Layout>
      <h1 className='text-xl'>Demo NextJS - Page Router</h1>
      <button className='bg-slate-200 p-1 rounded' onClick={handleTestProduct}>
        Add test product
      </button>
    </Layout>
  );
}
