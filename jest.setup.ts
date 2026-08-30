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

// jsdom parses <dialog> but implements none of its behaviour — showModal and
// close are undefined. Stand in for the three parts the modal components rely
// on: the open state, Escape, and the close event. jsdom already hides a
// closed dialog, so queryByRole('dialog') stays a valid open/closed check.
if (!HTMLDialogElement.prototype.showModal) {
  type Shimmed = HTMLDialogElement & { _onEscape?: (e: KeyboardEvent) => void }

  HTMLDialogElement.prototype.showModal = function (this: Shimmed) {
    this.open = true
    this._onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') this.close()
    }
    document.addEventListener('keydown', this._onEscape)
  }

  HTMLDialogElement.prototype.close = function (this: Shimmed) {
    if (this._onEscape) document.removeEventListener('keydown', this._onEscape)
    this.open = false
    this.dispatchEvent(new Event('close'))
  }
}
