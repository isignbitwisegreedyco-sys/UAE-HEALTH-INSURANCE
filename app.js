const quoteForm = document.querySelector("#quote-form");
const panels = [...document.querySelectorAll("[data-panel]")];
const indicators = [...document.querySelectorAll("[data-step-indicator]")];
const stepCount = document.querySelector("#step-count");
const routeSummary = document.querySelector("#route-summary");
const matchNote = document.querySelector("#match-note");
const profileRows = [...document.querySelectorAll("[data-plan]")];
const selectedBrief = document.querySelector("#selected-brief");
const selectedProfileName = document.querySelector("#selected-profile-name");
const createBriefButton = document.querySelector("#create-brief");
const confirmation = document.querySelector("#form-confirmation");
const confirmationCopy = document.querySelector("#confirmation-copy");
const compareToggles = [...document.querySelectorAll("[data-compare-profile]")];
const compareCount = document.querySelector("#compare-count");
const compareButton = document.querySelector("#compare-selected");
const compareResult = document.querySelector("#compare-result");
const comparisonTable = document.querySelector("#comparison-table");
const profileButtons = [...document.querySelectorAll("[data-select-profile]")];
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

const profiles = {
  essential: {
    name: "Core check",
    focus: "A focused first look",
    lens: "Routine-care categories",
    firstCheck: "Provider list and access",
    review: "Co-payments, limits, and exclusions",
  },
  family: {
    name: "Family balance",
    focus: "A household-first view",
    lens: "Dependants and household fit",
    firstCheck: "Eligibility for each person",
    review: "Benefit limits and policy wording",
  },
  choice: {
    name: "More choice",
    focus: "A broader comparison",
    lens: "Provider and clinic choice",
    firstCheck: "Network and referral rules",
    review: "Cost sharing and exclusions",
  },
};

const profileOrder = {
  "Provider choice": ["choice", "family", "essential"],
  "Everyday costs": ["essential", "family", "choice"],
  "Family benefits": ["family", "choice", "essential"],
};

const comparisonRows = [
  ["Comparison lens", "lens"],
  ["First detail to check", "firstCheck"],
  ["Always review", "review"],
];

let currentStep = 1;
let selectedProfile = "";
let comparedProfiles = [];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

function showStep(step, moveFocus = false) {
  currentStep = step;
  panels.forEach((panel) => {
    panel.hidden = Number(panel.dataset.panel) !== step;
  });

  indicators.forEach((indicator) => {
    const indicatorStep = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle("is-current", indicatorStep === step);
    indicator.classList.toggle("is-complete", indicatorStep < step);
    if (indicatorStep === step) indicator.setAttribute("aria-current", "step");
    else indicator.removeAttribute("aria-current");
  });

  stepCount.textContent = `STEP ${step} OF 3`;
  confirmation.hidden = true;

  if (moveFocus) {
    panels.find((panel) => Number(panel.dataset.panel) === step).querySelector("h3").focus({ preventScroll: true });
  }
}

function activePanelIsValid() {
  const activePanel = panels.find((panel) => Number(panel.dataset.panel) === currentStep);
  const invalidControl = activePanel.querySelector(":invalid");
  if (!invalidControl) return true;

  invalidControl.reportValidity();
  return false;
}

function updateRouteSummary() {
  const values = new FormData(quoteForm);
  const summaryValues = [values.get("household"), values.get("emirate"), values.get("ageBand"), values.get("priority")];
  routeSummary.replaceChildren(...summaryValues.map((value) => {
    const chip = document.createElement("span");
    chip.className = "summary-chip";
    chip.textContent = value;
    return chip;
  }));
}

function updateProfiles() {
  const values = new FormData(quoteForm);
  const priority = values.get("priority");
  const order = profileOrder[priority] || Object.keys(profiles);
  const labels = {
    "Provider choice": "Provider choice",
    "Everyday costs": "Everyday costs",
    "Family benefits": "Family benefits",
  };
  matchNote.textContent = `Starting lens: ${labels[priority] || "your selected priority"}. This is a demo sort, not a plan recommendation.`;

  order.forEach((id) => {
    document.querySelector(`[data-plan="${id}"]`).parentElement.append(document.querySelector(`[data-plan="${id}"]`));
  });
}

