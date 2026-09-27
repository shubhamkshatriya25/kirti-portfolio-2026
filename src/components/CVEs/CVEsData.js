const CVEs = [
  {
    CVENumber: "CVE-2017-17455",
    Description:
      "Mahara 16.10 before 16.10.7, 17.04 before 17.04.5, and 17.10 before 17.10.2 are vulnerable to being forced, via a man-in-the-middle attack, to interact with Mahara on the HTTP protocol rather than HTTPS even when an SSL certificate is present.",
    "Vulnerable Product":
      "Mahara 16.10 before 16.10.7, 17.04 before 17.04.5, and 17.10 before 17.10.2",
    References: [
      "https://bugs.launchpad.net/mahara/+bug/1734767",
      "https://reviews.mahara.org/c/mahara/+/8312/",
      "https://mahara.org/interaction/forum/topic.php?id=8150",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=2017-17455",
      "https://nvd.nist.gov/vuln/detail/CVE-2017-17455",
    ],
  },
  {
    CVENumber: "CVE-2019-9709",
    Description:
      "An issue was discovered in Mahara 17.10 before 17.10.8, 18.04 before 18.04.4, and 18.10 before 18.10.1. The collection title is vulnerable to Cross Site Scripting (XSS) due to not escaping it when viewing the collection's SmartEvidence overview page (if that feature is turned on). This can be exploited by any logged-in user.",
    References: [
      "https://bugs.launchpad.net/mahara/+bug/1819547",
      "https://mahara.org/interaction/forum/topic.php?id=8446",
      "https://reviews.mahara.org/c/mahara/+/9619/",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=2019-9709",
      "https://nvd.nist.gov/vuln/detail/CVE-2019-9709",
    ],
  },
  {
    CVENumber: "CVE-2020-2545",
    Description:
      "Vulnerability in the Oracle HTTP Server product of Oracle Fusion Middleware (component: OSSL Module). Supported versions that are affected are 11.1.1.9.0, 12.1.3.0.0 and 12.2.1.3.0. Easily exploitable vulnerability allows unauthenticated attacker with network access via HTTPS to compromise Oracle HTTP Server.",
    References: [
      "https://www.oracle.com/security-alerts/cpujan2020.html",
      "https://nvd.nist.gov/vuln/detail/CVE-2020-2545",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-2545",
    ],
  },
  {
    CVENumber: "CVE-2020-17153",
    Description:
      "The attack vector is address bar spoofing. A malicious website could spoof the contents of a URL bar via a specially crafted HTML page's long URL and then use it for a phishing attack. An attacker would have to convince a user to visit a malicious website, typically via an enticement in email or instant message, or by getting them to open an email attachment.",
    References: [
      "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17153",
      "https://www.bleepingcomputer.com/news/security/microsoft-december-2020-patch-tuesday-fixes-58-vulnerabilities/",
      "https://nvd.nist.gov/vuln/detail/CVE-2020-17153",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-17153",
    ],
  },
  {
    CVENumber: "CVE-2020-27969",
    Description:
      "Yandex Browser for Android 20.8.4 allows remote attackers to perform SOP bypass and addresss bar spoofing.",
    References: [
      "https://yandex.ru/support/browser/about/fixed-vulnerabilities.html?lang=en",
      "https://yandex.com/bugbounty/i/hall-of-fame-browser/",
      "https://nvd.nist.gov/vuln/detail/CVE-2020-27969",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27969",
    ],
  },
  {
    CVENumber: "CVE-2020-27970",
    Description:
      "Yandex Browser before 20.10.0 allows remote attackers to spoof the address bar.",
    References: [
      "https://yandex.ru/support/browser/about/fixed-vulnerabilities.html?lang=en",
      "https://yandex.com/bugbounty/i/hall-of-fame-browser/",
      "https://nvd.nist.gov/vuln/detail/CVE-2020-27970",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-27970",
    ],
  },
  {
    CVENumber: "CVE-2020-6158",
    Description:
      "Opera Mini for Android before version 52.2 is vulnerable to an address bar spoofing attack. The vulnerability allows a malicious page to trick the browser into showing an address of a different page. This may allow the malicious page to impersonate another page and trick a user into providing sensitive data.",
    References: [
      "https://security.opera.com/en/address-bar-spoofing-in-opera-mini-for-android-opera-security-advisories/",
      "https://nvd.nist.gov/vuln/detail/CVE-2020-6158",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-6158",
    ],
  },
  {
    CVENumber: "CVE-2021-24100",
    Description:
      "This vulnerability discloses personally identifiable information and payment information of a user.",
    References: [
      "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24100",
      "https://www.bleepingcomputer.com/microsoft-patch-tuesday-reports/Feb-2021.html",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-24100",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-24100",
    ],
  },
  {
    CVENumber: "CVE-2021-21187",
    Description:
      "Insufficient data validation in URL formatting in Google Chrome prior to 89.0.4389.72 allowed a remote attacker to perform domain spoofing via IDN homographs via a crafted domain name.",
    References: [
      "https://crbug.com/1155516",
      "https://chromereleases.googleblog.com/2021/03/stable-channel-update-for-desktop.html",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-21187",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-21187",
      "https://security.gentoo.org/glsa/202104-08",
      "https://www.debian.org/security/2021/dsa-4886",
    ],
  },
  {
    CVENumber: "CVE-2021-25254",
    Description:
      "Yandex Browser Lite for Android before 21.1.0 allows remote attackers to spoof the address bar.",
    References: [
      "https://yandex.com/bugbounty/i/hall-of-fame-browser/",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-25254",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25254",
    ],
  },
  {
    CVENumber: "CVE-2021-25255",
    Description:
      "Yandex Browser Lite for Android prior to version 21.1.0 allows remote attackers to cause a denial of service.",
    References: [
      "https://yandex.com/bugbounty/i/hall-of-fame-browser/",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-25255",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25255",
    ],
  },
  {
    CVENumber: "CVE-2021-25262",
    Description:
      "Yandex Browser Lite for Android prior to version 21.1.0 allows remote attackers to cause a denial of service.",
    References: [
      "https://yandex.com/bugbounty/i/hall-of-fame-browser/",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-25262",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25262",
    ],
  },
  {
    CVENumber: "CVE-2022-22758",
    Description:
      "When clicking on a tel: link, USSD codes, specified after a * character, would be included in the phone number. On certain phones, or on certain carriers, if the number was dialed this could perform actions on a user's account, similar to a cross-site request forgery attack.",
    References: [
      "https://www.mozilla.org/en-US/security/advisories/mfsa2022-04/#CVE-2022-22758",
      "https://bugzilla.mozilla.org/show_bug.cgi?id=1728742",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-22758",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-22758",
    ],
  },
  {
    CVENumber: "CVE-2021-32078",
    Description:
      "An Out-of-Bounds Read was discovered in arch/arm/mach-footbridge/personal-pci.c in the Linux kernel through 5.12.11 because of the lack of a check for a value that shouldn't be negative, e.g., access to element -2 of an array, aka CID-298a58e165e4.",
    References: [
      "https://github.com/torvalds/linux/commit/298a58e165e447ccfaae35fe9f651f9d7e15166f",
      "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=298a58e165e447ccfaae35fe9f651f9d7e15166f",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-32078",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-32078",
      "https://kirtikumarar.com/CVE-2021-32078.txt",
    ],
  },
  {
    CVENumber: "CVE-2021-44748",
    Description:
      "A vulnerability affecting WithSecure SAFE browser was discovered whereby browsers loads images automatically this vulnerability can be exploited remotely by an attacker to execute the JavaScript can be used to trigger universal cross-site scripting through the browser.",
    References: [
      "https://www.withsecure.com/en/support/security-advisories/cve-2021-44748",
      "https://www.f-secure.com/en/home/support/security-advisories/cve-2021-44748",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-44748",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44748",
    ],
  },
  {
    CVENumber: "CVE-2021-44749",
    Description:
      "A vulnerability affecting WithSecure SAFE browser protection was discovered improper URL handling can be triggered to cause universal cross-site scripting through browsing protection in a SAFE web browser. User interaction is required prior to exploitation. A successful exploitation may lead to arbitrary code execution.",
    References: [
      "https://www.withsecure.com/en/support/security-advisories/cve-2021-44749",
      "https://www.f-secure.com/en/home/support/security-advisories/cve-2021-44749",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-44749",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44749",
    ],
  },
  {
    CVENumber: "CVE-2021-44751",
    Description:
      "Vulnerability in the F-Secure SAFE Browser of F-Secure SAFE for Android could send unwanted USSD messages or perform unwanted calls.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2021-44751",
      "https://nvd.nist.gov/vuln/detail/CVE-2021-44751",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44751",
    ],
  },
  {
    CVENumber: "CVE-2022-22736",
    Description:
      "Potential local privilege escalation when loading modules from the install directory.",
    References: [
      "https://www.mozilla.org/en-US/security/advisories/mfsa2022-01/#CVE-2022-22736",
      "https://bugzilla.mozilla.org/show_bug.cgi?id=1742692",
      "https://bugzilla.mozilla.org/show_bug.cgi?id=1741611",
    ],
  },
  {
    CVENumber: "CVE-2022-28868",
    Description:
      "Address bar may show next URL for a short period of time, which could potentially lead to address bar spoofing.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-28868",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-28868",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28868",
    ],
  },
  {
    CVENumber: "CVE-2022-28869",
    Description:
      "Incomplete display of URL could lead to address bar spoofing.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-28869",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-28869",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28869",
    ],
  },
  {
    CVENumber: "CVE-2022-28870",
    Description:
      "Showing old URL in case navigation to new URL fails could lead to address bar spoofing.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-28870",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-28870",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28870",
    ],
  },
  {
    CVENumber: "CVE-2022-28872",
    Description:
      "A vulnerability affecting F-Secure SAFE browser was discovered. A maliciously crafted website could make a phishing attack with address bar spoofing as the address bar was not correct if navigation fails in a loop.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-28872",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-28872",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28872",
    ],
  },
  {
    CVENumber: "CVE-2022-28873",
    Description:
      "A vulnerability affecting F-Secure SAFE browser was discovered. An attacker can potentially exploit Javascript window.open functionality in SAFE Browser which could lead address bar spoofing attacks.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-28873",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-28873",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-28873",
    ],
  },
  {
    CVENumber: "CVE-2023-25749",
    Description:
      "Firefox for Android may have opened third-party apps without a prompt.",
    References: [
      "https://www.mozilla.org/en-US/security/advisories/mfsa2023-09/#CVE-2023-25749",
      "https://bugzilla.mozilla.org/show_bug.cgi?id=1810705",
      "https://nvd.nist.gov/vuln/detail/CVE-2023-25749",
    ],
  },
  {
    CVENumber: "CVE-2023-1818",
    Description:
      "Use after free in Vulkan in Google Chrome prior to 112.0.5615.49 allowed a remote attacker to potentially exploit heap corruption via a crafted HTML page.",
    References: [
      "https://chromereleases.googleblog.com/2023/04/stable-channel-update-for-desktop.html",
      "https://crbug.com/1223346",
      "https://www.debian.org/security/2023/dsa-5386",
      "https://nvd.nist.gov/vuln/detail/CVE-2023-1818",
      "https://issues.chromium.org/issues/40056320",
    ],
  },
   {
    CVENumber: "CVE-2022-30334",
    Description:
      "Brave before 1.34, when a Private Window with Tor Connectivity is used, leaks .onion URLs in Referer and Origin headers.",
    References: [
      "https://kirtikumarar.com/?blog=uncovering-tor%27s-hidden-gems%3A-.onion-urls",
      "https://hackerone.com/reports/1337624",
      "https://github.com/brave/brave-core/pull/10760",
      "https://github.com/brave/brave-browser/issues/18071",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-30334",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-30334",
    ],
  },
  {
    CVENumber: "CVE-2022-38163",
    Description:
      "A drag and drop spoof vulnerability was discovered in F‑Secure Safe Browser for Android and iOS. Drag and drop operation by user on address bar could lead to a spoofing of the address bar.",
    References: [
      "https://www.f-secure.com/en/home/support/security-advisories/CVE-2022-38163",
      "https://nvd.nist.gov/vuln/detail/CVE-2022-38163",
      "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-38163",
    ],
  },
];

export { CVEs };
