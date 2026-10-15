import { Link } from "react-router-dom";
import { CVEs } from "../CVEs/CVEsData";
import "./styles.css";

const achievements = [
  { title: "Research & Innovation Project of the Year", context: "Youth Diplomacy, Russia–China Forum, Kazan", detail: "Recognition for work on medical image analysis, automated vulnerability discovery and AI-assisted code review. The portfolio reports 98% accuracy for a breast-cancer model; this is a project result, not clinical validation.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_india-ai-activity-7374853878694969344-8WOp" },
  { title: "BRICS Hi-Tech Championship 2025 · Silver", context: "Drone Artificial Intelligence · Yekaterinburg, Russia", detail: "Built a system for creating 3D digital twins of power transmission infrastructure from drone imagery and LiDAR scans.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_silver-for-india-at-the-brics-hi-tech-2025-activity-7398991096946769920-ZBWW" },
  { title: "BRICS Future Skills 2024 · Gold", context: "Drone Artificial Intelligence · Kazan", detail: "Gold medal result listed in the TeX portfolio.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7249816102933852186/" },
  { title: "The Professionals International Championship 2025", context: "Individual silver · Team bronze", detail: "Aviation and flight systems engineering.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_last-championship-of-the-year-2025-and-individually-activity-7411072912834641920-_mJq" },
  { title: "The Professionals International Championship 2023 · Bronze", context: "IT Software Solutions", detail: "Represented India in the business software solutions discipline.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_it-softwaretesting-softwarearchitecture-activity-7137111142727831552-zIjh" },
  { title: "High Technology International Championship 2023 · Silver", context: "Neural Networks and Big Data", detail: "Competition work in computer vision and neural networks.", url: "https://github.com/KirtiRamchandani/HighTechnologyChampionshipFinals" },
  { title: "Google Play Security Research Program · Top researcher", context: "2022", detail: "The TeX portfolio lists recognition in the program and an invitation to BountyCon 2022 Singapore.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_googlechrome-google-bountycon2022-activity-7173961161887928320-N6ba" },
  { title: "Games of Future · Competitive programming finalist", context: "India representative", detail: "Finalist result listed in the TeX portfolio.", url: "https://www.linkedin.com/feed/update/urn:li:activity:7185206116740435968/" },
];

