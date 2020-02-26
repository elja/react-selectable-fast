export type TGetBoundsForNodeArgs = {
  scrollTop: number
  scrollLeft: number
}

export type TComputedBounds = {
  top: number
  left: number
  width: number
  height: number
}

export function getDocumentScroll() {
  const documentScrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  )

  const documentScrollLeft = Math.max(
    window.pageXOffset,
    document.documentElement.scrollLeft,
    document.body.scrollLeft
  )

  return { documentScrollTop, documentScrollLeft }
}

/**
 * Given a node, get everything needed to calculate its boundaries
 */
export function getBoundsForNode(
  node: HTMLElement,
  containerScroll: TGetBoundsForNodeArgs = { scrollTop: 0, scrollLeft: 0 }
) {
  const { scrollTop, scrollLeft } = containerScroll
  const { documentScrollTop, documentScrollLeft } = getDocumentScroll()

  const rect = node.getBoundingClientRect()

  return {
    top: rect.top + documentScrollTop + scrollTop,
    left: rect.left + documentScrollLeft + scrollLeft,
    width: node.offsetWidth,
    height: node.offsetHeight
  }
}
