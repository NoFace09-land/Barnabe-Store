const grid = document.getElementById("grid");
const count = document.getElementById("count");
const q = document.getElementById("q");
const sort = document.getElementById("sort");
const chips = document.querySelectorAll(".chip");
let category = "all";

const fcfa = (n) => n.toLocaleString("fr-FR") + " FCFA";
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const clean = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const hello = wa("Bonjour Barnabe Store, j’aimerais avoir des renseignements.");
["wa-top", "wa-hero", "wa-contact"].forEach((id) => (document.getElementById(id).href = hello));

function render() {
  const list = products.filter((p) =>
    (category === "all" || p.category === category) &&
    clean(p.name).includes(clean(q.value.trim()))
  );
  if (sort.value === "asc") list.sort((a, b) => a.price - b.price);
  if (sort.value === "desc") list.sort((a, b) => b.price - a.price);

  count.textContent = list.length + (list.length > 1 ? " produits" : " produit");
  if (!list.length) {
    grid.innerHTML = '<p class="empty">Aucun produit trouvé. Essayez un autre mot ou une autre catégorie.</p>';
    return;
  }
  grid.innerHTML = list.map((p) => {
    const msg = `Bonjour Tr13ze Store, je suis intéressé par le ${p.name}, affiché à ${fcfa(p.price)}. Est-il disponible ?`;
    const badge = p.badge ? `<span class="badge b-${clean(p.badge)}">${esc(p.badge)}</span>` : "";
    return `<article class="card">
      <div class="thumb">
        <img src="${p.image}" alt="${esc(p.name)}" width="400" height="400" loading="lazy">${badge}
      </div>
      <div class="card-body">
        <h3>${esc(p.name)}</h3>
        <p class="info">${esc(p.info)}</p>
        <p class="price">${fcfa(p.price)}</p>
      </div>
      <a class="btn btn-sm" href="${wa(msg)}" target="_blank" rel="noopener">Commander</a>
    </article>`;
  }).join("");
}

chips.forEach((c) => c.addEventListener("click", () => {
  category = c.dataset.cat;
  chips.forEach((x) => { const on = x === c; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); });
  render();
}));
[q, sort].forEach((el) => el.addEventListener("input", render));

// Thème clair / sombre
const root = document.documentElement;
const themeBtn = document.getElementById("theme");
function syncTheme() {
  const dark = root.dataset.theme === "dark";
  themeBtn.setAttribute("aria-pressed", dark);
  themeBtn.title = dark ? "Passer au thème clair" : "Passer au thème sombre";
}
themeBtn.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  syncTheme();
});
syncTheme();
render();
