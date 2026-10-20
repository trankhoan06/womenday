/**
 * Women's Day Celebration Web App
 * Dedicated to: Nguyễn Thị Ty, Trần Liên, Trần Ngân Vàng, Hồ Thị Diệu Linh
 */

// 1. Data for 4 Honored Women
const womenData = {
  ty: {
    key: "ty",
    name: "Nguyễn Thị Ty",
    badge: "Dịu Dàng & Tinh Tế",
    icon: "fa-spa",
    gradient: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
    glowColor: "rgba(255, 117, 140, 0.45)",
    role: "Tươi tắn • Duyên dáng • Tràn đầy năng lượng",
    greeting: "Thân gửi chị / bạn Nguyễn Thị Ty,",
    quote: "Nụ cười của bạn là ánh nắng ban mai thắp sáng mỗi ngày!",
    personalLetter: "Chúc Nguyễn Thị Ty một ngày 20/10 ngập tràn niềm vui và sự bất ngờ ngọt ngào. Mong bạn luôn giữ được nét duyên dáng, sức khỏe dồi dào, tâm hồn luôn an nhiên và mỗi ngày trôi qua đều là một ngày hạnh phúc viên mãn!",
    wishes: [
      "🌸 Luôn giữ nét tươi trẻ, duyên dáng và nụ cười rạng rỡ như ánh mai.",
      "💖 Sức khỏe dồi dào, gia đình ấm êm, hạnh phúc đong đầy trọn vẹn.",
      "✨ Công việc thuận buồm xuôi gió, luôn gặp quý nhân phù trợ và thành công.",
      "🎁 Mỗi khoảnh khắc trong cuộc sống đều được nâng niu và yêu thương."
    ]
  },
  lien: {
    key: "lien",
    name: "Trần Liên",
    badge: "Thanh Lịch & Bản Lĩnh",
    icon: "fa-feather-pointed",
    gradient: "linear-gradient(135deg, #845ec2 0%, #d65db1 100%)",
    glowColor: "rgba(132, 94, 194, 0.45)",
    role: "Khéo léo • Tự tin • Tràn đầy yêu thương",
    greeting: "Thân gửi chị / bạn Trần Liên,",
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
    icon: "fa-gem",
    gradient: "linear-gradient(135deg, #ff9671 0%, #ffc75f 100%)",
    glowColor: "rgba(255, 199, 95, 0.45)",
    role: "Rạng ngời • Quý phái • May mắn đong đầy",
    greeting: "Thân gửi chị / bạn Trần Ngân Vàng,",
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
    badge: "Ngọt Ngào & Tươi Trẻ",
    icon: "fa-wand-magic",
    gradient: "linear-gradient(135deg, #00c9a7 0%, #845ec2 100%)",
    glowColor: "rgba(0, 201, 167, 0.45)",
    role: "Hồn nhiên • Diệu kỳ • Tràn ngập niềm vui",
    greeting: "Thân gửi chị / bạn Hồ Thị Diệu Linh,",
    quote: "Vẻ đẹp trong trẻo, trí tuệ linh hoạt và tâm hồn ngọt ngào!",
    personalLetter: "Chúc Diệu Linh có một ngày lễ 20/10 ngập tràn những điều kỳ diệu! Mong cho tuổi trẻ của bạn luôn rực rỡ, những ước mơ ấp ủ đều sớm thành hiện thực và nụ cười ngọt ngào của bạn sẽ luôn tỏa sáng mỗi ngày!",
    wishes: [
      "✨ Nét đẹp trong trẻo, nụ cười tỏa nắng làm bừng sáng mọi không gian.",
      "🌈 Mọi ước mơ, ấp ủ đều sớm đơm hoa kết trái một cách diệu kỳ.",
      "🌷 Thanh xuân rực rỡ, mỗi ngày trôi qua đều là một trang nhật ký tươi đẹp.",
      "💌 Nhận thật nhiều hoa tươi, quà xinh và tình cảm nồng nàn nhất."
    ]
  }
};

// Current active person being displayed (default: ty)
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
   NAME NORMALIZATION & MATCHING (Accents, Case, Nicknames)
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

  if (norm.includes("ty")) return "ty";
  if (norm.includes("lien")) return "lien";
  if (norm.includes("vang")) return "vang";
  if (norm.includes("linh")) return "linh";

  return null;
}

// Elements
const welcomeModal = document.getElementById("welcomeModal");
const visitorNameInput = document.getElementById("visitorNameInput");
const badgeHeadline = document.getElementById("badgeHeadline");
const greetingUserSubtitle = document.getElementById("greetingUserSubtitle");
const greetingUserTitle = document.getElementById("greetingUserTitle");
const heroDescText = document.getElementById("heroDescText");
const userChipName = document.getElementById("userChipName");
const changeUserBtn = document.getElementById("changeUserBtn");

// Showcase elements
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

// Quick selection handler
window.quickSelectName = function (name) {
  visitorNameInput.value = name;
  processEnteredName(name);
};

// Form submission handler
window.handleNameSubmit = function (e) {
  if (e) e.preventDefault();
  const rawName = visitorNameInput.value.trim();
  if (!rawName) return;
  processEnteredName(rawName);
};

// Switch active person (via pill buttons)
window.switchPerson = function (key) {
  if (womenData[key]) {
    renderPersonStage(womenData[key]);
    triggerConfettiBurst();
    showToast(`✨ Đang xem món quà của ${womenData[key].name}`);
  }
};

