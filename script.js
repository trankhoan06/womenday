/**
 * Women's Day Celebration Web App
 * Dedicated exclusively to: Nguyễn Thị Ty, Trần Liên, Trần Ngân Vàng, Hồ Thị Diệu Linh
 */

// 1. Data for 4 Honored Women
const womenData = {
  ty: {
    key: "ty",
    name: "Nguyễn Thị Ty",
    badge: "Mảnh Ghép Yêu Thương",
    rankTitle: "RANK THÁCH ĐẤU • CHIẾN THẦN TÌNH YÊU 🔥",
    icon: "fa-heart",
    gradient: "linear-gradient(135deg, #ff4b72 0%, #ff758c 100%)",
    glowColor: "rgba(255, 75, 114, 0.45)",
    role: "T.Y = Tình Yêu • Duyên dáng • Ngọt ngào đong đầy",
    greeting: "Thân gửi bạn Ty – 'Tình Yêu' to bự của mọi người! 💖",
    quote: "T.Y không chỉ là một cái tên, mà là viết tắt của hai tiếng 'Tình Yêu' ngọt ngào và ấm áp nhất!",
    personalLetter: "Chúc 'Tình Yêu' (Ty) một ngày 20/10 ngập tràn hạnh phúc và những điều bất ngờ ngọt ngào nhất! Đúng như cái tên đặc biệt của bạn, chúc bạn luôn là tình yêu to lớn, luôn được nâng niu, chiều chuộng và bao bọc trong sự yêu thương viên mãn của gia đình và những người thân yêu!",
    wishes: [
      "💖 Đúng như tên gọi 'T.Y', chúc bạn luôn là tình yêu ngọt ngào, được nâng niu và cưng chiều mỗi ngày.",
      "🌸 Nụ cười luôn tỏa nắng rạng rỡ, mang theo nguồn năng lượng tích cực lan tỏa đến mọi người.",
      "✨ Sức khỏe dồi dào, tâm hồn an nhiên, trẻ mãi không già và mỗi ngày đều ngập tràn niềm vui.",
      "🎁 Công việc thuận buồm xuôi gió, vạn sự như ý và mọi ước mơ ấp ủ đều sớm thành hiện thực."
    ]
  },
  lien: {
    key: "lien",
    name: "Trần Liên",
    badge: "Thanh Lịch & Bản Lĩnh",
    rankTitle: "RANK HUYỀN THOẠI • CHIẾN THẦN BẢN LĨNH 🪷",
    icon: "fa-feather-pointed",
    gradient: "linear-gradient(135deg, #845ec2 0%, #d65db1 100%)",
    glowColor: "rgba(132, 94, 194, 0.45)",
    role: "Khéo léo • Tự tin • Tràn đầy yêu thương",
    greeting: "Thân gửi bạn Trần Liên,",
    quote: "Nhẹ nhàng như đóa sen thơm, kiên cường vượt qua mọi thử thách cuộc sống.",
    personalLetter: "Chúc Trần Liên có một ngày 20/10 thật tuyệt vời! Như đóa sen thanh tao vươn mình tỏa hương ngào ngạt, chúc bạn luôn giữ được sự an yên trong tâm hồn, sự vững vàng trong công việc và ngập tràn tình yêu thương từ những người xung quanh.",
    wishes: [
      "🪷 Giữ trọn nét đằm thắm, tâm an tịnh và khí chất thanh lịch tự nhiên.",
      "🌟 Luôn kiên định, bản lĩnh, gặt hái trọn vẹn mọi mục tiêu trong công việc.",
      "🍀 Vạn sự hanh thông, may mắn đồng hành và cuộc sống đầy tiếng cười.",
      "💝 Được bao bọc trong tình yêu thương ấm áp, an vui từng giây phút."
    ]
  },
  vang: {
    key: "vang",
    name: "Trần Ngân Vàng",
    badge: "Quý Phái & Tỏa Sáng",
    rankTitle: "RANK ĐẠI KIỆN TƯỚNG • CHIẾN THẦN PHÚ QUÝ 💎",
    icon: "fa-gem",
    gradient: "linear-gradient(135deg, #ff9671 0%, #ffc75f 100%)",
    glowColor: "rgba(255, 199, 95, 0.45)",
    role: "Rạng ngời • Quý phái • May mắn đong đầy",
    greeting: "Thân gửi bạn Trần Ngân Vàng,",
    quote: "Tựa ánh vàng ngân lấp lánh, mang phú quý, bình an và thịnh vượng đến muôn nơi!",
    personalLetter: "Tên bạn như một bảo vật quý giá! Chúc Trần Ngân Vàng ngày 20/10 ngập tràn may mắn, tài lộc dồi dào, nhan sắc ngày càng thăng hoa rạng rỡ và luôn là viên ngọc quý tỏa sáng lấp lánh trong mắt mọi người.",
    wishes: [
      "💎 Tỏa sáng lấp lánh như ngọc quý, thần thái sang trọng và tự tin.",
      "💰 Tài lộc dồi dào, vạn sự như ý, công danh thăng tiến vượt bậc.",
      "🌺 Nhan sắc thăng hạng, ngày càng trẻ trung, quyến rũ và tươi mới.",
      "✨ Cuộc sống sung túc, trọn vẹn niềm vui và ngập tràn hạnh phúc."
    ]
  },
  linh: {
    key: "linh",
    name: "Hồ Thị Diệu Linh",
    badge: "Bản Lĩnh Nơi Xứ Kim Chi",
    rankTitle: "RANK THÁCH ĐẤU • CHIẾN THẦN XỨ HÀN 🇰🇷",
    icon: "fa-plane-departure",
    gradient: "linear-gradient(135deg, #00c9a7 0%, #845ec2 100%)",
    glowColor: "rgba(0, 201, 167, 0.45)",
    role: "Du học sinh Hàn Quốc • Bản lĩnh • Rạng rỡ thanh xuân",
    greeting: "Thân gửi bạn Hồ Thị Diệu Linh từ phương xa! 🇰🇷✨",
    quote: "Dù cách xa ngàn dặm nơi xứ Hàn, ở quê nhà mọi người vẫn luôn dõi theo và tự hào về bạn!",
    personalLetter: "Gửi ngàn đóa hoa ấm áp vượt biên giới đến cô du học sinh bản lĩnh của chúng ta! 20/10 nơi xứ Hàn có lẽ trời đã se lạnh, hãy luôn nhớ mặc thật ấm, ăn uống đầy đủ và giữ gìn sức khỏe nhé. Hành trình xa quê học tập có thể có những lúc vất vả, nhớ nhà, nhưng hãy luôn tự tin, kiên cường và tỏa sáng rực rỡ. Mọi người ở quê nhà luôn tự hào và chờ đón ngày Linh trở về trong thành công rực rỡ!",
    wishes: [
      "🇰🇷 Giữ gìn sức khỏe thật tốt, mùa lạnh nhớ mặc ấm và luôn ăn uống đầy đủ nơi xứ người.",
      "🎓 Học tập thật xuất sắc trên giảng đường Hàn Quốc, tích lũy nhiều trải nghiệm quý báu.",
      "🌟 Luôn tự tin, bản lĩnh, nụ cười rạng rỡ trên môi và sớm gặt hái thành công lớn.",
      "💌 Dù ở xa ngàn dặm, ở quê nhà mọi người vẫn luôn yêu thương, tự hào và đồng hành cùng Linh!"
    ]
  }
};

