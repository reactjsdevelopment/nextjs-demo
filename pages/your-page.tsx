// // filepath: /pages/your-page.js
// export async function getServerSideProps(context) {
//     // Fetch data from an API or database
//     const res = await fetch('https://api.example.com/data');
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { data } };
// }

function YourPage({ data }) {
    return (
        <div>
            <h1>Dynamic Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default YourPage;

// // To use the YourPage component in your Next.js application, you need to ensure it is properly set up as a page in the pages directory.