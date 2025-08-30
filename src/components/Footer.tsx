import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Current Issue", href: "#current" },
        { name: "Archives", href: "#archives" },
        { name: "Editorial Board", href: "#editorial" },
        { name: "Submission Guidelines", href: "#guidelines" },
        { name: "Review Process", href: "#review" }
      ]
    },
    {
      title: "For Authors",
      links: [
        { name: "Author Guidelines", href: "#author-guidelines" },
        { name: "Submission System", href: "#submit" },
        { name: "Publication Ethics", href: "#ethics" },
        { name: "Copyright Policy", href: "#copyright" },
        { name: "Open Access Policy", href: "#open-access" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Indexing Services", href: "#indexing" },
        { name: "Impact Factor", href: "#impact" },
        { name: "Conference Proceedings", href: "#proceedings" },
        { name: "Special Issues", href: "#special" },
        { name: "Research Metrics", href: "#metrics" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#facebook", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#twitter", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#linkedin", name: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#github", name: "GitHub" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Research</h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive notifications about new issues, 
              special publications, and important announcements from IJDST.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <Button variant="secondary" size="lg" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <FileText className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-xl font-bold">IJDST</div>
                <div className="text-sm text-primary-foreground/80">International Journal for Development of Science & Technology</div>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              A peer-reviewed multidisciplinary journal committed to advancing research and 
              innovation across diverse scientific domains. Published with the highest standards 
              of academic integrity and global accessibility.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <div className="font-medium">Editorial Office</div>
                  <div className="text-primary-foreground/80 text-sm">editor@ijdst.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <div className="font-medium">Contact Number</div>
                  <div className="text-primary-foreground/80 text-sm">+91-XXX-XXX-XXXX</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <div className="font-medium">ISSN</div>
                  <div className="text-primary-foreground/80 text-sm">2456-8503</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-secondary">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} International Journal for Development of Science & Technology. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/20 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Legal Links */}
          <Separator className="my-6 bg-primary-foreground/20" />
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#privacy" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-secondary transition-colors">Accessibility</a>
            <a href="#sitemap" className="hover:text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;