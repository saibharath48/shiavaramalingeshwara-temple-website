// --- CONFIGURATION ---
const CONFIG = {
    // UPI ID for donations
    upiId: "shivaramalingeshwaratrust@sbi",
    payeeName: "SHIVA RAMALINGESWARA TRUST",
    // Google Sheets Web App URL for storing donations
    googleSheetsUrl: "https://script.google.com/macros/s/AKfycbyOoH73JsRRZYTdQEihAI8ugysz-PoxqDL7WluW3BEJVVtksFPXUwGgYLfEtvHSNDMvVg/exec"
};

// --- LANGUAGE DATA ---
const translations = {
    te: {
        navTitle: "శివరామలింగేశ్వర ట్రస్ట్",
        langBtn: "English",
        heroSubtitle: "Reg: 37/2025",
        heroTitle: "శ్రీ రామలింగేశ్వర <br/> దేవస్థానం, ఘణాపూర్",
        heroHighlight: "79 అడుగుల భారీ శ్రీరాముడి కాంస్య విగ్రహ నిర్మాణం!",
        heroCta: "విరాళం ఇవ్వండి",
        aboutTitle: "మా ట్రస్ట్ యొక్క పవిత్ర సంకల్పం",
        aboutMission: "మా ట్రస్ట్ కేవలం నిర్మాణాలను మాత్రమే కాకుండా, ధర్మ స్థాపన మరియు ఆధ్యాత్మిక సేవా కార్యక్రమాలను అంకితభావంతో నిర్వహిస్తోంది.",
        aboutTemplesTitle: "మేము చేపడుతున్న పవిత్ర ఆలయ నిర్మాణాలు:",
        temple1: "శివాలయం",
        temple2: "దుర్గామాత ఆలయం",
        temple3: "శ్రీరామ మందిరం",
        aboutHighlightBadge: "✨ మా ప్రత్యేక ఆకర్షణ & ప్రధాన సంకల్పం ✨",
        aboutHighlightTitle: "79 అడుగుల శ్రీరామ కాంస్య విగ్రహం",
        aboutHighlightText: "భక్తి భావాన్ని ఆకాశమంత ఎత్తుకు తీసుకెళ్లేలా, <span class=\"font-bold text-temple-red\">79 అడుగుల భారీ శ్రీరాముడి కాంస్య విగ్రహాన్ని</span> ప్రతిష్టించడం మా ట్రస్ట్ యొక్క ప్రధాన లక్ష్యం మరియు గర్వకారణం.",
        donateHeader: "నిధి సమర్పణ",
        donateSub: "UPI ద్వారా సులభంగా విరాళం పంపండి",
        labelName: "మీ పేరు",
        labelAmount: "మొత్తం (₹)",
        btnDonate: "UPI ద్వారా విరాళం ఇవ్వండి",
        donateDisclaimer: "బటన్ క్లిక్ చేస్తే మీ UPI యాప్ (GPay, PhonePe, Paytm) ఓపెన్ అవుతుంది.",
        footerTrust: "Shivaramalingeshwara Trust",
        deityAlt: "Lord Rama",
        menuAbout: "మా గురించి",
        menuEvents: "కార్యక్రమాలు",
        menuFestivals: "పండుగలు",
        menuGallery: "చిత్రమాలిక",
        menuDonation: "విరాళం",
        // About Page
        aboutPageTitle: "🙏 ధర్మ సంరక్షణ - మనందరి బాధ్యత 🙏",
        aboutPageSubtitle: "(Our Dharma, Our Responsibility)",
        aboutSubHeading: "✨ గుప్పెడు దానం - కోటి జన్మల పుణ్యఫలం ✨",
        aboutIntro: 'ఆలయ నిర్మాణం అంటే కేవలం రాళ్లు, సిమెంటుతో కట్టే నిర్మాణం కాదు; అది మన <strong class="text-temple-red">సనాతన ధర్మానికి</strong>, రాబోయే తరాల సంస్కృతికి వేస్తున్న బలమైన పునాది. శాస్త్రాల ప్రకారం, దేవాలయ నిర్మాణానికి భక్తితో ఒక చిన్న ఇటుకను సమర్పించినా, అది సాక్షాత్తు <strong class="text-saffron-dark">కైలాస ప్రాప్తికి సోపానం</strong> అవుతుందని పెద్దల మాట.',
        aboutMissionTitle: "🛕 మా బృహత్తర సంకల్పం",
        aboutMissionText: '<strong class="text-temple-red">శ్రీరామలింగేశ్వర ట్రస్ట్</strong> ఆధ్వర్యంలో, చరిత్రలో నిలిచిపోయేలా <strong class="text-saffron-dark">79 అడుగుల భారీ శ్రీరాముని కాంస్య విగ్రహాన్ని</strong> మరియు శ్రీరామ, శివ, దుర్గా మాతల ఆలయాలను నిర్మిస్తున్నాము. ఇంతటి బృహత్తర యజ్ఞానికి భారీ వనరులు అవసరం. ఇది ఏ ఒక్కరితోనో సాధ్యమయ్యేది కాదు, <strong>మనందరి సమిష్టి కృషి, ఐకమత్యంతోనే సాకారమవుతుంది</strong>.',
        aboutSquirrelStory: '<span class="text-2xl">🐿️</span> రాముడి వారధి నిర్మాణంలో ఉడత చేసిన సాయం ఎలా చరిత్రలో నిలిచిపోయిందో, ఈ పవిత్ర కార్యంలో <strong class="text-temple-red">మీరు చేసే చిన్న సహాయం కూడా ఒక పవిత్ర శిలగా మారి కలకాలం నిలిచిపోతుంది</strong>. మీ శక్తిమేరకు విరాళం అందించి, ఆ శ్రీ సీతారామచంద్రుల మరియు పరమేశ్వరుని కృపకు పాత్రులు కండి.',
        aboutGitaTitle: "📜 సాత్త్విక దానం - భగవద్గీత సారం 📜",
        aboutGitaMeaning: '<p>"ఏ దానమైతే ప్రతిఫలాన్ని ఆశించకుండా, కేవలం కర్తవ్య భావంతో, సరైన సమయంలో, సరైన ప్రదేశంలో, మరియు అర్హుడైన వ్యక్తికి ఇవ్వబడుతుందో, అటువంటి దానాన్ని <strong class="text-marigold">సాత్త్విక దానం</strong> అని అంటారు."</p>',
        aboutPromiseTitle: "✅ మా హామీ",
        aboutPromiseText: 'మేము చేపట్టిన ఈ ప్రయత్నం పూర్తిగా <strong class="text-green-700">ధర్మబద్ధమైనది, పారదర్శకమైనది మరియు నిస్వార్థమైనది</strong>. మీరు అందించే ప్రతి రూపాయి కేవలం సనాతన ధర్మ రక్షణకు మరియు ఈ ఆలయ నిర్మాణ పనులకు మాత్రమే వినియోగించబడుతుందని మేము మీకు హామీ ఇస్తున్నాము.',
        aboutCtaText: "🙏 రండి.. ఈ ధర్మ యజ్ఞంలో సమిధలవుదాం.. మన సంస్కృతిని కాపాడుకుందాం 🙏",
        aboutMembersTitle: "👥 మా ట్రస్ట్ సభ్యులు / Our Trust Members 👥"
    },
    en: {
        navTitle: "Shivaramalingeshwara Trust",
        langBtn: "తెలుగు",
        heroSubtitle: "Reg: 37/2025",
        heroTitle: "Sri Ramalingeshwara <br/> Devasthanam, Ghanapur",
        heroHighlight: "Construction of a massive 79ft Lord Rama Bronze Statue!",
        heroCta: "Donate Now",
        aboutTitle: "Our Holy Mission",
        aboutMission: "Our Trust is not just about construction, but is dedicated to establishing Dharma and spiritual service activities.",
        aboutTemplesTitle: "Holy Temple Constructions we are undertaking:",
        temple1: "Shivalayam",
        temple2: "Durgamatha Temple",
        temple3: "Sri Rama Temple",
        aboutHighlightBadge: "✨ Our Special Attraction & Main Resolve ✨",
        aboutHighlightTitle: "79 Feet Sri Rama Bronze Statue",
        aboutHighlightText: "To elevate devotion to the sky, installing a <span class=\"font-bold text-temple-red\">masssive 79-foot Sri Rama Bronze Statue</span> is our Trust's main goal and pride.",
        donateHeader: "Divine Contribution",
        donateSub: "Send donation easily via UPI",
        labelName: "Your Name",
        labelAmount: "Amount (₹)",
        btnDonate: "Donate via UPI",
        donateDisclaimer: "Clicking button will open your UPI app (GPay, PhonePe, Paytm).",
        footerTrust: "Shivaramalingeshwara Trust",
        deityAlt: "Lord Rama",
        menuAbout: "About Us",
        menuEvents: "Events",
        menuFestivals: "Festivals",
        menuGallery: "Gallery",
        menuDonation: "Donation",
        // About Page
        aboutPageTitle: "🙏 Dharma Protection - Our Responsibility 🙏",
        aboutPageSubtitle: "(Our Dharma, Our Responsibility)",
        aboutSubHeading: "✨ A Handful of Donation - Merit of Crores of Births ✨",
        aboutIntro: 'Temple construction is not just building with stones and cement; it is a strong foundation for our <strong class="text-temple-red">Sanatana Dharma</strong>, for the culture of future generations. According to scriptures, even if one brick is offered devotionally for temple construction, it becomes <strong class="text-saffron-dark">a stepping stone to Kailasa</strong>, say the elders.',
        aboutMissionTitle: "🛕 Our Grand Vision",
        aboutMissionText: 'Under the auspices of <strong class="text-temple-red">Shivaramalingeshwara Trust</strong>, we are constructing a <strong class="text-saffron-dark">massive 79-foot bronze statue of Lord Rama</strong> that will stand in history, along with Sri Rama, Shiva, and Durga Mata temples. Such a grand endeavor requires vast resources. This cannot be achieved by one person alone, <strong>it can only be realized through our collective effort and unity</strong>.',
        aboutSquirrelStory: '<span class="text-2xl">🐿️</span> Just as the squirrel\'s small contribution in building Rama\'s bridge is remembered in history, <strong class="text-temple-red">your small help in this sacred work will also become a holy stone that will last forever</strong>. Donate according to your capacity and receive the blessings of Sri Sita Ramachandra and Lord Parameshwara.',
        aboutGitaTitle: "📜 Sattvic Donation - Essence of Bhagavad Gita 📜",
        aboutGitaMeaning: '<p>"That donation which is given without expectation of reward, with a sense of duty, at the right time, in the right place, and to a worthy person - such donation is called <strong class="text-marigold">Sattvic Donation</strong>."</p>',
        aboutPromiseTitle: "✅ Our Promise",
        aboutPromiseText: 'The effort we have undertaken is completely <strong class="text-green-700">dharmic, transparent, and selfless</strong>. Every rupee you donate will be used only for Sanatana Dharma protection and temple construction work - this is our promise to you.',
        aboutCtaText: "🙏 Come.. Let us be part of this Dharma Yajna.. Let us protect our culture 🙏",
        aboutMembersTitle: "👥 Our Trust Members 👥"
    }
};

