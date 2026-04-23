import { Box } from '@chakra-ui/react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GridItemStyle } from '../grid-item'

const Layout = ({ children, title }) => {
  const shouldReduceMotion = useReducedMotion()
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const isWorkDetailsPage = router.pathname.startsWith('/works/')
  const [timelineSize, setTimelineSize] = useState(0)
  const [activeDot, setActiveDot] = useState(0)
  const t = `${title} - Jey Odilkhujaev`

  useEffect(() => {
    if (!isWorkDetailsPage || typeof window === 'undefined') {
      setTimelineSize(0)
      setActiveDot(0)
      return undefined
    }

    const container = document.querySelector('.work-flow')
    if (!container) {
      setTimelineSize(0)
      setActiveDot(0)
      return undefined
    }

    const candidates = Array.from(container.children).filter((element) => {
      const tag = element.tagName
      return tag === 'P' || tag === 'UL' || tag === 'DIV'
    })
    if (!candidates.length) {
      setTimelineSize(0)
      setActiveDot(0)
      return undefined
    }

    const maxDots = 8
    const step = Math.max(1, Math.ceil(candidates.length / maxDots))
    const selected = candidates.filter((_, index) => index % step === 0).slice(0, maxDots)
    selected.forEach((element, index) => {
      element.setAttribute('data-work-dot', String(index))
    })
    setTimelineSize(selected.length)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length) {
          const idx = Number(visible[0].target.getAttribute('data-work-dot'))
          if (!Number.isNaN(idx)) {
            setActiveDot(idx)
          }
        }
      },
      { root: null, rootMargin: '-35% 0px -45% 0px', threshold: 0.2 }
    )

    selected.forEach((element) => observer.observe(element))
    return () => {
      selected.forEach((element) => element.removeAttribute('data-work-dot'))
      observer.disconnect()
    }
  }, [isWorkDetailsPage, router.asPath])
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, y: 30, scale: 0.985 },
        enter: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.99 },
      }

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
      }
      style={{ position: 'relative' }}
      data-work-page={isWorkDetailsPage ? 'true' : 'false'}
    >
      <>
        {isWorkDetailsPage && (
          <Box
            as={motion.div}
            position="fixed"
            top={0}
            left={0}
            right={0}
            height="3px"
            zIndex={1600}
            bg="linear-gradient(90deg, rgba(51,168,109,0.95) 0%, rgba(182,29,63,0.95) 100%)"
            transformOrigin="0% 50%"
            style={{ scaleX: scrollYProgress }}
          />
        )}
        {isWorkDetailsPage && <Box className="work-grain-overlay" />}
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
        {isWorkDetailsPage && timelineSize > 0 && (
          <Box
            position="fixed"
            top="50%"
            right={{ base: '10px', lg: '18px' }}
            transform="translateY(-50%)"
            zIndex={1200}
            display={{ base: 'none', md: 'flex' }}
            flexDirection="column"
            gap={2.5}
            p={2}
            borderRadius="full"
            bg="blackAlpha.300"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(4px)"
          >
            {Array.from({ length: timelineSize }).map((_, index) => (
              <Box
                key={`timeline-dot-${index}`}
                w={activeDot === index ? '10px' : '7px'}
                h={activeDot === index ? '10px' : '7px'}
                borderRadius="full"
                bg={activeDot === index ? 'rgba(182,29,63,0.95)' : 'whiteAlpha.500'}
                border="1px solid"
                borderColor={activeDot === index ? 'rgba(245,157,175,0.9)' : 'whiteAlpha.600'}
                transition="all 0.2s ease"
                boxShadow={activeDot === index ? '0 0 14px rgba(182,29,63,0.45)' : 'none'}
              />
            ))}
          </Box>
        )}

        <GridItemStyle />
        <style jsx global>{`
          @media (prefers-reduced-motion: no-preference) {
            .work-flow > * {
              opacity: 0;
              transform: translateY(14px);
              animation: workFlowReveal 0.48s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }

            .work-flow > *:nth-child(1) { animation-delay: 0.04s; }
            .work-flow > *:nth-child(2) { animation-delay: 0.09s; }
            .work-flow > *:nth-child(3) { animation-delay: 0.14s; }
            .work-flow > *:nth-child(4) { animation-delay: 0.19s; }
            .work-flow > *:nth-child(5) { animation-delay: 0.24s; }
            .work-flow > *:nth-child(6) { animation-delay: 0.29s; }
            .work-flow > *:nth-child(7) { animation-delay: 0.34s; }
            .work-flow > *:nth-child(8) { animation-delay: 0.39s; }
            .work-flow > *:nth-child(9) { animation-delay: 0.44s; }
            .work-flow > *:nth-child(10) { animation-delay: 0.49s; }
          }

          @keyframes workFlowReveal {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          [data-work-page='true'] .work-flow a[href] {
            color: rgba(224, 87, 126, 0.96);
            text-decoration: underline;
            text-decoration-color: rgba(224, 87, 126, 0.55);
            text-decoration-thickness: 1.5px;
            text-underline-offset: 3px;
            cursor: pointer !important;
            pointer-events: auto !important;
            position: relative;
            z-index: 3;
            display: inline-block;
            transition: color 0.2s ease, text-decoration-color 0.2s ease, text-shadow 0.2s ease;
          }

          [data-work-page='true'] .work-flow a[href]:hover {
            color: rgba(108, 229, 153, 0.98);
            text-decoration-color: rgba(108, 229, 153, 0.72);
            text-shadow: 0 0 10px rgba(108, 229, 153, 0.24);
            transform: translateY(-1px);
          }

          [data-work-page='true'] .work-flow a[href]:focus-visible {
            outline: 2px solid rgba(224, 87, 126, 0.9);
            outline-offset: 3px;
            border-radius: 4px;
          }

          .work-grain-overlay {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 2;
            opacity: 0.26;
            mix-blend-mode: overlay;
            background-image:
              radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.07) 0 1px, transparent 1.5px),
              radial-gradient(circle at 70% 65%, rgba(255, 255, 255, 0.05) 0 1px, transparent 1.5px),
              radial-gradient(circle at 40% 85%, rgba(255, 255, 255, 0.06) 0 1px, transparent 1.5px);
            background-size: 120px 120px, 160px 160px, 200px 200px;
            animation: workGrainShift 7s steps(10, end) infinite;
          }

          @keyframes workGrainShift {
            0% {
              transform: translate3d(0, 0, 0);
            }
            25% {
              transform: translate3d(-1.5%, 1.2%, 0);
            }
            50% {
              transform: translate3d(1.4%, -1.4%, 0);
            }
            75% {
              transform: translate3d(0.8%, 1%, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
        `}</style>
      </>
    </motion.article>
  )
}

export default Layout
