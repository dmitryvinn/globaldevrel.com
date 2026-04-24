/**
 * Route-aware navigation helper.
 * If we're on the homepage, scroll to the section.
 * If we're on another page, navigate to / first, then scroll after load.
 */
export function scrollToSection(sectionId: string, navigate: (path: string) => void) {
  const id = sectionId.replace(/^#/, "");
  const el = document.querySelector(`#${id}`);

  if (el) {
    // We're on the homepage — just scroll
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    // We're on another page — navigate home, then scroll
    navigate("/");
    // Wait for the page to render, then scroll
    const tryScroll = () => {
      const target = document.querySelector(`#${id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        // Retry once more after a short delay
        setTimeout(() => {
          document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    };
    setTimeout(tryScroll, 150);
  }
}
