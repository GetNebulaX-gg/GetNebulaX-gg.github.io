import { useEffect, useState } from 'react';
import { 
  Download, 
  Zap, 
  Code2, 
  Sparkles, 
  ChevronRight, 
  Star,
  Terminal,
  Layers,
  CheckCircle2,
  Github,
  MessageCircle,
  Menu,
  X,
  Rocket,
  Palette,
  Gauge,
  Box
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const capabilities = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Lightning Performance',
      description: 'Sub-50ms execution times with optimized bytecode compilation.',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Full Lua 5.1',
      description: 'Complete language support with all standard libraries.',
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Custom Themes',
      description: 'Personalize your workspace with unlimited color schemes.',
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: 'Script Manager',
      description: 'Organize and access your scripts with the built-in library.',
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      title: 'Real-time Debug',
      description: 'Live error tracking and performance monitoring.',
    },
    {
      icon: <Box className="w-5 h-5" />,
      title: 'Auto-Attach',
      description: 'Seamless connection handling with one-click attach.',
    },
  ];

  const highlights = [
    { value: '500K+', label: 'Active Users' },
    { value: '10M+', label: 'Scripts Run' },
    { value: '99.9%', label: 'Stability' },
    { value: 'v2.0', label: 'Latest' },
  ];

  const reviews = [
    {
      name: 'Kai',
      role: 'Developer',
      content: 'Cleanest interface I have ever used. The speed is actually insane.',
      rating: 5,
    },
    {
      name: 'Maya',
      role: 'Creator',
      content: 'Finally a tool that just works. No bloat, no crashes, pure reliability.',
      rating: 5,
    },
    {
      name: 'Jordan',
      role: 'Enthusiast',
      content: 'Switched from everything else. NebulaX is on another level.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-nebula-void text-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-nebula-void/80 backdrop-blur-2xl border-b border-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur-md opacity-60" />
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Nebula<span className="text-purple-400">X</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Capabilities', 'Showcase', 'Reviews', 'Get'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('get')}
                className="bg-white text-black hover:bg-gray-200 font-medium px-6"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-nebula-deep/95 backdrop-blur-xl border-b border-purple-500/10">
            <div className="px-6 py-6 space-y-4">
              {['Capabilities', 'Showcase', 'Reviews', 'Get'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-400 hover:text-white"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('get')}
                className="w-full bg-white text-black hover:bg-gray-200 mt-4"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[180px]" />
        </div>

        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">v2.0 Now Available</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
            <span className="text-white">Nebula</span>
            <span className="text-gradient glow-text">X</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light tracking-wide">
            The Next Generation Scripting Platform
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto mb-12">
            Built for creators who demand speed, precision, and elegance. 
            Experience scripting reimagined.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button 
              size="lg"
              onClick={() => scrollToSection('get')}
              className="bg-white text-black hover:bg-gray-200 font-semibold text-base px-8 py-6 rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('capabilities')}
              className="border-purple-500/30 text-white hover:bg-purple-500/10 text-base px-8 py-6 rounded-xl"
            >
              <Layers className="w-5 h-5 mr-2" />
              Explore
            </Button>
          </div>

          {/* Preview Window */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-2xl blur opacity-20" />
            <Card className="relative glass-card-strong rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-purple-500/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500">NebulaX Workspace</span>
                </div>
              </div>
              <div className="p-5 font-mono text-xs md:text-sm text-left space-y-1">
                <div className="text-gray-500">-- Welcome to NebulaX</div>
                <div><span className="text-purple-400">local</span> <span className="text-white">player</span> = <span className="text-green-400">game.Players.LocalPlayer</span></div>
                <div><span className="text-purple-400">print</span>(<span className="text-green-400">"NebulaX initialized"</span>)</div>
                <div className="text-gray-500">-- Ready to create</div>
                <div className="mt-3 text-purple-300">[NebulaX] Connected successfully</div>
                <div className="text-pink-300">[NebulaX] Workspace loaded in 0.018s</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((stat, i) => (
              <div 
                key={i}
                className="glass-card rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20 mb-4">
              Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You <span className="text-gradient">Need</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Powerful features designed for serious creators. No compromises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <Card 
                key={i}
                className="glass-card border-0 hover:bg-purple-500/5 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                    <div className="text-purple-400">{cap.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-gray-500 text-sm">{cap.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-pink-500/10 text-pink-300 border-pink-500/20 mb-4">
                Showcase
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for <span className="text-gradient">Speed</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Every millisecond counts. NebulaX is engineered from the ground up 
                for lightning-fast execution. Our optimized runtime delivers 
                consistent performance that keeps up with your creativity.
              </p>
              
              <div className="space-y-4">
                {[
                  'Sub-50ms average execution time',
                  'Zero memory leaks guaranteed',
                  'Intelligent script caching',
                  'Real-time performance metrics'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
              <Card className="relative glass-card-strong rounded-3xl overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Performance Monitor</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: 'Execution Time', value: '23ms', color: 'bg-purple-500', width: '15%' },
                      { label: 'Memory Usage', value: '42MB', color: 'bg-pink-500', width: '35%' },
                      { label: 'Cache Hit Rate', value: '98%', color: 'bg-violet-500', width: '98%' },
                    ].map((metric, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-500">{metric.label}</span>
                          <span className="text-gray-300">{metric.value}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${metric.color} rounded-full transition-all duration-1000`}
                            style={{ width: metric.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-purple-500/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gradient">1.2M</div>
                        <div className="text-xs text-gray-500">Scripts/day</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gradient">99.9%</div>
                        <div className="text-xs text-gray-500">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gradient">0</div>
                        <div className="text-xs text-gray-500">Crashes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20 mb-4">
              Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community <span className="text-gradient">Love</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <Card 
                key={i}
                className="glass-card border-0 hover:border-purple-500/20 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{review.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-semibold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="get" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Card className="glass-card-strong rounded-3xl overflow-hidden text-center">
            <CardContent className="p-10 md:p-14">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-8 shadow-glow">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to <span className="text-gradient">Launch</span>?
              </h2>
              <p className="text-gray-400 mb-10 max-w-md mx-auto">
                Join half a million creators. Free forever, no registration required.
              </p>

              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold text-lg px-12 py-7 rounded-xl mb-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Download NebulaX
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                {['Windows 10/11', 'Free Forever', 'No Sign-up'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-8 bg-purple-500/10" />

              <div className="text-xs text-gray-600">
                Current: <span className="text-purple-400">v2.0.1</span> • Released January 2026
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Nebula<span className="text-purple-400">X</span></span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-gray-600">
              2026 NebulaX
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
