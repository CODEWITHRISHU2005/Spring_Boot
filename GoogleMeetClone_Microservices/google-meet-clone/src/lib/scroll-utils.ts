export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    // Calculate header height to offset the scroll
    const headerHeight = 64; // 4rem or 64px, the height of our header

    // Get the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;

    // Calculate the final position by adding current scroll position and subtracting header height
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Extra 20px for spacing

    // Scroll with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Set focus to the element for accessibility
    element.setAttribute('tabindex', '-1');
    element.focus({ preventScroll: true });

    // Update URL hash without causing a jump
    history.pushState(null, '', `#${sectionId}`);
  }
}
