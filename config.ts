export const CONTACT_INFO = {
  whatsapp: {
    number: "6285830184722",
    display: "0858-3018-4722",
    // Fungsi helper untuk membuat link WA otomatis
    createLink: (message: string) => {
      const encoded = encodeURIComponent(message);
      return `https://wa.me/6285830184722?text=${encoded}`;
    }
  },
  email: "doozedesain@gmail.com",
  location: "Aceh, Indonesia",
  mapsUrl: "https://maps.google.com"
};