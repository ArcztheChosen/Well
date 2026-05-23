onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const music = document.getElementById("bgMusic");

  if (music) {
    music.volume = 0.6;
    music.play().catch(() => {
      console.log("Autoplay blocked by browser");
    });
  }
};