import { TComputedBounds } from './getBoundsForNode'

/**
 * Given offsets, widths, and heights of two objects, determine if they collide (overlap).
 */
const areBoundsCollide = (a: TComputedBounds, b: TComputedBounds) => {
  return !(
    a.top + a.height < b.top ||
    // 'a' top doesn't touch 'b' bottom
    a.top > b.top + b.height ||
    // 'a' right doesn't touch 'b' left
    a.left + a.width < b.left ||
    // 'a' left doesn't touch 'b' right
    a.left > b.left + b.width
  )
}

/**
 * Given two objects containing "top", "left", "width" and "height"
 * properties, determine if they collide.
 */
export function doObjectsCollide(a: TComputedBounds, b: TComputedBounds) {
  return areBoundsCollide(a, b)
}