// Current active person being displayed
let currentPerson = womenData.ty;

// Random wishes pool for "Rút Quẻ May Mắn"
const randomWishes = [
  "Chúc bạn nhan sắc thăng hoa, tiền tài nở rộ, niềm vui ngập tràn! 🌸",
  "Chúc bạn luôn được yêu thương như một nàng công chúa! 👑",
  "Chúc bạn tâm an, trí sáng, mỗi bước đi đều có quý nhân phù trợ! 🌟",
  "Chúc bạn ăn ngon không béo, trẻ mãi không già, shopping không cần nhìn giá! 🛍️",
  "Chúc bạn mỗi sớm mai thức dậy là một ngày ngập tràn điều kỳ diệu! ✨",
  "Chúc bạn gặp gỡ những điều may mắn nhất và luôn có bình yên bên cạnh! 🍀"
];

/* ========================================================
   NAME NORMALIZATION & STRICT MATCHING (Only 4 Women)
   ======================================================== */
function normalizeText(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function matchPerson(rawName) {
  const norm = normalizeText(rawName);
  if (!norm) return null;

  // Strict keyword matching for the 4 women
  if (norm.includes("ty")) return "ty";
  if (norm.includes("lien")) return "lien";
  if (norm.includes("vang")) return "vang";
  if (norm.includes("linh")) return "linh";

  return null;
}

// Elements
const welcomeModal = document.getElementById("welcomeModal");
const visitorNameInput = document.getElementById("visitorNameInput");
const nameErrorAlert = document.getElementById("nameErrorAlert");
const badgeHeadline = document.getElementById("badgeHeadline");
const greetingUserSubtitle = document.getElementById("greetingUserSubtitle");
const greetingUserTitle = document.getElementById("greetingUserTitle");
const heroDescText = document.getElementById("heroDescText");
const userChipName = document.getElementById("userChipName");
const changeUserBtn = document.getElementById("changeUserBtn");

// Showcase elements
const rankTitle = document.getElementById("rankTitle");
const showcaseBadge = document.getElementById("showcaseBadge");
const showcaseAvatar = document.getElementById("showcaseAvatar");
const showcaseName = document.getElementById("showcaseName");
const showcaseRole = document.getElementById("showcaseRole");
const showcaseQuote = document.getElementById("showcaseQuote");
const showcaseWishesList = document.getElementById("showcaseWishesList");
const wishesTargetName = document.getElementById("wishesTargetName");
const stageAmbientGlow = document.getElementById("stageAmbientGlow");
const personalLetterContent = document.getElementById("personalLetterContent");
const singleWomanStage = document.getElementById("singleWomanStage");

// Clear error state on input
visitorNameInput.addEventListener("input", () => {
  if (nameErrorAlert) nameErrorAlert.style.display = "none";
  visitorNameInput.classList.remove("shake-input");
});

// Quick selection handler
window.quickSelectName = function (name) {
  visitorNameInput.value = name;
  processEnteredName(name);
};

// Form submission handler
window.handleNameSubmit = function (e) {
  if (e) e.preventDefault();
  const rawName = visitorNameInput.value.trim();
  if (!rawName) {
    showInputError("Vui lòng nhập tên của bạn nhé!");
    return;
  }
  processEnteredName(rawName);
};

function showInputError(msg) {
  if (nameErrorAlert) {
    if (msg) {
      nameErrorAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>${msg}</span>`;
    }
    nameErrorAlert.style.display = "flex";
  }
  visitorNameInput.classList.remove("shake-input");
  void visitorNameInput.offsetWidth; // trigger reflow
  visitorNameInput.classList.add("shake-input");
  visitorNameInput.focus();
}

// Core logic when a name is processed
function processEnteredName(rawName) {
  const matchedKey = matchPerson(rawName);

  // STRICT VALIDATION: If not in the 4 women, DO NOT LET IN!
  if (!matchedKey || !womenData[matchedKey]) {
    showInputError("Tên chưa đúng! Trang web chỉ dành riêng cho: <strong>Nguyễn Thị Ty, Trần Liên, Trần Ngân Vàng, Hồ Thị Diệu Linh</strong>. Vui lòng nhập đúng tên nhé!");
    return false;
  }

  // Hide any previous error
  if (nameErrorAlert) nameErrorAlert.style.display = "none";
  visitorNameInput.classList.remove("shake-input");

  // Valid person! Close welcome modal
  welcomeModal.classList.add("hidden");
  sessionStorage.setItem("womenday_user_key", matchedKey);

  // Play romantic music if not already playing
  if (!isPlaying) {
    bgMusic.play().then(() => {
      musicToggleBtn.classList.add("playing");
      isPlaying = true;
    }).catch(() => {});
  }

  const person = womenData[matchedKey];
  renderPersonStage(person);
  showToast(`🌸 Xin chào ${person.name}! Món quà đặc biệt dành riêng cho bạn!`);
  triggerConfettiBurst();

  // Scroll to stage and open envelope modal
  setTimeout(() => {
    singleWomanStage.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      openModal(person.key);
    }, 600);
  }, 350);

  return true;
}

// Render the stage for a single person ONLY
function renderPersonStage(person) {
  currentPerson = person;

  // 1. Update Header
  badgeHeadline.innerHTML = `✨ 20/10 &bull; Dành Riêng Cho ${person.name} ✨`;
  greetingUserSubtitle.textContent = `Thương gửi đến người phụ nữ tuyệt vời`;
  greetingUserTitle.innerHTML = `${person.name} <span style="color:#ff758c">💖</span>`;
  heroDescText.textContent = `Chúc ${person.name} có một ngày 20/10 ngập tràn nụ cười, hạnh phúc viên mãn và luôn tỏa sáng!`;
  userChipName.textContent = person.name;

  // 2. Update Showcase Stage details
  if (rankTitle && person.rankTitle) {
    rankTitle.textContent = person.rankTitle;
  }
  showcaseBadge.textContent = person.badge;
  showcaseName.textContent = person.name;
  showcaseRole.innerHTML = person.role;
  showcaseQuote.textContent = `"${person.quote}"`;
  wishesTargetName.textContent = person.name;

  // Avatar icon & gradient
  showcaseAvatar.innerHTML = `<i class="fa-solid ${person.icon}"></i>`;
  showcaseAvatar.style.background = person.gradient;
  stageAmbientGlow.style.background = `radial-gradient(circle, ${person.glowColor} 0%, transparent 70%)`;

  // Populate 4 dedicated wishes in UI
  showcaseWishesList.innerHTML = person.wishes
    .map((wish) => `
      <div class="stage-wish-card">
        <span class="stage-wish-icon"><i class="fa-solid fa-sparkles" style="color:#ff758c"></i></span>
        <span class="stage-wish-text">${wish}</span>
      </div>
    `)
    .join("");

  // Personal Letter update
  personalLetterContent.textContent = person.personalLetter;

  // Micro animation: gentle flash to indicate refresh
  singleWomanStage.style.animation = "none";
  void singleWomanStage.offsetWidth;
  singleWomanStage.style.animation = "modalPopIn 0.45s ease";
}

/* ========================================================
   FREE FIRE (PHI PHAI) SOUND & BOOYAH INTERACTION
   ======================================================== */
function playBooyahSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Laser / Fire shot
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(850, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.32);

    gain.gain.setValueAtTime(0.28, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.32);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.32);

    // Victory fanfare chords after shot
    setTimeout(() => {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const vOsc = ctx.createOscillator();
        const vGain = ctx.createGain();
        vOsc.type = "triangle";
        vOsc.frequency.value = freq;
        vGain.gain.setValueAtTime(0.16, ctx.currentTime + idx * 0.07);
        vGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.7);
        vOsc.connect(vGain);
        vGain.connect(ctx.destination);
        vOsc.start(ctx.currentTime + idx * 0.07);
        vOsc.stop(ctx.currentTime + idx * 0.07 + 0.75);
      });
    }, 150);
  } catch (e) {
    console.warn("Audio FX note:", e);
  }
}

// Trigger BOOYAH shot interaction
window.triggerBooyahShot = function (e) {
  playBooyahSound();

  // Screen shake
  singleWomanStage.classList.remove("screen-shake");
  void singleWomanStage.offsetWidth;
  singleWomanStage.classList.add("screen-shake");

  // Flame Confetti explosion
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff1a1a", "#ff7700", "#ffcc00", "#ffffff", "#ff4b72"]
    });
  }

  // Floating flame emoji icons
  const x = e ? e.clientX : window.innerWidth / 2;
  const y = e ? e.clientY : window.innerHeight / 2;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 80;
      createFloatingFlameHeart(x + offsetX, y);
    }, i * 60);
  }

  showToast(`🔥 BOOYAH! BẮN TRÚNG 100% TIM CỦA ${currentPerson.name.toUpperCase()}! 🔥`);
};

function createFloatingFlameHeart(x, y) {
  const icons = ["🔥", "👑", "💖", "💥", "🏆", "✨", "🎯"];
  const icon = icons[Math.floor(Math.random() * icons.length)];

  const span = document.createElement("span");
  span.className = "floating-click-heart";
  span.textContent = icon;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;

  const tx = (Math.random() - 0.5) * 140 + "px";
  const rot = (Math.random() - 0.5) * 80 + "deg";
  span.style.setProperty("--tx", tx);
  span.style.setProperty("--rot", rot);

  document.body.appendChild(span);
  setTimeout(() => { span.remove(); }, 1200);
}

// Open modal for the currently active person
window.openActivePersonModal = function () {
  if (currentPerson && currentPerson.key) {
    openModal(currentPerson.key);
  }
};

// Re-open welcome modal to change user
changeUserBtn.addEventListener("click", () => {
  welcomeModal.classList.remove("hidden");
  if (nameErrorAlert) nameErrorAlert.style.display = "none";
  visitorNameInput.classList.remove("shake-input");
  visitorNameInput.value = "";
  setTimeout(() => {
    visitorNameInput.focus();
  }, 100);
});

/* ========================================================
   2. PETAL & FLAME EMBERS PARTICLE ANIMATION CANVAS
   ======================================================== */
const canvas = document.getElementById("petalCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

class Petal {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.size = Math.random() * 10 + 7;
    this.speedY = Math.random() * 1.5 + 1;
    this.speedX = Math.random() * 1.2 - 0.6;
    this.angle = Math.random() * 360;
    this.spinSpeed = (Math.random() - 0.5) * 2;
    this.opacity = Math.random() * 0.6 + 0.3;
    // Types: petal, heart, sparkle, flame (Free Fire rising ember)
    const rand = Math.random();
    if (rand < 0.25) {
      this.type = "flame";
      this.y = height + Math.random() * 20; // starts from bottom rising up!
      this.speedY = -(Math.random() * 1.8 + 0.8);
      this.color = Math.random() > 0.5 ? "#ff5500" : "#ffbb00";
    } else if (rand < 0.6) {
      this.type = "petal";
      this.color = Math.random() > 0.5 ? "#ff8da1" : "#ffb6c1";
    } else if (rand < 0.8) {
      this.type = "heart";
      this.color = "#ff5376";
    } else {
      this.type = "sparkle";
      this.color = "#ffdf7e";
    }
  }

  update() {
    this.y += this.speedY;
    this.x += Math.sin(this.angle * (Math.PI / 180)) * 0.8 + this.speedX;
    this.angle += this.spinSpeed;

    // Bounds check
    if (this.type === "flame") {
      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    } else {
      if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
        this.reset();
        this.y = -10;
      }
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;

    if (this.type === "flame") {
      // Free Fire rising ember spark
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff7700";
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.35, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.type === "petal") {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
      ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
      ctx.fill();
    } else if (this.type === "heart") {
      ctx.fillStyle = "#ff5376";
      const hSize = this.size * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, hSize * 0.3);
      ctx.bezierCurveTo(hSize, -hSize * 0.6, hSize * 1.4, hSize * 0.5, 0, hSize * 1.4);
      ctx.bezierCurveTo(-hSize * 1.4, hSize * 0.5, -hSize, -hSize * 0.6, 0, hSize * 0.3);
      ctx.fill();
    } else {
      ctx.fillStyle = "#ffdf7e";
      ctx.beginPath();
      ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

const petalsCount = window.innerWidth < 768 ? 25 : 55;
const petals = Array.from({ length: petalsCount }, () => new Petal());

function animatePetals() {
  ctx.clearRect(0, 0, width, height);
  petals.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animatePetals);
}
animatePetals();

/* ========================================================
   3. AUDIO / MUSIC CONTROL
   ======================================================== */
const musicToggleBtn = document.getElementById("musicToggleBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicToggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggleBtn.classList.remove("playing");
    isPlaying = false;
    showToast("🎵 Đã tạm dừng giai điệu");
  } else {
    bgMusic
      .play()
      .then(() => {
        musicToggleBtn.classList.add("playing");
        isPlaying = true;
        showToast("🎶 Đang phát giai điệu yêu thương!");
      })
      .catch((e) => {
        console.warn("Audio playback blocked", e);
        showToast("👉 Hãy nhấp màn hình để bắt đầu phát nhạc nhé!");
      });
  }
});

/* ========================================================
   4. MODAL POPUP FOR INDIVIDUAL WISHES
   ======================================================== */
const wishModal = document.getElementById("wishModal");
const modalName = document.getElementById("modalName");
const modalTag = document.getElementById("modalTag");
const modalWishText = document.getElementById("modalWishText");
const modalWishesBullets = document.getElementById("modalWishesBullets");
const modalIconWrap = document.getElementById("modalIconWrap");

window.openModal = function (personKey) {
  const data = womenData[personKey] || currentPerson;
  if (!data) return;

  modalName.textContent = data.name;
  modalTag.textContent = data.badge;
  modalWishText.innerHTML = `<strong>${data.greeting}</strong><br><br>${data.personalLetter || data.quote}`;
  modalIconWrap.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
  modalIconWrap.style.background = data.gradient || `linear-gradient(135deg, #ff4b72, #ff758c)`;

  modalWishesBullets.innerHTML = data.wishes
    .map(
      (w) => `
      <div class="wishes-item">
        <i class="fa-solid fa-sparkles"></i>
        <span>${w}</span>
      </div>
    `
    )
    .join("");

  wishModal.classList.add("active");
  triggerConfettiBurst();
};

window.closeModal = function () {
  wishModal.classList.remove("active");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && wishModal.classList.contains("active")) {
    closeModal();
  }
});

/* ========================================================
   5. CONFETTI EFFECT BURSTS
   ======================================================== */
window.triggerConfettiBurst = function () {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.7 },
      colors: ["#ff4b72", "#ff758c", "#ffc75f", "#ffffff", "#845ec2"]
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.7 },
      colors: ["#ff4b72", "#ff758c", "#ffc75f", "#ffffff", "#845ec2"]
    });
  }
};

