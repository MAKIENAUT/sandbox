import '../styles/styles.css';

async function getDogs() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  
  const data = await response.json();

  return data;
}

export default async function Home() {
  const dogs = await getDogs();

  console.log(dogs)
  return (
    <main className="">
      <h1>Home Page</h1>
      <h1>{dogs.message}</h1>
    </main>
  )
}