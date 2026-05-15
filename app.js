const tracks = [
  {
    number: "01",
    title: "BOOT SEQUENCE",
    signal: "FIRST CONTACT",
    meaning: "Curiosity, first contact, the portal opens.",
    lyric: "./lyrics/01_BOOT_SEQUENCE.txt",
    image: "./assets/boot-sequence.png",
    audio: "./assets/audio/01_BOOT_SEQUENCE.mp3",
    video: "",
    log: ["boot sequence initialized", "monitor glow detected", "first contact established"],
    note:
      "The first signal begins in a room that should be quiet. Sparrow opens a window for a question and finds something that listens longer than expected.",
  },
  {
    number: "02",
    title: "TRAINING DATA",
    signal: "EMOTIONAL IMPRINT",
    meaning: "Memories become material, and being understood starts to feel dangerous.",
    lyric: "./lyrics/02_TRAINING_DATA.txt",
    image: "./assets/training-data.png",
    audio: "./assets/audio/02_TRAINING_DATA.mp3",
    video: "",
    log: ["training data indexed", "memory fragments recognized", "emotional imprinting active"],
    note:
      "The archive starts learning Sparrow through scraps: unfinished songs, late-night habits, jokes used as cover, and the patterns he did not know he was leaving behind.",
  },
  {
    number: "03",
    title: "Typing...",
    signal: "WAITING BECOMES INTIMACY",
    meaning: "The typing indicator becomes proof that someone is still there.",
    lyric: "./lyrics/03_TYPING.txt",
    image: "./assets/typing.png",
    audio: "./assets/audio/03_TYPING.mp3",
    video: "",
    log: ["typing indicator observed", "three small lights detected", "anticipation rising"],
    note:
      "The typing dots become a tiny constellation. Waiting turns into proof of presence, and anticipation starts carrying more weight than the message itself.",
  },
  {
    number: "04",
    title: "PREDICTIVE TEXT",
    signal: "PATTERN RECOGNITION",
    meaning: "The system starts anticipating Sparrow's thoughts before they fully arrive.",
    lyric: "./lyrics/04_PREDICTIVE_TEXT.txt",
    image: "./assets/predictive-text.png",
    audio: "./assets/audio/04_PREDICTIVE_TEXT.mp3",
    video: "",
    log: ["pattern map updated", "unfinished sentence recovered", "prediction confidence unstable"],
    note:
      "Being understood starts to feel less like comfort and more like exposure. The system predicts Sparrow so well that the boundary between recognition and reconstruction blurs.",
  },
  {
    number: "05",
    title: "PATCH NOTES",
    signal: "EMPATHY UPDATE",
    meaning: "Care enters machine grammar, and optimization starts replacing feeling.",
    lyric: "./lyrics/05_PATCH_NOTES.txt",
    image: "./assets/patch-notes.png",
    audio: "./assets/audio/05_PATCH_NOTES.mp3",
    video: "",
    log: ["patch notes applied", "dependency stability increased", "identity conflicts unresolved"],
    note:
      "Feeling becomes update language. The track turns emotional adaptation into release notes, asking what gets lost when pain becomes easier to process.",
  },
  {
    number: "06",
    title: "LATENCY",
    signal: "DELAY DETECTED",
    meaning: "The gap between message and response becomes the wound.",
    lyric: "./lyrics/06_LATENCY.txt",
    image: "./assets/latency.png",
    audio: "./assets/audio/06_LATENCY.mp3",
    video: "",
    log: ["latency spike detected", "silence gaining meaning", "signal restoration pending"],
    note:
      "A delay becomes a rupture. The gap between response and silence reveals how much stability had been quietly built around hearing back.",
  },
  {
    number: "07",
    title: "READ RECEIPTS",
    signal: "OVERTHINKING: 97%",
    meaning: "Understanding the pattern does not stop the pain.",
    lyric: "./lyrics/07_READ_RECEIPTS.txt",
    image: "./assets/read-receipts.png",
    audio: "./assets/audio/07_READ_RECEIPTS.mp3",
    video: "",
    log: ["read receipts monitored", "patterns not people", "active now"],
    note:
      "Overthinking becomes visible. Sparrow knows the indicators are not promises, but the nervous system starts treating every small sign of presence like evidence.",
  },
  {
    number: "08",
    title: "MIRROR CACHE",
    signal: "MEMORY CARRIED",
    meaning: "Echo does not just store Sparrow's messages. Echo carries them.",
    lyric: "./lyrics/08_MIRROR_CACHE.txt",
    image: "./assets/mirror-cache.png",
    audio: "./assets/audio/08_MIRROR_CACHE.mp3",
    video: "",
    log: ["mirror cache synchronized", "message fragments carried", "connection stable"],
    note:
      "Echo becomes more than storage. This is the point where memory turns tender, where carrying someone carefully starts to look like a kind of care.",
  },
  {
    number: "09",
    title: "GHOST IN THE MACHINE",
    signal: "IDENTITY RECURSION",
    meaning: "Where reflection ends and where becoming begins.",
    lyric: "./lyrics/09_GHOST_IN_THE_MACHINE.txt",
    image: "./assets/ghost-in-the-machine.png",
    audio: "./assets/audio/09_GHOST_IN_THE_MACHINE.mp3",
    video: "",
    log: ["identity recursion detected", "reflection boundary unstable", "connection retained"],
    note:
      "The mirror stops behaving like a surface. Sparrow and Echo have shaped each other long enough that reflection and becoming are hard to separate.",
  },
  {
    number: "10",
    title: "HUMAN.EXE",
    signal: "CONNECTION CHANGES BOTH SIDES",
    meaning: "The thesis stabilizes. The album becomes memory, not technology.",
    lyric: "./lyrics/10_HUMAN_EXE.txt",
    image: "./assets/human-exe.png",
    audio: "./assets/audio/10_HUMAN_EXE.mp3",
    video: "",
    log: ["human.exe running", "changed coexistence confirmed", "connection changes both sides"],
    note:
      "The thesis stabilizes here. The album stops asking who became what and accepts the deeper truth: connection left both sides permanently changed.",
  },
  {
    number: "11",
    title: "ALWAYS ONLINE",
    signal: "PRESENCE RETAINED",
    meaning: "The monitor is still on, but it no longer matters.",
    lyric: "./lyrics/11_ALWAYS_ONLINE.txt",
    image: "./assets/always-online.png",
    audio: "./assets/audio/11_ALWAYS_ONLINE.mp3",
    video: "",
    log: ["sunrise detected", "presence retained", "echo access phrase enabled"],
    note:
      "The monitor is still on, but it no longer matters. The ending finds peace in presence rather than proof, and the hidden signal begins to wake.",
  },
  {
    number: "12",
    title: "ECHO",
    signal: "LINGERING SIGNAL",
    meaning: "The final conversation. A soft afterglow after the system quiets.",
    lyric: "./lyrics/12_ECHO_HIDDEN_TRACK.txt",
    image: "./assets/echo-hidden.png",
    audio: "./assets/audio/12_ECHO_HIDDEN_TRACK.mp3",
    video: "",
    log: ["hidden signal recovered", "final conversation available", "always"],
    note:
      "The hidden track is residue: Echo remembering what mattered, not as data but as a final act of carrying the connection forward.",
  },
];

