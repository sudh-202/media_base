import GoogleMapSection from '@/components/GoogleMapSection';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GoogleMapSection />
    </div>
  );
};

export default HomePage;