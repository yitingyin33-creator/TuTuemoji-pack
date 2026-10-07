export default {
  async fetch(request) {
    return new Response("TuTu Sticker Worker is running", {
      headers: {
        "content-type": "text/plain; charset=UTF-8",
      },
    });
  },
};