// --- STATE ---
let currentLang = 'te';

// --- FUNCTIONS ---

function toggleLanguage() {
    // Toggle State
    currentLang = currentLang === 'te' ? 'en' : 'te';

    // Get Data
    const data = translations[currentLang];

    // Helper function to safely update element content
    const safeUpdate = (id, content, useInnerHTML = false) => {
        const element = document.getElementById(id);
        if (element) {
            if (useInnerHTML) {
                element.innerHTML = content;
            } else {
                element.innerText = content;
            }
        }
    };

    // Update DOM Elements with null checks
    safeUpdate('nav-title', data.navTitle);
    safeUpdate('lang-btn-text', data.langBtn);
    safeUpdate('hero-subtitle', data.heroSubtitle);
    safeUpdate('hero-title', data.heroTitle, true);
    safeUpdate('hero-highlight', data.heroHighlight);
    safeUpdate('hero-cta', data.heroCta);

    safeUpdate('about-title', data.aboutTitle);
    safeUpdate('about-mission', data.aboutMission);
    safeUpdate('about-temples-title', data.aboutTemplesTitle);
    safeUpdate('temple-1', data.temple1);
    safeUpdate('temple-2', data.temple2);
    safeUpdate('temple-3', data.temple3);
    safeUpdate('about-highlight-badge', data.aboutHighlightBadge);
    safeUpdate('about-highlight-title', data.aboutHighlightTitle);
    safeUpdate('about-highlight-text', data.aboutHighlightText, true);

    safeUpdate('donate-header', data.donateHeader);
    safeUpdate('donate-sub', data.donateSub);
    safeUpdate('label-name', data.labelName);
    safeUpdate('label-amount', data.labelAmount);
    safeUpdate('btn-donate', data.btnDonate);
    safeUpdate('donate-disclaimer', data.donateDisclaimer);
    safeUpdate('footer-trust', data.footerTrust);

    // Handle deity image alt attribute safely
    const deityImage = document.getElementById('deity-image');
    if (deityImage) {
        deityImage.alt = data.deityAlt;
    }

    // Sidebar Translations
    safeUpdate('menu-about', data.menuAbout);
    safeUpdate('menu-events', data.menuEvents);
    safeUpdate('menu-festivals', data.menuFestivals);
    safeUpdate('menu-gallery', data.menuGallery);
    safeUpdate('menu-donation', data.menuDonation);

    // About Page Translations
    safeUpdate('about-page-title', data.aboutPageTitle);
    safeUpdate('about-page-subtitle', data.aboutPageSubtitle);
    safeUpdate('about-sub-heading', data.aboutSubHeading);
    safeUpdate('about-intro', data.aboutIntro, true);
    safeUpdate('about-mission-title', data.aboutMissionTitle, true);
    safeUpdate('about-mission-text', data.aboutMissionText, true);
    safeUpdate('about-squirrel-story', data.aboutSquirrelStory, true);
    safeUpdate('about-gita-title', data.aboutGitaTitle);
    safeUpdate('about-gita-meaning', data.aboutGitaMeaning, true);
    safeUpdate('about-promise-title', data.aboutPromiseTitle, true);
    safeUpdate('about-promise-text', data.aboutPromiseText, true);
    safeUpdate('about-cta-text', data.aboutCtaText);
    safeUpdate('about-members-title', data.aboutMembersTitle);

    // Change HTML Lang attribute
    document.documentElement.lang = currentLang;
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('sidebar-overlay');

    // Check if sidebar is currently closed (contains -translate-x-full)
    const isClosed = sidebar.classList.contains('-translate-x-full');

    if (isClosed) {
        // Open
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
        }, 10);
    } else {
        // Close
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300); // Wait for transition
    }
}

