import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie World</title>
        <meta name="description" content="All about cookies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Welcome to Cookie World!</h1>
        <p>
          Cookies are delicious baked goods that come in many varieties. From chocolate chip to oatmeal raisin, there's a cookie for everyone!
        </p>

        <h2>Popular Cookie Recipes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3>Chocolate Chip Cookies</h3>
            <p>Classic cookies with chocolate chips. Ingredients: flour, sugar, butter, eggs, vanilla, chocolate chips.</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3>Oatmeal Raisin Cookies</h3>
            <p>Chewy cookies with oats and raisins. Perfect with a glass of milk.</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#fff' }}>
            <h3>Peanut Butter Cookies</h3>
            <p>Creamy peanut butter goodness in every bite.</p>
          </div>
        </div>

        <h2>About Cookies</h2>
        <p>
          Cookies, also known as biscuits in some countries, are small, flat baked treats. They originated in Persia and were brought to Europe by traders.
        </p>
      </main>
    </div>
  )
}