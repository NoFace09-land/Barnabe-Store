// Tous les produits sont ici. Pour ajouter un produit : copie une ligne, change les valeurs,
// et mets la photo dans le dossier "products/". Pour changer un prix : modifie "price" (un nombre).
// badge (facultatif) : "Nouveau", "Promotion" ou "Populaire".
// category : telephones | chargeurs | audio | protections | montres | autres
const WHATSAPP = "22899515955"; // À REMPLACER : indicatif 228 + ton numéro, sans le +

const products = [
  { name: "Redmi 15/15pro", badge: "Nouveau", category: "telephones", price: 89000, image: "products/redmi15.jpeg", info: "8 Go / 128 Go" },
  { name: "Samsung z fold 6", badge: "Promotion", category: "telephones", price: 300000, image: "products/z6.jpeg", info: "3 Go / 64 Go" },
  { name: "Tecno Spark 50c", badge: "Nouveau", category: "telephones", price: 47500, image: "products/50c.jpeg", info: "4 Go / 128 Go" },
  { name: "Motorolla 5G 2024", category: "telephones", price: 59000, image: "products/g5.jpeg", info: "6 Go / 64 Go" },
  { name: "Samsung s24 ultra", badge: "Populaire", category: "telephones", price: 98000, image: "products/s24.jpeg", info: "8 Go / 256 Go" },
  { name: "Samsung s22", category: "telephones", price: 340000, image: "products/s22.jpeg", info: "128 Go" },
  { name: "Chargeur 200W", category: "chargeurs", price: 2500, image: "products/200w.jpeg", info: "USB-C" },
  { name: "Batterie externe 10 000 mAh", category: "chargeurs", price: 14000, image: "products/powerbank-10k.svg", info: "2 sorties" },
  { name: "Écouteurs Bluetooth", badge: "Nouveau", category: "audio", price: 12500, image: "products/buds-bt.svg", info: "Boîtier de charge" },
  { name: "Écouteurs filaires", category: "audio", price: 2000, image: "products/earphones-wired.svg", info: "Jack 3,5 mm" },
  { name: "Enceinte Bluetooth", category: "audio", price: 18000, image: "products/speaker-bt.svg", info: "Portable" },
  { name: "Coque silicone", category: "protections", price: 3000, image: "products/case-clear.svg", info: "Selon modèle" },
  { name: "Verre trempé 9H", category: "protections", price: 1500, image: "products/glass-9h.svg", info: "Selon modèle" },
  { name: "Montre connectée Sport", category: "montres", price: 22000, image: "products/watch-sport.svg", info: "Bluetooth" },
  { name: "Support voiture", category: "autres", price: 4000, image: "products/car-holder.svg", info: "Grille d’aération" },
];
