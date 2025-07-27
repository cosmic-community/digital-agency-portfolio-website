import Link from 'next/link'

export default function Footer() {
  const navigation = {
    services: [
      { name: 'Web Design & Development', href: '/services/web-design-development' },
      { name: 'Brand Identity Design', href: '/services/brand-identity-design' },
      { name: 'SEO & Digital Marketing', href: '/services/seo-digital-marketing' },
      { name: 'Social Media Management', href: '/services/social-media-management' },
    ],
    company: [
      { name: 'About Us', href: '/team' },
      { name: 'Our Team', href: '/team' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/#contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Agency</h3>
                <p className="text-gray-300 max-w-md">
                  We create exceptional digital experiences that help businesses grow and succeed online. 
                  From web design to digital marketing, we're your trusted partner in digital transformation.
                </p>
              </div>
              
              <div className="space-y-2 text-gray-300">
                <p>📧 hello@digitalagency.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Business Ave, Suite 100, City, State 12345</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Digital Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}