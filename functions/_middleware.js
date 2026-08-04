/**
 * Cloudflare Pages Middleware fuer top10-heidelberg.de.
 *
 * Hintergrund: Die Legacy-Regeln lagen bis 04.08.2026 in public/.htaccess.
 * Cloudflare Pages ist kein Apache und liest die Datei nicht - saemtliche
 * Regeln waren still wirkungslos (live nachgemessen: 4 von 4 Stichproben 404).
 *
 * Was hier liegt und nicht in _redirects liegen kann:
 *   1. Kanonischer Host (Apex -> www).
 *   2. HTTP 410 fuer WP-Reste. _redirects kennt keine 410-Syntax.
 *   3. Schraegstrich-Normalisierung: Pages haengt den Schraegstrich nur an,
 *      wenn unter dem Pfad ein Asset liegt. Fuer Altadressen existiert keins,
 *      also 404 - und bei 404 wird _redirects nicht mehr befragt.
 *
 * Reihenfolge: Host -> 410 -> Schraegstrich -> next().
 */

const CANONICAL_HOST = "www.top10-heidelberg.de";

/**
 * /author/yulia/ ist eine echte, ausgelieferte Autorenseite und darf NICHT
 * ins 410 laufen. Die alte .htaccess-Regel `RewriteRule ^author/ - [G]` haette
 * sie mitgenommen - deshalb hier exakt gegen den Prefix pruefen und die
 * echte Seite ausnehmen.
 */
const ECHTE_AUTORENSEITEN = new Set(["/author/yulia/", "/author/yulia"]);

/** Exakte Pfade ohne Entsprechung in der neuen Struktur. */
const GONE_EXAKT = new Set([
  "/author",
  "/author/",
  "/autor",
  "/autor/",
  "/feed",
  "/feed/",
  "/comments/feed",
  "/comments/feed/",
  "/xmlrpc.php",
  "/wp-login.php",
]);

/** Prefixe ohne Entsprechung. */
const GONE_PREFIX = ["/author/", "/autor/", "/wp-json", "/wp-admin"];

const ASSET_EXT =
  /\.(js|mjs|css|map|json|xml|txt|webmanifest|ico|png|jpe?g|gif|svg|webp|avif|woff2?|ttf|eot|pdf|zip|mp4|webm)$/i;

const SEITE_410 = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Seite dauerhaft entfernt | Top 10 Heidelberg</title>
<style>
  :root { color-scheme: light }
  body { margin:0; font-family: ui-sans-serif, system-ui, sans-serif; color:#1f2937; line-height:1.65 }
  .wrap { max-width: 40rem; margin: 0 auto; padding: 4rem 1.25rem }
  h1 { font-size: 1.75rem; color:#14532d; line-height:1.25; margin:0 0 1rem }
  a { color:#166534 }
  ul { padding-left: 1.2rem }
  li { margin: .35rem 0 }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Diese Seite wurde dauerhaft entfernt</h1>
    <p>Sie stammt aus der fruehereren WordPress-Version von Top 10 Heidelberg.</p>
    <ul>
      <li><a href="/thema/tourismus/">Tourismus in Heidelberg</a></li>
      <li><a href="/thema/leben/">Leben in Heidelberg</a></li>
      <li><a href="/thema/stadtteile/">Stadtteile</a></li>
      <li><a href="/events/">Veranstaltungen</a></li>
    </ul>
    <p><a href="/">Zur Startseite</a></p>
  </div>
</body>
</html>`;

function istGone(pfad) {
  if (ECHTE_AUTORENSEITEN.has(pfad)) return false;
  if (GONE_EXAKT.has(pfad)) return true;
  return GONE_PREFIX.some((p) => pfad.startsWith(p));
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname !== CANONICAL_HOST && url.hostname.endsWith("top10-heidelberg.de")) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  if (istGone(url.pathname)) {
    return new Response(SEITE_410, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  if (
    url.pathname !== "/" &&
    !url.pathname.endsWith("/") &&
    !ASSET_EXT.test(url.pathname)
  ) {
    url.pathname = url.pathname + "/";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
