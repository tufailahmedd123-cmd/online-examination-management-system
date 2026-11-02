/**
 * ONLINE EXAMINATION MANAGEMENT SYSTEM (OEMS) - CORE JAVASCRIPT
 * University Web Technology Project - BSIT
 * Pure Vanilla JavaScript (ES6+) with LocalStorage Persistence
 */

// ==========================================================================
// 1. DEFAULT SEED DATA & CONSTANTS
// ==========================================================================

const DEFAULT_USERS = [
  {
    id: "usr_admin_1",
    name: "Dr. Robert Vance",
    email: "admin@oems.com",
    password: "admin123",
    role: "admin",
    studentId: "FAC-IT-01",
    department: "Information Technology",
    semester: "Faculty",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    createdAt: "2026-01-10T09:00:00Z"
  },
  {
    id: "usr_student_1",
    name: "Alex Rivera",
    email: "student@oems.com",
    password: "student123",
    role: "student",
    studentId: "BSIT-2024-108",
    department: "Information Technology",
    semester: "Semester 5",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
    createdAt: "2026-02-01T10:30:00Z"
  },
  {
    id: "usr_student_2",
    name: "Sarah Jenkins",
    email: "sarah@oems.com",
    password: "student123",
    role: "student",
    studentId: "BSIT-2024-112",
    department: "Computer Science",
    semester: "Semester 5",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    createdAt: "2026-02-03T11:15:00Z"
  }
];

const DEFAULT_EXAMS = [
  {
    id: "EXAM-HTML-101",
    title: "HTML5 Fundamentals & Web Semantics",
    subject: "HTML",
    duration: 10, // minutes
    totalQuestions: 7,
    marksPerQuestion: 2,
    passingPercentage: 50,
    startDate: "2026-11-01",
    startTime: "09:00",
    status: "Active",
    instructions: "Answer all questions. Each question carries 2 marks. No negative marking. Do not switch tabs during examination."
  },
  {
    id: "EXAM-CSS-201",
    title: "Modern CSS3, Flexbox & Responsive Layouts",
    subject: "CSS",
    duration: 12,
    totalQuestions: 7,
    marksPerQuestion: 2,
    passingPercentage: 50,
    startDate: "2026-11-02",
    startTime: "10:30",
    status: "Active",
    instructions: "Topics include Box Model, Flexbox, CSS Grid, Media Queries, and Selectors. Ensure submission before timer finishes."
  },
  {
    id: "EXAM-JS-301",
    title: "JavaScript Basics & ES6+ Core Engine",
    subject: "JavaScript",
    duration: 15,
    totalQuestions: 8,
    marksPerQuestion: 2,
    passingPercentage: 50,
    startDate: "2026-11-03",
    startTime: "11:00",
    status: "Active",
    instructions: "Tests variables, closures, array methods, event loop, and asynchronous JavaScript fundamentals."
  },
  {
    id: "EXAM-CF-101",
    title: "Computer Fundamentals & System Architecture",
    subject: "Computer Fundamentals",
    duration: 10,
    totalQuestions: 7,
    marksPerQuestion: 2,
    passingPercentage: 50,
    startDate: "2026-11-04",
    startTime: "14:00",
    status: "Active",
    instructions: "Covers CPU components, Memory Hierarchy, Cache, Boolean Algebra, and Operating System abstractions."
  },
  {
    id: "EXAM-WT-401",
    title: "Web Technology & Client-Server Architecture",
    subject: "Web Technology",
    duration: 12,
    totalQuestions: 7,
    marksPerQuestion: 2,
    passingPercentage: 50,
    startDate: "2026-11-05",
    startTime: "15:30",
    status: "Active",
    instructions: "Covers HTTP verbs, status codes, RESTful API design, cookies vs LocalStorage, and web security principles."
  }
];

