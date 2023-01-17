'use client';

import { useState, useEffect } from 'react';
import { IonNav } from '@ionic/react';
import ReportForm from '@/components/ReportForm';

export default function Home() {
  const [rootPage, setRootPage] = useState<Function>();

  useEffect(() => {
    setRootPage(() => RootPage);
  }, []);

  return <IonNav root={rootPage} />;
}

function RootPage() {
  return <ReportForm />;
}
