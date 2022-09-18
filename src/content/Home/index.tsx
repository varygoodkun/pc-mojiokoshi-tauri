import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { HomeForm } from './Form';

export const HomeContent: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />

      <HomeForm />

      <Footer />
    </div>
  );
};
