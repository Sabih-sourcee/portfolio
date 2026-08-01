import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot'

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode'

export default function RobotHero() {
  return (
    <section className="robot-hero relative w-full h-screen min-h-[600px] overflow-hidden bg-[#050505]">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0"
        lightColor="#ffffff"
      />

      {/* Soft bottom fade into the next white section — charcoal, not purple */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-t from-black/80 to-transparent"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-start pt-24 md:pt-28 lg:pt-32 px-4 md:px-8">
        <div className="w-full max-w-3xl mx-auto text-center text-white">
          <p className="font-body text-[0.7rem] md:text-xs tracking-[0.35em] uppercase text-white/55 mb-4 md:mb-5">
            Karachi · AI Engineer &amp; Full-Stack Developer
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.08em] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
            Sabih Ur Rehman
          </h1>
          <p className="font-body mt-4 md:mt-5 text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Building interactive products with LLMs, automation, and precise frontend craft.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45">
        <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block h-8 w-px bg-white/35" aria-hidden="true" />
      </div>
    </section>
  )
}