const DEFAULT_QUESTIONS = [
  // HTML (7 Questions)
  {
    id: "q_html_1",
    subject: "HTML",
    text: "What is the primary semantic purpose of the `<main>` element in HTML5?",
    options: [
      "To contain the global navigation links for the entire website",
      "To enclose the dominant, central content unique to the document body",
      "To specify copyright information and legal disclaimers at the bottom",
      "To render sidebar advertisements and related widget links"
    ],
    correctIndex: 1,
    explanation: "The `<main>` tag defines the central content unique to that document. It should not contain repeat sections like headers, footers, or navigation bars."
  },
  {
    id: "q_html_2",
    subject: "HTML",
    text: "Which HTML5 attribute is used to provide a short hint describing the expected value of an input field?",
    options: [
      "title",
      "hint",
      "placeholder",
      "value"
    ],
    correctIndex: 2,
    explanation: "The `placeholder` attribute displays a light temporary text inside an input field until the user types into it."
  },
  {
    id: "q_html_3",
    subject: "HTML",
    text: "In HTML5 forms, which attribute ensures that an input field cannot be submitted while empty?",
    options: [
      "validate='true'",
      "mandatory",
      "required",
      "notnull"
    ],
    correctIndex: 2,
    explanation: "The boolean `required` attribute triggers native client-side validation preventing form submission if the field is empty."
  },
  {
    id: "q_html_4",
    subject: "HTML",
    text: "Which semantic tag should be used to mark independent, self-contained content such as a blog post or news story?",
    options: [
      "<section>",
      "<article>",
      "<div>",
      "<aside>"
    ],
    correctIndex: 1,
    explanation: "`<article>` represents an independent, distributable piece of content like a blog post or newspaper article."
  },
  {
    id: "q_html_5",
    subject: "HTML",
    text: "What is the purpose of the `<meta charset='UTF-8'>` declaration in an HTML document?",
    options: [
      "It determines the viewport rendering scale on mobile devices",
      "It specifies the Unicode character encoding for international characters",
      "It acts as a search engine optimization keyword tag",
      "It defines the HTTP compression algorithm used by the server"
    ],
    correctIndex: 1,
    explanation: "`UTF-8` covers almost all characters and symbols in the world, preventing character garbling."
  },
  {
    id: "q_html_6",
    subject: "HTML",
    text: "Which HTML attribute specifies an alternate text for an image when the image cannot be displayed?",
    options: [
      "title",
      "src",
      "alt",
      "caption"
    ],
    correctIndex: 2,
    explanation: "The `alt` attribute provides accessible alternative text for screen readers and in case the image fails to load."
  },
  {
    id: "q_html_7",
    subject: "HTML",
    text: "Which element is used in HTML5 to embed vector graphics directly into the DOM?",
    options: [
      "<canvas>",
      "<svg>",
      "<vector>",
      "<graphic>"
    ],
    correctIndex: 1,
    explanation: "`<svg>` (Scalable Vector Graphics) allows XML-based vector graphics to be embedded and styled with CSS directly in HTML."
  },

  // CSS (7 Questions)
  {
    id: "q_css_1",
    subject: "CSS",
    text: "According to the standard CSS Box Model, what is the correct order from outermost to innermost layer?",
    options: [
      "Margin -> Border -> Padding -> Content",
      "Border -> Margin -> Padding -> Content",
      "Padding -> Border -> Margin -> Content",
      "Margin -> Padding -> Border -> Content"
    ],
    correctIndex: 0,
    explanation: "The box model layers from outside in are Margin (outer whitespace), Border, Padding (inner whitespace), and Content."
  },
  {
    id: "q_css_2",
    subject: "CSS",
    text: "Which CSS property specifies how flex items align along the cross axis inside a flex container?",
    options: [
      "justify-content",
      "align-items",
      "flex-direction",
      "align-content"
    ],
    correctIndex: 1,
    explanation: "`justify-content` controls main axis distribution, while `align-items` controls alignment along the cross axis."
  },
  {
    id: "q_css_3",
    subject: "CSS",
    text: "When `box-sizing: border-box;` is applied to an element, what elements are included in its declared `width`?",
    options: [
      "Only the content width",
      "Content width and margin",
      "Content width, padding, and border",
      "Content width, padding, border, and margin"
    ],
    correctIndex: 2,
    explanation: "`border-box` includes padding and borders in the element's total declared width and height, preventing layout breakage."
  },
  {
    id: "q_css_4",
    subject: "CSS",
    text: "Which CSS unit is relative to the font-size of the root `<html>` element?",
    options: [
      "em",
      "rem",
      "vw",
      "ch"
    ],
    correctIndex: 1,
    explanation: "`rem` stands for Root EM and is always relative to the root `<html>` element's font size (usually 16px by default)."
  },
  {
    id: "q_css_5",
    subject: "CSS",
    text: "Which CSS selector has the HIGHEST specificity according to the CSS cascade rules?",
    options: [
      "Element selector (e.g., `div`)",
      "Class selector (e.g., `.card`)",
      "ID selector (e.g., `#main-header`)",
      "Universal selector (e.g., `*`)"
    ],
    correctIndex: 2,
    explanation: "ID selectors carry specificity (0, 1, 0, 0), which overrides class selectors (0, 0, 1, 0) and element selectors (0, 0, 0, 1)."
  },
  {
    id: "q_css_6",
    subject: "CSS",
    text: "What does `display: none;` do to an element compared to `visibility: hidden;`?",
    options: [
      "Both leave empty physical space in the layout",
      "`display: none` completely removes the element from the document layout flow; `visibility: hidden` keeps the empty space",
      "`visibility: hidden` removes the element from the DOM completely",
      "`display: none` changes the opacity to 0 but keeps click events active"
    ],
    correctIndex: 1,
    explanation: "`display: none` collapses the element's space entirely, whereas `visibility: hidden` hides rendering but preserves spatial dimensions."
  },
  {
    id: "q_css_7",
    subject: "CSS",
    text: "In CSS Grid, which property is used to define the sizes of columns in a grid container?",
    options: [
      "grid-auto-flow",
      "grid-template-columns",
      "grid-column-gap",
      "grid-area-columns"
    ],
    correctIndex: 1,
    explanation: "`grid-template-columns` defines the track sizing functions and line names of grid columns."
  },

  // JavaScript (8 Questions)
  {
    id: "q_js_1",
    subject: "JavaScript",
    text: "What will be the output of `typeof null` in standard JavaScript?",
    options: [
      "'null'",
      "'undefined'",
      "'object'",
      "'boolean'"
    ],
    correctIndex: 2,
    explanation: "`typeof null` returns `'object'` due to a historical legacy quirk in JavaScript's initial type tag implementation."
  },
  {
    id: "q_js_2",
    subject: "JavaScript",
    text: "What is the primary difference between `let` and `var` in ES6 JavaScript?",
    options: [
      "`let` is function-scoped while `var` is block-scoped",
      "`let` is block-scoped and does not allow re-declaration in the same scope, whereas `var` is function-scoped",
      "`var` variables cannot be reassigned once initialized",
      "`let` cannot be used inside loops"
    ],
    correctIndex: 1,
    explanation: "`let` enforces block scope (`{ ... }`) and temporal dead zones, preventing accidental variable leaking and duplicate declarations."
  },
  {
    id: "q_js_3",
    subject: "JavaScript",
    text: "Which array method creates a NEW array populated with the results of calling a provided function on every element?",
    options: [
      "forEach()",
      "filter()",
      "map()",
      "reduce()"
    ],
    correctIndex: 2,
    explanation: "`map()` returns a brand new array with transformed elements without mutating the original array."
  },
  {
    id: "q_js_4",
    subject: "JavaScript",
    text: "What is a 'Closure' in JavaScript?",
    options: [
      "A function combined with references to its surrounding lexical environment",
      "The process of closing a browser tab with window.close()",
      "An anonymous function that executes only once at build time",
      "A method to terminate an infinite loop"
    ],
    correctIndex: 0,
    explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has finished executing."
  },
  {
    id: "q_js_5",
    subject: "JavaScript",
    text: "What does the `===` strict equality operator evaluate that `==` does NOT?",
    options: [
      "Memory pointer references only",
      "Both value and data type without performing implicit type coercion",
      "Whether the variables were declared using `const`",
      "Case sensitivity in numbers"
    ],
    correctIndex: 1,
    explanation: "Strict equality (`===`) checks both value and type without implicit coercion (e.g., `5 === '5'` is false)."
  },
  {
    id: "q_js_6",
    subject: "JavaScript",
    text: "Which object is used in modern browsers to persist key-value pairs with NO expiration date across browser restarts?",
    options: [
      "sessionStorage",
      "localStorage",
      "document.cookie",
      "IndexedDB.cache"
    ],
    correctIndex: 1,
    explanation: "`localStorage` persists data until explicitly cleared by the user or code, even after closing the browser."
  },
  {
    id: "q_js_7",
    subject: "JavaScript",
    text: "What will `Promise.all([p1, p2, p3])` do if ANY one of the promises rejects?",
    options: [
      "Wait for the others to finish and return null",
      "Immediately reject with the reason of the first promise that rejected",
      "Retry the rejected promise up to 3 times",
      "Resolve with only the promises that succeeded"
    ],
    correctIndex: 1,
    explanation: "`Promise.all` follows an 'all-or-nothing' approach and rejects immediately upon the first rejected promise."
  },
  {
    id: "q_js_8",
    subject: "JavaScript",
    text: "What will `[1, 2, 3].reduce((acc, curr) => acc + curr, 0)` evaluate to?",
    options: [
      "0",
      "5",
      "6",
      "'123'"
    ],
    correctIndex: 2,
    explanation: "The reducer accumulates 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6."
  },

  // Computer Fundamentals (7 Questions)
  {
    id: "q_cf_1",
    subject: "Computer Fundamentals",
    text: "Which component of the Central Processing Unit (CPU) is responsible for performing arithmetic operations and logical decisions?",
    options: [
      "Control Unit (CU)",
      "Arithmetic Logic Unit (ALU)",
      "Program Counter (PC)",
      "Memory Data Register (MDR)"
    ],
    correctIndex: 1,
    explanation: "The ALU (Arithmetic Logic Unit) executes mathematical computations and boolean logic operations."
  },
  {
    id: "q_cf_2",
    subject: "Computer Fundamentals",
    text: "What type of computer memory is volatile and loses its contents immediately when power is turned off?",
    options: [
      "Read-Only Memory (ROM)",
      "Random Access Memory (RAM)",
      "Flash Solid State Drive (SSD)",
      "Magnetic Hard Disk Drive (HDD)"
    ],
    correctIndex: 1,
    explanation: "RAM is primary volatile memory used by active processes; it requires continuous electrical power to retain data."
  },
  {
    id: "q_cf_3",
    subject: "Computer Fundamentals",
    text: "What is the decimal equivalent of the binary number `1010`?",
    options: [
      "8",
      "10",
      "12",
      "14"
    ],
    correctIndex: 1,
    explanation: "(1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0) = 8 + 0 + 2 + 0 = 10."
  },
  {
    id: "q_cf_4",
    subject: "Computer Fundamentals",
    text: "Which layer of memory in computer architecture provides the fastest access time to the CPU?",
    options: [
      "Level 3 Cache",
      "Main RAM",
      "CPU Registers",
      "Solid State Drive"
    ],
    correctIndex: 2,
    explanation: "CPU Registers are located directly inside the processor core and operate within single clock cycles."
  },
  {
    id: "q_cf_5",
    subject: "Computer Fundamentals",
    text: "What is the primary role of an Operating System Kernel?",
    options: [
      "To provide graphical game animations",
      "To manage hardware resources, memory, processes, and CPU scheduling",
      "To browse the web using HTTP protocols",
      "To compile high-level programming code into binaries"
    ],
    correctIndex: 1,
    explanation: "The kernel is the core of an OS that bridges application software and physical computer hardware."
  },
  {
    id: "q_cf_6",
    subject: "Computer Fundamentals",
    text: "How many bits are in one standard Byte?",
    options: [
      "4",
      "8",
      "16",
      "32"
    ],
    correctIndex: 1,
    explanation: "1 Byte is defined as exactly 8 bits."
  },
  {
    id: "q_cf_7",
    subject: "Computer Fundamentals",
    text: "Which logic gate outputs TRUE (1) only when BOTH input signals are TRUE (1)?",
    options: [
      "OR gate",
      "XOR gate",
      "AND gate",
      "NOR gate"
    ],
    correctIndex: 2,
    explanation: "An AND gate requires all inputs to be high (1) to produce a high (1) output."
  },

  // Web Technology (7 Questions)
  {
    id: "q_wt_1",
    subject: "Web Technology",
    text: "Which HTTP status code signifies that a requested resource was not found on the server?",
    options: [
      "200 OK",
      "301 Moved Permanently",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    correctIndex: 2,
    explanation: "HTTP 404 indicates the client can communicate with the server, but the server cannot find what was requested."
  },
  {
    id: "q_wt_2",
    subject: "Web Technology",
    text: "In RESTful API design, which HTTP method is traditionally used to UPDATE an existing resource completely?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctIndex: 2,
    explanation: "`PUT` is idempotent and replaces an entire target resource, while `PATCH` applies partial modifications."
  },
  {
    id: "q_wt_3",
    subject: "Web Technology",
    text: "What does DNS stand for in computer networking?",
    options: [
      "Data Network Server",
      "Domain Name System",
      "Digital Navigation Standard",
      "Direct Network Socket"
    ],
    correctIndex: 1,
    explanation: "The Domain Name System (DNS) translates human-readable domain names (like example.com) into numerical IP addresses."
  },
  {
    id: "q_wt_4",
    subject: "Web Technology",
    text: "Which security header helps protect websites against Cross-Site Scripting (XSS) attacks by controlling allowed resources?",
    options: [
      "Content-Security-Policy (CSP)",
      "Strict-Transport-Security (HSTS)",
      "X-Powered-By",
      "Access-Control-Allow-Origin"
    ],
    correctIndex: 0,
    explanation: "Content Security Policy (CSP) restricts the sources from which scripts, styles, and other resources can be loaded."
  },
  {
    id: "q_wt_5",
    subject: "Web Technology",
    text: "What is the primary difference between HTTP and HTTPS?",
    options: [
      "HTTPS uses UDP instead of TCP",
      "HTTPS encrypts communication between browser and server using TLS/SSL",
      "HTTP is faster and more secure for banking",
      "HTTPS does not support cookies"
    ],
    correctIndex: 1,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) encrypts all data in transit using TLS/SSL encryption certificates."
  },
  {
    id: "q_wt_6",
    subject: "Web Technology",
    text: "Which protocol is designed for full-duplex, persistent, real-time two-way communication between browser and server?",
    options: [
      "HTTP/1.0",
      "WebSocket",
      "FTP",
      "SMTP"
    ],
    correctIndex: 1,
    explanation: "WebSockets open a persistent bidirectional connection over a single TCP socket for real-time messaging."
  },
  {
    id: "q_wt_7",
    subject: "Web Technology",
    text: "What mechanism prevents a script from a different origin from reading sensitive data from another domain?",
    options: [
      "Single Page Policy",
      "Same-Origin Policy (SOP)",
      "Cross-Domain Filter",
      "Browser Cache Rule"
    ],
    correctIndex: 1,
    explanation: "The Same-Origin Policy (SOP) is a critical security mechanism that isolates potentially malicious documents."
  }
];

