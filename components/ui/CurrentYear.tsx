'use client'

import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}
const getYear = () => String(new Date().getFullYear())
/** Null while server-rendering, so the static export and the first client
 *  render produce identical markup. A build-time year would go stale the
 *  moment the year turns over without a redeploy; this never does. */
const getServerYear = () => null

export default function CurrentYear() {
  return <>{useSyncExternalStore(noopSubscribe, getYear, getServerYear)}</>
}
