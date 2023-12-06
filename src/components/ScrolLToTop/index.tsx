import { ArrowFatUp } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ScrollToTopButton } from './styled'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <ScrollToTopButton
      onClick={scrollToTop}
      className={isVisible ? 'buttonVisible' : 'buttonIsNotVisible'}
    >
      <ArrowFatUp size={24} weight="fill" />
    </ScrollToTopButton>
  )
}
