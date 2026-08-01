import { Suspense, lazy } from 'react'
import type { Application, SPEObject } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface InteractiveRobotSplineProps {
  scene: string
  className?: string
  /** CSS color applied to Spline lights / purple glows on load (default white). */
  lightColor?: string
  onLoad?: (app: Application) => void
}

function parseRgb(color: string): { r: number; g: number; b: number } | null {
  if (!color || typeof color !== 'string') return null
  const hex = color.trim()
  if (hex.startsWith('#')) {
    const h = hex.slice(1)
    const full =
      h.length === 3
        ? h
            .split('')
            .map((c) => c + c)
            .join('')
        : h
    if (full.length !== 6) return null
    return {
      r: parseInt(full.slice(0, 2), 16),
      g: parseInt(full.slice(2, 4), 16),
      b: parseInt(full.slice(4, 6), 16),
    }
  }
  const m = hex.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i)
  if (!m) return null
  return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]) }
}

/** True for magenta / violet / purple casts (not neutral gray). */
function isPurpleCast(color: string): boolean {
  const rgb = parseRgb(color)
  if (!rgb) return false
  const { r, g, b } = rgb
  const max = Math.max(r, g, b)
  if (max < 25) return false
  // Purple/magenta: red+blue dominate green
  return b > g * 1.12 && r > g * 0.85 && b - g > 12
}

function isLightObject(obj: SPEObject) {
  const name = (obj.name || '').toLowerCase()
  if (
    name.includes('light') ||
    name.includes('spot') ||
    name.includes('lamp') ||
    name.includes('fill') ||
    name.includes('key') ||
    name.includes('rim') ||
    name.includes('ambient') ||
    name.includes('hemi') ||
    name.includes('glow') ||
    name.includes('bloom') ||
    name.includes('emissive')
  ) {
    return true
  }
  return !obj.material && typeof obj.intensity === 'number' && obj.intensity > 0
}

function whitenSceneLighting(app: Application, lightColor: string) {
  app.getAllObjects().forEach((obj) => {
    try {
      const shouldWhiten =
        isLightObject(obj) || (typeof obj.color === 'string' && isPurpleCast(obj.color))

      if (shouldWhiten) {
        obj.color = lightColor
      }

      // Some purple comes from mesh material color layers
      const layers = obj.material?.layers
      if (Array.isArray(layers)) {
        layers.forEach((layer: { type?: string; color?: string; colors?: string[] }) => {
          if (layer?.color && isPurpleCast(layer.color)) {
            layer.color = lightColor
          }
          if (Array.isArray(layer?.colors)) {
            layer.colors = layer.colors.map((c) => (isPurpleCast(c) ? lightColor : c))
          }
        })
      }
    } catch {
      // ignore non-colorable objects
    }
  })
}

export function InteractiveRobotSpline({
  scene,
  className,
  lightColor = '#ffffff',
  onLoad,
}: InteractiveRobotSplineProps) {
  const handleLoad = (app: Application) => {
    whitenSceneLighting(app, lightColor)
    requestAnimationFrame(() => whitenSceneLighting(app, lightColor))
    setTimeout(() => whitenSceneLighting(app, lightColor), 250)
    setTimeout(() => whitenSceneLighting(app, lightColor), 800)
    onLoad?.(app)
  }

  return (
    <Suspense
      fallback={
        <div
          className={`w-full h-full flex items-center justify-center bg-[#050505] text-white ${className ?? ''}`}
        >
          <svg
            className="animate-spin h-5 w-5 text-white mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="font-body text-sm tracking-[0.2em] uppercase text-white/70">
            Loading scene
          </span>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  )
}
