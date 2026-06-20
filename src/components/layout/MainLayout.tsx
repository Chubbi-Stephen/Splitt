import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-bg pb-20">
      <main className="w-full max-w-md mx-auto min-h-screen bg-brand-bg shadow-sm relative">
        <Outlet />
        <BottomNav />
      </main>
    </div>
  );
}