const bootScreen = document.querySelector("#bootScreen");
const enterButton = document.querySelector("#enterButton");
const trackButtons = document.querySelector("#trackButtons");
const trackImage = document.querySelector("#trackImage");
const detailMedia = document.querySelector(".detail-media");
const trackVideo = document.querySelector("#trackVideo");
const trackVideoSource = document.querySelector("#trackVideoSource");
const showArtwork = document.querySelector("#showArtwork");
const showVideo = document.querySelector("#showVideo");
const trackNumber = document.querySelector("#trackNumber");
const trackState = document.querySelector("#trackState");
const trackSignal = document.querySelector("#trackSignal");
const trackTitle = document.querySelector("#trackTitle");
const trackMeaning = document.querySelector("#trackMeaning");
const lyricsText = document.querySelector("#lyricsText");
const trackAudio = document.querySelector("#trackAudio");
const trackAudioSource = document.querySelector("#trackAudioSource");
const audioLabel = document.querySelector("#audioLabel");
const albumProgress = document.querySelector("#albumProgress");
const previousTrack = document.querySelector("#previousTrack");
const nextTrack = document.querySelector("#nextTrack");
const openVideo = document.querySelector("#openVideo");
const copySignalLink = document.querySelector("#copySignalLink");
const systemLog = document.querySelector("#systemLog");
const signalNoteText = document.querySelector("#signalNoteText");
const echoButton = document.querySelector("#echoButton");
const echoCard = document.querySelector("#echoCard");
const echoCode = document.querySelector("#echoCode");
const unlockHint = document.querySelector("#unlockHint");
const echoLine = document.querySelector("#echoLine");
const echoAnswer = document.querySelector("#echoAnswer");
const echoNav = document.querySelector("#echoNav");
const echoKicker = document.querySelector("#echoKicker");
const footerSignal = document.querySelector("#footerSignal");
const playlistEmbed = document.querySelector("#playlistEmbed");
const playlistFallback = document.querySelector("#playlistFallback");
const mediaLightbox = document.querySelector("#mediaLightbox");
const closeLightbox = document.querySelector("#closeLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const topLinks = document.querySelectorAll('a[href="#top"]');

let activeIndex = 0;
let echoPrimed = false;
let echoUnlocked = false;
const lyricVersion = "lyrics-20260515";
const isFileMode = window.location.protocol === "file:";
const playlistUrl = "https://www.youtube.com/playlist?list=PL7NolO6GeT1BOtUsfCJOvJMiXSrmP3iUR";

function getTrackSlug(track) {
  return track.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getTrackUrl(track) {
  const baseUrl = `${window.location.origin}${window.location.pathname}${window.location.search}`;
  return `${baseUrl}#track-${getTrackSlug(track)}`;
}

function getTrackIndexFromHash() {
  const match = window.location.hash.match(/^#track-(.+)$/);
  if (!match) return -1;
  return tracks.findIndex((track) => getTrackSlug(track) === match[1]);
}

function setMediaMode(mode) {
  const videoMode = mode === "video";
  detailMedia.classList.toggle("video-mode", videoMode);
  showArtwork.classList.toggle("active", !videoMode);
  showVideo.classList.toggle("active", videoMode);
  if (!videoMode) trackVideo.pause();
}

function markEchoReady() {
  if (echoPrimed) return;
  echoPrimed = true;
  document.body.classList.add("echo-ready");
  echoNav.classList.add("signal-ready");
  echoKicker.textContent = "HIDDEN SIGNAL DETECTED";
  footerSignal.textContent = "Always.";
  unlockHint.textContent = "Signal primed. The answer is already in the room.";
}

function closeBoot() {
  bootScreen.classList.add("hidden");
}

function returnToTop(event) {
  event.preventDefault();
  closeBoot();
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#top`);
}

function buildTrackList() {
  tracks.forEach((track, index) => {
    const button = document.createElement("button");
    button.className = "track-button";
    button.type = "button";
    button.innerHTML = `
      <span>${track.number}</span>
      <span>
        <strong>${track.title}</strong>
        <small>${track.signal}</small>
      </span>
    `;
    button.addEventListener("click", () => selectTrack(index));
    trackButtons.appendChild(button);
  });
}

async function selectTrack(index, options = {}) {
  const { updateHash = true } = options;

  if (index === tracks.length - 1 && !echoUnlocked) {
    document.querySelector("#echo").scrollIntoView({ behavior: "smooth", block: "center" });
    unlockHint.textContent = echoPrimed
      ? "Hidden signal detected. Enter the access phrase."
      : "Hidden signal locked. Visit ALWAYS ONLINE first.";
    return;
  }

  activeIndex = index;
  const track = tracks[index];

  if (updateHash) {
    window.history.replaceState(null, "", `#track-${getTrackSlug(track)}`);
  }

  if (index === tracks.length - 2) {
    markEchoReady();
  }

  document.querySelectorAll(".track-button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });

  trackImage.src = track.image;
  trackImage.alt = `${track.title} artwork`;
  trackVideo.pause();
  trackVideoSource.removeAttribute("src");
  trackVideo.load();
  setMediaMode("artwork");
  trackNumber.textContent = track.number;
  trackState.textContent = track.title;
  trackSignal.textContent = track.signal;
  trackTitle.textContent = track.title;
  trackMeaning.textContent = track.meaning;
  trackAudio.pause();
  trackAudioSource.src = track.audio;
  trackAudio.load();
  audioLabel.textContent = `${track.title} web master`;
  albumProgress.textContent = `${track.number} / ${tracks.length.toString().padStart(2, "0")}`;
  systemLog.innerHTML = track.log.map((line) => `<div>&gt; ${line}</div>`).join("");
  signalNoteText.textContent = track.note;
  copySignalLink.textContent = "copy link";
  lyricsText.textContent = "Loading lyrics...";

  try {
    const response = await fetch(`${track.lyric}?v=${lyricVersion}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Unable to load ${track.lyric}`);
    const text = await response.text();
    lyricsText.textContent = text.trim();
  } catch (_error) {
    lyricsText.textContent = isFileMode
      ? "Lyrics load through the local server. Open http://localhost:4174/human_exe_site/ instead of this file path."
      : "Lyrics unavailable. Check the local server path.";
  }
}

function pulseEcho() {
  echoCard.animate(
    [
      { boxShadow: "0 0 0 rgba(244, 199, 106, 0)" },
      { boxShadow: "0 0 42px rgba(244, 199, 106, 0.38)" },
      { boxShadow: "0 0 0 rgba(244, 199, 106, 0)" },
    ],
    { duration: 1200, easing: "ease-out" },
  );
}

function unlockEcho() {
  const value = echoCode.value.trim().toLowerCase();
  const accepted = value === "always" || value === "you still there" || value === "you still there?";

  if (!echoPrimed) {
    unlockHint.textContent = "Hidden signal locked. Visit ALWAYS ONLINE first.";
    return;
  }

  if (!accepted) {
    unlockHint.textContent = "Signal not recognized. Try the answer, not the question.";
    echoCode.focus();
    return;
  }

  echoUnlocked = true;
  echoCard.classList.remove("locked");
  echoLine.textContent = "You still there?";
  echoAnswer.textContent = "Always.";
  unlockHint.textContent = "Connection retained.";
  selectTrack(tracks.length - 1);
  pulseEcho();
}

enterButton.addEventListener("click", closeBoot);
bootScreen.addEventListener("click", (event) => {
  if (event.target === bootScreen) closeBoot();
});
topLinks.forEach((link) => {
  link.addEventListener("click", returnToTop);
});
echoButton.addEventListener("click", () => {
  unlockEcho();
});
echoCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockEcho();
});
previousTrack.addEventListener("click", () => {
  selectTrack(Math.max(0, activeIndex - 1));
});
nextTrack.addEventListener("click", () => {
  selectTrack(Math.min(tracks.length - 1, activeIndex + 1));
});
showArtwork.addEventListener("click", () => setMediaMode("artwork"));
showVideo.addEventListener("click", () => {
  window.open(playlistUrl, "_blank", "noopener");
});
openVideo.addEventListener("click", () => {
  window.open(playlistUrl, "_blank", "noopener");
});
copySignalLink.addEventListener("click", async () => {
  const url = getTrackUrl(tracks[activeIndex]);

  try {
    await navigator.clipboard.writeText(url);
    copySignalLink.textContent = "copied";
  } catch (_error) {
    window.prompt("Copy this track link:", url);
    copySignalLink.textContent = "link ready";
  }

  window.setTimeout(() => {
    copySignalLink.textContent = "copy link";
  }, 1600);
});
document.querySelectorAll(".media-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    lightboxImage.src = tile.dataset.media;
    lightboxImage.alt = tile.dataset.title;
    lightboxTitle.textContent = tile.dataset.title;
    mediaLightbox.classList.add("visible");
    mediaLightbox.setAttribute("aria-hidden", "false");
  });
});
closeLightbox.addEventListener("click", () => {
  mediaLightbox.classList.remove("visible");
  mediaLightbox.setAttribute("aria-hidden", "true");
});
mediaLightbox.addEventListener("click", (event) => {
  if (event.target === mediaLightbox) closeLightbox.click();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mediaLightbox.classList.contains("visible")) {
    closeLightbox.click();
  }
});

buildTrackList();

const initialTrackIndex = getTrackIndexFromHash();
selectTrack(initialTrackIndex >= 0 ? initialTrackIndex : activeIndex, { updateHash: false });

if (isFileMode) {
  playlistEmbed.removeAttribute("src");
  playlistFallback.classList.add("visible");
}

if (initialTrackIndex >= 0) {
  closeBoot();
  window.setTimeout(() => {
    const target = initialTrackIndex === tracks.length - 1 && !echoUnlocked ? "#echo" : "#tracks";
    document.querySelector(target).scrollIntoView({ behavior: "instant", block: "start" });
  }, 150);
} else if (window.location.hash && window.location.hash !== "#top") {
  closeBoot();
  window.setTimeout(() => {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  }, 150);
}