// Core logic when a name is processed
function processEnteredName(rawName) {
  const matchedKey = matchPerson(rawName);
  welcomeModal.classList.add("hidden");
  sessionStorage.setItem("womenday_user_name", rawName);

  // Play romantic music if not already playing
  if (!isPlaying) {
    bgMusic.play().then(() => {
      musicToggleBtn.classList.add("playing");
      isPlaying = true;
    }).catch(() => {});
  }

  if (matchedKey && womenData[matchedKey]) {
    const person = womenData[matchedKey];
    renderPersonStage(person);
    showToast(`🌸 Xin chào ${person.name}! Món quà đặc biệt dành riêng cho bạn!`);
    triggerConfettiBurst();

    // Auto open modal envelope after brief scroll
    setTimeout(() => {
      singleWomanStage.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        openModal(person.key);
      }, 650);
    }, 400);

  } else {
    // Custom name not in the 4
    const capitalizedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    const customPerson = {
      key: "custom",
      name: capitalizedName,
      badge: "Người Phụ Nữ Tuyệt Vời",
      icon: "fa-heart",
      gradient: "linear-gradient(135deg, #ff4b72 0%, #845ec2 100%)",
      glowColor: "rgba(255, 75, 114, 0.45)",
      role: "Xinh đẹp • Tự tin • Tràn ngập yêu thương",
      greeting: `Thân gửi ${capitalizedName},`,
      quote: `Nụ cười của ${capitalizedName} là điều tuyệt vời nhất!`,
      personalLetter: `Chúc ${capitalizedName} một ngày Phụ Nữ 20/10 ngập tràn niềm vui, nhận được thật nhiều hoa thơm, quà đẹp và luôn được nâng niu, trân trọng mỗi ngày!`,
      wishes: [
        "🌸 Luôn xinh đẹp rạng rỡ, trẻ trung và yêu đời mỗi sớm mai.",
        "💖 Hạnh phúc ngập tràn, vạn sự hanh thông và bình an bên người thân yêu.",
        "✨ Công việc thuận lợi, tài lộc dồi dào và gặt hái nhiều thành công.",
        "🎁 Luôn là phiên bản tuyệt vời nhất của chính mình và được yêu thương!"
      ]
    };

    renderPersonStage(customPerson);
    showToast(`💐 Chào mừng ${capitalizedName}! Món quà dành riêng cho bạn!`);
    triggerConfettiBurst();

    setTimeout(() => {
      singleWomanStage.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        openActivePersonModal();
      }, 650);
    }, 400);
  }
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

  // Update switcher pills active state
  document.querySelectorAll(".switch-pill").forEach((pill) => {
    if (pill.getAttribute("data-key") === person.key) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  // Micro animation: gentle flash to indicate refresh
  singleWomanStage.style.animation = "none";
  void singleWomanStage.offsetWidth; // trigger reflow
  singleWomanStage.style.animation = "modalPopIn 0.45s ease";
}

// Open modal for the currently active person
window.openActivePersonModal = function () {
  if (currentPerson.key && womenData[currentPerson.key]) {
    openModal(currentPerson.key);
  } else {
    // Custom person modal
    modalName.textContent = currentPerson.name;
    modalTag.textContent = currentPerson.badge;
    modalIconWrap.innerHTML = `<i class="fa-solid ${currentPerson.icon}"></i>`;
    modalIconWrap.style.background = currentPerson.gradient;
    modalWishText.innerHTML = `<strong>${currentPerson.greeting}</strong><br><br>${currentPerson.personalLetter}`;
    modalWishesBullets.innerHTML = currentPerson.wishes
      .map((w) => `
        <div class="wishes-item">
          <i class="fa-solid fa-sparkles"></i>
          <span>${w}</span>
        </div>
      `)
      .join("");
    wishModal.classList.add("active");
    triggerConfettiBurst();
  }
};

// Re-open welcome modal to change user
changeUserBtn.addEventListener("click", () => {
  welcomeModal.classList.remove("hidden");
  visitorNameInput.value = "";
  visitorNameInput.focus();
});

/* ========================================================
   2. PETAL & PARTICLE ANIMATION CANVAS
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
    this.size = Math.random() * 10 + 8;
    this.speedY = Math.random() * 1.5 + 1;
    this.speedX = Math.random() * 1.2 - 0.6;
    this.angle = Math.random() * 360;
    this.spinSpeed = (Math.random() - 0.5) * 2;
    this.opacity = Math.random() * 0.6 + 0.3;
    this.type = Math.random() > 0.35 ? "petal" : Math.random() > 0.5 ? "heart" : "sparkle";
    this.color = Math.random() > 0.5 ? "#ff8da1" : "#ffb6c1";
  }

  update() {
    this.y += this.speedY;
    this.x += Math.sin(this.angle * (Math.PI / 180)) * 0.8 + this.speedX;
    this.angle += this.spinSpeed;

    if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
      this.reset();
      this.y = -10;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;

    if (this.type === "petal") {
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

const petalsCount = window.innerWidth < 768 ? 30 : 60;
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
      particleCount: 65,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ["#ff4b72", "#ff758c", "#ffc75f", "#ffffff", "#845ec2"]
    });
    confetti({
      particleCount: 65,
      angle: 120,
      spread: 65,
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
  showToast("🎉 Chúc mừng ngày phụ nữ tuyệt vời nhất! 💐");

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

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const offsetX = (Math.random() - 0.5) * 60;
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

  const tx = (Math.random() - 0.5) * 120 + "px";
  const rot = (Math.random() - 0.5) * 70 + "deg";
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

// Initial render for default person (ty)
renderPersonStage(womenData.ty);
