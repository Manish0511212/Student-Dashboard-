// --- Live Reload Functionality (from original script.js) ---
// This part is typically for development environments and can be removed for production.
function refreshCSS() {
    var sheets = [].slice.call(document.getElementsByTagName("link"));
    var head = document.getElementsByTagName("head")[0];
    for (var i = 0; i < sheets.length; ++i) {
        var elem = sheets[i];
        var parent = elem.parentElement || head;
        parent.removeChild(elem);
        var rel = elem.rel;
        if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
            var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
            elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
        }
        parent.appendChild(elem);
    }
}

if ('WebSocket' in window) {
    (function() {
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);

        socket.onmessage = function(msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };

        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
} else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}

// --- Dashboard Data (Centralized) ---
const studentData = {
    name: "Manish Kumar",
    finance: {
        totalPayable: "₹10,000",
        totalPaid: "₹5,000",
        pendingBalance: "₹5,000",
        otherFees: "₹300"
    },
    dashboardCourses: [{
        name: "Object Oriented Programming",
        id: "OOP"
    }, {
        name: "Database Systems",
        id: "DB"
    }, {
        name: "Software Engineering",
        id: "SE"
    }, {
        name: "Operating Systems",
        id: "OS"
    }, ],
    allCourses: [{
        name: "Object Oriented Programming",
        id: "OOP",
        code: "CS301",
        credits: 3
    }, {
        name: "Database Systems",
        id: "DB",
        code: "CS305",
        credits: 3
    }, {
        name: "Software Engineering",
        id: "SE",
        code: "CS310",
        credits: 3
    }, {
        name: "Computer Networks",
        id: "NET",
        code: "CS330",
        credits: 3
    }, {
        name: "Operating Systems",
        id: "OS",
        code: "CS320",
        credits: 3
    }, {
        name: "Artificial Intelligence",
        id: "AI",
        code: "CS370",
        credits: 3
    }, {
        name: "Web Development",
        id: "WEB",
        code: "CS340",
        credits: 3
    }, {
        name: "Mobile Application Development",
        id: "MAD",
        code: "CS350",
        credits: 3
    }, {
        name: "Data Science",
        id: "DS",
        code: "CS360",
        credits: 3
    }, {
        name: "Cyber Security",
        id: "CS",
        code: "CS380",
        credits: 3
    }, ],
    courseDetails: {
        OOP: {
            description: "Learn the principles of object-oriented programming including classes, objects, inheritance, polymorphism, and encapsulation.",
            topics: [
                "Java & Python OOP basics",
                "Class design & constructors",
                "Inheritance & overriding",
                "Interfaces and abstract classes",
                "Real-world OOP applications"
            ]
        },
        DB: {
            description: "Understand the fundamentals of database design, SQL, normalization, transactions, and data retrieval.",
            topics: [
                "ER Models & relational schemas",
                "Normalization & constraints",
                "SQL queries (SELECT, JOIN, GROUP BY)",
                "Transactions & concurrency",
                "Introduction to NoSQL databases"
            ]
        },
        SE: {
            description: "Learn the principles and practices of building large-scale software systems, from requirements to testing.",
            topics: [
                "Software Development Life Cycle (SDLC)",
                "Agile & Waterfall models",
                "Requirements Engineering",
                "Software design patterns",
                "Testing & maintenance"
            ]
        },
        NET: {
            description: "Explore the architecture, protocols, and technologies behind computer networks.",
            topics: [
                "OSI & TCP/IP models",
                "Network topologies",
                "Routing & switching",
                "Network security",
                "Wireless networks"
            ]
        },
        OS: {
            description: "Understand the design and functioning of modern operating systems.",
            topics: [
                "Processes & threads",
                "Memory management",
                "File systems",
                "Scheduling & synchronization",
                "Virtualization & cloud OS"
            ]
        },
        AI: {
            description: "Introduction to Artificial Intelligence concepts, algorithms, and applications.",
            topics: [
                "Machine Learning basics",
                "Neural Networks",
                "Natural Language Processing",
                "Computer Vision",
                "AI Ethics"
            ]
        }
    },
    notices: [{
        title: "📢 Prelim Payment Due",
        details: "Your preliminary payment is due on <b>Sept 15, 2025</b>. Please clear dues on time to avoid late fees.",
        link: "payment.html"
    }, {
        title: "📅 Exam Schedule",
        details: "Midterm exams will start from <b>Oct 3, 2025</b>.",
        link: "schedule.html"
    }, {
        title: "Library Clearance",
        details: "Students are advised to return all borrowed library books before <b>Sept 30, 2025</b>.",
        link: "notice.html"
    }, {
        title: "Sports Festival",
        details: "The annual sports festival will be held on <b>Nov 5, 2025</b>. Registration is open now.",
        link: "notice.html"
    }, {
        title: "Holiday Announcement",
        details: "The university will remain closed for <b>Diwali holidays (Oct 29 – Nov 2)</b>.",
        link: "notice.html"
    }, ],
    results: [{
        code: "CSE201",
        title: "Object Oriented Programming",
        midterm: 85,
        final: 90,
        grade: "A",
        status: "Pass"
    }, {
        code: "CSE202",
        title: "Database Systems",
        midterm: 78,
        final: 82,
        grade: "B+",
        status: "Pass"
    }, {
        code: "CSE301",
        title: "Software Engineering",
        midterm: 88,
        final: 91,
        grade: "A",
        status: "Pass"
    }, {
        code: "CSE302",
        title: "Computer Networks",
        midterm: 70,
        final: 75,
        grade: "B",
        status: "Pass"
    }, {
        code: "CSE303",
        title: "Operating Systems",
        midterm: 92,
        final: 95,
        grade: "A+",
        status: "Pass"
    }, {
        code: "CSE304",
        title: "Artificial Intelligence",
        midterm: 65,
        final: 60,
        grade: "C",
        status: "Fail"
    }, ],
    schedule: [{
        course: "Object Oriented Programming",
        date: "Oct 3, 2025",
        time: "9:00 AM - 12:00 PM",
        room: "Room 101"
    }, {
        course: "Database Systems",
        date: "Oct 5, 2025",
        time: "1:00 PM - 4:00 PM",
        room: "Room 202"
    }, {
        course: "Software Engineering",
        date: "Oct 7, 2025",
        time: "9:00 AM - 12:00 PM",
        room: "Room 305"
    }, {
        course: "Operating Systems",
        date: "Oct 10, 2025",
        time: "1:00 PM - 4:00 PM",
        room: "Room 210"
    }, ]
};

