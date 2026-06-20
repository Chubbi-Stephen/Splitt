import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { Card } from './components/ui/Card';
import { Avatar } from './components/ui/Avatar';
import { Badge } from './components/ui/Badge';
import { Lock, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg p-8 flex justify-center">
      <div className="max-w-2xl w-full flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-navy mb-2">Reusable Components</h1>
          <p className="text-brand-text-muted">A showcase of the base UI elements built for Splitt.</p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold border-b pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Coral</Button>
            <Button variant="navy">Navy Dark</Button>
            <Button variant="secondary">Secondary Coral</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold border-b pb-2">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Standard Input" placeholder="e.g. John Doe" />
            <Input label="With Icon" placeholder="Email address" icon={<Mail size={18} />} />
            <Input label="Password" type="password" placeholder="••••••••" icon={<Lock size={18} />} />
            <Input label="Error State" error="This field is required" placeholder="Invalid input" />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold border-b pb-2">Avatars & Badges</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end gap-6">
              <Avatar initials="JD" size="sm" bgColor="bg-brand-navy" />
              <Avatar initials="JD" size="md" bgColor="bg-icon-blue" />
              <Avatar initials="JD" size="lg" bgColor="bg-brand-coral" />
              <Avatar initials="JD" size="xl" bgColor="bg-icon-purple" />
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="success">Success</Badge>
              <Badge variant="danger">Danger / Owe</Badge>
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="purple">Purple Accent</Badge>
              <Badge variant="blue">Blue Accent</Badge>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold border-b pb-2">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-semibold mb-2">Standard Card</h3>
              <p className="text-sm text-brand-text-muted">This is a flexible container with the standard app styling.</p>
            </Card>
            <Card className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Interactive Element</h3>
                <p className="text-xs text-brand-text-muted">Row layout card</p>
              </div>
              <Button size="sm">Action</Button>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