const DEFAULT_ATTEMPTS = [
  {
    id: "att_demo_101",
    examId: "EXAM-HTML-101",
    examTitle: "HTML5 Fundamentals & Web Semantics",
    subject: "HTML",
    userId: "usr_student_1",
    studentName: "Alex Rivera",
    studentId: "BSIT-2024-108",
    totalQuestions: 7,
    attemptedCount: 7,
    correctCount: 6,
    incorrectCount: 1,
    unansweredCount: 0,
    totalMarks: 14,
    obtainedMarks: 12,
    percentage: 85.7,
    status: "Pass",
    grade: "A",
    timeSpentSeconds: 285,
    submittedAt: "2026-11-01T10:15:30Z",
    answers: {
      "q_html_1": 1,
      "q_html_2": 2,
      "q_html_3": 2,
      "q_html_4": 1,
      "q_html_5": 1,
      "q_html_6": 2,
      "q_html_7": 0 // incorrect
    }
  },
  {
    id: "att_demo_102",
    examId: "EXAM-CSS-201",
    examTitle: "Modern CSS3, Flexbox & Responsive Layouts",
    subject: "CSS",
    userId: "usr_student_2",
    studentName: "Sarah Jenkins",
    studentId: "BSIT-2024-112",
    totalQuestions: 7,
    attemptedCount: 7,
    correctCount: 5,
    incorrectCount: 2,
    unansweredCount: 0,
    totalMarks: 14,
    obtainedMarks: 10,
    percentage: 71.4,
    status: "Pass",
    grade: "B",
    timeSpentSeconds: 410,
    submittedAt: "2026-11-02T11:45:00Z",
    answers: {}
  }
];

const DEFAULT_NOTIFICATIONS = [
  {
    id: "notif_1",
    title: "New Examination Published",
    message: "Web Technology & Client-Server Architecture (EXAM-WT-401) is now live and available for examination.",
    type: "info",
    time: "2 hours ago",
    read: false
  },
  {
    id: "notif_2",
    title: "Examination Result Released",
    message: "Your evaluation for HTML5 Fundamentals & Web Semantics has been published. Grade: A (85.7%).",
    type: "success",
    time: "1 day ago",
    read: true
  },
  {
    id: "notif_3",
    title: "System Maintenance Notice",
    message: "Scheduled platform optimization and database backup on Sunday, 02:00 AM UTC.",
    type: "warning",
    time: "2 days ago",
    read: true
  }
];

// ==========================================================================
// 2. LOCALSTORAGE STORAGE MANAGER
// ==========================================================================

const StorageManager = {
  get(key, defaultValue) {
    try {
      const data = localStorage.getItem(`oems_${key}`);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error(`Error reading ${key} from localStorage:`, e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(`oems_${key}`, JSON.stringify(value));
    } catch (e) {
      console.error(`Error writing ${key} to localStorage:`, e);
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(`oems_${key}`);
    } catch (e) {
      console.error(`Error removing ${key} from localStorage:`, e);
    }
  },
  initializeDefaults() {
    if (!localStorage.getItem("oems_initialized")) {
      this.resetToDefaults();
    }
  },
  resetToDefaults() {
    this.set("users", DEFAULT_USERS);
    this.set("exams", DEFAULT_EXAMS);
    this.set("questions", DEFAULT_QUESTIONS);
    this.set("attempts", DEFAULT_ATTEMPTS);
    this.set("notifications", DEFAULT_NOTIFICATIONS);
    this.set("theme", "light");
    localStorage.setItem("oems_initialized", "true");
  }
};

// ==========================================================================
// 3. APPLICATION STATE
// ==========================================================================

const AppState = {
  currentUser: null,
  activeView: "landing",
  activeSubView: "dashboard",
  theme: "light",

  // Online Exam Active State
  activeExam: null,
  examQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {},       // questionId -> selectedIndex
  markedForReview: {},    // questionId -> boolean
  examTimerInterval: null,
  secondsRemaining: 0,
  examDurationSeconds: 0,
  tabSwitchViolations: 0,
  isExamSubmitted: false,

  // Selected item for modals/reviews
  selectedAttemptForReview: null,
  selectedExamForDetails: null,
  editingExamId: null,
  editingQuestionId: null,

  // Charts references
  adminPerformanceChart: null,
  adminSubjectsChart: null
};

// ==========================================================================
// 4. UI NOTIFICATIONS & MODAL HELPERS
// ==========================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: "fa-circle-check",
    error: "fa-circle-xmark",
    warning: "fa-triangle-exclamation",
    info: "fa-circle-info"
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-circle-info'}" style="font-size: 1.15rem; color: var(--${type});"></i>
    <div style="flex: 1; font-size: 0.9rem; font-weight: 500;">${message}</div>
    <button class="toast-close" style="color: var(--text-muted); cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

function showConfirmModal(title, message, onConfirm, confirmBtnText = "Confirm", isDestructive = false) {
  const modal = document.getElementById("confirm-modal");
  if (!modal) return;

  document.getElementById("confirm-modal-title").textContent = title;
  document.getElementById("confirm-modal-message").textContent = message;

  const confirmBtn = document.getElementById("confirm-modal-action-btn");
  confirmBtn.textContent = confirmBtnText;
  confirmBtn.className = isDestructive ? "btn btn-danger" : "btn btn-primary";

  // Clean clone to remove previous listeners
  const newConfirmBtn = confirmBtn.cloneNode(true);
  confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

  newConfirmBtn.addEventListener("click", () => {
    closeModal("confirm-modal");
    if (typeof onConfirm === "function") {
      onConfirm();
    }
  });

  openModal("confirm-modal");
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
}

// Close modals when clicking overlay background
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

// ==========================================================================
// 5. THEME MANAGER (DARK / LIGHT MODE)
// ==========================================================================

function setTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  StorageManager.set("theme", theme);

  const themeIcon = document.querySelectorAll(".theme-toggle-icon");
  themeIcon.forEach(icon => {
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun theme-toggle-icon";
    } else {
      icon.className = "fa-solid fa-moon theme-toggle-icon";
    }
  });
}

function toggleTheme() {
  const nextTheme = AppState.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, "info");
}

// ==========================================================================
// 6. AUTHENTICATION & SESSION MANAGEMENT
// ==========================================================================

function checkActiveSession() {
  const savedUser = StorageManager.get("currentUser", null);
  if (savedUser) {
    AppState.currentUser = savedUser;
    routeByRole(savedUser.role);
  } else {
    showView("landing");
  }
}

function handleLogin(email, password, remember = true) {
  const users = StorageManager.get("users", DEFAULT_USERS);
  const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());

  if (!user) {
    showToast("Invalid credentials. No user found with this email.", "error");
    return false;
  }

  if (user.password !== password) {
    showToast("Incorrect password. Please verify and try again.", "error");
    return false;
  }

  // Login successful
  AppState.currentUser = user;
  if (remember) {
    StorageManager.set("currentUser", user);
  }

  closeModal("login-modal");
  showToast(`Welcome back, ${user.name}!`, "success");
  routeByRole(user.role);
  return true;
}

function handleRegistration(fullName, email, studentId, department, semester, password, confirmPassword) {
  if (!fullName || !email || !studentId || !password) {
    showToast("Please fill in all required fields.", "warning");
    return false;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match. Please re-enter.", "error");
    return false;
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters long.", "warning");
    return false;
  }

  const users = StorageManager.get("users", DEFAULT_USERS);
  const exists = users.some(u => u.email.toLowerCase() === email.trim().toLowerCase() || u.studentId === studentId.trim());

  if (exists) {
    showToast("User with this email or Student ID already exists.", "error");
    return false;
  }

  const newUser = {
    id: `usr_student_${Date.now()}`,
    name: fullName.trim(),
    email: email.trim().toLowerCase(),
    password: password,
    role: "student",
    studentId: studentId.trim(),
    department: department || "Information Technology",
    semester: semester || "Semester 1",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  StorageManager.set("users", users);

  // Auto-login registered student
  AppState.currentUser = newUser;
  StorageManager.set("currentUser", newUser);

  closeModal("register-modal");
  showToast("Account successfully created! Welcome to OEMS.", "success");
  routeByRole("student");
  return true;
}

function handleLogout() {
  showConfirmModal("Confirm Sign Out", "Are you sure you want to end your active session?", () => {
    AppState.currentUser = null;
    StorageManager.remove("currentUser");
    showToast("Signed out successfully.", "info");
    showView("landing");
  });
}

function routeByRole(role) {
  if (role === "admin") {
    showView("admin");
    showAdminSubView("dashboard");
  } else {
    showView("student");
    showStudentSubView("dashboard");
  }
  updateUserHeaders();
}

function updateUserHeaders() {
  const user = AppState.currentUser;
  if (!user) return;

  const nameElements = document.querySelectorAll(".current-user-name");
  nameElements.forEach(el => el.textContent = user.name);

  const roleElements = document.querySelectorAll(".current-user-role");
  roleElements.forEach(el => el.textContent = user.role === "admin" ? "System Administrator" : `${user.studentId} • ${user.department}`);

  const avatarElements = document.querySelectorAll(".current-user-avatar");
  avatarElements.forEach(img => {
    if (img.tagName === "IMG") {
      img.src = user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";
    }
  });
}

// ==========================================================================
// 7. ROUTING & VIEW NAVIGATION
// ==========================================================================

function showView(viewName) {
  AppState.activeView = viewName;

  const views = ["landing-view", "student-portal", "admin-portal", "exam-taking-view"];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove("active");
    }
  });

  const target = document.getElementById(
    viewName === "landing" ? "landing-view" :
    viewName === "student" ? "student-portal" :
    viewName === "admin" ? "admin-portal" :
    viewName === "exam" ? "exam-taking-view" : "landing-view"
  );

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewName === "landing") {
    renderLandingPublicExams();
  }
}

