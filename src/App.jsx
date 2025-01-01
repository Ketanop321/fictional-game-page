import { HeroSection } from '@/components/hero-section';
import { CharacterPreview } from '@/components/characters/character-preview';
import { CharacterCustomizer } from '@/components/customization/character-customizer';
import { MechanicsPreview } from '@/components/gameplay/mechanics-preview';
import { InteractiveMap } from '@/components/world/interactive-map';
import { StoryPreview } from '@/components/story/story-preview';
import { PreRegistration } from '@/components/leaderboard/pre-registration';
import { ParticleTrail } from '@/components/ui/particle-trail';
import { ParallaxBackground } from '@/components/background/parallax-background';

function App() {
  return (
    <main className="bg-transparent min-h-screen relative">
      <ParallaxBackground />
      <ParticleTrail />
      <HeroSection />
      <CharacterPreview />
      <CharacterCustomizer />
      <MechanicsPreview />
      <InteractiveMap />
      <StoryPreview />
      <PreRegistration />
    </main>
  );
}

export default App;