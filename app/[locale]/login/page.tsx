export default function Home () {
  return (
    <main className='min-h-screen bg-[#F5F5F5]'>
      <nav className='p-4 bg-white shadow-sm flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-[#8D6E63]'>Bubble Owl</h1>
        <button className='px-4 py-2 bg-[#D7CCC8] rounded-lg'>Log In</button>
      </nav>
      <div className='flex flex-col items-center justify-center mt-20'>
        <h2 className='text-4xl font-extrabold text-[#5D4037]'>
          Welcome to Bubble Owl
        </h2>
        <p className='mt-4 text-gray-600'>Вафли, Моти и лучший Bubble Tea</p>
      </div>
    </main>
  );
}
