'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { authClient } from '@/lib/auth-client'

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        autocapture: true,
        session_recording: {
          maskAllInputs: true,
          // maskTextSelector: "*",
        },
        capture_pageview: true,
        capture_pageleave: true
      })
    }
  }, [])

  useEffect(() => {
    if (session?.user?.id) {
      posthog.identify(session.user.id, {
        is_email_verified: session.user.emailVerified,
        created_at: session.user.createdAt
      })
    } else {
      posthog.reset()
    }
  }, [session?.user?.id, session?.user?.emailVerified, session?.user?.createdAt])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}