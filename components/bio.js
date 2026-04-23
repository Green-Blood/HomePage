import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 0.5em;
  line-height: 1.6;
`

export const BioYear = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;
  font-size: 13px;
  margin-right: 1em;
  color: var(--chakra-colors-timelineAccent);
`

export const BioHeading = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export const Timeline = styled(Box)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 3px;
    top: 12px;
    bottom: 8px;
    width: 1px;
    background: color-mix(in srgb, var(--chakra-colors-timelineAccent) 32%, transparent);
  }
`

export const TimelineItem = styled(Box)`
  position: relative;
  padding-left: 1.6rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--chakra-colors-timelineAccent);
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    transform: translateX(3px);
  }

  &:hover::before {
    transform: scale(1.35);
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--chakra-colors-timelineAccent) 20%, transparent);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::before {
      transition: none;
    }

    &:hover {
      transform: none;
    }

    &:hover::before {
      transform: none;
      box-shadow: none;
    }
  }
`

export const TimelineYear = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: var(--chakra-colors-timelineAccent);
  display: block;
  margin-bottom: 1px;
`
