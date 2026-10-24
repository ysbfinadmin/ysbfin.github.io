/**
 * 연세대학교 경영대학 재무분야 (Finance Division, Yonsei School of Business)
 * Option B: Editorial & Academic UI Controller (Non-AI Aesthetic)
 */
document.addEventListener("DOMContentLoaded", () => {
  const data = window.YSB_FINANCE_DATA;
  if (!data) return;

  renderOverviewB(data);
  renderFacultyB(data);
  renderMsPhdB(data);
  renderFmbaB(data);

  if (window.location.hash === "#en" || window.location.search.includes("lang=en")) {
    const enLink = document.getElementById("btn-lang-en");
    if (enLink && enLink.tagName === "A" && enLink.getAttribute("href") && document.documentElement.lang !== "en") {
      window.location.replace(enLink.getAttribute("href"));
      return;
    }
    window.setSiteLang("en");
  }
});

function renderOverviewB(data) {
  // 1. Hero Ledger Strip (KOR & ENG)
  const statsContainer = document.getElementById("hero-stats");
  if (statsContainer && data.about.stats) {
    statsContainer.innerHTML = data.about.stats
      .map(
        (s) => `
      <div class="ledger-item">
        <div class="ledger-figure">${s.number}</div>
        <div class="ledger-title">${s.label}</div>
        <div class="ledger-meta">${s.sub}</div>
      </div>
    `
      )
      .join("");
  }

  const statsContainerEn = document.getElementById("hero-stats-en");
  if (statsContainerEn && data.about.statsEn) {
    statsContainerEn.innerHTML = data.about.statsEn
      .map(
        (s) => `
      <div class="ledger-item">
        <div class="ledger-figure">${s.number}</div>
        <div class="ledger-title">${s.label}</div>
        <div class="ledger-meta">${s.sub}</div>
      </div>
    `
      )
      .join("");
  }

  // 2. 4 Core Research Pillars Matrix (KOR & ENG)
  const pillarsContainer = document.getElementById("research-pillars");
  if (pillarsContainer) {
    pillarsContainer.innerHTML = data.about.pillars
      .map(
        (p) => `
      <div class="pillar-cell">
        <div>
          <h3 class="pillar-cell-title">${p.title}</h3>
          <div class="pillar-cell-en">${p.titleEn}</div>
          <p class="pillar-cell-desc">${p.desc}</p>
        </div>
        <div class="pillar-keywords">
          <strong>핵심 주제</strong> ${p.keywords.join(" · ")}
        </div>
      </div>
    `
      )
      .join("");
  }

  const pillarsContainerEn = document.getElementById("research-pillars-en");
  if (pillarsContainerEn) {
    pillarsContainerEn.innerHTML = data.about.pillars
      .map(
        (p) => `
      <div class="pillar-cell">
        <div>
          <h3 class="pillar-cell-title">${p.titleEn}</h3>
          <div class="pillar-cell-en">${p.title}</div>
          <p class="pillar-cell-desc">${p.descEn || p.desc}</p>
        </div>
        <div class="pillar-keywords">
          <strong>Key Topics</strong> ${(p.keywordsEn || p.keywords).join(" · ")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // 3. Division Leadership Table (KOR & ENG)
  const leadershipBody = document.getElementById("leadership-tbody");
  if (leadershipBody) {
    leadershipBody.innerHTML = data.meta.leadership
      .map(
        (l) => `
      <tr>
        <th>
          ${l.role}
          <span>${l.roleEn}</span>
        </th>
        <td style="font-weight:700; color:var(--yonsei-navy);">
          <a href="${l.link}" target="_blank" rel="noopener" style="border-bottom:1px solid var(--rule-medium);">${l.name} ↗</a>
        </td>
        <td>연구실: ${l.office}</td>
        <td><a href="mailto:${l.email}" style="color:var(--yonsei-blue);">${l.email}</a></td>
      </tr>
    `
      )
      .join("");
  }

  const leadershipBodyEn = document.getElementById("leadership-tbody-en");
  if (leadershipBodyEn) {
    leadershipBodyEn.innerHTML = data.meta.leadership
      .filter((l) => !l.hideInEn)
      .map(
        (l) => `
      <tr>
        <th>
          ${l.roleEn}
          <span>${l.role}</span>
        </th>
        <td style="font-weight:700; color:var(--yonsei-navy);">
          <a href="${l.link}" target="_blank" rel="noopener" style="border-bottom:1px solid var(--rule-medium);">${l.nameEn || l.name} ↗</a>
        </td>
        <td>Office: ${l.officeEn || l.office}</td>
        <td><a href="mailto:${l.email}" style="color:var(--yonsei-blue);">${l.email}</a></td>
      </tr>
    `
      )
      .join("");
  }
}

function renderFacultyB(data) {
  const grid = document.getElementById("faculty-grid");
  const gridEn = document.getElementById("faculty-grid-en");
  const emeritusBody = document.getElementById("emeritus-tbody");
  const searchInput = document.getElementById("faculty-search");
  const searchInputEn = document.getElementById("faculty-search-en");

  let searchQueryKo = "";
  let searchQueryEn = "";

  const normPath = window.location.pathname.replace(/\\/g, "/");
  const assetPrefix =
    normPath.includes("/en/faculty/") || normPath.includes("/en/ms-finance/")
      ? "../../"
      : normPath.includes("/faculty/") ||
        normPath.includes("/ms-finance/") ||
        normPath.includes("/fmba/") ||
        normPath.includes("/en/") ||
        normPath.includes("/b/") ||
        normPath.includes("/OptionB/")
      ? "../"
      : "";

  function filterFaculty(query) {
    const q = query.trim().toLowerCase();
    return data.faculty.filter((prof) => {
      if (!q) return true;
      return (
        prof.name.toLowerCase().includes(q) ||
        prof.nameEn.toLowerCase().includes(q) ||
        prof.degree.toLowerCase().includes(q) ||
        prof.researchTags.some((t) => t.toLowerCase().includes(q)) ||
        prof.briefBio.toLowerCase().includes(q) ||
        (prof.briefBioEn && prof.briefBioEn.toLowerCase().includes(q))
      );
    });
  }

  function drawFacultyKo() {
    if (!grid) return;
    const filtered = filterFaculty(searchQueryKo);

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; padding: 2.5rem 0; color: var(--text-muted);">검색 조건에 해당하는 교수진이 없습니다.</div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((p) => {
        const primaryLink = p.website || p.ysbLink;
        const photoSrc = p.photo.startsWith("http") ? p.photo : `${assetPrefix}${p.photo}`;
        return `
      <article class="faculty-entry">
        <a href="${primaryLink}" target="_blank" rel="noopener" class="faculty-portrait-link" title="${p.name} 교수 프로필">
          <img src="${photoSrc}" alt="${p.name} 교수" class="faculty-portrait" onerror="this.onerror=null;this.src='${p.photoFallback}';" />
        </a>
        <div class="faculty-body">
          <div>
            <div class="faculty-heading-line">
              <a href="${primaryLink}" target="_blank" rel="noopener" class="faculty-name-ko">${p.name}</a>
              <span class="faculty-name-en">${p.nameEn}</span>
              <span class="faculty-rank">${p.title}</span>
              ${p.roleBadge ? `<span class="faculty-duty">${p.roleBadge}</span>` : ""}
            </div>
            <div class="faculty-phd">${p.degree}</div>
            <div class="faculty-fields" style="margin-top: 0.5rem; margin-bottom: 0.85rem;">
              <strong>연구분야:</strong> ${p.researchTags.join(", ")}
            </div>
          </div>
          <div>
            <div class="faculty-contact-row">
              <span>연구실: ${p.office}</span>
              <span>Tel. ${p.phone}</span>
              <a href="mailto:${p.email}">${p.email}</a>
            </div>
            <div class="faculty-links-row">
              ${
                p.website
                  ? `<a href="${p.website}" target="_blank" rel="noopener">${p.websiteLabel || "개인 연구 홈페이지"} ↗</a>`
                  : ""
              }
              <a href="${p.ysbLink}" target="_blank" rel="noopener">프로필 ↗</a>
            </div>
          </div>
        </div>
      </article>
    `;
      })
      .join("");
  }

  function drawFacultyEn() {
    if (!gridEn) return;
    const filtered = filterFaculty(searchQueryEn);

    if (filtered.length === 0) {
      gridEn.innerHTML = `<div style="grid-column: 1 / -1; padding: 2.5rem 0; color: var(--text-muted);">No faculty members match your search criteria.</div>`;
      return;
    }

    gridEn.innerHTML = filtered
      .map((p) => {
        const primaryLink = p.website || p.ysbLink;
        const photoSrc = p.photo.startsWith("http") ? p.photo : `${assetPrefix}${p.photo}`;
        const rankEn = p.titleEn || p.title;
        const dutyEn = p.roleBadgeEn !== undefined ? p.roleBadgeEn : p.roleBadge;
        const officeEn = p.officeEn || p.office;
        const websiteLabelEn = p.websiteLabelEn || p.websiteLabel || "Personal Website";
        return `
      <article class="faculty-entry">
        <a href="${primaryLink}" target="_blank" rel="noopener" class="faculty-portrait-link" title="Prof. ${p.nameEn} Profile">
          <img src="${photoSrc}" alt="Prof. ${p.nameEn}" class="faculty-portrait" onerror="this.onerror=null;this.src='${p.photoFallback}';" />
        </a>
        <div class="faculty-body">
          <div>
            <div class="faculty-heading-line">
              <a href="${primaryLink}" target="_blank" rel="noopener" class="faculty-name-ko">${p.nameEn}</a>
              <span class="faculty-name-en">${p.name}</span>
              <span class="faculty-rank">${rankEn}</span>
              ${dutyEn ? `<span class="faculty-duty">${dutyEn}</span>` : ""}
            </div>
            <div class="faculty-phd">${p.degree}</div>
            <div class="faculty-fields" style="margin-top: 0.5rem; margin-bottom: 0.85rem;">
              <strong>Research Areas:</strong> ${p.researchTags.join(", ")}
            </div>
          </div>
          <div>
            <div class="faculty-contact-row">
              <span>Office: ${officeEn}</span>
              <span>Tel. ${p.phone}</span>
              <a href="mailto:${p.email}">${p.email}</a>
            </div>
            <div class="faculty-links-row">
              ${
                p.website
                  ? `<a href="${p.website}" target="_blank" rel="noopener">${websiteLabelEn} ↗</a>`
                  : ""
              }
              <a href="${p.ysbLink}" target="_blank" rel="noopener">YSB Profile ↗</a>
            </div>
          </div>
        </div>
      </article>
    `;
      })
      .join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQueryKo = e.target.value;
      drawFacultyKo();
    });
  }

  if (searchInputEn) {
    searchInputEn.addEventListener("input", (e) => {
      searchQueryEn = e.target.value;
      drawFacultyEn();
    });
  }

  drawFacultyKo();
  drawFacultyEn();

  // Emeritus / Retired Faculty (KOR)
  const emeritusLeft = document.getElementById("emeritus-tbody-left");
  const emeritusRight = document.getElementById("emeritus-tbody-right");
  const renderEmeritusRowKo = (em) => `
      <tr>
        <td style="font-weight:700; color:var(--yonsei-navy); white-space:nowrap;">
          <a href="${em.ysbLink}" target="_blank" rel="noopener" style="border-bottom:1px solid var(--rule-medium);">${em.name}</a>
        </td>
        <td style="white-space:nowrap;">${em.office}</td>
        <td style="white-space:nowrap;">${em.phone}</td>
        <td style="white-space:nowrap;">${em.email !== "-" ? `<a href="mailto:${em.email}" style="color:var(--yonsei-blue);">${em.email}</a>` : "-"}</td>
      </tr>
    `;

  const half = Math.ceil(data.emeritusFaculty.length / 2);
  if (emeritusLeft && emeritusRight) {
    emeritusLeft.innerHTML = data.emeritusFaculty.slice(0, half).map(renderEmeritusRowKo).join("");
    emeritusRight.innerHTML = data.emeritusFaculty.slice(half).map(renderEmeritusRowKo).join("");
  } else if (emeritusBody) {
    emeritusBody.innerHTML = data.emeritusFaculty.map(renderEmeritusRowKo).join("");
  }

  // Emeritus / Retired Faculty (ENG)
  const emeritusLeftEn = document.getElementById("emeritus-tbody-left-en");
  const emeritusRightEn = document.getElementById("emeritus-tbody-right-en");
  const renderEmeritusRowEn = (em) => `
      <tr>
        <td style="font-weight:700; color:var(--yonsei-navy); white-space:nowrap;">
          <a href="${em.ysbLink}" target="_blank" rel="noopener" style="border-bottom:1px solid var(--rule-medium);">${em.nameEn || em.name}</a>
        </td>
        <td style="white-space:nowrap;">${em.officeEn || em.office}</td>
        <td style="white-space:nowrap;">${em.phone}</td>
        <td style="white-space:nowrap;">${em.email !== "-" ? `<a href="mailto:${em.email}" style="color:var(--yonsei-blue);">${em.email}</a>` : "-"}</td>
      </tr>
    `;

  if (emeritusLeftEn && emeritusRightEn) {
    emeritusLeftEn.innerHTML = data.emeritusFaculty.slice(0, half).map(renderEmeritusRowEn).join("");
    emeritusRightEn.innerHTML = data.emeritusFaculty.slice(half).map(renderEmeritusRowEn).join("");
  }
}

function renderMsPhdB(data) {
  const ms = data.msPhd;

  // 1. 3 Degree Tracks
  const tracksContainer = document.getElementById("msphd-tracks");
  if (tracksContainer) {
    tracksContainer.innerHTML = ms.tracks
      .map(
        (t) => `
      <div class="degree-col">
        <h3 class="degree-col-title">${t.name}</h3>
        <dl class="degree-dl">
          <dt>예상 학위기간</dt>
          <dd style="font-weight:700; color:var(--yonsei-navy);">${t.duration}</dd>
          <dt>졸업 이수학점</dt>
          <dd>${t.credits}</dd>
          <dt>지원 자격</dt>
          <dd>${t.degreeReq}</dd>
          <dt>학위 논문</dt>
          <dd>${t.thesis}</dd>
          <dt>졸업 후 진로</dt>
          <dd>${t.career}</dd>
        </dl>
        <ul class="editorial-list">
          ${t.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  // 2. Graduate Courses Table (Clean text, no pill tags)
  const coursesBody = document.getElementById("msphd-courses-tbody");
  if (coursesBody) {
    coursesBody.innerHTML = ms.courses
      .map(
        (c) => `
      <tr>
        <td class="code-cell">${c.code}</td>
        <td style="font-weight:700; color:var(--yonsei-navy);">${c.nameKo}</td>
        <td>${c.nameEn}</td>
        <td style="color:${c.category.includes("필수") ? "var(--yonsei-navy)" : "var(--text-muted)"}; font-weight:${c.category.includes("필수") ? "600" : "400"};">${c.category}</td>
        <td>${c.credits}학점</td>
      </tr>
    `
      )
      .join("");
  }

  // 3. Regulations Sub-tabs
  const regBox = document.getElementById("msphd-reg-content");
  const regTabBtns = document.querySelectorAll("[data-reg-tab]");

  function drawRegulation(type) {
    if (!regBox) return;
    const r = ms.regulations[type];
    regBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; padding-bottom:0.75rem; border-bottom:1px solid var(--yonsei-navy);">
        <h3 style="font-family:var(--font-serif); font-size:1.18rem; font-weight:700; color:var(--yonsei-navy);">${r.title}</h3>
        <span style="font-size:0.8rem; color:var(--text-muted);">${r.updated}</span>
      </div>
      ${r.sections
        .map(
          (sec) => `
        <div class="reg-block">
          <h4>${sec.heading}</h4>
          <ul class="editorial-list">
            ${sec.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    `;
  }

  regTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      regTabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      drawRegulation(btn.getAttribute("data-reg-tab"));
    });
  });

  drawRegulation("phd");

  // 4. Student Support Split
  const supportContainer = document.getElementById("msphd-support-cards");
  if (supportContainer) {
    supportContainer.innerHTML = ms.regulations.support
      .map(
        (sup) => `
      <div class="grad-col">
        <div>
          ${sup.badge ? `<div class="grad-track-label">${sup.badge}</div>` : ""}
          <h4 style="font-family:var(--font-serif); font-size:1.12rem; font-weight:700; color:var(--yonsei-navy); margin-bottom:0.55rem;">${sup.title}</h4>
          <p style="font-size:0.9rem; color:var(--text-body); line-height:1.65;">${sup.desc}</p>
        </div>
      </div>
    `
      )
      .join("");
  }
}

function renderFmbaB(data) {
  const fmba = data.fmba;

  // 1. Specs Ledger
  const specsGrid = document.getElementById("fmba-specs");
  if (specsGrid) {
    specsGrid.innerHTML = fmba.overview.specs
      .map(
        (sp) => `
      <div class="spec-cell">
        <div class="spec-label">${sp.label}</div>
        <div class="spec-value">${sp.value}</div>
        <div class="spec-sub">${sp.sub}</div>
      </div>
    `
      )
      .join("");
  }

  // 2. 4-Semester Curriculum
  const currGrid = document.getElementById("fmba-curriculum-grid");
  if (currGrid) {
    currGrid.innerHTML = fmba.curriculum
      .map(
        (sem) => `
      <div style="margin-bottom: 2.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.45rem;">
          <div>
            <h4 style="font-family:var(--font-serif); font-size:1.15rem; font-weight:700; color:var(--yonsei-navy); display:inline; margin-right:0.75rem;">${sem.semester}</h4>
            <span style="font-size:0.86rem; color:var(--yonsei-gold); font-weight:600;">${sem.theme}</span>
          </div>
          <span style="font-size:0.84rem; font-weight:700; color:var(--yonsei-navy);">학점 합계: ${sem.totalCredits}</span>
        </div>
        <div class="academic-table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th style="width:130px;">모듈</th>
                <th style="width:110px;">운영기간</th>
                <th>개설 과목 (필수 및 선택)</th>
                <th style="width:90px;">학점</th>
              </tr>
            </thead>
            <tbody>
              ${sem.modules
                .map(
                  (m) => `
                <tr>
                  <td style="font-weight:700; color:var(--yonsei-navy); white-space:nowrap;">${m.name}</td>
                  <td style="white-space:nowrap; color:var(--text-muted);">${m.period}</td>
                  <td>${m.courses}</td>
                  <td style="white-space:nowrap; font-weight:600;">${m.credits}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `
      )
      .join("");
  }

  // 3. Elective Tracks (3-Column Bordered Layout)
  const tracksGrid = document.getElementById("fmba-elective-tracks");
  if (tracksGrid) {
    tracksGrid.innerHTML = fmba.electiveTracks
      .map(
        (tr) => `
      <div class="degree-col">
        <div class="grad-track-label">${tr.trackEn}</div>
        <h4 class="degree-col-title">${tr.track}</h4>
        <p style="font-size:0.88rem; color:var(--text-body); margin-bottom:1rem; line-height:1.6;">${tr.desc}</p>
        <ul class="editorial-list">
          ${tr.courses.map((c) => `<li style="font-weight:600; color:var(--yonsei-navy);">${c}</li>`).join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  // 4. Admissions Process Table
  const processBody = document.getElementById("fmba-process-tbody");
  if (processBody) {
    processBody.innerHTML = fmba.admissions.process
      .map(
        (st) => `
      <tr>
        <td class="code-cell">${st.step}</td>
        <td style="font-weight:700; color:var(--yonsei-navy); white-space:nowrap;">${st.title}</td>
        <td style="white-space:nowrap; font-weight:600; color:var(--yonsei-gold);">${st.period}</td>
        <td>${st.detail}</td>
      </tr>
    `
      )
      .join("");
  }

  // 5. Admissions Documents
  const docsList = document.getElementById("fmba-docs-list");
  if (docsList) {
    docsList.innerHTML = fmba.admissions.documents.map((d) => `<li>${d}</li>`).join("");
  }

  // 6. FAQs
  const faqContainer = document.getElementById("fmba-faq-list");
  if (faqContainer) {
    faqContainer.innerHTML = fmba.admissions.faqs
      .map(
        (f) => `
      <div class="reg-block">
        <h4>Q. ${f.q}</h4>
        <p style="font-size:0.9rem; color:var(--text-body); line-height:1.65;">${f.a}</p>
      </div>
    `
      )
      .join("");
  }
}

/**
 * Global Language Switcher for Home (index.html), Faculty (faculty/index.html), and MS/Ph.D. (ms-finance/index.html)
 */
window.setSiteLang = function (lang) {
  const isEn = lang === "en";
  const targetBtn = document.getElementById(isEn ? "btn-lang-en" : "btn-lang-ko");
  if (
    targetBtn &&
    targetBtn.tagName === "A" &&
    targetBtn.getAttribute("href") &&
    !targetBtn.classList.contains("active")
  ) {
    window.location.href = targetBtn.getAttribute("href");
    return;
  }
  document.documentElement.lang = isEn ? "en" : "ko";

  // 1. Toggle view sections
  const koSections = ["home-ko", "hero-ko", "faculty-ko", "ms-phd-ko"];
  const enSections = ["home-en", "hero-en", "faculty-en", "ms-phd-en"];

  koSections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("active", !isEn);
  });
  enSections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("active", isEn);
  });

  // 2. Toggle language button active states
  const btnKo = document.getElementById("btn-lang-ko");
  const btnEn = document.getElementById("btn-lang-en");
  if (btnKo) btnKo.classList.toggle("active", !isEn);
  if (btnEn) btnEn.classList.toggle("active", isEn);

  // 3. Update Header Brand & Navigation Links
  const brandSchool = document.querySelector(".brand-school");
  if (brandSchool) {
    brandSchool.textContent = isEn ? "Yonsei School of Business" : "연세대학교 경영대학";
  }

  const brandDept = document.querySelector(".brand-dept");
  if (brandDept) {
    brandDept.textContent = isEn ? "Finance Division" : "재무분야";
  }

  const brandLink = document.querySelector(".brand");
  if (brandLink) {
    const baseHref = brandLink.getAttribute("href").split("#")[0];
    brandLink.setAttribute("href", isEn ? `${baseHref}#en` : baseHref);
  }

  const navLinks = document.querySelectorAll(".main-nav .nav-link");
  navLinks.forEach((link) => {
    const rawHref = link.getAttribute("href") || "";
    const baseHref = rawHref.split("#")[0];
    if (baseHref.includes("faculty/")) {
      link.textContent = isEn ? "Faculty" : "교수진 (Faculty)";
      link.setAttribute("href", isEn ? `${baseHref}#en` : baseHref);
    } else if (baseHref.includes("ms-finance/")) {
      link.textContent = isEn ? "M.S. & Ph.D." : "석/박사과정 (MS/Ph.D.)";
      link.setAttribute("href", isEn ? `${baseHref}#en` : baseHref);
    } else if (baseHref.includes("fmba/")) {
      link.textContent = "Finance MBA (FMBA)";
      link.style.display = isEn ? "none" : "";
    } else if (baseHref.endsWith("index.html") || baseHref === "./" || baseHref === "../") {
      link.textContent = isEn ? "Overview" : "재무분야 소개";
      link.setAttribute("href", isEn ? `${baseHref}#en` : baseHref);
    }
  });

  // 4. Update Utility Bar Links
  const utilLinks = document.querySelectorAll(".utility-links a");
  if (utilLinks.length >= 3) {
    utilLinks[0].textContent = isEn ? "Yonsei School of Business ↗" : "연세대학교 경영대학 ↗";
    utilLinks[1].textContent = isEn ? "Graduate School ↗" : "일반대학원 ↗";
    utilLinks[2].textContent = isEn ? "Yonsei University ↗" : "연세대학교 ↗";
  }

  // 5. Update Footer Text
  const footerContainer = document.querySelector(".footer-container > div");
  if (footerContainer) {
    const titleEl = footerContainer.querySelector("div");
    const paragraphs = footerContainer.querySelectorAll("p");
    if (titleEl) {
      titleEl.textContent = isEn
        ? "Finance Division, Yonsei School of Business"
        : "연세대학교 경영대학 재무분야 (Finance Division, Yonsei School of Business)";
    }
    if (paragraphs.length >= 1) {
      paragraphs[0].textContent = isEn
        ? "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea · Building 212 (Yonsei School of Business)"
        : "03722 서울특별시 서대문구 연세로 50 212동(경영관) 연세대학교 경영대학";
    }
  }

  // 6. Update URL Hash
  if (isEn) {
    history.replaceState(null, "", "#en");
  } else {
    history.replaceState(null, "", window.location.pathname);
  }
};

window.setMsFinanceLang = window.setSiteLang;