// --- AUDIO CONTROL ---
let isAudioPlaying = false; // Start as false, will be true after user clicks overlay
let audioTimeout = null;

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const omAudio = document.getElementById('omAudio');
    const audioIcon = document.getElementById('audioIcon');
    const audioText = document.getElementById('audioText');
    const welcomeOverlay = document.getElementById('welcomeOverlay');

    // Only run audio logic if audio elements exist on the page
    if (!omAudio || !audioIcon || !audioText) {
        return; // Exit early if audio elements don't exist
    }

    // Muted icon SVG path
    const mutedIconPath = 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2';
    const unmutedIconPath = 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z';

    function playAudioWithGap() {
        if (!isAudioPlaying) return;

        omAudio.currentTime = 0;
        omAudio.play().catch(err => {
            console.log('Audio playback failed:', err);
        });
    }

    // When audio ends, wait 2 seconds then play again
    omAudio.addEventListener('ended', function () {
        if (isAudioPlaying) {
            audioTimeout = setTimeout(playAudioWithGap, 2000);
        }
    });

    // Make toggleAudio globally accessible
    window.toggleAudio = function () {
        isAudioPlaying = !isAudioPlaying;

        if (isAudioPlaying) {
            // Turn ON
            audioIcon.querySelector('path').setAttribute('d', unmutedIconPath);
            audioText.textContent = '🔊';
            playAudioWithGap();
        } else {
            // Turn OFF
            omAudio.pause();
            omAudio.currentTime = 0;
            if (audioTimeout) {
                clearTimeout(audioTimeout);
                audioTimeout = null;
            }
            audioIcon.querySelector('path').setAttribute('d', mutedIconPath);
            audioText.textContent = '🔇';
        }
    };

    // Welcome Overlay Click - Start audio and hide overlay
    if (welcomeOverlay) {
        welcomeOverlay.addEventListener('click', function () {
            // Fade out overlay
            welcomeOverlay.style.opacity = '0';
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
            }, 500);

            // Enable and start audio
            isAudioPlaying = true;
            playAudioWithGap();
        });
    }
});

