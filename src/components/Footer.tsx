import { Facebook, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/WhyFi Web Logo v4.png" 
                alt="WhyFi" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Creating reliable digital connections with cutting-edge technology and innovative connectivity solutions that drive real results for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-purple-400/50 transition-colors">
                <Facebook size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-purple-400/50 transition-colors">
                <Twitter size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-purple-400/50 transition-colors">
                <Instagram size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-purple-400/50 transition-colors">
                <Github size={18} className="text-white/70 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Home Internet',
                'Business Solutions', 
                'Bundled Services',
                'Technical Support',
                'Installation'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Innovation St, Tech City, TC 10101
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-purple-400 flex-shrink-0" />
                <a href="mailto:hello@whyfi.co.za" className="text-white/70 hover:text-white transition-colors text-sm">
                  hello@whyfi.co.za
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-purple-400 flex-shrink-0" />
                <a href="tel:+27123456789" className="text-white/70 hover:text-white transition-colors text-sm">
                  +27 (12) 345-6789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-2xl">
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-white/70 text-sm mb-6">
              Stay updated with our latest news, updates, and exclusive offers.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 bg-transparent focus:border-purple-400 focus:outline-none transition"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 WhyFi. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}