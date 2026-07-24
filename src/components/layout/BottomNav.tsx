import { Home, CreditCard, PlusCircle, Bell, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: CreditCard, label: 'Settle', path: '/settle' },
    { icon: PlusCircle, label: 'Add', path: '/add' },
    { icon: Bell, label: 'Alerts', path: '/alerts' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={cn(
              "flex flex-col items-center gap-1",
              isActive ? "text-brand-coral" : "text-brand-text-muted hover:text-brand-text-main"
            )}
          >
            <item.icon size={24} className={isActive ? "text-brand-coral" : ""} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
