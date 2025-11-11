
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Leaf, Camera, History, Sparkles, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-sunrise py-20 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-forest rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-mint rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sage rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Animated Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            <Leaf className="relative h-20 w-20 text-white drop-shadow-lg animate-sway" />
          </div>

          {/* Hero Text */}
          <div className="space-y-4 animate-sprout">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
              Identify Any Plant
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">in Seconds</span>
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-white/90 drop-shadow">
              Take a photo of any plant and instantly discover what it is. Our AI-powered app recognizes thousands of plant species with incredible accuracy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-grow">
            <Link to="/identify">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow transition-all hover:scale-105">
                <Camera className="mr-2 h-5 w-5" />
                Start Identifying
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-8 text-white">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">10K+</div>
              <div className="text-sm md:text-base text-white/80">Plant Species</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-sm md:text-base text-white/80">Accuracy</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">50K+</div>
              <div className="text-sm md:text-base text-white/80">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to identify, learn about, and care for plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-leaf opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Instant Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upload a clear photo and get instant identification results powered by advanced AI technology.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-organic opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-mint/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-7 w-7 text-mint" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Detailed Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get comprehensive details including species name, care instructions, and growing tips.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-large transition-all hover:-translate-y-2 duration-300">
              <div className="absolute inset-0 bg-gradient-growth opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
              <div className="relative space-y-4">
                <div className="w-14 h-14 bg-sage/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <History className="h-7 w-7 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Track Your Garden</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Save all your plant discoveries and build your personal plant collection over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to identify any plant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-medium">
                1
              </div>
              <div className="bg-card rounded-2xl p-8 pt-10 shadow-soft border border-border space-y-4">
                <div className="w-16 h-16 bg-gradient-leaf rounded-xl flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Take a Photo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capture a clear image of the plant. Make sure leaves, flowers, or distinctive features are visible.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-mint text-mint-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-medium">
                2
              </div>
              <div className="bg-card rounded-2xl p-8 pt-10 shadow-soft border border-border space-y-4">
                <div className="w-16 h-16 bg-gradient-organic rounded-xl flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">AI Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our advanced AI compares your photo with thousands of plant species in our database.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-sage text-sage-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-medium">
                3
              </div>
              <div className="bg-card rounded-2xl p-8 pt-10 shadow-soft border border-border space-y-4">
                <div className="w-16 h-16 bg-gradient-growth rounded-xl flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Get Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive instant identification with detailed information and personalized care tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose PlantID?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground">High Accuracy</h3>
                <p className="text-sm text-muted-foreground">98% identification accuracy backed by extensive plant database</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-mint" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground">Privacy First</h3>
                <p className="text-sm text-muted-foreground">Your photos and data are secure and never shared</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 text-sage" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground">Always Learning</h3>
                <p className="text-sm text-muted-foreground">Our AI continuously improves with new plant data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Identify Your First Plant?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of plant enthusiasts discovering and learning about plants every day
          </p>
          <Link to="/identify">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow transition-all hover:scale-105 mt-4">
              <Camera className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;