function updateComparisonState() {
  const count = comparedProfiles.length;
  compareCount.textContent = count < 2
    ? `Choose ${2 - count} more profile${count === 0 ? "s" : ""} to compare.`
    : `${count} sample profiles selected.`;
  compareButton.disabled = count < 2;
  compareToggles.forEach((button) => {
    const isSelected = comparedProfiles.includes(button.dataset.compareProfile);
    button.setAttribute("aria-pressed", String(isSelected));
    button.textContent = isSelected ? "✓ Added" : "+ Compare";
  });

  if (count < 2) {
    compareResult.hidden = true;
    comparisonTable.replaceChildren();
  }
}

function renderComparison() {
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = "Sample profile comparison. These are comparison prompts, not policy benefits.";
  table.append(caption);

  const head = document.createElement("thead");
  const headingRow = document.createElement("tr");
  const compareHeading = document.createElement("th");
  compareHeading.scope = "col";
  compareHeading.textContent = "What to weigh";
  headingRow.append(compareHeading);

  comparedProfiles.forEach((id) => {
    const heading = document.createElement("th");
    heading.scope = "col";
    heading.textContent = profiles[id].name;
    headingRow.append(heading);
  });

  head.append(headingRow);
  table.append(head);

  const body = document.createElement("tbody");
  comparisonRows.forEach(([label, key]) => {
    const row = document.createElement("tr");
    const rowHeading = document.createElement("th");
    rowHeading.scope = "row";
    rowHeading.textContent = label;
    row.append(rowHeading);

    comparedProfiles.forEach((id) => {
      const cell = document.createElement("td");
      cell.textContent = profiles[id][key];
      row.append(cell);
    });

    body.append(row);
  });
  table.append(body);
  comparisonTable.replaceChildren(table);
  compareResult.hidden = false;
}

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!activePanelIsValid()) return;

    const nextStep = Number(button.dataset.next);
    if (nextStep === 3) {
      updateRouteSummary();
      updateProfiles();
    }

    showStep(nextStep, true);
    if (window.matchMedia("(max-width: 860px)").matches) {
      document.querySelector("#quote").scrollIntoView({ behavior: scrollBehavior, block: "start" });
    }
  });
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => showStep(Number(button.dataset.back), true));
});

profileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedProfile = button.dataset.selectProfile;
    profileButtons.forEach((option) => {
      const isSelected = option === button;
      option.setAttribute("aria-pressed", String(isSelected));
      option.closest(".profile-row").classList.toggle("is-selected", isSelected);
    });
    selectedProfileName.textContent = profiles[selectedProfile].name;
    selectedBrief.hidden = false;
    createBriefButton.disabled = false;
  });
});

compareToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.compareProfile;
    if (comparedProfiles.includes(id)) {
      comparedProfiles = comparedProfiles.filter((profile) => profile !== id);
    } else if (comparedProfiles.length < 3) {
      comparedProfiles = [...comparedProfiles, id];
    }
    updateComparisonState();
  });
});

compareButton.addEventListener("click", () => {
  if (comparedProfiles.length < 2) return;
  renderComparison();
  compareResult.scrollIntoView({ behavior: scrollBehavior, block: "nearest" });
});

document.querySelector("#clear-compare").addEventListener("click", () => {
  comparedProfiles = [];
  updateComparisonState();
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedProfile) return;

  const values = new FormData(quoteForm);
  confirmationCopy.textContent = `${profiles[selectedProfile].name} is selected for your ${values.get("household").toLowerCase()} in ${values.get("emirate")}. This is a local demo only; no quote request was sent.`;
  confirmation.hidden = false;
  confirmation.scrollIntoView({ behavior: scrollBehavior, block: "nearest" });
});

document.querySelector("#start-again").addEventListener("click", () => {
  quoteForm.reset();
  selectedProfile = "";
  comparedProfiles = [];
  profileButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.closest(".profile-row").classList.remove("is-selected");
  });
  selectedBrief.hidden = true;
  createBriefButton.disabled = true;
  updateComparisonState();
  confirmation.hidden = true;
  showStep(1, true);
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.querySelector(".sr-only").textContent = isExpanded ? "Open navigation" : "Close navigation";
  primaryNav.classList.toggle("is-open", !isExpanded);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Open navigation";
    primaryNav.classList.remove("is-open");
  });
});

showStep(1);