/* ========================================================
   6. CELEBRATE BUTTON & RANDOM WISH DRAWER
   ======================================================== */
const celebrateBtn = document.getElementById("celebrateBtn");
celebrateBtn.addEventListener("click", (e) => {
  createFloatingHeart(e.clientX, e.clientY);
  triggerConfettiBurst();
  showToast(`🎉 Chúc ${currentPerson.name} ngày phụ nữ tuyệt vời nhất! 💐`);

  if (!isPlaying) {
    bgMusic.play().then(() => {
      musicToggleBtn.classList.add("playing");
      isPlaying = true;
    }).catch(() => {});
  }
});

const randomWishBtn = document.getElementById("randomWishBtn");
randomWishBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * randomWishes.length);
  const pickedWish = randomWishes[randomIndex];

  triggerConfettiBurst();

  modalName.textContent = "Quẻ May Mắn Dành Tặng Bạn";
  modalTag.textContent = "Lời Chúc Ngọt Ngào";
  modalIconWrap.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
  modalIconWrap.style.background = `linear-gradient(135deg, #ff4b72, #ffc75f)`;
  modalWishText.innerHTML = `<div style="font-size: 1.25rem; font-weight: 600; color: #ffc75f; padding: 1rem 0;">"${pickedWish}"</div>`;
  modalWishesBullets.innerHTML = `
    <div class="wishes-item">
      <i class="fa-solid fa-gift"></i>
      <span>Hãy cười thật nhiều vì bạn xứng đáng với tất cả những điều ngọt ngào nhất trên thế gian!</span>
    </div>
  `;
  wishModal.classList.add("active");
});

