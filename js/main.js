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
        menuGallery: "చిత్రమాలిక"
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
        menuGallery: "Gallery"
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

    // Update DOM Elements
    document.getElementById('nav-title').innerText = data.navTitle;
    document.getElementById('lang-btn-text').innerText = data.langBtn;
    document.getElementById('hero-subtitle').innerText = data.heroSubtitle;
    document.getElementById('hero-title').innerHTML = data.heroTitle;
    document.getElementById('hero-highlight').innerText = data.heroHighlight;
    document.getElementById('hero-cta').innerText = data.heroCta;

    document.getElementById('about-title').innerText = data.aboutTitle;
    document.getElementById('about-mission').innerText = data.aboutMission;
    document.getElementById('about-temples-title').innerText = data.aboutTemplesTitle;
    document.getElementById('temple-1').innerText = data.temple1;
    document.getElementById('temple-2').innerText = data.temple2;
    document.getElementById('temple-3').innerText = data.temple3;
    document.getElementById('about-highlight-badge').innerText = data.aboutHighlightBadge;
    document.getElementById('about-highlight-title').innerText = data.aboutHighlightTitle;
    document.getElementById('about-highlight-text').innerHTML = data.aboutHighlightText;

    document.getElementById('donate-header').innerText = data.donateHeader;
    document.getElementById('donate-sub').innerText = data.donateSub;
    document.getElementById('label-name').innerText = data.labelName;
    document.getElementById('label-amount').innerText = data.labelAmount;
    document.getElementById('btn-donate').innerText = data.btnDonate;
    document.getElementById('donate-disclaimer').innerText = data.donateDisclaimer;
    document.getElementById('footer-trust').innerText = data.footerTrust;
    document.getElementById('deity-image').alt = data.deityAlt;

    // Sidebar Translations
    const menuAbout = document.getElementById('menu-about');
    if (menuAbout) menuAbout.innerText = data.menuAbout;

    const menuEvents = document.getElementById('menu-events');
    if (menuEvents) menuEvents.innerText = data.menuEvents;

    const menuFestivals = document.getElementById('menu-festivals');
    if (menuFestivals) menuFestivals.innerText = data.menuFestivals;

    const menuGallery = document.getElementById('menu-gallery');
    if (menuGallery) menuGallery.innerText = data.menuGallery;

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
 * Submits donation details with optional UTR
 * Shows confirmation dialog if UTR is empty
 */
function submitDonation() {
    // First validate the form
    const formData = validateDonationForm(false);
    if (!formData) return;

    // Get UTR value
    const utrNumber = document.getElementById('utrNumber')?.value.trim() || '';

    // If UTR is empty, show confirmation dialog
    if (!utrNumber) {
        const proceed = confirm(
            'మీరు UTR నంబర్ నమోదు చేయలేదు. కొనసాగించాలా?\n\n' +
            'You have not entered the UTR number. Proceed anyway?'
        );
        if (!proceed) {
            document.getElementById('utrNumber')?.focus();
            return;
        }
    }

    // Collect all data
    const donationData = {
        name: formData.name,
        mobile: formData.mobile,
        village: formData.village,
        amount: formData.amount || 'Not specified',
        utr: utrNumber || 'Not provided',
        timestamp: new Date().toISOString()
    };

    console.log('Donation submitted:', donationData);

    // Send to Google Sheets
    sendToGoogleSheets(donationData);

    // Show success message
    showSuccessMessage(donationData);
}

/**
 * Sends donation data to Google Sheets
 * @param {object} data - Donation data to save
 */
function sendToGoogleSheets(data) {
    if (!CONFIG.googleSheetsUrl) {
        console.warn('Google Sheets URL not configured');
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
        })
        .catch(error => {
            console.error('Error sending to Google Sheets:', error);
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
 * @param {object} data - Donation data (name, mobile, village, amount)
 */
function generateDonationImage(data) {
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
    ctx.font = 'bold 180px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ॐ', canvas.width / 2, 180);

    // --- Title Box Background ---
    ctx.fillStyle = 'rgba(139, 0, 0, 0.85)';
    roundRect(ctx, 40, 240, canvas.width - 80, 100, 20);
    ctx.fill();

    // --- Title: 79 అడుగుల శ్రీరామ కాంస్య విగ్రహం ---
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 48px sans-serif';
    ctx.fillText('79 అడుగుల శ్రీరామ కాంస్య విగ్రహం', canvas.width / 2, 310);

    // --- Bhagavad Gita Shloka ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '32px sans-serif';

    const shlokaLines = [
        '"ఏ దానమైతే ప్రతిఫలాన్ని ఆశించకుండా,',
        'కేవలం కర్తవ్య భావంతో, సరైన సమయంలో,',
        'సరైన ప్రదేశంలో, మరియు అర్హుడైన వ్యక్తికి',
        'ఇవ్వబడుతుందో, అటువంటి దానాన్ని',
        'సాత్త్విక దానం అని అంటారు."'
    ];

    let yPos = 420;
    shlokaLines.forEach(line => {
        ctx.fillText(line, canvas.width / 2, yPos);
        yPos += 50;
    });

    // --- Bhagavad Gita Reference ---
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText('— భగవద్గీత 17.20', canvas.width / 2, yPos + 40);

    // --- Decorative Line ---
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(150, 780);
    ctx.lineTo(canvas.width - 150, 780);
    ctx.stroke();

    // --- Temple Name ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('శ్రీ రామలింగేశ్వర దేవస్థానం', canvas.width / 2, 860);
    ctx.font = '38px sans-serif';
    ctx.fillText('ఘణాపూర్', canvas.width / 2, 920);

    // --- Donor Info Box ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    roundRect(ctx, 60, 1000, canvas.width - 120, 500, 30);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    roundRect(ctx, 60, 1000, canvas.width - 120, 500, 30);
    ctx.stroke();

    // --- Donor Header ---
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText('🙏 దాత వివరాలు 🙏', canvas.width / 2, 1080);

    // --- Donor Name ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 52px sans-serif';
    ctx.fillText(data.name, canvas.width / 2, 1180);

    // --- Donor Village ---
    ctx.font = '40px sans-serif';
    ctx.fillText(data.village, canvas.width / 2, 1260);

    // --- Donor Mobile ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '36px sans-serif';
    ctx.fillText('📞 ' + data.mobile, canvas.width / 2, 1340);

    // --- Amount (only if >= 1000) ---
    if (data.amount && data.amount !== 'Not specified' && parseFloat(data.amount) >= 1000) {
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 50px sans-serif';
        ctx.fillText('₹' + data.amount + ' విరాళం', canvas.width / 2, 1440);
    }

    // --- Trust Info ---
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '30px sans-serif';
    ctx.fillText('శివరామలింగేశ్వర ట్రస్ట్', canvas.width / 2, 1620);
    ctx.font = '26px sans-serif';
    ctx.fillText('Reg No: 37/2025 | Ghanapur', canvas.width / 2, 1670);

    // --- Thank You Message ---
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('🙏 జై శ్రీరామ్ 🙏', canvas.width / 2, 1800);

    // --- Download Image ---
    // Filename: shriramalingeshwaratrust_personname.png
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

