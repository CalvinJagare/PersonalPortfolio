const portfolioContent = {
    'portfolio': {
        'resume.pdf': {
            title: 'Resume',
            content: `RESUME - JOHN DOE
===================

PROFESSIONAL SUMMARY:
Senior Software Developer with 5+ years of experience in full-stack 
development, specializing in React, Node.js, and cloud technologies.

CORE COMPETENCIES:
• Full-Stack Development (React, Node.js, Python)
• Microservices Architecture
• Cloud Platforms (AWS, Azure)
• Database Design (SQL, NoSQL)
• DevOps & CI/CD
• Team Leadership & Mentoring

EDUCATION:
Bachelor of Science in Computer Science
University of Technology, 2018-2022

CERTIFICATIONS:
• AWS Certified Developer
• MongoDB Certified Developer
• React Developer Certification

📄 DOWNLOAD RESUME: 
Click here to download the full PDF version:
https://your-resume-link.com/resume.pdf

Or view online: https://your-resume-link.com/resume`,
            pdfUrl: 'https://your-resume-link.com/resume.pdf'
        }
    },
    'about': {
        'about.txt': {
            title: 'About Me',
            content: `NAME: Calvin Jägare
LOCATION: Luleå, Sweden
EMAIL: cal.daniel.jagare@gmail.com
PHONE: +46 70 338 98 87

BIO:
Hi! I'm Calvin, a passionate and dedicated .NET system development student at YH Akademin. Programming has always been a strong personal interest of mine, and I've spent countless hours developing my skills independently. Now, through structured education, I'm building a deeper technical foundation and sharpening my approach to real-world development.

I'm driven, curious, and always eager to learn new technologies. Whether I'm working on backend systems, web applications, or refining existing solutions, I bring energy, precision, and a mindset focused on growth and quality.

EDUCATION:
• System Developer .NET
  YH Akademin, Aug 2024 – May 2026 (Ongoing)
  Completed courses include:
    – Object-Oriented Programming with C#
    – Database Development
    – Dynamic Web Applications
    – Agile System Development
    – Business Acumen
    – Programming with C#.NET
    – Test-Driven Development

• Police Academy
  Umeå University, Aug 2021 – May 2023

• Exercise and Nutrition Science
  Umeå University, Aug 2023 – May 2024

INTERESTS:
• Web and Software Development
• Continuous Learning and Personal Growth
• Fitness, Nutrition, and Photography
• Basketball and Sports`
        },
        'personal-statement.txt': {
            title: 'Personal Statement',
            content: `PERSONAL STATEMENT
====================

I believe that technology should be meaningful, something that improves lives, drives innovation, and contributes to a better society. As a .NET system development student with a deep personal interest in programming, I approach every project with curiosity, responsibility, and the goal of building practical, impactful software.

My technical experience spans C#, .NET, SQL, EF Core, and Azure, along with foundational knowledge in Python, Java, and Unity. I enjoy turning complex requirements into well-structured, maintainable code and have a growing interest in areas like cloud development, data visualization, and interactive technologies such as VR and game design.

Outside of my studies, I'm constantly learning, whether by exploring new frameworks, diving into side projects, or researching emerging technologies. I thrive in environments where I'm encouraged to experiment, collaborate, and build things that matter.

I'm motivated by real-world challenges, and I'm excited about opportunities where I can both contribute and grow as a developer, especially in settings that combine creativity, technology, and long-term societal value.`
        }
    },
    'projects': {
        'property-platform.txt': {
            title: 'Property Platform',
            content: `BROPERTYBROS PLATFORM
====================

TECHNOLOGY STACK:
• Frontend: Blazor WebAssembly
• Backend: ASP.NET Core Web API
• Database: Azure SQL
• Authentication: Role-based access
• Hosting: Azure

FEATURES:
• Public-facing portal for browsing property listings
• Realtor portal for posting new listings and managing firm details
• Admin panel for realtor/user management
• Super admin controls for full system oversight
• Fully responsive UI
• Secure login system with role separation

PROJECT HIGHLIGHTS:
• Full-stack development with clean separation between API and client
• Developed both client (BropertyBrosClientApplication) and backend (BropertyBrosApi) from scratch
• Demonstrated structured role management and modular backend design
• Served as a simulated real-world product with layered permissions and functionality`
        },
        'board-game-calculator.txt': {
            title: 'Board Game Calculator',
            content: `BOARD GAME CALCULATOR
====================

TECHNOLOGY STACK:
• Mobile App: .NET MAUI 
• Backend: Local storage

FEATURES:
• In-app calculator for advanced board game rules
• State tracking for rounds, players, and scores
• Simple UI optimized for fast in-game use

PROJECT HIGHLIGHTS:
• Designed for personal board game use with reusability across games
• Emphasized UX for speed and clarity in social settings
• Hands-on practice with mobile interface patterns and state persistence`
        },
        'kpi-system.txt': {
            title: 'KPI System',
            content: `KPI SYSTEM
====================

TECHNOLOGY STACK:
• Backend: .NET Web API
• Automation: Power Automate
• Data Collection: Microsoft Forms
• Database: Azure SQL
• Visualization: Power BI
• Identity: Microsoft Entra

FEATURES:
• Structured API for ingesting and storing form submissions
• Automated data flow from Forms to SQL via Power Automate
• Comment and KPI linkage logic for enhanced reporting
• Power BI dashboards for internal stakeholders

PROJECT HIGHLIGHTS:
• Built and deployed independently at LTU via the eMaintenance group
• Delivered a functioning MVP with full documentation
• Integrated identity and access management via Microsoft Entra
• Built a scalable backend data structure for long-term use`
        },
        'flash-hack-forum.txt': {
            title: 'Flash Hack Forum',
            content: `FLASH HACK FORUM
====================

TECHNOLOGY STACK:
• Frontend: HTML/CSS/JavaScript 
• Backend: .NET / REST API
• Database: SQL-based system

FEATURES:
• Themed forum with user accounts and content categories
• Admin roles for moderation and content management
• Personal profile pages with customization

PROJECT HIGHLIGHTS:
• Built complete user auth system with tiered permissions
• Focused on forum usability and extensibility
• Created for fast-paced development during a time-limited sprint`
        },
        'face-detect.txt': {
            title: 'Face Detect',
            content: `FACE DETECT
====================

TECHNOLOGY STACK:
• Language: Python
• Libraries: Deepface (and others similar to it)

FEATURES:
• Real-time camera input for face tracking
• Age, expression, and identity detection
• Visual overlay feedback via webcam

PROJECT HIGHLIGHTS:
• Fun exploration of computer vision and face recognition
• Experimented with various pre-trained models
• Gained practical insights into real-time processing challenges`
        },
        'portfolio-file-explorer.txt': {
            title: 'Portfolio File Explorer',
            content: `PORTFOLIO FILE EXPLORER
====================

TECHNOLOGY STACK:
• Frontend: HTML, CSS (custom Windows XP theme)
• JavaScript: Dynamic file explorer logic
• PDF.js: Embedded PDF viewer
• Sound: Web Audio API for Windows sound effects

FEATURES:
• Windows XP-style file explorer interface
• Interactive folder navigation and modal file viewing
• Dynamic loading of text and PDF content
• Classic Windows sound effects and animations
• Responsive design for desktop and mobile

PROJECT HIGHLIGHTS:
• Designed and built as a personal portfolio with a nostalgic twist
• Integrated PDF viewer and sound effects for authentic experience
• Fully customizable folder/file structure and content
• Deployed as a static site for easy hosting`
        },
        'ai-bro-bott.txt': {
            title: 'AI-Bro Bott',
            content: `AI-BRO BOTT
====================

TECHNOLOGY STACK:
• Language: Python
• Libraries: OpenAI API, basic NLP libraries

FEATURES:
• Conversational chatbot with fratboy-style personality
• Handles casual prompts and slang with humorous output
• Runs in terminal or chat interface

PROJECT HIGHLIGHTS:
• Built as a creative experiment in personality-driven AI
• Tinkered with prompt engineering and tone consistency
• Reinforced understanding of chatbot behavior and limitations`
        }
    },
    'skills': {
        'technical-skills.txt': {
            title: 'Technical Skills',
            content: `TECHNICAL SKILLS
================

PROGRAMMING LANGUAGES:
• C# – Advanced
• SQL – Advanced
• JavaScript – Intermediate
• Java – Basic
• Python – Basic

FRONTEND TECHNOLOGIES:
• Blazor – Advanced
• HTML5/CSS3 – Advanced
• Bootstrap – Intermediate
• Tailwind CSS – Basic

BACKEND & FRAMEWORKS:
• .NET / .NET Core – Advanced
• ASP.NET – Advanced
• Entity Framework Core – Advanced
• RESTful APIs – Intermediate

DATABASES:
• Microsoft SQL Server – Advanced
• SQLite – Intermediate
• PostgreSQL – Basic

DEVOPS & TOOLS:
• Visual Studio / VS Code – Advanced
• Azure – Intermediate
• Power Automate – Advanced
• Power BI – Intermediate
• Git / GitHub – Intermediate
• Docker – Basic`
        },
        'soft-skills.txt': {
            title: 'Soft Skills',
            content: `SOFT SKILLS
============

LEADERSHIP & MANAGEMENT:
• Independent Decision-Making
• Taking Initiative in Problem Situations
• Responsibility & Accountability
• Service-Driven Prioritization
• Task Planning and Coordination

COMMUNICATION:
• Clear and Empathetic Communication
• Technical Support & Troubleshooting Dialogue
• Customer-Focused Explanations
• Cross-Team Coordination
• Professional Written and Verbal Skills

PROBLEM SOLVING:
• Analytical Troubleshooting 
• Solution-Oriented Thinking
• Ability to Handle Complex Inquiries
• Decision-Making Under Pressure
• Evaluating User Needs and Delivering Targeted Solutions

WORK ETHIC:
• Time and Task Management
• Adaptability Across Industries
• Stress-Resilience in Fast-Paced Roles
• Consistent Quality and Precision
• Commitment to Growth and Learning

INTERPERSONAL:
• Customer Relations and Service Mindset
• Professional and Friendly Front-Facing Communication
• Conflict Awareness and Empathy (supported by Police/Nutrition background)
• Team Collaboration
• Active Listening and Situational Awareness`
        }
    },
    'experience': {
        'intern-developer.txt': {
            title: 'Intern Developer – Customer Portal',
            content: `INTERN DEVELOPER – CUSTOMER PORTAL
===============================
Company: Snek
Duration: Starting Aug 2025
Location: Sweden (Remote/Hybrid)

ROLE & RESPONSIBILITIES:
• Building a customer-facing portal to support business operations
• Responsible for both backend and frontend development
• Collaborating closely with the business team to tailor solutions to real customer needs
• Contributing to design, architecture, and delivery of production-ready features

TECHNICAL GOALS:
• Leverage Blazor or modern web frameworks in real business context
• Implement secure authentication and customer management tools
• Deploy scalable backend services and integrate with internal APIs

GROWTH OPPORTUNITIES:
• Gain hands-on experience in building production systems
• Work closely with business stakeholders to align tech with strategy
• Expand understanding of SaaS product delivery in a startup context`
        },
        'solo-developer.txt': {
            title: 'Solo Developer – KPI System',
            content: `SOLO DEVELOPER – KPI SYSTEM
==========================
Company: Luleå University of Technology (via eMaintenance Group)
Duration: Summer 2025
Location: Luleå, Sweden

ROLE & RESPONSIBILITIES:
• Independently developed a KPI tracking system to support research project reporting
• Built a backend API for structured form data ingestion using C# and .NET
• Integrated Microsoft Forms, Power Automate, and Azure SQL to automate and centralize data collection
• Enabled visualization and reporting through structured Power BI dashboards
• Worked with Microsoft Entra for secure identity management and access control

TECHNICAL ACHIEVEMENTS:
• Designed a normalized relational database schema in Azure SQL for scalable storage
• Developed robust Power Automate flows for form processing, data validation, and comment linking
• Integrated Microsoft Entra for authenticated access to internal systems
• Delivered a clean API endpoint structure tailored for automation and analysis

LEADERSHIP ACHIEVEMENTS:
• Managed the full development cycle independently—from planning to deployment
• Created comprehensive internal documentation and user guides for future developers and analysts
• Aligned the system design with academic reporting needs and long-term maintainability
• Delivered a fully functional and production-ready MVP with stakeholder approval`
        },
        'technical-support-advisor.txt': {
            title: 'Technical Support Advisor',
            content: `TECHNICAL SUPPORT ADVISOR
=========================
Company: Telia
Duration: Jan 2019 – Apr 2021
Location: Sweden

ROLE & RESPONSIBILITIES:
• Delivered technical support for broadband, TV, and mobile services
• Troubleshot hardware/software issues and guided customers through solutions
• Balanced multiple high-priority cases in a fast-paced environment
• Ensured positive customer experience through professional communication

TECHNICAL ACHIEVEMENTS:
• Refined issue-tracking workflows to improve support efficiency
• Built strong foundational knowledge in networking and telecom systems
• Maintained internal documentation for recurring support issues
• Achieved consistently high customer satisfaction metrics

LEADERSHIP ACHIEVEMENTS:
• Mentored junior team members and assisted in onboarding
• Took ownership of complex or escalated technical cases
• Demonstrated calm and clarity in high-pressure situations`
        }
    },
    'contact': {
        'contact-info.txt': {
            title: 'Contact Details',
            content: `CONTACT DETAILS
===============

EMAIL ADDRESSES:
• Primary: cal.daniel.jagare@gmail.com

PHONE NUMBERS:
• Mobile: +46 70 338 98 87

SOCIAL MEDIA:
• LinkedIn: www.linkedin.com/in/calvin-jägare
• GitHub: @https://github.com/CalvinJagare 

LOCATION:
• City: Luleå
• Country: Sweden

AVAILABILITY:
• Open to new opportunities: Yes
• Remote work: Open
• Relocation: Open to discussion
• Contract work: Available

Let’s connect and explore how I can bring value to your team or project!`
        }
    }
};

