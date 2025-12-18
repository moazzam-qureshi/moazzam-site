import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'All Products', href: '/products' },
        { name: 'Clarilo AI', href: '/products/clarilo-ai' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Refund Policy', href: '/legal/refund' },
        { name: 'Cancellation Policy', href: '/legal/cancellation' },
      ],
    },
  ];

  return (
    <footer className="bg-warm-white border-t border-stone/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">M</span>
              </div>
              <div>
                <div className="font-display font-bold text-base text-charcoal">
                  Moazzam Qureshi
                </div>
                <div className="text-xs text-stone">AI Products</div>
              </div>
            </div>
            <p className="text-sm text-stone leading-relaxed mb-4">
              Purpose-built AI agents designed to help entrepreneurs focus, scale, and succeed.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-sm text-charcoal mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone hover:text-teal-600 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-stone text-center md:text-left">
              &copy; {currentYear} Moazzam Qureshi. All rights reserved.
            </div>
            <div className="text-sm">
              <span className="text-stone">Contact: </span>
              <a
                href="mailto:hello@moazzam.site"
                className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                hello@moazzam.site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