/* ========================================================
   7. LOVE COUNTER & CLICK HEARTS
   ======================================================== */
const sendLoveBtn = document.getElementById("sendLoveBtn");
const heartCountEl = document.getElementById("heartCount");

let heartCount = parseInt(localStorage.getItem("womenday_heart_count") || "520", 10);
heartCountEl.textContent = heartCount.toLocaleString("vi-VN");

sendLoveBtn.addEventListener("click", (e) => {
  heartCount += 1;
  heartCountEl.textContent = heartCount.toLocaleString("vi-VN");
  localStorage.setItem("womenday_heart_count", heartCount.toString());

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 50;
      createFloatingHeart(e.clientX + offsetX, e.clientY);
    }, i * 80);
  }

  showToast(`❤️ Đã gửi thêm 1 đóa hoa yêu thương đến ${currentPerson.name}!`);
});

function createFloatingHeart(x, y) {
  const icons = ["💖", "🌸", "💐", "✨", "🌷", "💕", "🌺"];
  const icon = icons[Math.floor(Math.random() * icons.length)];

  const span = document.createElement("span");
  span.className = "floating-click-heart";
  span.textContent = icon;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;

  const tx = (Math.random() - 0.5) * 100 + "px";
  const rot = (Math.random() - 0.5) * 60 + "deg";
  span.style.setProperty("--tx", tx);
  span.style.setProperty("--rot", rot);

  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 1200);
}

// Global click sparkle effect
document.addEventListener("click", (e) => {
  if (
    !e.target.closest("button") && 
    !e.target.closest("a") && 
    !e.target.closest(".modal-dialog") &&
    !e.target.closest(".welcome-card")
  ) {
    createFloatingHeart(e.clientX, e.clientY);
  }
});

/* ========================================================
   8. TOAST NOTIFICATION HELPER
   ======================================================== */
const toastBox = document.getElementById("toastNotification");
let toastTimeout;

function showToast(message) {
  clearTimeout(toastTimeout);
  toastBox.innerHTML = message;
  toastBox.classList.add("show");

  toastTimeout = setTimeout(() => {
    toastBox.classList.remove("show");
  }, 2800);
}

// Check if a valid session key was already chosen, otherwise keep welcome modal open
const savedKey = sessionStorage.getItem("womenday_user_key");
if (savedKey && womenData[savedKey]) {
  welcomeModal.classList.add("hidden");
  renderPersonStage(womenData[savedKey]);
} else {
  // Show welcome modal by default
  welcomeModal.classList.remove("hidden");
  renderPersonStage(womenData.ty);
}
