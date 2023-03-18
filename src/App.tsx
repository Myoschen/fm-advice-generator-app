import Attribution from '@/components/Attribution';
import AdviceCard from '@/components/AdviceCard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main className="font-manrope font-medium min-h-screen px-4 flex flex-col justify-center items-center gap-12 bg-dark-blue-500 text-light-cyan-500">
      <AdviceCard />
      <Attribution author="Myos" link="https://github.com/Myoschen" />
      <Toaster
        toastOptions={{ style: { background: '#333', color: '#fff' } }}
      />
    </main>
  );
}

export default App;
