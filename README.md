Doc Netlify sur la redirection par pays/langues.

Travail à faire sur le site publié sur Netlify. (Commit à faire pour chaque étape)

Faire un sous dossier /fr et déplacer les pages (en français) dedans. Corriger si besoin les liens vers les médias et autres contenus non traduits.
Faire dupliquez le dossier /fr en un dossier /en et y traduire les pages en anglais.
Faire un /index.html ayant deux liens : un vers "Accueil en français" /fr/ , l'autre vers "Home in english" /en/
Pour chaque page, faire un lien vers sa version dans l'autre langue.
Automatiser la redirection automatique vers le site de la langue appropriée en faisant un fichier /_redirects
/ /fr/ 302! Language=fr
/ /en/ 302! Language=en
Testez en demandant la racine du site / et en changeant la langue préférée ( chrome://settings/?search=langues )
Ajouter du JavaScript pour mémoriser le choix de l'utilisateur.
<a href="../fr/index.html" onclick="document.cookie = 
`nf_lang=fr; path=/ ; SameSite=Strict`
">
Tester les redirections depuis la racine / après avoir suivi un lien qui fixait le cookie.
Consulter les données du site (dans chrome://settings/content/all )
Vous pouvez aussi tapez dans la console :
document.cookie
Supprimer le cookie (juste du site, le rechercher). Et retestez.
Ajoutez des liens hreflang dans <head>
Si vous avez le temps :
Ajouter Lighthouse sous forme de plugin à Netlify (sera lancé à chaque "build").

Allez voir la section "deploy" sur Netlify et vous verrez votre score :

