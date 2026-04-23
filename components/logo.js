import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useColorModeValue } from '../lib/color-mode'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: center;
  }

  &:hover img {
    transform: rotate(14deg) scale(1.03);
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }

    &:hover img {
      transform: none;
    }
  }
`

const Logo = () => {
  const footPrintImg = `/images/watermelon-icon${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={footPrintImg} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Jey Odilkhujaev
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
