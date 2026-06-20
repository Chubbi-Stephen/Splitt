import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-brand-surface flex justify-center">
      <main className="w-full max-w-md w-full min-h-screen relative p-6 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
