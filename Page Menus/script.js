function chargerMenus() {
    const lignes = MENU_TXT.split("\n");
    const menus = [];
    let courant = "";

    lignes.forEach(ligne => {
        ligne = ligne.trim();
        if (ligne.startsWith("*")) {
            if (courant !== "") menus.push(courant);
            courant = "";
        } else if (ligne !== "") {
            courant += ligne; // garder le HTML intact
        }
    });

    if (courant !== "") menus.push(courant);


    // Génération des cartes
    const html = menus
        .map((m, i) => `
            <label class="labelCarte" id="song-${i+1}">
                <img src="menu_images/THIEBOUDIEUNE.jpeg" alt="image">
                <section>${m}</section>
            </label>
        `)
        .join("");

    document.getElementById("cards").innerHTML = html;
}


// Charger automatiquement au chargement de la page
window.onload = chargerMenus;
window.onload = chargerDesserts;