// --- Global Variables and DOM Elements ---
// These will be assigned when the DOM for each page is loaded
let mainContentDiv;
let modalsContainer;
let paymentFormPopup;
let paymentFormElement;

// --- State Management (using localStorage for persistence) ---
let registeredCourses = JSON.parse(localStorage.getItem('registeredCourses')) || [];
let droppedCourses = JSON.parse(localStorage.getItem('droppedCourses')) || [];
let paymentHistory = JSON.parse(localStorage.getItem('paymentHistory')) || [];
let receiptCounter = paymentHistory.length ? paymentHistory.length + 1000 : 1000;

// --- Helper Functions ---

/**
 * Updates the active class on sidebar navigation links.
 * @param {string} activeId - The ID of the navigation link to set as active (e.g., 'nav-dashboard').
 */
function updateActiveNavLink(activeId) {
    document.querySelectorAll('.sidebar .menu a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Generates the HTML for the topbar section.
 * @param {string} searchPlaceholder - Placeholder text for the search input.
 * @returns {string} HTML string for the topbar.
 */
function renderTopbar(searchPlaceholder = "Search anything...") {
    return `
        <div class="topbar">
            <div class="search">
                <input type="text" id="searchInput" placeholder="${searchPlaceholder}" oninput="handleSearch()">
            </div>
            <div class="user">
                <span>${studentData.name}</span>
                <img src="https://img.icons8.com/color/96/user-male-circle--v1.png" style="width:70px; height:70px;" alt="user">
            </div>
        </div>
    `;
}

/**
 * Finds a course by its ID.
 * @param {string} courseId - The ID of the course (e.g., "OOP").
 * @returns {object|undefined} The course object or undefined if not found.
 */
function getCourseById(courseId) {
    return studentData.allCourses.find(c => c.id === courseId);
}

/**
 * Finds a course by its code.
 * @param {string} courseCode - The code of the course (e.g., "CS301").
 * @returns {object|undefined} The course object or undefined if not found.
 */
function getCourseByCode(courseCode) {
    return studentData.allCourses.find(c => c.code === courseCode);
}

// --- Dynamic Content Rendering Functions for Each Page ---

/**
 * Renders the main dashboard page content.
 */
function renderDashboardPage() {
    updateActiveNavLink('nav-dashboard');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search anything...")}
        <div class="welcome">
            <div>
                <h2>Welcome back, ${studentData.name}!</h2>
                <p>Always stay updated in your student portal</p>
            </div>
            <img src="https://img.icons8.com/color/96/graduation-cap.png" alt="Student Illustration">
        </div>
        <div class="cards">
            <div class="card">
                <img src="https://img.icons8.com/color/96/economic-improvement.png" alt="Payable">
                <h3>${studentData.finance.totalPayable}</h3>
                <p>Total Payable</p>
            </div>
            <div class="card">
                <img src="https://img.icons8.com/color/96/money-bag.png" alt="Paid">
                <h3>${studentData.finance.totalPaid}</h3>
                <p>Total Paid</p>
            </div>
            <div class="card">
                <img src="https://img.icons8.com/color/96/combo-chart.png" alt="Others">
                <h3>${studentData.finance.otherFees}</h3>
                <p>Other Fees</p>
            </div>
        </div>
        <div class="courses">
            ${studentData.dashboardCourses.map(course => `
                <div class="course-card">
                    <h3>${course.name}</h3>
                    <button class="view-btn" onclick="openCourseModal('${course.id}Modal')">View</button>
                </div>
            `).join('')}
        </div>
        <div class="notice-section">
            ${studentData.notices.slice(0, 2).map(notice => `
                <div class="notice-box">
                    <h4>${notice.title}</h4>
                    <a href="${notice.link}" class="see-all">See details</a>
                    <p>${notice.details}</p>
                </div>
            `).join('')}
        </div>
        <div id="topicSection" class="topic-section" style="display:none;">
            <h3>Topics</h3>
            <div id="topicContent"></div>
            <div id="courseDesc" class="course-description"></div>
        </div>
    `;
    attachDashboardSearchListener();
    generateCourseModals(); // Generate modals for this page
}

/**
 * Renders the payment information page.
 */
function renderPaymentPage() {
    updateActiveNavLink('nav-payment');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search payments...")}
        <div class="welcome">
            <div>
                <h2>Payment Information</h2>
                <p>View your fee summary and payment history</p>
            </div>
            <img src="https://img.icons8.com/color/96/money-bag.png" alt="Payment">
        </div>
        <div class="cards">
            <div class="card">
                <h3>Total Payable</h3>
                <p class="amount">${studentData.finance.totalPayable}</p>
            </div>
            <div class="card">
                <h3>Total Paid</h3>
                <p class="amount">${studentData.finance.totalPaid}</p>
            </div>
            <div class="card">
                <h3>Pending Balance</h3>
                <p class="amount">${studentData.finance.pendingBalance}</p>
            </div>
        </div>
        <div style="margin:20px; text-align:center;">
            <button class="pay-btn" onclick="openPaymentForm()">💳 Make Payment</button>
        </div>
        <div class="result-section">
            <h3>Payment History</h3>
            <table class="result-table" id="paymentHistoryTable">
                <thead>
                    <tr>
                        <th>Receipt No.</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${paymentHistory.map(payment => `
                        <tr>
                            <td>${payment.receiptNo}</td>
                            <td>${payment.date}</td>
                            <td>${payment.amount}</td>
                            <td>${payment.method}</td>
                            <td>${payment.status}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <!-- Payment Popup Form (moved here) -->
        <div id="paymentForm" class="payment-popup">
            <div class="payment-content">
                <span class="close" onclick="closePaymentForm()">&times;</span>
                <h2>Make Payment</h2>
                <form id="paymentFormElement">
                    <label>Amount</label>
                    <input type="number" id="paymentAmount" placeholder="Enter amount in ₹" required>

                    <label>Payment Method</label>
                    <select id="paymentMethod" onchange="showPaymentFields()" required>
                        <option value="">Select Method</option>
                        <option value="UPI">UPI</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>

                    <div id="paymentFields" style="display:none;">
                        <label id="specificLabel"></label>
                        <input type="text" id="specificInput" placeholder="Enter details" required>
                    </div>

                    <label>Transaction ID (if applicable)</label>
                    <input type="text" id="transactionId" placeholder="Enter transaction ID">

                    <button type="submit" class="pay-btn">Submit Payment</button>
                </form>
            </div>
        </div>
    `;
    // Re-assign DOM elements after content is loaded
    paymentFormPopup = document.getElementById('paymentForm');
    paymentFormElement = document.getElementById('paymentFormElement');
    attachPaymentFormSubmitListener();
}

/**
 * Renders the course registration page.
 */
function renderRegistrationPage() {
    updateActiveNavLink('nav-registration');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search courses...")}
        <div class="welcome">
            <div>
                <h2>Course Registration</h2>
                <p>Select your courses for the semester</p>
            </div>
            <img src="https://img.icons8.com/color/96/contract.png" alt="Registration">
        </div>
        <div class="result-section">
            <h3>Available Courses</h3>
            <form id="registrationForm">
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${studentData.allCourses.map(course => {
                            const isRegistered = registeredCourses.includes(course.code);
                            const isDropped = droppedCourses.includes(course.code);
                            const isDisabled = isRegistered || isDropped;
                            const isChecked = isRegistered;

                            return `
                                <tr>
                                    <td><input type="checkbox" name="courses" value="${course.code}" ${isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}></td>
                                    <td>${course.code}</td>
                                    <td>${course.name}</td>
                                    <td>${course.credits}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
                <div style="margin-top:20px; text-align:center;">
                    <button type="submit" class="pay-btn">📑 Submit Registration</button>
                </div>
            </form>
        </div>
        <div class="result-section" id="registeredCoursesSection" style="display:${registeredCourses.length > 0 ? 'block' : 'none'};">
            <h3>Registered Courses</h3>
            <ul id="courseList">
                ${registeredCourses.map(code => `<li>${code} - ${getCourseByCode(code)?.name || 'Unknown Course'}</li>`).join('')}
            </ul>
        </div>
    `;
    attachRegistrationFormSubmitListener();
}

/**
 * Renders the courses page, showing all available courses with view modals.
 */
function renderCoursesPage() {
    updateActiveNavLink('nav-courses');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search courses...")}
        <div class="welcome">
            <div>
                <h2>Your Courses</h2>
                <p>Explore and manage all your enrolled courses</p>
            </div>
            <img src="https://img.icons8.com/color/96/books.png" alt="Courses">
        </div>
        <div class="courses">
            ${studentData.allCourses.map(course => `
                <div class="course-card">
                    <h3>${course.name}</h3>
                    <button class="view-btn" onclick="openCourseModal('${course.id}Modal')">View</button>
                </div>
            `).join('')}
        </div>
        <!-- Modals container (for course details) -->
        <div id="modalsContainer"></div>
    `;
    modalsContainer = document.getElementById('modalsContainer');
    generateCourseModals();
}

/**
 * Renders the drop semester page, allowing students to drop registered courses.
 */
function renderDropPage() {
    updateActiveNavLink('nav-drop');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search registered courses...")}
        <div class="welcome">
            <div>
                <h2>Drop Registered Courses</h2>
                <p>Select the courses you want to drop</p>
            </div>
            <img src="https://img.icons8.com/color/96/cancel.png" alt="Drop Course">
        </div>
        <div class="result-section">
            <h3>Registered Courses</h3>
            <form id="dropForm">
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${registeredCourses.map(code => {
                            const course = getCourseByCode(code);
                            if (course) {
                                const isDropped = droppedCourses.includes(course.code);
                                return `
                                    <tr>
                                        <td><input type="checkbox" name="drop" value="${course.code}" ${isDropped ? 'disabled' : ''}></td>
                                        <td>${course.code}</td>
                                        <td>${course.name}</td>
                                        <td>${course.credits}</td>
                                    </tr>
                                `;
                            }
                            return '';
                        }).join('')}
                    </tbody>
                </table>
                <div style="margin-top:20px; text-align:center;">
                    <button type="submit" class="pay-btn">❌ Drop Selected Courses</button>
                </div>
            </form>
        </div>
        <div class="result-section" id="droppedCoursesSection" style="display:${droppedCourses.length > 0 ? 'block' : 'none'};">
            <h3>Dropped Courses</h3>
            <ul id="droppedList">
                ${droppedCourses.map(code => `<li>${code} - ${getCourseByCode(code)?.name || 'Unknown Course'}</li>`).join('')}
            </ul>
        </div>
    `;
    attachDropFormSubmitListener();
}

/**
 * Renders the academic results page.
 */
function renderResultPage() {
    updateActiveNavLink('nav-result');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search results...")}
        <div class="welcome">
            <div>
                <h2>Academic Results</h2>
                <p>Check your grades for the current semester</p>
            </div>
            <img src="https://img.icons8.com/color/96/report-card.png" alt="Results">
        </div>
        <div class="result-section">
            <table class="result-table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Midterm</th>
                        <th>Final</th>
                        <th>Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentData.results.map(result => `
                        <tr>
                            <td>${result.code}</td>
                            <td>${result.title}</td>
                            <td>${result.midterm}</td>
                            <td>${result.final}</td>
                            <td>${result.grade}</td>
                            <td><span class="status ${result.status.toLowerCase()}">${result.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

/**
 * Renders the notice board page.
 */
function renderNoticePage() {
    updateActiveNavLink('nav-notice');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search notices...")}
        <div class="welcome">
            <div>
                <h2>📢 Notice Board</h2>
                <p>Stay updated with the latest announcements</p>
            </div>
            <img src="https://img.icons8.com/color/96/bell.png" alt="Notice">
        </div>
        <div class="notice-section">
            ${studentData.notices.map(notice => `
                <div class="notice-box">
                    <h4>${notice.title}</h4>
                    <p>${notice.details}</p>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Renders the exam schedule page.
 */
function renderSchedulePage() {
    updateActiveNavLink('nav-schedule');
    mainContentDiv.innerHTML = `
        ${renderTopbar("Search schedule...")}
        <div class="welcome">
            <div>
                <h2>📅 Exam Schedule</h2>
                <p>View your upcoming exam dates and times</p>
            </div>
            <img src="https://img.icons8.com/color/96/calendar.png" alt="Schedule">
        </div>
        <div class="result-section">
            <table class="result-table" style="text-align:center;">
                <thead>
                    <tr style="background:#4B0082; color:white;">
                        <th>Course</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentData.schedule.map(item => `
                        <tr>
                            <td>${item.course}</td>
                            <td>${item.date}</td>
                            <td>${item.time}</td>
                            <td>${item.room}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// --- Modal and Popup Logic ---

/**
 * Dynamically generates all course detail modals based on `studentData.courseDetails`.
 * These modals are added to the `modalsContainer` on the current page.
 */
function generateCourseModals() {
    if (!modalsContainer) return; // Ensure modalsContainer exists on the current page
    modalsContainer.innerHTML = ''; // Clear existing modals
    for (const courseId in studentData.courseDetails) {
        const courseDetail = studentData.courseDetails[courseId];
        const courseName = getCourseById(courseId)?.name || courseId; // Get full name from allCourses
        const modalHtml = `
            <div id="${courseId}Modal" class="modal">
                <div class="modal-content">
                    <span class="close" onclick="closeCourseModal('${courseId}Modal')">&times;</span>
                    <h2>${courseName}</h2>
                    <p><b>Description:</b> ${courseDetail.description}</p>
                    <ul>
                        ${courseDetail.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        modalsContainer.insertAdjacentHTML('beforeend', modalHtml);
    }
}

/**
 * Opens a specific course modal.
 * @param {string} modalId - The ID of the modal to open (e.g., 'OOPModal').
 */
window.openCourseModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Use flex to center content
    }
}

/**
 * Closes a specific course modal.
 * @param {string} modalId - The ID of the modal to close.
 */
window.closeCourseModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

/**
 * Opens the payment form popup.
 */
window.openPaymentForm = function() {
    if (paymentFormPopup) {
        paymentFormPopup.style.display = "flex";
    }
}

/**
 * Closes the payment form popup and resets its fields.
 */
window.closePaymentForm = function() {
    if (paymentFormPopup) {
        paymentFormPopup.style.display = "none";
        if (paymentFormElement) {
            paymentFormElement.reset(); // Clear form fields
            document.getElementById("paymentFields").style.display = "none"; // Hide specific fields
        }
    }
}

/**
 * Shows/hides specific input fields in the payment form based on the selected payment method.
 */
window.showPaymentFields = function() {
    const method = document.getElementById("paymentMethod").value;
    const paymentFields = document.getElementById("paymentFields");
    const specificLabel = document.getElementById("specificLabel");
    const specificInput = document.getElementById("specificInput");

    if (method === "UPI") {
        specificLabel.innerText = "UPI ID";
        specificInput.placeholder = "Enter UPI ID";
        paymentFields.style.display = "block";
        specificInput.required = true;
    } else if (method === "Credit Card" || method === "Debit Card") {
        specificLabel.innerText = "Card Number";
        specificInput.placeholder = "Enter Card Number";
        paymentFields.style.display = "block";
        specificInput.required = true;
    } else if (method === "Net Banking") {
        specificLabel.innerText = "Bank Name";
        specificInput.placeholder = "Enter Bank Name";
        paymentFields.style.display = "block";
        specificInput.required = true;
    } else {
        paymentFields.style.display = "none";
        specificInput.required = false;
    }
}

/**
 * Attaches the submit event listener to the payment form.
 */
function attachPaymentFormSubmitListener() {
    if (paymentFormElement) {
        paymentFormElement.onsubmit = function(e) {
            e.preventDefault(); // Prevent default form submission

            const amount = document.getElementById("paymentAmount").value;
            const method = document.getElementById("paymentMethod").value;

            if (!amount || !method) {
                alert("Please fill in all required payment details.");
                return;
            }

            const paymentRecord = {
                receiptNo: `R-${++receiptCounter}`,
                date: new Date().toLocaleDateString(),
                amount: `₹${amount}`,
                method: method,
                status: 'Paid'
            };

            paymentHistory.push(paymentRecord);
            localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));

            // Update finance data (simple example, ideally this would be server-side)
            let currentPaid = parseInt(studentData.finance.totalPaid.replace('₹', '').replace(/,/g, ''));
            let currentPending = parseInt(studentData.finance.pendingBalance.replace('₹', '').replace(/,/g, ''));
            const paymentAmountNum = parseInt(amount);

            studentData.finance.totalPaid = `₹${(currentPaid + paymentAmountNum).toLocaleString()}`;
            studentData.finance.pendingBalance = `₹${(currentPending - paymentAmountNum).toLocaleString()}`;

            closePaymentForm();
            renderPaymentPage(); // Re-render payment page to show updated history and balance
            alert("✅ Payment submitted successfully!");
        };
    }
}

/**
 * Attaches the submit event listener to the registration form.
 */
function attachRegistrationFormSubmitListener() {
    const form = document.getElementById("registrationForm");
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const selectedCheckboxes = document.querySelectorAll("#registrationForm input[name='courses']:checked");
            const newlyRegistered = Array.from(selectedCheckboxes)
                .filter(cb => !registeredCourses.includes(cb.value))
                .map(cb => cb.value);

            if (newlyRegistered.length === 0) {
                alert("⚠️ Please select at least one new course to register.");
                return;
            }

            registeredCourses.push(...newlyRegistered);
            localStorage.setItem('registeredCourses', JSON.stringify(registeredCourses));
            renderRegistrationPage();
            alert("✅ Courses registered successfully!");
        };
    }
}

/**
 * Attaches the submit event listener to the drop course form.
 */
function attachDropFormSubmitListener() {
    const form = document.getElementById("dropForm");
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const selectedCheckboxes = document.querySelectorAll("#dropForm input[name='drop']:checked");
            const coursesToDrop = Array.from(selectedCheckboxes)
                .filter(cb => !droppedCourses.includes(cb.value))
                .map(cb => cb.value);

            if (coursesToDrop.length === 0) {
                alert("⚠️ Please select at least one course to drop.");
                return;
            }

            registeredCourses = registeredCourses.filter(code => !coursesToDrop.includes(code));
            localStorage.setItem('registeredCourses', JSON.stringify(registeredCourses));

            droppedCourses.push(...coursesToDrop);
            localStorage.setItem('droppedCourses', JSON.stringify(droppedCourses));

            renderDropPage();
            alert("✅ Courses dropped successfully!");
        };
    }
}