// ===========================================
// --- DONATION PAGE FUNCTIONS ---
// ===========================================

/**
 * Validates donation form fields
 * @param {boolean} requireAmount - Whether amount is required
 * @returns {object|false} - Form data object or false if invalid
 */
function validateDonationForm(requireAmount = false) {
    const name = document.getElementById('donorName')?.value.trim() || '';
    const mobile = document.getElementById('mobileNumber')?.value.trim() || '';
    const village = document.getElementById('village')?.value.trim() || '';
    const amount = document.getElementById('amount')?.value || '';

    // Validate name
    if (!name) {
        alert('Please enter your name / దయచేసి మీ పేరు నమోదు చేయండి');
        document.getElementById('donorName')?.focus();
        return false;
    }

    // Validate mobile (10 digits)
    if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number / దయచేసి 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి');
        document.getElementById('mobileNumber')?.focus();
        return false;
    }

    // Validate village
    if (!village) {
        alert('Please enter your village/city / దయచేసి మీ గ్రామం/నగరం నమోదు చేయండి');
        document.getElementById('village')?.focus();
        return false;
    }

    // Validate amount only if required
    if (requireAmount && (!amount || parseFloat(amount) < 1)) {
        alert('Please enter a valid donation amount / దయచేసి విరాళ మొత్తం నమోదు చేయండి');
        document.getElementById('amount')?.focus();
        return false;
    }

    return {
        name: name,
        mobile: mobile,
        village: village,
        amount: amount ? parseFloat(amount) : null
    };
}

