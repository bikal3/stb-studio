import '@testing-library/jest-dom'
import React from 'react'

// next/image relies on a custom loader configured in next.config.ts, which
// next/jest does not wire up in the test environment. Mock it as a plain <img>
// so component tests can render, stripping the next/image-only props.
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    fill,
    priority,
    sizes,
    quality,
    placeholder,
    blurDataURL,
    loader,
    ...props
  }: Record<string, unknown>) => React.createElement('img', props),
}))