// --- Search Functionality ---
window.handleSearch = function() {
    const currentPage = window.location.pathname.split('/').pop();
    const query = document.getElementById('searchInput').value.toLowerCase();

    if (currentPage === 'dashboard.html') {
        const allTopics = [];
        for (const courseId in studentData.courseDetails) {
            allTopics.push(...studentData.courseDetails[courseId].topics);
        }
        const filteredTopics = allTopics.filter(topic => topic.toLowerCase().includes(query));
        const topicContent = document.getElementById('topicContent');
        if (topicContent) {
            topicContent.innerHTML = "";
            if (query.length > 0) {
                filteredTopics.forEach(topic => {
                    let topicDiv = document.createElement('div');
                    topicDiv.className = 'topic';
                    topicDiv.innerText = topic;
                    topicContent.appendChild(topicDiv);
                });
                document.getElementById('courseDesc').innerHTML = "";
                document.getElementById('topicSection').style.display = 'block';
            } else {
                document.getElementById('topicSection').style.display = 'none';
            }
        }
    }
    // Add more search logic for other pages if needed
};

function attachDashboardSearchListener() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.oninput = window.handleSearch;
    }
}

// --- Initial Load and Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    mainContentDiv = document.getElementById('mainContent'); // Assign mainContentDiv for the current page
    modalsContainer = document.getElementById('modalsContainer'); // Assign modalsContainer for the current page

    const currentPage = window.location.pathname.split('/').pop();

    // Update active class for sidebar links based on current page
    const navId = `nav-${currentPage.replace('.html', '')}`;
    updateActiveNavLink(navId);

    // Call the appropriate rendering function based on the current page
    switch (currentPage) {
        case 'dashboard.html':
            renderDashboardPage();
            break;
        case 'payment.html':
            renderPaymentPage();
            break;
        case 'registration.html':
            renderRegistrationPage();
            break;
        case 'courses.html':
            renderCoursesPage();
            break;
        case 'drop.html':
            renderDropPage();
            break;
        case 'result.html':
            renderResultPage();
            break;
        case 'notice.html':
            renderNoticePage();
            break;
        case 'schedule.html':
            renderSchedulePage();
            break;
        default:
            // For index.html or any other unhandled page, do nothing or redirect
            break;
    }
});