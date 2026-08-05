/**
 * Legal-Daten für Impressum & Datenschutz.
 */
export const legal = {
  operator: {
    name: "Webmagics Ltd.",
    street: "Gladstonos 12-14",
    zip: "8046",
    city: "Paphos",
    country: "Zypern",
    /** Schnelle elektronische Kontaktaufnahme (§ 5 DDG). */
    email: "info@top10-heidelberg.de",
    /** Optional — wird nur angezeigt, wenn gesetzt. */
    phone: "",
    /** Umsatzsteuer-ID. Leer => "Keine Umsatzsteuer-ID vorhanden". */
    vatId: "",
    /**
     * Zypriotische Handelsregister-Nummer (HE-Nummer), öffentlich im
     * Register des Registrar of Companies (companies.gov.cy) hinterlegt.
     */
    registrationNumber: "HE 400045",
    /** Vertretungsberechtigter Director (öffentliches Handelsregister). */
    managingDirector: "Jacob Jeremia Stark",
  },
  responsibleForContent: "Jacob Jeremia Stark, Webmagics Ltd., Gladstonos 12-14, 8046 Paphos, Zypern",
  trackingEnabled: {
    // GTM ist in BaseLayout aktiv (analytics.ts) — daher muss die
    // Datenschutzerklärung ihn auch offenlegen.
    gtm: true,
    adsense: true,
    stay22: true,
    getYourGuide: true,
  },
};
