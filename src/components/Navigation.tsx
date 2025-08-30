import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText, Users, Archive, Mail, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { 
      label: 'Editorial Board', 
      href: '#editorial',
      icon: <Users className="w-4 h-4" />
    },
    { 
      label: 'Current Issues', 
      href: '#current',
      icon: <FileText className="w-4 h-4" />
    },
    { 
      label: 'Archives', 
      href: '#archives',
      icon: <Archive className="w-4 h-4" />
    },
    { 
      label: 'For Authors', 
      href: '#authors',
      hasDropdown: true
    },
    { 
      label: 'Contact', 
      href: '#contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <>
      {/* News Banner */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4 text-center text-sm font-medium">
        📄 Call For Paper Volume IJDST Invites Paper From Various Scientific Research Fields
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className="text-lg font-bold text-primary">IJDST</div>
                  <div className="text-xs text-muted-foreground">International Journal for Development of Science & Technology</div>
                </div>
              </div>
              <div className="hidden lg:block text-sm text-muted-foreground">
                ISSN: 2456-8503
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 group"
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                      {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm" className="text-sm">
                Online Submission
              </Button>
              <Button variant="secondary" size="sm" className="text-sm">
                Join as Board Member
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Online Submission
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Join as Board Member
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;