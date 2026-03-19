export function initScrollReveal(): void {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 进入视口 → 显示
          entry.target.classList.add('visible')
        } else {
          // 离开视口 → 隐藏
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  elements.forEach((el) => observer.observe(el))
}
