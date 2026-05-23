/**
 * Affiliate-Konfiguration für top10-heidelberg.de.
 * - Stay22 für Hotel-Listen (Map mit Booking-Affiliate-Rewrite)
 * - GetYourGuide für Touristen-Listen (Aktivitäten, Touren, Tickets)
 *
 * IDs leer lassen bis User welche liefert — `enabled` schaltet das Snippet aus.
 */

export const affiliate = {
  stay22: {
    lmaId: "",
    enabled: false,
  },
  getYourGuide: {
    partnerId: "",
    enabled: false,
  },
};

export const stay22Enabled = affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;
export const gygEnabled = affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
