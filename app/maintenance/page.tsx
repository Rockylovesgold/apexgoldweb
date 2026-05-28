import { AlertCircle } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-accent-gold/10 rounded-full">
            <AlertCircle className="w-12 h-12 text-accent-gold" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Under Maintenance
        </h1>

        <p className="text-text-secondary mb-8">
          Our Telegram community access is currently under maintenance. We appreciate your patience and will be back online shortly.
        </p>

        <div className="bg-bg-secondary border border-border-primary rounded-lg p-6 mb-8">
          <p className="text-text-secondary mb-4">
            In the meantime, you can:
          </p>
          <ul className="space-y-3 text-left text-text-secondary">
            <li className="flex items-start">
              <span className="text-accent-gold mr-3">•</span>
              <span>Check our website for the latest updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-gold mr-3">•</span>
              <span>Visit our results channel when it comes back online</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-gold mr-3">•</span>
              <span>Contact our support team for urgent inquiries</span>
            </li>
          </ul>
        </div>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-accent-gold hover:bg-accent-gold/90 text-black font-semibold rounded-lg transition-colors duration-200"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
