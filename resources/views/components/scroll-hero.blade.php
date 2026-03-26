@props([
    'title' => 'Aventuras con',
    'highlightText' => 'Esencia',
    'subtitle' => 'Community-based journeys through Morocco — designed with the people who call it home.',
    'ctaPrimary' => ['label' => 'Plan My Trip', 'url' => '/contact'],
    'ctaSecondary' => ['label' => 'Explore Destinations', 'url' => '#destinations'],
    'mockupImage' => null,
    'logos' => [],
])

<section 
    x-data="scrollHero()" 
    class="relative min-h-screen overflow-hidden bg-zinc-950"
>
    <div class="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-zinc-950"></div>
    
    <div class="relative z-10 container-custom flex min-h-screen flex-col justify-center pt-24 pb-12">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div 
                id="hero-text"
                class="will-change-transform-opacity"
                :style="`transform: translateY(${textY}px) scale(${textScale}); opacity: ${textOpacity}`"
            >
                <h1 class="font-heading mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {!! $title !!} 
                    <span class="text-amber-400 not-italic">{{ $highlightText }}</span>
                </h1>
                <p class="mb-8 max-w-xl text-lg text-zinc-400 md:text-xl">{{ $subtitle }}</p>
                <div class="flex flex-wrap gap-4">
                    <a href="{{ $ctaPrimary['url'] }}" class="btn-primary">
                        {{ $ctaPrimary['label'] }}
                    </a>
                    <a 
                        href="{{ $ctaSecondary['url'] }}" 
                        class="btn-outline border-zinc-600 text-zinc-300 hover:border-amber-400 hover:text-amber-400"
                    >
                        {{ $ctaSecondary['label'] }}
                    </a>
                </div>
            </div>

            <div 
                id="hero-mockup"
                class="relative hidden lg:block"
                :style="`transform: perspective(1200px) rotateX(${mockupRotX}deg) translateY(${mockupY}px) scale(${mockupScale})`"
            >
                <div class="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl">
                    @if($mockupImage)
                        <img src="{{ $mockupImage }}" alt="Dashboard" class="w-full object-cover">
                    @else
                        <div class="aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                            <div class="text-center text-zinc-500">
                                <svg class="mx-auto mb-4 h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p class="text-sm">Add mockup image</p>
                            </div>
                        </div>
                    @endif
                    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
                </div>
            </div>
        </div>

        @if(count($logos) > 0)
            <div 
                id="hero-logos"
                class="mt-16 border-t border-zinc-800 pt-8"
                :style="`opacity: ${logoOpacity}; filter: blur(${logoBlur}px)`"
            >
                <p class="mb-4 text-center text-sm text-zinc-500">Trusted by travelers worldwide</p>
                <div class="flex flex-wrap items-center justify-center gap-8">
                    @foreach($logos as $index => $logo)
                        <img 
                            src="{{ $logo }}" 
                            alt="Partner {{ $index + 1 }}" 
                            class="h-8 w-auto grayscale opacity-70 transition-opacity hover:opacity-100"
                        >
                    @endforeach
                </div>
            </div>
        @endif
    </div>

    @push('scripts')
    <script>
        function scrollHero() {
            return {
                currentScroll: 0,
                targetScroll: 0,
                textY: 0,
                textScale: 1,
                textOpacity: 1,
                mockupY: 80,
                mockupRotX: 18,
                mockupScale: 0.92,
                logoOpacity: 0.5,
                logoBlur: 4,
                isDesktop: false,
                animationId: null,

                init() {
                    this.checkDesktop();
                    window.addEventListener('resize', () => this.checkDesktop());
                    
                    if (this.isDesktop && !this.prefersReducedMotion()) {
                        this.startAnimation();
                    }
                },

                checkDesktop() {
                    this.isDesktop = window.innerWidth >= 1024;
                },

                prefersReducedMotion() {
                    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                },

                lerp(start, end, factor) {
                    return start + (end - start) * factor;
                },

                startAnimation() {
                    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
                    this.animate();
                },

                handleScroll() {
                    this.targetScroll = window.scrollY;
                },

                animate() {
                    this.currentScroll = this.lerp(this.currentScroll, this.targetScroll, 0.08);
                    const progress = Math.min(this.currentScroll / 600, 1);

                    this.textY = progress * -80;
                    this.textScale = 1 - progress * 0.12;
                    this.textOpacity = 1 - progress * 0.6;

                    this.mockupY = 80 - progress * 80;
                    this.mockupRotX = 18 - progress * 18;
                    this.mockupScale = 0.92 + progress * 0.08;

                    this.logoOpacity = 0.5 + progress * 0.5;
                    this.logoBlur = 4 - progress * 4;

                    this.animationId = requestAnimationFrame(() => this.animate());
                },

                destroy() {
                    window.removeEventListener('scroll', this.handleScroll.bind(this));
                    if (this.animationId) {
                        cancelAnimationFrame(this.animationId);
                    }
                }
            };
        }
    </script>
    @endpush
</section>