/**
 * Generates UPI URL with or without amount
 * @param {string} donorName - Donor's name
 * @param {number|null} amount - Amount (null for open amount)
 * @returns {string} - UPI URL
 */
function generateUPIUrl(donorName, amount) {
    const upiId = CONFIG.upiId;
    const payeeName = CONFIG.payeeName;
    const transactionNote = `Donation by ${donorName}`;

    let upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;

    // Add amount only if provided
    if (amount && amount > 0) {
        upiUrl += `&am=${amount}`;
    }

    return upiUrl;
}

/**
 * Shows QR Code modal with generated QR
 * If amount is empty, generates QR without fixed amount
 * Uses QRCode.js library for local generation (secure - no external API calls)
 */
let qrCodeInstance = null;

function showQRCode() {
    const formData = validateDonationForm(false); // Amount not required for QR
    if (!formData) return;

    const upiUrl = generateUPIUrl(formData.name, formData.amount);

    // Get container and amount display
    const qrContainer = document.getElementById('qrCodeContainer');
    const qrAmount = document.getElementById('qrAmount');
    const qrModal = document.getElementById('qrModal');

    if (!qrContainer || !qrModal) {
        console.error('QR Modal elements not found');
        return;
    }

    // Clear previous QR code
    qrContainer.innerHTML = '';

    // Generate QR code locally using QRCode.js (secure - no external API)
    if (typeof QRCode !== 'undefined') {
        qrCodeInstance = new QRCode(qrContainer, {
            text: upiUrl,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        // Fallback to external API if library not loaded
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
        const img = document.createElement('img');
        img.src = qrApiUrl;
        img.alt = 'QR Code';
        img.className = 'w-48 h-48';
        qrContainer.appendChild(img);
    }

    // Update amount display
    if (qrAmount) {
        qrAmount.textContent = formData.amount ? `₹${formData.amount}` : 'Any Amount';
    }

    // Show modal
    qrModal.classList.remove('hidden');

    console.log('QR Generated locally for:', formData.name, 'Amount:', formData.amount || 'Open');
}

/**
 * Closes the QR Code modal and shows UTR section
 */
function closeQRModal() {
    const qrModal = document.getElementById('qrModal');
    if (qrModal) qrModal.classList.add('hidden');

    // Show UTR section after closing QR modal
    showUTRSection();
}

/**
 * Handles UPI link click - validates form and redirects
 * Returns true to allow the anchor to navigate, false to cancel
 */
function handleUPIClick() {
    const formData = validateDonationForm(false); // Amount not required
    if (!formData) return false; // Cancel click if validation fails

    const upiUrl = generateUPIUrl(formData.name, formData.amount);

    console.log('Opening UPI App for:', formData.name, 'Amount:', formData.amount || 'Open');
    console.log('UPI URL:', upiUrl);

    // Set the href and let the browser handle it
    const link = document.getElementById('upiDirectLink');
    if (link) {
        link.href = upiUrl;
    }

    // Show UTR section after a delay
    setTimeout(() => {
        showUTRSection();
    }, 500);

    // Return true to allow the link to navigate
    return true;
}

// Keep old function name for compatibility
function openUPIApp() {
    handleUPIClick();
}

// Close QR modal when clicking outside
document.addEventListener('click', function (e) {
    const qrModal = document.getElementById('qrModal');
    if (e.target === qrModal) {
        closeQRModal();
    }
});

// ===========================================
// --- UTR SUBMISSION FUNCTIONS ---
// ===========================================

/**
 * Shows the UTR input section after payment
 */
function showUTRSection() {
    const utrSection = document.getElementById('utrSection');
    if (utrSection) {
        utrSection.classList.remove('hidden');
        // Scroll to the UTR section smoothly
        utrSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Submits donation details with mandatory UTR
 * UTR is required to generate the donation slip
 */
async function submitDonation() {
    // First validate the form
    const formData = validateDonationForm(false);
    if (!formData) return;

    // Get UTR value
    const utrNumber = document.getElementById('utrNumber')?.value.trim() || '';

    // UTR is mandatory - validate it
    if (!utrNumber) {
        alert('దయచేసి UTR నంబర్ నమోదు చేయండి\n\nPlease enter the UTR/Transaction number to generate your donation slip.');
        document.getElementById('utrNumber')?.focus();
        return;
    }

    // Validate UTR length (typically 12-22 characters)
    if (utrNumber.length < 6) {
        alert('UTR నంబర్ చాలా చిన్నది. దయచేసి సరైన UTR నమోదు చేయండి.\n\nUTR number seems too short. Please enter a valid UTR number.');
        document.getElementById('utrNumber')?.focus();
        return;
    }

    // Collect all data
    const donationData = {
        name: formData.name,
        mobile: formData.mobile,
        village: formData.village,
        amount: formData.amount || 'Not specified',
        utr: utrNumber,
        timestamp: new Date().toISOString()
    };


    console.log('Donation submitted:', donationData);

    // Show loading overlay
    showLoadingOverlay();

    // Send to Google Sheets and wait for completion
    await sendToGoogleSheets(donationData);

    // Hide loading overlay
    hideLoadingOverlay();

    // Show success message
    showSuccessMessage(donationData);
}

/**
 * Shows loading overlay during submission
 */
function showLoadingOverlay() {
    const loadingHTML = `
        <div id="loadingOverlay" class="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center">
            <div class="bg-white rounded-2xl p-8 text-center shadow-2xl">
                <div class="w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p class="font-heading text-temple-red text-lg">Submitting...</p>
                <p class="text-gray-500 text-sm mt-1">దయచేసి వేచి ఉండండి</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

/**
 * Hides loading overlay
 */
function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.remove();
    }
}

/**
 * Sends donation data to Google Sheets
 * @param {object} data - Donation data to save
 * @returns {Promise} - Resolves when data is sent
 */
function sendToGoogleSheets(data) {
    return new Promise((resolve, reject) => {
        if (!CONFIG.googleSheetsUrl) {
            console.warn('Google Sheets URL not configured');
            resolve(); // Resolve anyway to continue flow
            return;
        }

        fetch(CONFIG.googleSheetsUrl, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log('Donation data sent to Google Sheets successfully');
                resolve();
            })
            .catch(error => {
                console.error('Error sending to Google Sheets:', error);
                // Still resolve to continue with success message
                // (no-cors mode doesn't provide response info anyway)
                resolve();
            });
    });
}

/**
 * Shows success message after submission
 */
function showSuccessMessage(data) {
    // Create success modal
    const successHTML = `
        <div id="successModal" class="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="font-heading text-2xl text-temple-red mb-2">ధన్యవాదాలు!</h3>
                <p class="text-gray-600 mb-4">Thank you for your generous donation</p>
                <div class="bg-orange-50 rounded-lg p-3 mb-4 text-left text-sm">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Mobile:</strong> ${data.mobile}</p>
                    <p><strong>Amount:</strong> ${data.amount === 'Not specified' ? 'Not specified' : '₹' + data.amount}</p>
                    ${data.utr !== 'Not provided' ? `<p><strong>UTR:</strong> ${data.utr}</p>` : ''}
                </div>
                <p class="text-green-600 text-sm mb-2">🙏 May Lord Rama bless you abundantly!</p>
                <p class="text-blue-600 text-xs mb-4">📥 WhatsApp status image is downloading...</p>
                <button onclick="closeSuccessModal()"
                    class="bg-temple-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition">
                    Close
                </button>
            </div>
        </div>
    `;

    // Add to body
    document.body.insertAdjacentHTML('beforeend', successHTML);

    // Reset form
    document.getElementById('donationForm')?.reset();
    document.getElementById('utrSection')?.classList.add('hidden');

    // Auto-download WhatsApp status image in background
    setTimeout(() => {
        generateDonationImage(data);
    }, 500);
}

/**
 * Closes the success modal
 */
function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.remove();
    }
}

// ===========================================
// --- WHATSAPP STATUS IMAGE GENERATION ---
// ===========================================

/**
 * Generates and downloads a 9:16 WhatsApp status image
 * Filename format: shriramalingeshwaratrust_personname.png
 * @param {object} data - Donation data (name, mobile, village, amount, utr)
 */
function generateDonationImage(data) {
    // Load QR code image first
    const qrUrl = 'https://res.cloudinary.com/ds7aq0v6b/image/upload/v1767693196/WhatsApp_Image_2026-01-05_at_8.50.20_PM_xsnn3n.jpg';

    fetch(qrUrl)
        .then(response => response.blob())
        .then(blob => {
            const qrObjUrl = URL.createObjectURL(blob);
            const qrImg = new Image();

            qrImg.onload = () => {
                generateDonationCanvas(data, qrImg);
                URL.revokeObjectURL(qrObjUrl);
            };

            qrImg.onerror = () => {
                // Generate without QR if loading fails
                generateDonationCanvas(data, null);
            };

            qrImg.src = qrObjUrl;
        })
        .catch(() => {
            // Generate without QR if fetch fails
            generateDonationCanvas(data, null);
        });
}

/**
 * Generates the donation canvas with all elements
 * @param {object} data - Donation data
 * @param {Image|null} qrImg - QR code image or null
 */
function generateDonationCanvas(data, qrImg) {
    // Create canvas (9:16 ratio - 1080x1920)
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    // --- Background Gradient ---
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#FF9933');    // Saffron
    gradient.addColorStop(0.3, '#FF6600');  // Deep Orange  
    gradient.addColorStop(0.7, '#CC4400');  // Darker Orange
    gradient.addColorStop(1, '#8B0000');    // Temple Red
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- Decorative circles (subtle) ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.arc(200, 300, 150, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(880, 600, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(300, 1500, 250, 0, Math.PI * 2);
    ctx.fill();

    // --- OM Symbol at top ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.font = 'bold 140px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ॐ', canvas.width / 2, 140);

    // --- Title Box Background ---
    ctx.fillStyle = 'rgba(139, 0, 0, 0.85)';
    roundRect(ctx, 40, 180, canvas.width - 80, 80, 20);
    ctx.fill();

    // --- Title: 79 అడుగుల శ్రీరామ కాంస్య విగ్రహం ---
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText('79 అడుగుల శ్రీరామ కాంస్య విగ్రహం', canvas.width / 2, 235);

    // --- Temple Name ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 38px sans-serif';
    ctx.fillText('శ్రీ శివరామలింగేశ్వర దేవస్థానం', canvas.width / 2, 320);
    ctx.font = '32px sans-serif';
    ctx.fillText('ఘణాపూర్', canvas.width / 2, 365);

    // --- Decorative Line ---
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 400);
    ctx.lineTo(canvas.width - 150, 400);
    ctx.stroke();

    // --- Donor Info Box ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    roundRect(ctx, 60, 430, canvas.width - 120, 420, 30);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    roundRect(ctx, 60, 430, canvas.width - 120, 420, 30);
    ctx.stroke();

    // --- Donor Header ---
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('🙏 దాత వివరాలు / Donor Details 🙏', canvas.width / 2, 490);

    // --- Donor Name ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText(data.name, canvas.width / 2, 570);

    // --- Donor Village ---
    ctx.font = '36px sans-serif';
    ctx.fillText(data.village, canvas.width / 2, 630);

    // --- Donor Mobile ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '32px sans-serif';
    ctx.fillText('📞 ' + data.mobile, canvas.width / 2, 690);

    // --- Amount (only if >= 1500) ---
    if (data.amount && data.amount !== 'Not specified' && parseFloat(data.amount) >= 1500) {
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 44px sans-serif';
        ctx.fillText('₹' + data.amount + ' విరాళం', canvas.width / 2, 760);
    }

    // --- Bank Details & QR Code Section ---
    const bankSectionY = 890;

    // Box background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    roundRect(ctx, 40, bankSectionY, canvas.width - 80, 380, 15);
    ctx.fill();

    // Section Header
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('💰 విరాళం ఇవ్వండి / Donate Now 💰', canvas.width / 2, bankSectionY + 40);

    // Bank Details - Left side
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px sans-serif';
    const bankX = 70;
    ctx.fillText('🏦 Bank Details:', bankX, bankSectionY + 90);
    ctx.font = '22px sans-serif';
    ctx.fillText('A/C: 44715831584', bankX, bankSectionY + 125);
    ctx.fillText('IFSC: SBIN0020383', bankX, bankSectionY + 155);
    ctx.fillText('Bank: State Bank of India', bankX, bankSectionY + 185);

    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('📞 Contact:', bankX, bankSectionY + 230);
    ctx.font = '22px sans-serif';
    ctx.fillText('9912356869, 8142436869', bankX, bankSectionY + 265);

    // UPI ID
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('UPI: shivaramalingeshwaratrust@sbi', bankX, bankSectionY + 310);

    // QR Code - Right side
    if (qrImg && qrImg.complete && qrImg.naturalWidth > 0) {
        const qrSize = 180;
        const qrX = canvas.width - qrSize - 80;
        const qrY = bankSectionY + 70;

        // QR background
        ctx.fillStyle = '#FFFFFF';
        roundRect(ctx, qrX - 10, qrY - 10, qrSize + 20, qrSize + 20, 10);
        ctx.fill();

        // Draw QR
        ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

        // "Scan to Pay" label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 18px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Scan to Pay', qrX + qrSize / 2, qrY + qrSize + 35);
    }

    // Website
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = '24px sans-serif';
    ctx.fillText('🌐 shivaramalingeshwaratrust.com', canvas.width / 2, bankSectionY + 355);

    // --- Bhagavad Gita Shloka Section ---
    const shlokaY = bankSectionY + 410;

    ctx.fillStyle = 'rgba(139, 0, 0, 0.6)';
    roundRect(ctx, 60, shlokaY, canvas.width - 120, 280, 20);
    ctx.fill();

    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('📜 సాత్త్విక దానం - భగవద్గీత 17.20 📜', canvas.width / 2, shlokaY + 40);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px sans-serif';

    const shlokaLines = [
        '"ఏ దానమైతే ప్రతిఫలాన్ని ఆశించకుండా,',
        'కేవలం కర్తవ్య భావంతో, సరైన సమయంలో,',
        'సరైన ప్రదేశంలో, మరియు అర్హుడైన వ్యక్తికి',
        'ఇవ్వబడుతుందో, అటువంటి దానాన్ని',
        'సాత్త్విక దానం అని అంటారు."'
    ];

    let yPos = shlokaY + 90;
    shlokaLines.forEach(line => {
        ctx.fillText(line, canvas.width / 2, yPos);
        yPos += 38;
    });

    // --- Trust Info ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '26px sans-serif';
    ctx.fillText('శివరామలింగేశ్వర ట్రస్ట్ | Reg No: 37/2025', canvas.width / 2, 1730);

    // --- Thank You Message ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('🙏 జై శ్రీరామ్ 🙏', canvas.width / 2, 1820);

    // --- Timestamp ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.font = '18px sans-serif';
    const now = new Date();
    ctx.fillText(now.toLocaleString('en-IN'), canvas.width / 2, 1880);

    // --- Download Image ---
    const sanitizedName = data.name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9\u0C00-\u0C7F]/g, '');
    const filename = `shriramalingeshwaratrust_${sanitizedName}.png`;

    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();

    console.log('WhatsApp status image downloaded:', filename);
}

/**
 * Helper: Draw rounded rectangle
 */
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// ===========================================
// --- DYNAMIC COPYRIGHT YEAR ---
// ===========================================

/**
 * Updates the copyright year in the footer to the current year
 * Works with both id="currentYear" and class="currentYear"
 */
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();

    // Update element with ID
    const yearElementById = document.getElementById('currentYear');
    if (yearElementById) {
        yearElementById.textContent = currentYear;
    }

    // Update all elements with class
    const yearElementsByClass = document.querySelectorAll('.currentYear');
    yearElementsByClass.forEach(element => {
        element.textContent = currentYear;
    });
});