const talks = [
  { title: "Hacking Webviews for Fun & Profit", venue: "CheckMates 2024", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_cpx2024-browsersecurity-webviews-activity-7173971503451922432-Xdfv" },
  { title: "Hacking Webviews & Browsers for Fun and Profit", venue: "Microsoft BlueHat 2024", url: "https://x.com/MSFTBlueHat/status/1789636240129556758" },
  { title: "Cyber Security", venue: "IEEE GCET · Guest lecture" },
  { title: "Threat Analysis and Investigative Techniques in the Modern World", venue: "IEEE Nirma University · Guest lecture" },
];

const projects = [
  { title: "StaleZero", area: "Distributed systems", stack: "TypeScript · Redis · TanStack Query · SWR · Next.js", detail: "An open-source coordination layer for modeling downstream effects of application mutations, with blast-radius previews, execution receipts, verification hooks, replay and graph linting. The TeX describes it as a release candidate; no industrial deployment is claimed.", url: "https://github.com/KirtiRamchandani/StaleZero" },
  { title: "Power transmission digital twin", area: "Drone AI", stack: "Python · Computer vision · UAV imagery · LiDAR", detail: "Reconstructs transmission assets as 3D digital twins, with components for identifying towers, insulators and wires. Associated with the BRICS Hi-Tech Championship 2025 silver-medal work." },
  { title: "Medical image analysis", area: "Applied AI", stack: "Python · TensorFlow / PyTorch · Computer vision", detail: "Breast- and colon-cancer image classification research using preprocessing, augmentation and deep-learning models. The reported 98% breast-cancer accuracy is a project metric, without clinical validation." },
  { title: "Browser attribute fuzzer", area: "Security tooling", stack: "JavaScript · DOM · Fuzzing", detail: "Generates browser-attribute inputs to probe compatibility and unexpected behavior across implementations." },
  { title: "Browser vulnerability scanner", area: "Security tooling", stack: "JavaScript · DOM · Canvas", detail: "Mutates UI dimensions and canvas elements to surface potential browser UI issues and save the resulting cases." },
  { title: "Management information system", area: "Business software", stack: "Python · Django · Flask · Tkinter · PostgreSQL", detail: "Desktop application and database architecture developed for an IT Software for Business Solution competition." },
  { title: "Neural Network & Big Data", area: "Competition project", stack: "Python · OpenCV · COCO dataset", detail: "Neural-network work prepared for the High Technology Championship.", url: "https://github.com/KirtiRamchandani/HighTechnologyChampionshipFinals" },
  { title: "Art Gallery", area: "Web application", stack: "JavaScript · Vue.js · Web Workers", detail: "Photo gallery with zoom controls and background image-loading work.", url: "https://github.com/KirtiRamchandani/portfolio" },
  { title: "Remote home automation", area: "IoT", stack: "Arduino · ESP32 · Wi-Fi · Sensors", detail: "A Wi-Fi controlled automation prototype connecting sensors and actuators.", url: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_and-atlast-made-my-first-iot-product-after-activity-6426871555745251328-HyTE" },
  { title: "Algorithmic trading framework", area: "Financial software", stack: "Python · Pandas · NumPy", detail: "Implements Gann levels and Fibonacci retracement strategies with historical-data backtesting, as described in the TeX portfolio." },
];

const education = [
  "Bachelor of Commerce · Navjivan College of Commerce & Arts · 2021–2024",
  "Chartered Accountancy Intermediate · ICAI · May 2023–present (as listed)",
  "Company Secretary Executive · ICSI · May 2023–present (as listed)",
  "CFA Level 2 · CFA Institute · November 2023–present (as listed)",
  "ACCA Strategic Professional · May 2021–present (as listed)",
];

const skillGroups = [
  { title: "Security", items: "Browser and web security, reverse engineering, fuzzing, vulnerability assessment, Android and iOS testing, kernel research" },
  { title: "Languages", items: "C, C++, C#, Python, Java, JavaScript, Swift, Kotlin, Go, Rust" },
  { title: "AI & systems", items: "Computer vision, deep learning, Linux and Windows internals, distributed systems, databases" },
  { title: "Industrial & cloud", items: "UAV systems, PX4, ArduPilot, ROS, LiDAR, AWS, Azure, GCP, Docker, Kubernetes" },
];

function ExternalLink({ url, children }) {
  return url ? <a href={url} target="_blank" rel="noopener noreferrer">{children} ↗</a> : null;
}

export function PortfolioTeaser() {
  return <section className="portfolio-teaser" id="portfolio">
    <div className="section-tag">[ Full Portfolio ]</div>
    <h2>Security research, applied AI and systems engineering.</h2>
    <p>Explore the stories behind the CVE catalog, competition work, talks, projects and qualifications.</p>
    <Link className="portfolio-button" to="/portfolio">Explore the portfolio →</Link>
  </section>;
}

export function PortfolioPage() {
  return <main className="portfolio-page">
    <header className="portfolio-intro">
      <div className="section-tag">[ Kirtikumar Anandrao Ramchandani ]</div>
      <h1>Research portfolio</h1>
      <p>Browser and kernel security research, vulnerability discovery, industrial AI, computer vision and distributed systems.</p>
      <div className="portfolio-actions"><a href="mailto:research@kirtikumarar.com">Get in touch ↗</a><a href="https://kirtikumarar.com" target="_blank" rel="noopener noreferrer">Personal site ↗</a></div>
    </header>

    <section className="portfolio-section" aria-labelledby="research-title">
      <div className="portfolio-section-heading"><span>01 / Security research</span><h2 id="research-title">From browser UI trust to memory safety</h2></div>
      <p>The public catalog contains {CVEs.length} CVE records spanning browser address-bar and origin spoofing, Android app and dialer handling, web application security, kernel code and native memory safety. The records describe the vulnerabilities; individual credit and exploit outcomes should be checked against vendor or program records.</p>
      <div className="portfolio-feature-grid">
        <article><h3>Tor privacy boundary</h3><p>Brave Private Window with Tor Connectivity leaked .onion URLs through Referer and Origin headers.</p><ExternalLink url="https://nvd.nist.gov/vuln/detail/CVE-2022-30334">CVE-2022-30334</ExternalLink></article>
        <article><h3>Browser origin signals</h3><p>F-Secure SAFE Browser advisories cover transient, truncated and stale address-bar URLs, failed navigation, loops, window.open and drag-and-drop.</p><ExternalLink url="https://nvd.nist.gov/vuln/detail/CVE-2022-28868">Explore an advisory</ExternalLink></article>
        <article><h3>Native memory safety</h3><p>Chrome Vulkan use-after-free and a Linux ARM footbridge out-of-bounds read show the range of issues in the catalog.</p><ExternalLink url="https://nvd.nist.gov/vuln/detail/CVE-2023-1818">Chrome Vulkan</ExternalLink></article>
      </div>
      <Link className="portfolio-text-link" to="/cves">Browse all {CVEs.length} CVEs and references →</Link>
      <p className="portfolio-note">Recent research areas listed in the TeX include Android and secure hardware, browser engines, JavaScript runtimes and graphics paths. These are research activities, not additional assigned CVEs.</p>
    </section>

    <section className="portfolio-section" aria-labelledby="achievements-title"><div className="portfolio-section-heading"><span>02 / Recognition</span><h2 id="achievements-title">Competition and research highlights</h2></div><div className="portfolio-list">{achievements.map(item => <article key={item.title}><div><h3>{item.title}</h3><p className="portfolio-meta">{item.context}</p><p>{item.detail}</p></div><ExternalLink url={item.url}>Source</ExternalLink></article>)}</div><Link className="portfolio-text-link" to="/honours">See more honours →</Link></section>

    <section className="portfolio-section" aria-labelledby="projects-title"><div className="portfolio-section-heading"><span>03 / Selected work</span><h2 id="projects-title">Projects across software and physical systems</h2></div><div className="portfolio-project-grid">{projects.map(item => <article key={item.title}><span className="portfolio-kicker">{item.area}</span><h3>{item.title}</h3><p className="portfolio-stack">{item.stack}</p><p>{item.detail}</p><ExternalLink url={item.url}>Project</ExternalLink></article>)}</div></section>

    <section className="portfolio-section" aria-labelledby="talks-title"><div className="portfolio-section-heading"><span>04 / Knowledge sharing</span><h2 id="talks-title">Talks and guest lectures</h2></div><div className="portfolio-list">{talks.map(item => <article key={item.title}><div><h3>{item.title}</h3><p className="portfolio-meta">{item.venue}</p></div><ExternalLink url={item.url}>Source</ExternalLink></article>)}</div><p className="portfolio-note">Publication: <a href="https://www.researchgate.net/publication/344879262_XXX-X-XXXX-XXXX-XXXXX00_C20XX_IEEE_Phishing_email_detection_using_email_header_analysis" target="_blank" rel="noopener noreferrer">Phishing email detection using email header analysis ↗</a></p></section>

    <section className="portfolio-section" aria-labelledby="skills-title"><div className="portfolio-section-heading"><span>05 / Toolkit</span><h2 id="skills-title">Technical range</h2></div><div className="portfolio-feature-grid">{skillGroups.map(group => <article key={group.title}><h3>{group.title}</h3><p>{group.items}</p></article>)}</div></section>

    <section className="portfolio-section" aria-labelledby="education-title"><div className="portfolio-section-heading"><span>06 / Education</span><h2 id="education-title">Academic and professional study</h2></div><ul className="portfolio-education">{education.map(item => <li key={item}>{item}</li>)}</ul><p className="portfolio-note">The TeX also lists a self-reported Google LLM researcher and AI/ML developer role beginning May 2021. Organizational responsibilities and employment arrangement are unverified, so they are not presented here as confirmed work experience.</p></section>
  </main>;
}
