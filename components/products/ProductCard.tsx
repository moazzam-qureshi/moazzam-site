import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  status: 'coming-soon' | 'early-access' | 'available';
  launchDate?: string;
  image?: string;
  href: string;
  features?: string[];
}

export function ProductCard({
  name,
  tagline,
  description,
  status,
  launchDate,
  href,
  features = [],
}: ProductCardProps) {
  const statusConfig = {
    'coming-soon': {
      badge: 'bg-amber-100 text-amber-800',
      text: `Coming ${launchDate || 'Soon'}`,
    },
    'early-access': {
      badge: 'bg-teal-100 text-teal-800',
      text: 'Early Access',
    },
    available: {
      badge: 'bg-green-100 text-green-800',
      text: 'Available Now',
    },
  };

  const config = statusConfig[status];

  return (
    <Link href={href}>
      <Card hover className="h-full">
        {/* Status Badge */}
        <div className="bg-gradient-to-br from-teal-50 to-amber-50 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className={`${config.badge} px-3 py-1.5 rounded-full text-xs font-semibold`}>
              {config.text}
            </div>
          </div>
          <h3 className="font-display font-bold text-2xl text-charcoal mb-2">
            {name}
          </h3>
          <p className="text-sm text-stone font-medium mb-4">{tagline}</p>
        </div>

        <div className="p-6">
          <p className="text-base text-charcoal leading-relaxed mb-4">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-stone">
                  <svg
                    className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <Button variant="outline" className="w-full">
            Learn More →
          </Button>
        </div>
      </Card>
    </Link>
  );
}