let soundsMuted = false;

const fileItems = document.querySelectorAll('.file-item');
const folderItems = document.querySelectorAll('.folder-item');
const modal = document.getElementById('fileModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const titleBar = document.querySelector('.title-bar');
const closeButton = document.querySelector('.title-bar-button.close');

// File explorer functionality
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    
    selectFolder('portfolio');
    
    updateStatusBar();
    updateTaskbarTime();
    setInterval(updateTaskbarTime, 1000);
});

function initializeEventListeners() {
    folderItems.forEach(item => {
        item.addEventListener('click', function() {
            const folderName = this.getAttribute('data-folder');
            if (window.windowsSounds && !soundsMuted) {
                window.windowsSounds.playClickSound();
            }
            selectFolder(folderName);
        });
    });

    modalClose.addEventListener('click', function() {
        if (window.windowsSounds && !soundsMuted) {
            window.windowsSounds.playModalCloseSound();
        }
        closeModal();
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            if (window.windowsSounds && !soundsMuted) {
                window.windowsSounds.playModalCloseSound();
            }
            closeModal();
        }
    });

    titleBar.addEventListener('mousedown', startDragging);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);

    closeButton.addEventListener('click', function() {
        if (window.windowsSounds && !soundsMuted) {
            window.windowsSounds.playClickSound();
        }
        if (confirm('Are you sure you want to close the Portfolio Explorer?')) {
            window.close();
        }
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            if (window.windowsSounds && !soundsMuted) {
                window.windowsSounds.playClickSound();
            }
            console.log('Menu clicked:', this.textContent);
        });
    });

    document.querySelectorAll('.toolbar-button').forEach(button => {
        button.addEventListener('click', function() {
            if (window.windowsSounds && !soundsMuted) {
                window.windowsSounds.playClickSound();
            }
            console.log('Toolbar clicked:', this.querySelector('i').className);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            closeModal();
        }
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    document.querySelector('.taskbar-windows').addEventListener('click', function() {
        if (window.windowsSounds && !soundsMuted) {
            window.windowsSounds.playClickSound();
        }
        document.querySelector('.file-explorer').style.zIndex = '1001';
        setTimeout(() => {
            document.querySelector('.file-explorer').style.zIndex = '10';
        }, 100);
    });

    const soundToggle = document.getElementById('soundToggle');
    
    soundToggle.addEventListener('click', function() {
        soundsMuted = !soundsMuted;
        if (soundsMuted) {
            this.textContent = '🔇';
            this.classList.add('muted');
            this.title = 'Enable Sounds';
        } else {
            this.textContent = '🔊';
            this.classList.remove('muted');
            this.title = 'Disable Sounds';
            if (window.windowsSounds) {
                window.windowsSounds.playClickSound();
            }
        }
    });
}

function openFile(fileName, folderName) {
    const fileData = portfolioContent[folderName]?.[fileName];
    if (fileData) {
        modalTitle.textContent = fileData.title;
        
        if (fileName.endsWith('.pdf')) {
            openPdfFile(fileData);
        } else {
            modalBody.innerHTML = `<div class="file-content">${fileData.content}</div>`;
        }
        
        if (window.windowsSounds && !soundsMuted) {
            window.windowsSounds.playFileOpenSound();
        }
        
        modal.style.display = 'block';
    }
}

function openPdfFile(fileData) {
    modalBody.innerHTML = `
        <div class="pdf-container">
            <div class="pdf-toolbar">
                <button class="pdf-download-btn" onclick="downloadPdf()">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <button class="pdf-zoom-btn" onclick="zoomPdf('in')">
                    <i class="fas fa-search-plus"></i>
                </button>
                <button class="pdf-zoom-btn" onclick="zoomPdf('out')">
                    <i class="fas fa-search-minus"></i>
                </button>
            </div>
            <div class="pdf-viewer" id="pdfViewer">
                <div class="pdf-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    Loading PDF...
                </div>
            </div>
        </div>
    `;
    
    loadPdfContent(fileData.pdfUrl || 'path/to/your/resume.pdf');
}

let currentPdfZoom = 1.0;

function loadPdfContent(pdfUrl) {
    const pdfViewer = document.getElementById('pdfViewer');
    
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const viewport = page.getViewport({scale: currentPdfZoom});
            
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            
            page.render(renderContext).promise.then(function() {
                pdfViewer.innerHTML = '';
                pdfViewer.appendChild(canvas);
            });
        });
    }).catch(function(error) {
        pdfViewer.innerHTML = `
            <div class="pdf-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Could not load PDF. Please check the file path.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    });
}

function downloadPdf() {
    const link = document.createElement('a');
    link.href = 'path/to/your/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
}

function zoomPdf(direction) {
    if (direction === 'in') {
        currentPdfZoom = Math.min(currentPdfZoom * 1.2, 3.0);
    } else {
        currentPdfZoom = Math.max(currentPdfZoom / 1.2, 0.5);
    }
    
    const pdfViewer = document.getElementById('pdfViewer');
    if (pdfViewer.querySelector('canvas')) {
        loadPdfContent('path/to/your/resume.pdf');
    }
}

function closeModal() {
    modal.style.display = 'none';
}

function selectFolder(folderName) {
    folderItems.forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('i');
        icon.className = 'fas fa-folder';
    });
    
    const selectedFolder = document.querySelector(`[data-folder="${folderName}"]`);
    if (selectedFolder) {
        selectedFolder.classList.add('active');
        const icon = selectedFolder.querySelector('i');
        icon.className = 'fas fa-folder-open';
    }
    
    const addressInput = document.querySelector('.address-input');
    if (folderName === 'portfolio') {
        addressInput.textContent = 'C:\\CalvinJagare\\Portfolio\\';
    } else {
        addressInput.textContent = `C:\\CalvinJagare\\Portfolio\\${folderName}\\`;
    }
    
    loadFolderContents(folderName);
    
    updateStatusBar();
}

function loadFolderContents(folderName) {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    
    if (folderName === 'portfolio') {
        const subFolders = ['about', 'projects', 'skills', 'experience', 'contact'];
        subFolders.forEach(subFolder => {
            const folderItem = document.createElement('div');
            folderItem.className = 'file-item folder-display';
            folderItem.setAttribute('data-folder', subFolder);
            
            folderItem.innerHTML = `
                <i class="fas fa-folder"></i>
                <span>${subFolder.charAt(0).toUpperCase() + subFolder.slice(1)}/</span>
            `;
            
            folderItem.addEventListener('click', function() {
                if (window.windowsSounds && !soundsMuted) {
                    window.windowsSounds.playClickSound();
                }
                selectFolder(subFolder);
            });
            
            folderItem.addEventListener('dblclick', function() {
                if (window.windowsSounds && !soundsMuted) {
                    window.windowsSounds.playClickSound();
                }
                selectFolder(subFolder);
            });
            
            fileList.appendChild(folderItem);
        });
        
        if (portfolioContent[folderName]) {
            const files = portfolioContent[folderName];
            Object.keys(files).forEach(fileName => {
                const fileData = files[fileName];
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.setAttribute('data-file', fileName);
                fileItem.setAttribute('data-folder', folderName);
                
                // Determine icon based on file extension
                let iconClass = 'fas fa-file-alt';
                if (fileName.endsWith('.html')) {
                    iconClass = 'fas fa-file-code';
                } else if (fileName.endsWith('.pdf')) {
                    iconClass = 'fas fa-file-pdf';
                } else if (fileName.endsWith('.txt')) {
                    iconClass = 'fas fa-file-alt';
                }
                
                fileItem.innerHTML = `
                    <i class="${iconClass}"></i>
                    <span>${fileName}</span>
                `;
                
                // Add click event
                fileItem.addEventListener('click', function() {
                    if (window.windowsSounds && !soundsMuted) {
                        window.windowsSounds.playClickSound();
                    }
                    openFile(fileName, folderName);
                });
                
                fileItem.addEventListener('dblclick', function() {
                    if (window.windowsSounds && !soundsMuted) {
                        window.windowsSounds.playClickSound();
                    }
                    openFile(fileName, folderName);
                });
                
                fileList.appendChild(fileItem);
            });
        }
    } else {
        if (portfolioContent[folderName]) {
            const files = portfolioContent[folderName];
            Object.keys(files).forEach(fileName => {
                const fileData = files[fileName];
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.setAttribute('data-file', fileName);
                fileItem.setAttribute('data-folder', folderName);
                
                // Determine icon based on file extension
                let iconClass = 'fas fa-file-alt';
                if (fileName.endsWith('.html')) {
                    iconClass = 'fas fa-file-code';
                } else if (fileName.endsWith('.pdf')) {
                    iconClass = 'fas fa-file-pdf';
                } else if (fileName.endsWith('.txt')) {
                    iconClass = 'fas fa-file-alt';
                }
                
                fileItem.innerHTML = `
                    <i class="${iconClass}"></i>
                    <span>${fileName}</span>
                `;
                
                // Add click event
                fileItem.addEventListener('click', function() {
                    if (window.windowsSounds && !soundsMuted) {
                        window.windowsSounds.playClickSound();
                    }
                    openFile(fileName, folderName);
                });
                
                fileItem.addEventListener('dblclick', function() {
                    if (window.windowsSounds && !soundsMuted) {
                        window.windowsSounds.playClickSound();
                    }
                    openFile(fileName, folderName);
                });
                
                fileList.appendChild(fileItem);
            });
        }
    }
}

function updateStatusBar() {
    const fileList = document.getElementById('fileList');
    const fileCount = fileList.children.length;
    document.querySelector('.status-left').textContent = `${fileCount} objects`;
}

function updateTaskbarTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    const taskbarTime = document.getElementById('taskbarTime');
    if (taskbarTime) {
        taskbarTime.textContent = timeString;
    }
}

function startDragging(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    
    if (e.target === titleBar) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        xOffset = currentX;
        yOffset = currentY;
        
        setTranslate(currentX, currentY, document.querySelector('.file-explorer'));
    }
}

function stopDragging() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

const style = document.createElement('style');
style.textContent = `
    @keyframes modalOpen {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .file-item {
        transition: all 0.2s ease;
    }
    
    .file-item:active {
        transform: scale(0.95);
    }
    
    .title-bar-button {
        transition: all 0.1s ease;
    }
    
    .toolbar-button {
        transition: all 0.1s ease;
    }
`;
document.head.appendChild(style);

function addNostalgicFeatures() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    fileItems.forEach(item => {
        item.addEventListener('mousedown', function(e) {
            if (e.ctrlKey) {
                this.classList.toggle('selected');
            } else {
                fileItems.forEach(fi => fi.classList.remove('selected'));
                this.classList.add('selected');
            }
        });
    });
}

addNostalgicFeatures();

let clickCount = 0;
document.querySelector('.title-bar-icon').addEventListener('click', function() {
    clickCount++;
    if (clickCount >= 5) {
        alert('🎉 You found the Easter egg! Classic Windows nostalgia! 🎉');
        clickCount = 0;
    }
}); 