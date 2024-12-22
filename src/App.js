const port = process.env.PORT || 3001; // Change 3001 if needed
App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import './App.css';

function App() {
  return (
    <main className='text-lg text-red-500 font-bold'>
      React App
    </main>
  );
}

export default App;
