/**
 * Build-Zeit-Datum als ISO YYYY-MM-DD.
 *
 * Reihenfolge:
 *   1. process.env.BUILD_DATE — im GitHub-Actions-Workflow gesetzt
 *      (deterministischer Stempel pro Deploy, siehe .github/workflows/deploy.yml).
 *   2. Fallback auf das tatsächliche Datum zur Build-Zeit (new Date()).
 *
 * Wichtig: früher war hier ein HARDCODED Datum ("2026-06-08" bzw.
 * "2026-05-31") als Fallback hinterlegt. Da BUILD_DATE nirgends gesetzt
 * war, verglich die Seite dauerhaft gegen ein Datum in der Vergangenheit
 * — Event-Hotel-Widgets brachen (Stay22 lehnt Vergangenheits-Checkins mit
 * HTTP 400 ab) und vergangene Events galten als „kommend". Der new-Date-
 * Fallback stellt sicher, dass jeder Build (u.a. der 6-stündliche Cron)
 * gegen das echte Heute vergleicht.
 */
export function buildDate(): string {
  const fromEnv =
    typeof process !== "undefined" ? process.env?.BUILD_DATE : undefined;
  if (fromEnv && /^\d{4}-\d{2}-\d{2}$/.test(fromEnv)) return fromEnv;
  return new Date().toISOString().slice(0, 10);
}
