document.addEventListener("DOMContentLoaded", () => {
  const content            = document.getElementById("content");
  const results            = document.getElementById("results");

  const twoCharButton      = document.getElementById("two-char-button");
  const threeCharButton    = document.getElementById("three-char-button");
  const rerollButton       = document.getElementById("reroll-button");
  const backButton         = document.getElementById("back-button");

  const loveMessage        = document.getElementById("love-message");
  const heartContainer     = document.getElementById("heart-container");

  const leftCharacterImg   = document.getElementById("left-character");
  const centerCharacterImg = document.getElementById("center-character");
  const rightCharacterImg  = document.getElementById("right-character");

  const shipMessage        = document.getElementById("ship-message");
  const charactersDisplay  = document.querySelector(".characters-display");
  const shipNames          = document.getElementById("ship-names");
  const combinedShipName   = document.getElementById("combined-ship-name");
  const rerollSection      = document.getElementById("reroll-section");

  const extrasCheckbox     = document.getElementById("extras-checkbox");

  let baseMappings   = {};
  let extraMappings  = {};
  let characterMappings = {}; 
  let currentView    = "content";
  let currentScenario = null;
  let isTransitioning = false;

  const useExtras = getCookie("useExtras") === "1";

  extrasCheckbox.checked = useExtras;

  Promise.all([
    fetch('./character-mappings.json').then(r => r.json()),
    fetch('./character-mappings-extra.json').then(r => r.json())
  ])
  .then(([baseData, extraData]) => {
    baseMappings  = baseData;
    extraMappings = extraData;
    updateCharacterMappings();
    checkUrlParams();
  })
  .catch(err => console.error("Error loading character mappings:", err));

  extrasCheckbox.addEventListener("change", () => {
    setCookie("useExtras", extrasCheckbox.checked ? "1" : "0", 365);
    updateCharacterMappings();
  });

  setTimeout(() => {
    fadeInElement(loveMessage, 1);
    fadeInElement(heartContainer, 1);
  }, 1500);

  twoCharButton.addEventListener("click", () => {
    if (isTransitioning) return;
    currentScenario = 2;
    transitionToNewShip();
  });
  threeCharButton.addEventListener("click", () => {
    if (isTransitioning) return;
    currentScenario = 3;
    transitionToNewShip();
  });

  rerollButton.addEventListener("click", () => {
    if (isTransitioning) return;
    if (!currentScenario) return;
    transitionToNewShip();
  });

  backButton.addEventListener("click", () => {
    window.location.href = "https://lonelywolftre.at/ship/";
  });

  function updateCharacterMappings() {
    if (extrasCheckbox.checked) {
      characterMappings = {
        ...baseMappings,
        ...extraMappings
      };
    } else {
      characterMappings = { ...baseMappings };
    }
  }

  function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const c1 = urlParams.get("char1");
    const c2 = urlParams.get("char2");
    const c3 = urlParams.get("char3");

    if (c1 && c2) {
      const names = [c1, c2];
      if (c3) names.push(c3);

      for (let n of names) {
        if (!characterMappings[n]) {
          window.location.href = "https://lonelywolftre.at/ship/";
          return;
        }
      }
      currentScenario = names.length;

      content.style.display = "none";
      currentView = "results";

      const chosen = names.map(n => ({ name: n, image: getRandomImage(characterMappings[n]) }));
      showResults(chosen, false);
    }
  }

  function transitionToNewShip() {
    isTransitioning = true;
    if (currentView === "content") {
      fadeOutElement(content, 0.6, () => {
        content.style.display = "none";
        const chosen = chooseRandomCharacters(currentScenario);
        showResults(chosen, true);
      });
    } else {
      fadeOutElement(results, 0.6, () => {
        results.style.display = "none";
        const chosen = chooseRandomCharacters(currentScenario);
        showResults(chosen, true);
      });
    }
  }

  function showResults(chosen, fadeIn=true) {
    if (!chosen || chosen.length === 0) {
      window.location.href = "https://lonelywolftre.at/ship/";
      return;
    }

    results.style.display = "block";
    results.style.opacity = fadeIn ? 0 : 1;

    if (chosen.length === 2) {
      centerCharacterImg.style.display = "none";
      leftCharacterImg.src  = chosen[0].image;
      rightCharacterImg.src = chosen[1].image;
      shipNames.textContent = `${chosen[0].name} + ${chosen[1].name}`;

      const fw1 = getFirstWord(chosen[0].name);
      const fw2 = getFirstWord(chosen[1].name);
      combinedShipName.textContent = generateTwoCharShipName(fw1, fw2);

      history.pushState({}, "", `?char1=${encodeURIComponent(chosen[0].name)}&char2=${encodeURIComponent(chosen[1].name)}`);
      rerollButton.textContent = "🔘";
    } else {
      centerCharacterImg.style.display = "inline";
      leftCharacterImg.src   = chosen[0].image;
      centerCharacterImg.src = chosen[1].image;
      rightCharacterImg.src  = chosen[2].image;
      shipNames.textContent  = `${chosen[0].name} + ${chosen[1].name} + ${chosen[2].name}`;

      const fw1 = getFirstWord(chosen[0].name);
      const fw2 = getFirstWord(chosen[1].name);
      const fw3 = getFirstWord(chosen[2].name);
      combinedShipName.textContent = generateThreeCharShipName(fw1, fw2, fw3);

      history.pushState({}, "", `?char1=${encodeURIComponent(chosen[0].name)}&char2=${encodeURIComponent(chosen[1].name)}&char3=${encodeURIComponent(chosen[2].name)}`);
      rerollButton.textContent = "❤️";
    }

    rerollSection.style.display = "block";
    rerollSection.style.opacity = 1;

    shipMessage.style.opacity       = 1;
    charactersDisplay.style.opacity = 1;
    shipNames.style.opacity         = 1;
    combinedShipName.style.opacity  = 1;

    if (fadeIn) {
      fadeInElement(results, 0.6, () => {
        isTransitioning = false;
        currentView = "results";
      });
    } else {
      isTransitioning = false;
      currentView = "results";
    }
  }

  function fadeOutElement(el, duration, callback) {
    el.style.transition = `opacity ${duration}s ease`;
    el.style.opacity    = 1;
    el.getBoundingClientRect();
    el.style.opacity    = 0;

    setTimeout(() => {
      if (callback) callback();
    }, duration * 1000);
  }

  function fadeInElement(el, duration=0.3, callback) {
    el.style.transition = `opacity ${duration}s ease`;
    el.style.opacity    = 0;
    el.getBoundingClientRect();
    el.style.opacity    = 1;

    setTimeout(() => {
      if (callback) callback();
    }, duration * 1000);
  }

  function chooseRandomCharacters(count) {
    const allChars = Object.keys(characterMappings);
    if (allChars.length < count) return null;
    const copy = [...allChars];
    const chosen = [];
    for (let i=0; i<count; i++) {
      const idx = Math.floor(Math.random() * copy.length);
      const name = copy.splice(idx, 1)[0];
      chosen.push({
        name,
        image: getRandomImage(characterMappings[name])
      });
    }
    return chosen;
  }

  function getRandomImage(images) {
    if (!images || images.length === 0) return "";
    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }

  function getFirstWord(str) {
    const m = str.match(/[A-Za-z]+/);
    return m ? m[0] : str;
  }

  function generateTwoCharShipName(n1, n2) {
    const half1 = Math.ceil(n1.length / 2);
    const half2 = Math.floor(n2.length / 2);
    return n1.substring(0, half1) + n2.substring(half2);
  }

  function generateThreeCharShipName(n1, n2, n3) {
    const half1 = Math.ceil(n1.length / 2);
    const firstPart = n1.substring(0, half1);

    const secondLen  = n2.length;
    const partLen    = Math.floor(secondLen / 3);
    const middlePart = n2.substring(partLen, 2 * partLen);

    const half3 = Math.floor(n3.length / 2);
    const lastPart = n3.substring(half3);

    return firstPart + middlePart + lastPart;
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const ca = document.cookie.split(';');
    const needle = name + "=";
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(needle) === 0) {
        return c.substring(needle.length, c.length);
      }
    }
    return "";
  }

});
