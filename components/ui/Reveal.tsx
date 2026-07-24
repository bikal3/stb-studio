'use client'

import { useCallback, useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** Stagger, in milliseconds, for items revealed as a group. */
  delay?: number
  as?: 'div' | 'li' | 'article'
  className?: string
}

/**
 * Fades content up as it scrolls into view. The hidden state lives in CSS
 * (`.reveal`) and is disabled under `prefers-reduced-motion` or when scripting
 * is off, so content is never permanently invisible. The visible flag is
 * written straight to the DOM rather than held in state — nothing else needs
 * to re-render when an element appears.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: Props) {
  const nodeRef = useRef<HTMLElement | null>(null)
  const setNode = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node
  }, [])

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const show = () => node.setAttribute('data-visible', 'true')

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={setNode}
      className={`reveal ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
