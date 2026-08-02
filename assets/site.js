const SUPPORT_EMAIL = "tobias@frech-online.net";

document.querySelectorAll("[data-support-email]").forEach((element) => {
  if (!SUPPORT_EMAIL) return;
  const subject = element.dataset.subject || "FlavorAtlas support";
  element.textContent = SUPPORT_EMAIL;
  element.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`;
  element.classList.remove("is-unconfigured");
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });
}
