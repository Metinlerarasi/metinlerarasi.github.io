(() => {
  const STORAGE_KEY = "metinlerarasi-content-v2";
  const editMode = new URLSearchParams(location.search).get("duzenle") === "1";

  const textSelectors = [
    ".card-badge",
    ".card-kicker",
    ".book-copy h1",
    ".book-author",
    ".book-summary",
    ".book-tags span",
    ".question-sticker small",
    ".question-sticker b",
    ".reading-note",
    ".calendar-note",
    ".clapper-note",
    ".club-photo small",
    ".mini-calendar-head b",
    ".mini-calendar-head span",
    ".detail-kicker",
    ".detail-copy h2",
    ".detail-copy > p:not(.detail-kicker)",
    ".detail-pills span",
    ".detail-date span",
    ".detail-section-copy h3",
    ".detail-section-copy > p:not(.detail-kicker)",
    ".club-rhythm h4",
    ".club-rhythm p",
    ".detail-note-card small",
    ".detail-note-card blockquote",
    ".detail-note-card p",
    ".calendar-route b",
    ".calendar-route span",
    ".film-scene-rail figcaption b",
    ".film-scene-rail figcaption span"
  ];

  document.querySelectorAll(".book-action").forEach((button) => {
    const labelNode = [...button.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    if (!labelNode) return;
    const label = document.createElement("span");
    label.className = "editor-action-label";
    label.textContent = labelNode.textContent.trim();
    button.replaceChild(label, labelNode);
  });

  const textElements = [
    ...document.querySelectorAll([...textSelectors, ".editor-action-label"].join(","))
  ];
  const imageElements = [
    ...document.querySelectorAll(".book-card img, .detail-page img")
  ];

  textElements.forEach((element, index) => {
    element.dataset.contentKey = `text-${String(index).padStart(3, "0")}`;
  });
  imageElements.forEach((element, index) => {
    element.dataset.imageKey = `image-${String(index).padStart(3, "0")}`;
  });

  function readContent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { version: 2, texts: {}, images: {} };
    } catch {
      return { version: 2, texts: {}, images: {} };
    }
  }

  function applyContent(content) {
    textElements.forEach((element) => {
      const saved = content.texts?.[element.dataset.contentKey];
      if (typeof saved === "string") element.innerHTML = saved;
    });
    imageElements.forEach((element) => {
      const saved = content.images?.[element.dataset.imageKey];
      if (typeof saved === "string" && saved.startsWith("data:image/")) element.src = saved;
    });
  }

  function collectContent() {
    return {
      version: 2,
      savedAt: new Date().toISOString(),
      texts: Object.fromEntries(
        textElements.map((element) => [element.dataset.contentKey, element.innerHTML])
      ),
      images: Object.fromEntries(
        imageElements
          .filter((element) => element.src.startsWith("data:image/"))
          .map((element) => [element.dataset.imageKey, element.src])
      )
    };
  }

  applyContent(readContent());
  if (!editMode) return;

  document.body.classList.add("editor-mode");
  document.documentElement.classList.add("editor-enabled");

  const toolbar = document.createElement("aside");
  toolbar.className = "editor-toolbar";
  toolbar.setAttribute("aria-label", "İçerik düzenleme araçları");
  toolbar.innerHTML = `
    <div class="editor-toolbar-title">
      <b>Düzenleme modu</b>
      <small class="editor-status">Değişiklik yok</small>
    </div>
    <div class="editor-toolbar-actions">
      <button type="button" data-editor-action="open">Tam ekranı aç</button>
      <button type="button" data-editor-action="save" class="editor-primary">Kaydet</button>
      <button type="button" data-editor-action="export">Dışa aktar</button>
      <label class="editor-import">İçe aktar<input type="file" accept="application/json,.json" /></label>
      <button type="button" data-editor-action="preview">Önizle</button>
      <button type="button" data-editor-action="reset" class="editor-danger">Sıfırla</button>
    </div>
  `;
  document.body.append(toolbar);

  const hint = document.createElement("div");
  hint.className = "editor-hint";
  hint.textContent = "Bir yazıya veya görsele tıklayarak düzenleyebilirsin.";
  document.body.append(hint);
  setTimeout(() => hint.classList.add("is-hidden"), 4200);

  const status = toolbar.querySelector(".editor-status");
  const openButton = toolbar.querySelector("[data-editor-action='open']");
  const fileInput = toolbar.querySelector("input[type='file']");
  const imageInput = document.createElement("input");
  imageInput.type = "file";
  imageInput.accept = "image/png,image/jpeg,image/webp";
  imageInput.hidden = true;
  document.body.append(imageInput);

  let dirty = false;
  let selectedImage = null;

  function setStatus(message, isDirty = dirty) {
    dirty = isDirty;
    status.textContent = message;
    status.classList.toggle("is-dirty", dirty);
  }

  function markDirty() {
    setStatus("Kaydedilmedi", true);
  }

  textElements.forEach((element) => {
    element.contentEditable = "true";
    element.spellcheck = true;
    element.classList.add("editor-editable-text");
    element.addEventListener("input", markDirty);
    element.addEventListener("paste", () => setTimeout(markDirty));
    element.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  imageElements.forEach((image) => {
    image.classList.add("editor-editable-image");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "Görsel"} görselini değiştir`);
    const chooseImage = (event) => {
      event.preventDefault();
      event.stopPropagation();
      selectedImage = image;
      imageInput.click();
    };
    image.addEventListener("click", chooseImage);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") chooseImage(event);
    });
  });

  function resizeImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const image = new Image();
        image.onerror = reject;
        image.onload = () => {
          const maxSide = 1600;
          const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.width * scale));
          canvas.height = Math.max(1, Math.round(image.height * scale));
          canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/webp", 0.86));
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  imageInput.addEventListener("change", async () => {
    const file = imageInput.files?.[0];
    if (!file || !selectedImage) return;
    setStatus("Görsel hazırlanıyor…", true);
    try {
      selectedImage.src = await resizeImage(file);
      markDirty();
    } catch {
      setStatus("Görsel açılamadı", true);
    }
    imageInput.value = "";
  });

  function saveContent() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collectContent()));
      setStatus("Kaydedildi", false);
      return true;
    } catch {
      setStatus("Tarayıcı alanı dolu", true);
      return false;
    }
  }

  function downloadContent() {
    if (!saveContent()) return;
    const blob = new Blob([JSON.stringify(collectContent(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "metinlerarasi-icerik.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const content = JSON.parse(await file.text());
      if (content.version !== 2 || !content.texts || !content.images) throw new Error();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      location.reload();
    } catch {
      setStatus("İçerik dosyası geçersiz", true);
    }
  });

  function openCurrentDetail() {
    const activeCard = document.querySelector(".book-card:not([aria-hidden='true'])");
    activeCard?.querySelector("[data-detail]")?.click();
  }

  function previewSite() {
    if (dirty && !saveContent()) return;
    const url = new URL(location.href);
    url.searchParams.delete("duzenle");
    location.href = url.toString();
  }

  toolbar.addEventListener("click", (event) => {
    const action = event.target.closest("[data-editor-action]")?.dataset.editorAction;
    if (!action) return;
    if (action === "save") saveContent();
    if (action === "export") downloadContent();
    if (action === "open") openCurrentDetail();
    if (action === "preview") previewSite();
    if (action === "reset" && confirm("Kaydedilmiş bütün metin ve görsel değişiklikleri sıfırlansın mı?")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  const detailShell = document.querySelector(".detail-shell");
  new MutationObserver(() => {
    const detailOpen = detailShell.classList.contains("is-open");
    openButton.hidden = detailOpen;
  }).observe(detailShell, { attributes: true, attributeFilter: ["class"] });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      saveContent();
    }
  });

  window.addEventListener("beforeunload", (event) => {
    if (!dirty) return;
    event.preventDefault();
    event.returnValue = "";
  });
})();
