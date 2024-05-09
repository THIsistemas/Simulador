import { Button } from '@nextui-org/react';
import React from 'react';

const Imprimir = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='pt-5'>
      <Button className="bg-primary text-white print:hidden " onClick={handlePrint}>Imprimir</Button>
    </div>
  );
};

export default Imprimir;