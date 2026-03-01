// ==========================================
        // UTILISE <br> POUR ALLER À LA LIGNE :
        // ==========================================
        const monMessageSecret = "CONNEXION ÉTABLIE...<br>IDENTITÉ : AGENT REAPER<br>PROTOCOLE : PROTOCOLE BREAKSTORMS ACTIVER.<br>--------------------------<br>MESSAGE : <br>RENDEZ-VOUS A CETTE POSITION X: 3240.227 | Y: 5171.646.<br>NE FAITES CONFIANCE À PERSONNE.<br><br>CELA FAIT UN BON MOMENT QUE VOUS PENSEZ QUE JE NE SUIS PLUS LA, MAIS CE N'EST QUE LE DÉBUT.<br>VOUS AVEZ DÉCIDÉ DE JOUER AVEC LES MAUVAISES PERSONNES.<br>VIPER VOUS AVEZ PRÉVENU VOUS N'AVEZ PAS ÉCOUTÉ NI PRIS EN COMPTE CES MENACES.<br>C'EST LA VOTRE ERREUR, AGENT MATHEO VARGAS MATRICULE 10.<br>ON VOUS A PRÉVENU D'ICI LES PROCHAINES SEMAINES VOUS ALLEZ PERDRE UN OU DES MEMBRES À QUI VOUS TENEZ ";
        // ==========================================

        function startDecryption() {
    // 1. Cacher le bouton
    document.getElementById('decrypt-btn').style.display = 'none';
    
    // 2. Afficher le terminal
    const outputDiv = document.getElementById('terminal-output');
    const textTarget = document.getElementById('text-target');
    outputDiv.style.display = 'block';

    let i = 0;
    function typeWriter() {
        // Est-ce qu'on est face à une balise <br> ?
        if (monMessageSecret.substring(i, i + 4) === "<br>") {
            textTarget.innerHTML += "<br>"; // On ajoute le saut de ligne d'un coup
            i += 4; // On saute les 4 caractères du <br>
            setTimeout(typeWriter, 70);
        } 
        // Sinon, on continue de taper lettre par lettre
        else if (i < monMessageSecret.length) {
            textTarget.innerHTML += monMessageSecret.charAt(i);
            i++;
            setTimeout(typeWriter, 70); 
        }
    }
    
    typeWriter();
}