function showStudentSubView(subViewName) {
  AppState.activeSubView = subViewName;

  const subViews = [
    "student-dashboard-view",
    "student-exams-view",
    "student-history-view",
    "student-results-view",
    "student-profile-view",
    "student-settings-view"
  ];

  subViews.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  const target = document.getElementById(`student-${subViewName}-view`);
  if (target) target.classList.add("active");

  // Update student sidebar active class
  document.querySelectorAll("#student-portal .nav-item").forEach(item => {
    if (item.dataset.view === subViewName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Render specific subview data
  if (subViewName === "dashboard") renderStudentDashboard();
  if (subViewName === "exams") renderStudentAvailableExams();
  if (subViewName === "history") renderStudentExamHistory();
  if (subViewName === "results") renderStudentResults();
  if (subViewName === "profile") renderStudentProfileForm();

  // Close mobile sidebar if open
  closeMobileSidebar();
}

function showAdminSubView(subViewName) {
  AppState.activeSubView = subViewName;

  const subViews = [
    "admin-dashboard-view",
    "admin-exams-view",
    "admin-questions-view",
    "admin-students-view",
    "admin-results-view",
    "admin-reports-view",
    "admin-settings-view"
  ];

  subViews.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("active");
  });

  const target = document.getElementById(`admin-${subViewName}-view`);
  if (target) target.classList.add("active");

  // Update admin sidebar active class
  document.querySelectorAll("#admin-portal .nav-item").forEach(item => {
    if (item.dataset.view === subViewName) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Render specific admin subview
  if (subViewName === "dashboard") renderAdminDashboard();
  if (subViewName === "exams") renderAdminExamsTable();
  if (subViewName === "questions") renderAdminQuestionsTable();
  if (subViewName === "students") renderAdminStudentsTable();
  if (subViewName === "results") renderAdminResultsTable();
  if (subViewName === "reports") renderAdminReports();

  closeMobileSidebar();
}

function closeMobileSidebar() {
  document.querySelectorAll(".sidebar").forEach(sb => sb.classList.remove("mobile-open"));
}

// ==========================================================================
// 8. LANDING PAGE MODULE
// ==========================================================================

function renderLandingPublicExams() {
  const container = document.getElementById("landing-exams-container");
  if (!container) return;

  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  container.innerHTML = exams.map(exam => `
    <div class="exam-card-modern">
      <div class="exam-card-header">
        <span class="badge badge-primary">${exam.subject}</span>
        <span class="badge badge-success"><i class="fa-solid fa-circle" style="font-size: 0.5rem;"></i> Active</span>
      </div>
      <h3 class="exam-card-title">${exam.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.88rem;">${exam.instructions.substring(0, 85)}...</p>
      
      <div class="exam-card-meta">
        <span><i class="fa-regular fa-clock"></i> ${exam.duration} Mins</span>
        <span><i class="fa-regular fa-circle-question"></i> ${exam.totalQuestions} Questions</span>
        <span><i class="fa-solid fa-award"></i> ${exam.totalQuestions * (exam.marksPerQuestion || 2)} Marks</span>
      </div>

      <button class="btn btn-primary" onclick="initiateExamStart('${exam.id}')">
        <i class="fa-solid fa-play"></i> Start Examination
      </button>
    </div>
  `).join("");
}

// ==========================================================================
// 9. STUDENT DASHBOARD MODULE
// ==========================================================================

function renderStudentDashboard() {
  const user = AppState.currentUser;
  if (!user) return;

  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const studentAttempts = attempts.filter(a => a.userId === user.id);

  // Stats calculation
  const totalAvailable = exams.filter(e => e.status === "Active").length;
  const completedCount = studentAttempts.length;
  const upcomingCount = exams.filter(e => e.status === "Upcoming").length;

  let averageScore = 0;
  if (studentAttempts.length > 0) {
    const totalPercentage = studentAttempts.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
    averageScore = (totalPercentage / studentAttempts.length).toFixed(1);
  }

  document.getElementById("student-stat-available").textContent = totalAvailable;
  document.getElementById("student-stat-completed").textContent = completedCount;
  document.getElementById("student-stat-upcoming").textContent = upcomingCount;
  document.getElementById("student-stat-avg-score").textContent = `${averageScore}%`;

  // Student greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  document.getElementById("student-welcome-title").textContent = `${greeting}, ${user.name}!`;

  // Recent Attempts Table Preview (max 4)
  const recentTableBody = document.getElementById("student-recent-results-tbody");
  if (recentTableBody) {
    if (studentAttempts.length === 0) {
      recentTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 30px; color: var(--text-muted);">
            <i class="fa-regular fa-folder-open" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>
            No examinations taken yet. Check out the available exams below!
          </td>
        </tr>
      `;
    } else {
      recentTableBody.innerHTML = studentAttempts.slice(-4).reverse().map(att => `
        <tr>
          <td><strong>${att.examTitle}</strong></td>
          <td><span class="badge badge-secondary">${att.subject}</span></td>
          <td>${att.obtainedMarks} / ${att.totalMarks}</td>
          <td>
            <div style="font-weight: 700; color: ${att.status === 'Pass' ? 'var(--success)' : 'var(--danger)'}">
              ${att.percentage}%
            </div>
          </td>
          <td>
            <span class="badge ${att.status === 'Pass' ? 'badge-success' : 'badge-danger'}">
              ${att.status}
            </span>
          </td>
          <td>
            <button class="btn btn-sm btn-outline-primary" onclick="openAttemptReview('${att.id}')">
              <i class="fa-solid fa-file-lines"></i> Review Answers
            </button>
          </td>
        </tr>
      `).join("");
    }
  }

  // Quick Start Available Exams Preview
  const previewContainer = document.getElementById("student-available-exams-preview");
  if (previewContainer) {
    previewContainer.innerHTML = exams.slice(0, 3).map(exam => `
      <div class="exam-card-modern">
        <div class="exam-card-header">
          <span class="badge badge-primary">${exam.subject}</span>
          <span class="badge badge-success">Active</span>
        </div>
        <h4 class="exam-card-title">${exam.title}</h4>
        <div class="exam-card-meta">
          <span><i class="fa-regular fa-clock"></i> ${exam.duration} Mins</span>
          <span><i class="fa-regular fa-circle-question"></i> ${exam.totalQuestions} Qs</span>
          <span><i class="fa-solid fa-award"></i> ${exam.totalQuestions * 2} Marks</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="initiateExamStart('${exam.id}')">
          <i class="fa-solid fa-play"></i> Launch Exam
        </button>
      </div>
    `).join("");
  }
}

function renderStudentAvailableExams() {
  const container = document.getElementById("student-all-exams-container");
  if (!container) return;

  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const searchInput = document.getElementById("student-exam-search")?.value.toLowerCase() || "";
  const subjectFilter = document.getElementById("student-exam-subject-filter")?.value || "all";

  const filtered = exams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchInput) || exam.id.toLowerCase().includes(searchInput);
    const matchesSubject = subjectFilter === "all" || exam.subject.toLowerCase() === subjectFilter.toLowerCase();
    return matchesSearch && matchesSubject;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
        No examinations found matching your criteria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(exam => `
    <div class="exam-card-modern">
      <div class="exam-card-header">
        <span class="badge badge-primary">${exam.subject}</span>
        <span class="badge ${exam.status === 'Active' ? 'badge-success' : 'badge-warning'}">${exam.status}</span>
      </div>
      <h3 class="exam-card-title">${exam.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.88rem; margin: 8px 0;">${exam.instructions}</p>
      
      <div class="exam-card-meta">
        <span><i class="fa-regular fa-clock"></i> ${exam.duration} Mins</span>
        <span><i class="fa-regular fa-circle-question"></i> ${exam.totalQuestions} Questions</span>
        <span><i class="fa-solid fa-award"></i> ${exam.totalQuestions * 2} Marks</span>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="viewExamDetailsModal('${exam.id}')">
          <i class="fa-solid fa-circle-info"></i> Details
        </button>
        <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="initiateExamStart('${exam.id}')" ${exam.status !== 'Active' ? 'disabled' : ''}>
          <i class="fa-solid fa-play"></i> Start Exam
        </button>
      </div>
    </div>
  `).join("");
}

function renderStudentExamHistory() {
  const user = AppState.currentUser;
  if (!user) return;

  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const studentAttempts = attempts.filter(a => a.userId === user.id);
  const tbody = document.getElementById("student-history-tbody");
  if (!tbody) return;

  if (studentAttempts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No examination history recorded yet.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = studentAttempts.slice().reverse().map(att => {
    const mins = Math.floor(att.timeSpentSeconds / 60);
    const secs = att.timeSpentSeconds % 60;
    const timeFormatted = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    const dateFormatted = new Date(att.submittedAt).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit"
    });

    return `
      <tr>
        <td><strong>${att.examTitle}</strong></td>
        <td><span class="badge badge-secondary">${att.subject}</span></td>
        <td>${dateFormatted}</td>
        <td>${timeFormatted}</td>
        <td><strong>${att.obtainedMarks} / ${att.totalMarks}</strong> (${att.percentage}%)</td>
        <td><span class="badge ${att.status === 'Pass' ? 'badge-success' : 'badge-danger'}">${att.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline-primary" onclick="openAttemptReview('${att.id}')">
            <i class="fa-solid fa-eye"></i> View Paper
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function renderStudentResults() {
  renderStudentExamHistory();
}

function renderStudentProfileForm() {
  const user = AppState.currentUser;
  if (!user) return;

  document.getElementById("profile-name-input").value = user.name || "";
  document.getElementById("profile-email-input").value = user.email || "";
  document.getElementById("profile-student-id-input").value = user.studentId || "";
  document.getElementById("profile-department-input").value = user.department || "";
  document.getElementById("profile-semester-input").value = user.semester || "";
  document.getElementById("profile-avatar-preview").src = user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";
}

function handleProfileUpdate(e) {
  e.preventDefault();
  const user = AppState.currentUser;
  if (!user) return;

  const users = StorageManager.get("users", DEFAULT_USERS);
  const userIndex = users.findIndex(u => u.id === user.id);

  if (userIndex === -1) return;

  users[userIndex].name = document.getElementById("profile-name-input").value.trim();
  users[userIndex].department = document.getElementById("profile-department-input").value.trim();
  users[userIndex].semester = document.getElementById("profile-semester-input").value.trim();

  // If new avatar URL
  const avatarUrl = document.getElementById("profile-avatar-url-input")?.value.trim();
  if (avatarUrl) {
    users[userIndex].avatar = avatarUrl;
  }

  StorageManager.set("users", users);
  AppState.currentUser = users[userIndex];
  StorageManager.set("currentUser", users[userIndex]);

  updateUserHeaders();
  showToast("Profile details updated successfully!", "success");
}

// ==========================================================================
// 10. ONLINE EXAM ENGINE (CRITICAL MODULE)
// ==========================================================================

function viewExamDetailsModal(examId) {
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const exam = exams.find(e => e.id === examId);
  if (!exam) return;

  AppState.selectedExamForDetails = exam;

  document.getElementById("modal-exam-title").textContent = exam.title;
  document.getElementById("modal-exam-subject").textContent = exam.subject;
  document.getElementById("modal-exam-duration").textContent = `${exam.duration} Minutes`;
  document.getElementById("modal-exam-questions").textContent = `${exam.totalQuestions} Questions`;
  document.getElementById("modal-exam-total-marks").textContent = `${exam.totalQuestions * (exam.marksPerQuestion || 2)} Marks`;
  document.getElementById("modal-exam-passing").textContent = `${exam.passingPercentage}% (${(exam.totalQuestions * (exam.marksPerQuestion || 2) * 0.5)} Marks)`;
  document.getElementById("modal-exam-instructions").textContent = exam.instructions;

  openModal("exam-instructions-modal");
}

function initiateExamStart(examId) {
  if (!AppState.currentUser) {
    showToast("Please sign in as a student to begin this examination.", "info");
    openModal("login-modal");
    return;
  }

  if (AppState.currentUser.role === "admin") {
    showToast("Admins cannot take exams as candidates. Please sign in with student account.", "warning");
    return;
  }

  viewExamDetailsModal(examId);
}

function startActualExam() {
  const exam = AppState.selectedExamForDetails;
  if (!exam) return;

  closeModal("exam-instructions-modal");

  // Fetch relevant questions for this subject
  const allQuestions = StorageManager.get("questions", DEFAULT_QUESTIONS);
  let relevantQuestions = allQuestions.filter(q => q.subject.toLowerCase() === exam.subject.toLowerCase());

  // Fallback if not enough specific questions: supplement with general web tech
  if (relevantQuestions.length < exam.totalQuestions) {
    relevantQuestions = allQuestions;
  }

  // Shuffle questions randomly
  const shuffled = [...relevantQuestions].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, exam.totalQuestions);

  // Initialize Exam State
  AppState.activeExam = exam;
  AppState.examQuestions = selectedQuestions;
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = {};
  AppState.markedForReview = {};
  AppState.tabSwitchViolations = 0;
  AppState.isExamSubmitted = false;

  AppState.examDurationSeconds = exam.duration * 60;
  AppState.secondsRemaining = AppState.examDurationSeconds;

  // Setup UI elements
  document.getElementById("exam-active-title").textContent = exam.title;
  document.getElementById("exam-active-subject-badge").textContent = exam.subject;
  document.getElementById("exam-active-student-name").textContent = AppState.currentUser.name;
  document.getElementById("exam-active-student-id").textContent = AppState.currentUser.studentId;

  // Switch to Fullscreen Exam View
  showView("exam");

  // Build question palette buttons
  renderQuestionPalette();

  // Load first question
  loadCurrentQuestion();

  // Start Countdown Timer
  startExamTimer();

  // Setup Anti-Cheating tab listeners
  setupAntiCheatingListeners();

  showToast(`Exam started! You have ${exam.duration} minutes. Good luck!`, "info");
}

function startExamTimer() {
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
  }

  updateTimerDisplay();

  AppState.examTimerInterval = setInterval(() => {
    AppState.secondsRemaining--;

    updateTimerDisplay();

    // Visual warning at 2 minutes
    const timerBox = document.getElementById("exam-timer-container");
    if (AppState.secondsRemaining <= 120 && timerBox) {
      timerBox.classList.add("timer-warning");
    }

    // Auto-submission when time runs out
    if (AppState.secondsRemaining <= 0) {
      clearInterval(AppState.examTimerInterval);
      showToast("Time has expired! Automatically submitting your answers...", "warning");
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("exam-timer-display");
  if (!timerDisplay) return;

  const mins = Math.floor(AppState.secondsRemaining / 60);
  const secs = AppState.secondsRemaining % 60;
  timerDisplay.textContent = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function renderQuestionPalette() {
  const container = document.getElementById("question-palette-grid");
  if (!container) return;

  container.innerHTML = AppState.examQuestions.map((q, idx) => `
    <button class="palette-btn" id="palette-btn-${idx}" onclick="jumpToQuestion(${idx})">
      ${idx + 1}
    </button>
  `).join("");

  updatePaletteStatus();
}

function updatePaletteStatus() {
  AppState.examQuestions.forEach((q, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    btn.className = "palette-btn";

    const isAnswered = AppState.userAnswers.hasOwnProperty(q.id);
    const isReview = !!AppState.markedForReview[q.id];
    const isCurrent = idx === AppState.currentQuestionIndex;

    if (isCurrent) {
      btn.classList.add("current");
    } else if (isReview) {
      btn.classList.add("review");
    } else if (isAnswered) {
      btn.classList.add("answered");
    }
  });

  // Update Summary Counts
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const reviewCount = Object.values(AppState.markedForReview).filter(Boolean).length;
  const unansweredCount = AppState.examQuestions.length - answeredCount;

  document.getElementById("palette-count-answered").textContent = answeredCount;
  document.getElementById("palette-count-unanswered").textContent = unansweredCount;
  document.getElementById("palette-count-review").textContent = reviewCount;
}

function loadCurrentQuestion() {
  const q = AppState.examQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  document.getElementById("current-q-index-badge").textContent = `Question ${AppState.currentQuestionIndex + 1} of ${AppState.examQuestions.length}`;
  document.getElementById("current-q-marks-badge").textContent = `2 Marks`;
  document.getElementById("current-q-text").textContent = q.text;

  // Review status button appearance
  const reviewBtn = document.getElementById("btn-mark-review");
  if (AppState.markedForReview[q.id]) {
    reviewBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Unmark Review';
    reviewBtn.className = "btn btn-warning";
  } else {
    reviewBtn.innerHTML = '<i class="fa-regular fa-flag"></i> Mark for Review';
    reviewBtn.className = "btn btn-secondary";
  }

  // Render 4 Multiple Choice Options
  const optionsContainer = document.getElementById("options-list-container");
  const letters = ["A", "B", "C", "D"];
  const currentAnswer = AppState.userAnswers[q.id];

  optionsContainer.innerHTML = q.options.map((optionText, optIdx) => {
    const isSelected = currentAnswer === optIdx;
    return `
      <div class="option-item ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${optIdx})">
        <div class="option-key">${letters[optIdx]}</div>
        <div class="option-text">${optionText}</div>
      </div>
    `;
  }).join("");

  // Previous button state
  document.getElementById("btn-prev-question").disabled = (AppState.currentQuestionIndex === 0);

  // Next / Submit label
  const nextBtn = document.getElementById("btn-next-question");
  if (AppState.currentQuestionIndex === AppState.examQuestions.length - 1) {
    nextBtn.innerHTML = 'Review Summary <i class="fa-solid fa-list-check"></i>';
  } else {
    nextBtn.innerHTML = 'Next Question <i class="fa-solid fa-arrow-right"></i>';
  }

  updatePaletteStatus();
}

function selectAnswer(optionIndex) {
  const q = AppState.examQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  AppState.userAnswers[q.id] = optionIndex;
  loadCurrentQuestion();
}

function clearCurrentAnswer() {
  const q = AppState.examQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  if (AppState.userAnswers.hasOwnProperty(q.id)) {
    delete AppState.userAnswers[q.id];
    loadCurrentQuestion();
    showToast("Answer selection cleared.", "info");
  }
}

function toggleMarkForReview() {
  const q = AppState.examQuestions[AppState.currentQuestionIndex];
  if (!q) return;

  AppState.markedForReview[q.id] = !AppState.markedForReview[q.id];
  loadCurrentQuestion();
}

function nextQuestion() {
  if (AppState.currentQuestionIndex < AppState.examQuestions.length - 1) {
    AppState.currentQuestionIndex++;
    loadCurrentQuestion();
  } else {
    promptSubmitExamConfirmation();
  }
}

function prevQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    AppState.currentQuestionIndex--;
    loadCurrentQuestion();
  }
}

function jumpToQuestion(idx) {
  if (idx >= 0 && idx < AppState.examQuestions.length) {
    AppState.currentQuestionIndex = idx;
    loadCurrentQuestion();
  }
}

// Anti-cheating & Tab Switching warning
function setupAntiCheatingListeners() {
  const handleVisibilityChange = () => {
    if (document.hidden && !AppState.isExamSubmitted) {
      AppState.tabSwitchViolations++;
      showToast(`Warning: Tab switching detected! (${AppState.tabSwitchViolations} warning)`, "warning");
    }
  };

  document.removeEventListener("visibilitychange", handleVisibilityChange);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  window.onbeforeunload = (e) => {
    if (!AppState.isExamSubmitted && AppState.activeExam) {
      e.preventDefault();
      return "An active examination is in progress. Leaving will forfeit your answers.";
    }
  };
}

function promptSubmitExamConfirmation() {
  const total = AppState.examQuestions.length;
  const answered = Object.keys(AppState.userAnswers).length;
  const unanswered = total - answered;
  const review = Object.values(AppState.markedForReview).filter(Boolean).length;

  let msg = `You have answered ${answered} of ${total} questions. (${unanswered} unanswered`;
  if (review > 0) msg += `, ${review} marked for review`;
  msg += `). Are you sure you want to finish and submit?`;

  showConfirmModal("Confirm Exam Submission", msg, () => {
    submitExam(false);
  }, "Submit My Exam");
}

function submitExam(isAutoSubmit = false) {
  if (AppState.isExamSubmitted) return;
  AppState.isExamSubmitted = true;

  // Clear timer
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
  }
  window.onbeforeunload = null;

  const exam = AppState.activeExam;
  const questions = AppState.examQuestions;
  const marksPerQ = exam.marksPerQuestion || 2;
  const totalMarks = questions.length * marksPerQ;

  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  questions.forEach(q => {
    const studentChoice = AppState.userAnswers[q.id];
    if (studentChoice === undefined) {
      unansweredCount++;
    } else if (studentChoice === q.correctIndex) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const obtainedMarks = correctCount * marksPerQ;
  const percentage = Math.round((obtainedMarks / totalMarks) * 1000) / 10;
  const isPassed = percentage >= (exam.passingPercentage || 50);

  // Calculate academic grade
  let grade = "F";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";

  const timeSpent = AppState.examDurationSeconds - AppState.secondsRemaining;

  // Store Attempt Record
  const newAttempt = {
    id: `att_${Date.now()}`,
    examId: exam.id,
    examTitle: exam.title,
    subject: exam.subject,
    userId: AppState.currentUser.id,
    studentName: AppState.currentUser.name,
    studentId: AppState.currentUser.studentId,
    totalQuestions: questions.length,
    attemptedCount: questions.length - unansweredCount,
    correctCount: correctCount,
    incorrectCount: incorrectCount,
    unansweredCount: unansweredCount,
    totalMarks: totalMarks,
    obtainedMarks: obtainedMarks,
    percentage: percentage,
    status: isPassed ? "Pass" : "Fail",
    grade: grade,
    timeSpentSeconds: timeSpent,
    submittedAt: new Date().toISOString(),
    answers: { ...AppState.userAnswers },
    questions: questions
  };

  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  attempts.push(newAttempt);
  StorageManager.set("attempts", attempts);

  // Present Result Showcase Screen
  displayExamResultScreen(newAttempt);
}

function displayExamResultScreen(attempt) {
  AppState.selectedAttemptForReview = attempt;

  // Fill Result Showcase UI
  const statusBadge = document.getElementById("result-status-badge");
  statusBadge.textContent = attempt.status === "Pass" ? "PASSED" : "FAILED";
  statusBadge.className = `result-status-badge ${attempt.status === "Pass" ? 'pass' : 'fail'}`;

  const scoreCircle = document.getElementById("result-score-circle");
  scoreCircle.className = `score-circle-wrapper ${attempt.status === "Pass" ? 'pass' : 'fail'}`;
  document.getElementById("result-score-percentage").textContent = `${attempt.percentage}%`;

  document.getElementById("result-exam-title").textContent = attempt.examTitle;
  document.getElementById("result-obtained-marks").textContent = `${attempt.obtainedMarks} / ${attempt.totalMarks}`;
  document.getElementById("result-correct-count").textContent = attempt.correctCount;
  document.getElementById("result-incorrect-count").textContent = attempt.incorrectCount;
  document.getElementById("result-unanswered-count").textContent = attempt.unansweredCount;

  const mins = Math.floor(attempt.timeSpentSeconds / 60);
  const secs = attempt.timeSpentSeconds % 60;
  document.getElementById("result-time-taken").textContent = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

  openModal("exam-result-modal");
}

function openAttemptReview(attemptId) {
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const attempt = attempts.find(a => a.id === attemptId);
  if (!attempt) return;

  const allQuestions = StorageManager.get("questions", DEFAULT_QUESTIONS);
  const questions = attempt.questions || allQuestions.filter(q => q.subject.toLowerCase() === attempt.subject.toLowerCase());

  document.getElementById("review-modal-title").textContent = `Review: ${attempt.examTitle} (${attempt.percentage}%)`;
  const container = document.getElementById("review-questions-container");

  const letters = ["A", "B", "C", "D"];

  container.innerHTML = questions.map((q, idx) => {
    const studentChoice = attempt.answers ? attempt.answers[q.id] : undefined;
    const isUnanswered = studentChoice === undefined;
    const isCorrect = studentChoice === q.correctIndex;

    const statusClass = isUnanswered ? "unanswered" : isCorrect ? "correct" : "incorrect";
    const statusLabel = isUnanswered ? "Not Attempted" : isCorrect ? "Correct (+2)" : "Incorrect (0)";
    const badgeClass = isUnanswered ? "badge-warning" : isCorrect ? "badge-success" : "badge-danger";

    return `
      <div class="review-item ${statusClass}">
        <div class="review-header">
          <span style="font-weight: 700; color: var(--text-main);">Question ${idx + 1}</span>
          <span class="badge ${badgeClass}">${statusLabel}</span>
        </div>
        <p style="font-weight: 600; margin-bottom: 12px; font-size: 1.05rem;">${q.text}</p>
        
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
          ${q.options.map((opt, optIdx) => {
            let optStyle = "padding: 8px 12px; border-radius: var(--radius-md); font-size: 0.9rem; border: 1px solid var(--border-color);";
            let tag = "";

            if (optIdx === q.correctIndex) {
              optStyle += " background: var(--success-light); border-color: var(--success); font-weight: 600; color: var(--success-hover);";
              tag = " <span class='badge badge-success' style='margin-left: 8px;'>Correct Answer</span>";
            }
            if (optIdx === studentChoice && !isCorrect) {
              optStyle += " background: var(--danger-light); border-color: var(--danger); color: var(--danger-hover); font-weight: 600;";
              tag = " <span class='badge badge-danger' style='margin-left: 8px;'>Your Choice</span>";
            } else if (optIdx === studentChoice && isCorrect) {
              tag = " <span class='badge badge-success' style='margin-left: 8px;'>Your Choice (Correct)</span>";
            }

            return `
              <div style="${optStyle}">
                <strong>${letters[optIdx]}.</strong> ${opt} ${tag}
              </div>
            `;
          }).join("")}
        </div>

        <div class="review-explanation">
          <i class="fa-solid fa-lightbulb" style="color: var(--primary); margin-right: 6px;"></i>
          <strong>Explanation:</strong> ${q.explanation || "No explanation provided for this question."}
        </div>
      </div>
    `;
  }).join("");

  openModal("review-modal");
}

// ==========================================================================
// 11. ADMIN DASHBOARD & CHARTS
// ==========================================================================

function renderAdminDashboard() {
  const users = StorageManager.get("users", DEFAULT_USERS);
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const questions = StorageManager.get("questions", DEFAULT_QUESTIONS);
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);

  const studentsCount = users.filter(u => u.role === "student").length;
  const totalExams = exams.length;
  const totalQuestions = questions.length;
  const totalAttempts = attempts.length;

  // Passing Rate
  const passCount = attempts.filter(a => a.status === "Pass").length;
  const passingRate = totalAttempts > 0 ? ((passCount / totalAttempts) * 100).toFixed(1) : 0;

  document.getElementById("admin-stat-students").textContent = studentsCount;
  document.getElementById("admin-stat-exams").textContent = totalExams;
  document.getElementById("admin-stat-questions").textContent = totalQuestions;
  document.getElementById("admin-stat-attempts").textContent = totalAttempts;
  document.getElementById("admin-stat-pass-rate").textContent = `${passingRate}%`;

  // Render Chart.js Analytics
  initAdminCharts(attempts);

  // Recent Submissions Feed
  const recentFeed = document.getElementById("admin-recent-submissions-tbody");
  if (recentFeed) {
    if (attempts.length === 0) {
      recentFeed.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">No exam submissions recorded.</td></tr>`;
    } else {
      recentFeed.innerHTML = attempts.slice(-5).reverse().map(att => `
        <tr>
          <td><strong>${att.studentName}</strong> <br><small style="color: var(--text-muted);">${att.studentId}</small></td>
          <td>${att.examTitle}</td>
          <td><span class="badge badge-secondary">${att.subject}</span></td>
          <td><strong>${att.obtainedMarks}/${att.totalMarks}</strong> (${att.percentage}%)</td>
          <td><span class="badge ${att.status === 'Pass' ? 'badge-success' : 'badge-danger'}">${att.status}</span></td>
          <td>
            <button class="btn btn-sm btn-outline-primary" onclick="openAttemptReview('${att.id}')">
              <i class="fa-solid fa-eye"></i> Details
            </button>
          </td>
        </tr>
      `).join("");
    }
  }
}

function initAdminCharts(attempts) {
  if (typeof Chart === "undefined") return;

  // 1. Performance Doughnut Chart (Pass vs Fail)
  const passCount = attempts.filter(a => a.status === "Pass").length;
  const failCount = attempts.length - passCount;

  const ctxPass = document.getElementById("admin-performance-chart");
  if (ctxPass) {
    if (AppState.adminPerformanceChart) AppState.adminPerformanceChart.destroy();

    AppState.adminPerformanceChart = new Chart(ctxPass, {
      type: "doughnut",
      data: {
        labels: ["Passed", "Failed"],
        datasets: [{
          data: [passCount || 1, failCount || 0],
          backgroundColor: ["#10b981", "#ef4444"],
          borderWidth: 2,
          borderColor: "transparent"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" }
        }
      }
    });
  }

  // 2. Attempts Per Subject Bar Chart
  const subjectsMap = {};
  attempts.forEach(a => {
    subjectsMap[a.subject] = (subjectsMap[a.subject] || 0) + 1;
  });

  const ctxSubj = document.getElementById("admin-subjects-chart");
  if (ctxSubj) {
    if (AppState.adminSubjectsChart) AppState.adminSubjectsChart.destroy();

    const labels = Object.keys(subjectsMap).length > 0 ? Object.keys(subjectsMap) : ["HTML", "CSS", "JavaScript", "Computer Fundamentals", "Web Tech"];
    const counts = Object.keys(subjectsMap).length > 0 ? Object.values(subjectsMap) : [4, 3, 5, 2, 6];

    AppState.adminSubjectsChart = new Chart(ctxSubj, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Attempts Count",
          data: counts,
          backgroundColor: "#2563eb",
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, ticks: { precision: 0 } }
        }
      }
    });
  }
}

// ==========================================================================
// 12. ADMIN EXAM MANAGEMENT (CRUD)
// ==========================================================================

function renderAdminExamsTable() {
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const tbody = document.getElementById("admin-exams-tbody");
  if (!tbody) return;

  tbody.innerHTML = exams.map(exam => `
    <tr>
      <td><code>${exam.id}</code></td>
      <td><strong>${exam.title}</strong></td>
      <td><span class="badge badge-primary">${exam.subject}</span></td>
      <td>${exam.duration} Mins</td>
      <td>${exam.totalQuestions} Questions</td>
      <td><span class="badge ${exam.status === 'Active' ? 'badge-success' : 'badge-warning'}">${exam.status}</span></td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-sm btn-secondary" onclick="openEditExamModal('${exam.id}')" title="Edit Exam">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteExam('${exam.id}')" title="Delete Exam">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function openCreateExamModal() {
  AppState.editingExamId = null;
  document.getElementById("exam-modal-title").textContent = "Create New Examination";
  document.getElementById("exam-form").reset();
  document.getElementById("admin-exam-id-input").value = `EXAM-${Date.now().toString().slice(-4)}`;
  openModal("admin-exam-modal");
}

function openEditExamModal(examId) {
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);
  const exam = exams.find(e => e.id === examId);
  if (!exam) return;

  AppState.editingExamId = examId;
  document.getElementById("exam-modal-title").textContent = "Edit Examination";
  document.getElementById("admin-exam-id-input").value = exam.id;
  document.getElementById("admin-exam-title-input").value = exam.title;
  document.getElementById("admin-exam-subject-input").value = exam.subject;
  document.getElementById("admin-exam-duration-input").value = exam.duration;
  document.getElementById("admin-exam-questions-input").value = exam.totalQuestions;
  document.getElementById("admin-exam-pass-input").value = exam.passingPercentage || 50;
  document.getElementById("admin-exam-status-input").value = exam.status || "Active";
  document.getElementById("admin-exam-instructions-input").value = exam.instructions || "";

  openModal("admin-exam-modal");
}

function handleSaveExam(e) {
  e.preventDefault();
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);

  const examData = {
    id: document.getElementById("admin-exam-id-input").value.trim(),
    title: document.getElementById("admin-exam-title-input").value.trim(),
    subject: document.getElementById("admin-exam-subject-input").value,
    duration: parseInt(document.getElementById("admin-exam-duration-input").value, 10),
    totalQuestions: parseInt(document.getElementById("admin-exam-questions-input").value, 10),
    marksPerQuestion: 2,
    passingPercentage: parseInt(document.getElementById("admin-exam-pass-input").value, 10),
    status: document.getElementById("admin-exam-status-input").value,
    instructions: document.getElementById("admin-exam-instructions-input").value.trim(),
    startDate: new Date().toISOString().split("T")[0],
    startTime: "09:00"
  };

  if (AppState.editingExamId) {
    const idx = exams.findIndex(e => e.id === AppState.editingExamId);
    if (idx !== -1) exams[idx] = examData;
    showToast("Exam updated successfully!", "success");
  } else {
    exams.push(examData);
    showToast("New examination published!", "success");
  }

  StorageManager.set("exams", exams);
  closeModal("admin-exam-modal");
  renderAdminExamsTable();
}

function deleteExam(examId) {
  showConfirmModal("Delete Examination", `Are you sure you want to delete exam ${examId}?`, () => {
    let exams = StorageManager.get("exams", DEFAULT_EXAMS);
    exams = exams.filter(e => e.id !== examId);
    StorageManager.set("exams", exams);
    renderAdminExamsTable();
    showToast("Exam deleted successfully.", "info");
  }, "Delete", true);
}

// ==========================================================================
// 13. ADMIN QUESTION BANK MANAGEMENT (CRUD)
// ==========================================================================

function renderAdminQuestionsTable() {
  const questions = StorageManager.get("questions", DEFAULT_QUESTIONS);
  const tbody = document.getElementById("admin-questions-tbody");
  if (!tbody) return;

  const subjectFilter = document.getElementById("admin-question-subject-filter")?.value || "all";
  const searchInput = document.getElementById("admin-question-search")?.value.toLowerCase() || "";

  const filtered = questions.filter(q => {
    const matchesSubj = subjectFilter === "all" || q.subject.toLowerCase() === subjectFilter.toLowerCase();
    const matchesSearch = q.text.toLowerCase().includes(searchInput);
    return matchesSubj && matchesSearch;
  });

  const letters = ["A", "B", "C", "D"];

  tbody.innerHTML = filtered.map((q, idx) => `
    <tr>
      <td><strong>#${idx + 1}</strong></td>
      <td><span class="badge badge-secondary">${q.subject}</span></td>
      <td style="max-width: 380px;">${q.text}</td>
      <td><strong style="color: var(--success);">${letters[q.correctIndex]}.</strong> ${q.options[q.correctIndex]}</td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn btn-sm btn-secondary" onclick="openEditQuestionModal('${q.id}')" title="Edit">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteQuestion('${q.id}')" title="Delete">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

function openCreateQuestionModal() {
  AppState.editingQuestionId = null;
  document.getElementById("question-modal-title").textContent = "Add Question to Bank";
  document.getElementById("question-form").reset();
  openModal("admin-question-modal");
}

function openEditQuestionModal(questionId) {
  const questions = StorageManager.get("questions", DEFAULT_QUESTIONS);
  const q = questions.find(item => item.id === questionId);
  if (!q) return;

  AppState.editingQuestionId = questionId;
  document.getElementById("question-modal-title").textContent = "Edit Question";
  document.getElementById("q-subject-input").value = q.subject;
  document.getElementById("q-text-input").value = q.text;
  document.getElementById("q-opt0-input").value = q.options[0];
  document.getElementById("q-opt1-input").value = q.options[1];
  document.getElementById("q-opt2-input").value = q.options[2];
  document.getElementById("q-opt3-input").value = q.options[3];
  document.getElementById("q-correct-input").value = q.correctIndex;
  document.getElementById("q-explanation-input").value = q.explanation || "";

  openModal("admin-question-modal");
}

function handleSaveQuestion(e) {
  e.preventDefault();
  const questions = StorageManager.get("questions", DEFAULT_QUESTIONS);

  const qData = {
    id: AppState.editingQuestionId || `q_${Date.now()}`,
    subject: document.getElementById("q-subject-input").value,
    text: document.getElementById("q-text-input").value.trim(),
    options: [
      document.getElementById("q-opt0-input").value.trim(),
      document.getElementById("q-opt1-input").value.trim(),
      document.getElementById("q-opt2-input").value.trim(),
      document.getElementById("q-opt3-input").value.trim()
    ],
    correctIndex: parseInt(document.getElementById("q-correct-input").value, 10),
    explanation: document.getElementById("q-explanation-input").value.trim()
  };

  if (AppState.editingQuestionId) {
    const idx = questions.findIndex(item => item.id === AppState.editingQuestionId);
    if (idx !== -1) questions[idx] = qData;
    showToast("Question updated successfully!", "success");
  } else {
    questions.push(qData);
    showToast("New question added to bank!", "success");
  }

  StorageManager.set("questions", questions);
  closeModal("admin-question-modal");
  renderAdminQuestionsTable();
}

function deleteQuestion(questionId) {
  showConfirmModal("Delete Question", "Are you sure you want to delete this question from the bank?", () => {
    let questions = StorageManager.get("questions", DEFAULT_QUESTIONS);
    questions = questions.filter(q => q.id !== questionId);
    StorageManager.set("questions", questions);
    renderAdminQuestionsTable();
    showToast("Question removed from bank.", "info");
  }, "Delete", true);
}

// ==========================================================================
// 14. ADMIN STUDENT MANAGEMENT
// ==========================================================================

function renderAdminStudentsTable() {
  const users = StorageManager.get("users", DEFAULT_USERS);
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const students = users.filter(u => u.role === "student");
  const tbody = document.getElementById("admin-students-tbody");
  if (!tbody) return;

  const search = document.getElementById("admin-student-search")?.value.toLowerCase() || "";

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search) ||
    s.studentId.toLowerCase().includes(search) ||
    s.email.toLowerCase().includes(search)
  );

  tbody.innerHTML = filtered.map(student => {
    const studentAttempts = attempts.filter(a => a.userId === student.id);
    const avgScore = studentAttempts.length > 0
      ? (studentAttempts.reduce((acc, curr) => acc + curr.percentage, 0) / studentAttempts.length).toFixed(1)
      : "N/A";

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${student.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
            <div>
              <strong>${student.name}</strong>
              <div style="font-size: 0.78rem; color: var(--text-muted);">${student.email}</div>
            </div>
          </div>
        </td>
        <td><code>${student.studentId}</code></td>
        <td>${student.department}</td>
        <td>${student.semester}</td>
        <td><strong>${studentAttempts.length}</strong> Exams</td>
        <td><strong>${avgScore}${avgScore !== 'N/A' ? '%' : ''}</strong></td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteStudent('${student.id}')" title="Delete Student">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function deleteStudent(studentId) {
  showConfirmModal("Delete Student Record", "Are you sure you want to permanently remove this student record?", () => {
    let users = StorageManager.get("users", DEFAULT_USERS);
    users = users.filter(u => u.id !== studentId);
    StorageManager.set("users", users);
    renderAdminStudentsTable();
    showToast("Student record removed.", "info");
  }, "Delete", true);
}

// ==========================================================================
// 15. ADMIN RESULTS & REPORTS EXPORT
// ==========================================================================

function renderAdminResultsTable() {
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const tbody = document.getElementById("admin-results-tbody");
  if (!tbody) return;

  tbody.innerHTML = attempts.slice().reverse().map(att => `
    <tr>
      <td><strong>${att.studentName}</strong></td>
      <td><code>${att.studentId}</code></td>
      <td>${att.examTitle}</td>
      <td><span class="badge badge-secondary">${att.subject}</span></td>
      <td><strong>${att.obtainedMarks} / ${att.totalMarks}</strong></td>
      <td><strong>${att.percentage}%</strong></td>
      <td><span class="badge ${att.status === 'Pass' ? 'badge-success' : 'badge-danger'}">${att.status}</span></td>
      <td>
        <button class="btn btn-sm btn-outline-primary" onclick="openAttemptReview('${att.id}')">
          <i class="fa-solid fa-file-invoice"></i> Inspect
        </button>
      </td>
    </tr>
  `).join("");
}

function renderAdminReports() {
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  const exams = StorageManager.get("exams", DEFAULT_EXAMS);

  document.getElementById("report-total-attempts").textContent = attempts.length;
  const passCount = attempts.filter(a => a.status === "Pass").length;
  document.getElementById("report-pass-count").textContent = passCount;
  document.getElementById("report-fail-count").textContent = attempts.length - passCount;

  const avg = attempts.length > 0
    ? (attempts.reduce((acc, c) => acc + c.percentage, 0) / attempts.length).toFixed(1)
    : 0;
  document.getElementById("report-avg-score").textContent = `${avg}%`;
}

function exportResultsToCSV() {
  const attempts = StorageManager.get("attempts", DEFAULT_ATTEMPTS);
  if (attempts.length === 0) {
    showToast("No examination records available to export.", "warning");
    return;
  }

  const headers = ["Attempt ID", "Student Name", "Student ID", "Exam Title", "Subject", "Obtained Marks", "Total Marks", "Percentage", "Status", "Grade", "Submission Date"];
  const rows = attempts.map(a => [
    a.id,
    `"${a.studentName}"`,
    a.studentId,
    `"${a.examTitle}"`,
    a.subject,
    a.obtainedMarks,
    a.totalMarks,
    `${a.percentage}%`,
    a.status,
    a.grade,
    a.submittedAt
  ]);

  const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `OEMS_Results_Report_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Examination results report exported as CSV!", "success");
}

// ==========================================================================
// 16. INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Default Data
  StorageManager.initializeDefaults();

  // 2. Load Saved Theme
  const savedTheme = StorageManager.get("theme", "light");
  setTheme(savedTheme);

  // 3. Attach Theme Toggles
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  // 4. Reset Demo Data Action
  document.querySelectorAll(".btn-reset-demo-data").forEach(btn => {
    btn.addEventListener("click", () => {
      showConfirmModal("Reset Demo Data", "This will reset all exams, questions, results, and student accounts to initial defaults.", () => {
        StorageManager.resetToDefaults();
        showToast("Demo database reset to factory state!", "success");
        setTimeout(() => window.location.reload(), 400);
      }, "Reset Database", true);
    });
  });

  // 5. Sidebar Navigation Listeners
  document.querySelectorAll("#student-portal .nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const view = item.dataset.view;
      if (view === "logout") {
        handleLogout();
      } else if (view) {
        showStudentSubView(view);
      }
    });
  });

  document.querySelectorAll("#admin-portal .nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const view = item.dataset.view;
      if (view === "logout") {
        handleLogout();
      } else if (view) {
        showAdminSubView(view);
      }
    });
  });

  // 6. Mobile Sidebar Hamburger Toggles
  document.querySelectorAll(".sidebar-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar.active-sidebar") || document.querySelector(".sidebar");
      if (sidebar) sidebar.classList.toggle("mobile-open");
    });
  });

  // 7. Password Visibility Toggles
  document.querySelectorAll(".input-password-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const input = toggle.parentElement.querySelector("input");
      if (input.type === "password") {
        input.type = "text";
        toggle.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      } else {
        input.type = "password";
        toggle.innerHTML = '<i class="fa-regular fa-eye"></i>';
      }
    });
  });

  // 8. Auth Forms Submission Handlers
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const pass = document.getElementById("login-password").value;
      const remember = document.getElementById("login-remember").checked;
      handleLogin(email, pass, remember);
    });
  }

  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("reg-name").value;
      const email = document.getElementById("reg-email").value;
      const studentId = document.getElementById("reg-student-id").value;
      const dept = document.getElementById("reg-dept").value;
      const semester = document.getElementById("reg-semester").value;
      const pass = document.getElementById("reg-pass").value;
      const confirmPass = document.getElementById("reg-confirm-pass").value;
      handleRegistration(name, email, studentId, dept, semester, pass, confirmPass);
    });
  }

  // 9. Quick Demo Fill Buttons
  document.getElementById("btn-quick-admin-login")?.addEventListener("click", () => {
    document.getElementById("login-email").value = "admin@oems.com";
    document.getElementById("login-password").value = "admin123";
    handleLogin("admin@oems.com", "admin123", true);
  });

  document.getElementById("btn-quick-student-login")?.addEventListener("click", () => {
    document.getElementById("login-email").value = "student@oems.com";
    document.getElementById("login-password").value = "student123";
    handleLogin("student@oems.com", "student123", true);
  });

  // 10. Exam Engine Action Buttons
  document.getElementById("btn-modal-start-exam")?.addEventListener("click", startActualExam);
  document.getElementById("btn-prev-question")?.addEventListener("click", prevQuestion);
  document.getElementById("btn-next-question")?.addEventListener("click", nextQuestion);
  document.getElementById("btn-mark-review")?.addEventListener("click", toggleMarkForReview);
  document.getElementById("btn-clear-answer")?.addEventListener("click", clearCurrentAnswer);
  document.getElementById("btn-submit-exam-palette")?.addEventListener("click", promptSubmitExamConfirmation);
  document.getElementById("btn-submit-exam-top")?.addEventListener("click", promptSubmitExamConfirmation);

  // Return to Dashboard from Result Modal
  document.getElementById("btn-result-to-dashboard")?.addEventListener("click", () => {
    closeModal("exam-result-modal");
    showView("student");
    showStudentSubView("dashboard");
  });

  // 11. Admin CRUD Form Submissions
  document.getElementById("exam-form")?.addEventListener("submit", handleSaveExam);
  document.getElementById("question-form")?.addEventListener("submit", handleSaveQuestion);
  document.getElementById("profile-form")?.addEventListener("submit", handleProfileUpdate);

  // 12. Check Active Session and Route
  checkActiveSession();
});
