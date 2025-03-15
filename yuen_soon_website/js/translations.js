// 多语言翻译对象
const translations = {
    zh: {
        // 导航
        "nav-home": "首页",
        "nav-about": "关于我们",
        "nav-services": "服务",
        "nav-fleet": "车队",
        "nav-contact": "联系我们",
        
        // 首页
        "hero-title": "您值得信赖的陆路运输解决方案",
        "hero-subtitle": "35年专业物流服务经验，为您提供最优质的运输服务",
        "hero-btn": "联系我们",
        
        // 关于我们
        "about-title": "关于我们",
        "company-profile": "公司简介",
        "company-intro": "欢迎来到Yuen Soon Transport Agency Sdn. Bhd.，我们是一家本地物流公司，提供马来西亚及新加坡全境的货车/拖车运输服务。",
        "company-experience": "我们已经建立了超过35年的专业物流服务经验，为多国客户提供服务。目前，我们运营着15辆大型卡车和货车，以满足客户在货运领域的需求，载重能力从38至46吨不等。我们的车队包括Man和Scania品牌的卡车，每辆车都配备了防盗系统和GPS定位系统，以提供最好的服务。",
        "company-business-scope": "我们的业务范围涵盖整个马来西亚和新加坡，专注于提供全方位的陆路运输解决方案。我们的服务包括集装箱运输、大宗货物运输，能够满足不同行业客户的多样化需求。",
        "company-clients": "多年来，我们已与食油、零售连锁、食品饮料等多个行业的知名企业建立了长期稳定的合作关系。我们的客户群体遍布马来西亚、新加坡等多个地区，为他们提供可靠的物流支持。",
        "company-certification": "作为行业内的领先企业，确保我们的服务质量和环保责任。我们严格遵守各项安全规定和行业标准，保证每一次运输的安全可靠。",
        "company-mission-statement": "在Yuen Soon Transport Agency Sdn. Bhd.，我们相信安全、准时的货物交付和您的满意是我们运营公司的主要宗旨。我们不断创新服务模式，优化运输路线，提高运营效率，为客户创造更大的价值。",
        "company-history": "公司历史",
        "history-1983": "Yuen Soon Transport Agency成立（由Mr.Chong Yuen Soon运营）",
        "history-1998": "在Ikea设立办公室（150平方英尺）",
        "history-2007": "Yuen Soon Transport Agency Sdn. Bhd.成立<br>在Taman Mutiara设立新办公室（2层）<br>建立仓库（7176平方英尺）",
        "history-2017": "扩大业务规模，增加车队数量",
        "vision-title": "公司愿景",
        "vision-content": "成为马来西亚和新加坡领先的综合运输公司，以卓越的服务质量、创新的物流解决方案和可持续的发展模式，满足客户多样化的物流需求。我们致力于建立高效、安全、环保的运输网络，通过不断提升服务标准和技术水平，为客户创造更大价值，同时推动整个物流行业的进步与发展。",
        "mission-title": "公司使命",
        "mission-1": "消除客户的物流问题",
        "mission-2": "保持市场领导者地位",
        "mission-3": "成为知名且值得信赖的公司",
        "mission-4": "分享我们在运输领域的经验",
        "mission-5": "成为上市公司",
        
        // 服务
        "services-title": "我们的服务",
        "service-logistics": "物流运输",
        "service-logistics-desc": "提供专业的物流运输服务，满足各种货物运输需求。",
        "service-customs": "报关服务",
        "service-customs-desc": "提供专业的报关服务，简化进出口流程。",
        "service-gps": "GPS监控",
        "service-gps-desc": "所有车辆均配备GPS监控系统，实时跟踪货物位置。",
        "service-insurance": "保险保障",
        "service-insurance-desc": "公司购买了价值RM200,000的年度GIT保险覆盖。",
        "feature-experience": "<i class=\"fas fa-check-circle\"></i> 35年专业经验",
        "feature-experience-desc": "超过35年的专业物流服务经验。",
        "feature-team": "<i class=\"fas fa-check-circle\"></i> 专业驾驶团队",
        "feature-team-desc": "超过12名具有丰富驾驶经验的卡车司机。",
        "feature-maintenance": "<i class=\"fas fa-check-circle\"></i> 定期维护",
        "feature-maintenance-desc": "所有车辆均定期进行维护，确保安全可靠。",
        
        // 车队
        "fleet-title": "我们的车队",
        "fleet-intro": "我们拥有现代化的车队，包括各种类型的卡车和拖车，能够满足不同的运输需求。所有车辆均配备GPS系统，确保货物安全准时送达。",
        "truck-tanker": "槽罐车",
        "truck-tanker-desc": "适用于液体运输",
        "truck-container": "侧帘卡车",
        "truck-container-desc": "适用于侧帘式货物运输",
        "fleet-brands": "我们的车队品牌",
        
        // 联系我们
        "contact-title": "联系我们",
        "contact-address": "地址",
        "contact-phone": "电话/传真",
        "contact-email": "电子邮件",
        "contact-inquiry": "发送询价",
        "whatsapp-text": "添加WhatsApp", // 添加WhatsApp按钮的中文翻译
        "form-name": "您的姓名：",
        "form-company": "公司名称：",
        "form-email": "电子邮箱：",
        "form-phone": "联系电话：",
        "form-message": "询价内容：",
        "form-submit": "发送询价",
        
        // 页脚
        "footer-links": "快速链接",
        "footer-contact": "联系方式",
        "footer-copyright": "&copy; 2025 Yuen Soon Transport Agency Sdn. Bhd. 版权所有"
    },
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-fleet": "Fleet",
        "nav-contact": "Contact Us",
        
        // Home
        "hero-title": "Your Trusted Land Transportation Solution",
        "hero-subtitle": "35 years of professional logistics service experience, providing you with the best quality transportation services",
        "hero-btn": "Contact Us",
        
        // About Us
        "about-title": "About Us",
        "company-profile": "Company Profile",
        "company-intro": "Welcome to Yuen Soon Transport Agency Sdn. Bhd., we are a local logistics company providing lorry/trailer transportation services throughout Malaysia and Singapore.",
        "company-experience": "We have established over 35 years of professional logistics service experience, serving customers from multiple countries. Currently, we operate 15 large trucks and lorries to meet customer needs in the freight field, with load capacities ranging from 38 to 46 tons. Our fleet includes trucks from brands such as Man and Scania, each equipped with anti-theft systems and GPS positioning systems to provide the best service.",
        "company-business-scope": "Our business scope covers the entire Malaysia and Singapore, focusing on providing comprehensive land transportation solutions. Our services include container transportation, bulk cargo transportation, capable of meeting the diverse needs of customers from different industries.",
        "company-clients": "Over the years, we have established long-term stable partnerships with well-known enterprises in various industries such as edible oils, retail chains, and food and beverage. Our customer base spans across Malaysia, Singapore and other regions, providing them with reliable logistics support.",
        "company-certification": "As a leading enterprise in the industry, we ensure our service quality and environmental responsibility. We strictly comply with various safety regulations and industry standards to ensure the safety and reliability of every transportation.",
        "company-mission-statement": "At Yuen Soon Transport Agency Sdn. Bhd., we believe that safe, on-time delivery of goods and your satisfaction are the main purposes of our company's operations. We continuously innovate service models, optimize transportation routes, improve operational efficiency, and create greater value for customers.",
        "company-history": "Company History",
        "history-1983": "Yuen Soon Transport Agency established (operated by Mr. Chong Yuen Soon)",
        "history-1998": "Office set up at Ikea (150 square feet)",
        "history-2007": "Yuen Soon Transport Agency Sdn. Bhd. established<br>New office set up at Taman Mutiara (2 floors)<br>Warehouse established (7176 square feet)",
        "history-2017": "Expanded business scale, increased fleet size",
        "vision-title": "Company Vision",
        "vision-content": "To become the leading integrated transportation company in Malaysia and Singapore, with excellent service quality, innovative logistics solutions, and sustainable development models to meet customers' diverse logistics needs. We are committed to building an efficient, safe, and environmentally friendly transportation network, continuously improving service standards and technological capabilities to create greater value for customers while promoting the progress and development of the entire logistics industry.",
        "mission-title": "Company Mission",
        "mission-1": "Eliminate customers' logistics problems",
        "mission-2": "Maintain market leader position",
        "mission-3": "Become a well-known and trusted company",
        "mission-4": "Share our experience in the transportation field",
        "mission-5": "Become a listed company",
        
        // Services
        "services-title": "Our Services",
        "service-logistics": "Logistics Transportation",
        "service-logistics-desc": "Providing professional logistics transportation services to meet various cargo transportation needs.",
        "service-customs": "Customs Clearance",
        "service-customs-desc": "Providing professional customs clearance services to simplify import and export processes.",
        "service-gps": "GPS Monitoring",
        "service-gps-desc": "All vehicles are equipped with GPS monitoring systems to track cargo location in real-time.",
        "service-insurance": "Insurance Coverage",
        "service-insurance-desc": "The company has purchased annual GIT insurance coverage worth RM200,000.",
        "feature-experience": "<i class=\"fas fa-check-circle\"></i> 35 Years of Professional Experience",
        "feature-experience-desc": "Over 35 years of professional logistics service experience.",
        "feature-team": "<i class=\"fas fa-check-circle\"></i> Professional Driving Team",
        "feature-team-desc": "Over 12 truck drivers with extensive driving experience.",
        "feature-maintenance": "<i class=\"fas fa-check-circle\"></i> Regular Maintenance",
        "feature-maintenance-desc": "All vehicles undergo regular maintenance to ensure safety and reliability.",
        
        // Fleet
        "fleet-title": "Our Fleet",
        "fleet-intro": "We have a modern fleet including various types of trucks and trailers that can meet different transportation needs. All vehicles are equipped with GPS systems to ensure safe and timely delivery of goods.",
        "truck-tanker": "Tanker Truck",
        "truck-tanker-desc": "Suitable for liquid transportation",
        "truck-container": "Curtainsider Truck",
        "truck-container-desc": "Suitable for curtainsider transportation",
        "fleet-brands": "Our Fleet Brands",
        
        // Contact Us
        "contact-title": "Contact Us",
        "contact-address": "Address",
        "contact-phone": "Phone/Fax",
        "contact-email": "Email",
        "contact-inquiry": "Send Inquiry",
        "whatsapp-text": "Add to WhatsApp", // 添加WhatsApp按钮的英文翻译
        "form-name": "Your Name:",
        "form-company": "Company Name:",
        "form-email": "Email Address:",
        "form-phone": "Contact Number:",
        "form-message": "Inquiry Content:",
        "form-submit": "Send Inquiry",
        
        // Footer
        "footer-links": "Quick Links",
        "footer-contact": "Contact Information",
        "footer-copyright": "&copy; 2025 Yuen Soon Transport Agency Sdn. Bhd. All Rights Reserved"
    }
};

// 获取当前语言，默认为中文
let currentLang = localStorage.getItem('language') || 'zh';

// 设置HTML根元素的lang属性
document.getElementById('html-root').lang = currentLang === 'zh' ? 'zh-CN' : 'en';

// 更新语言按钮状态
function updateLanguageButtons() {
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

// 应用翻译
function applyTranslations() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            // 对于包含HTML的翻译，使用innerHTML
            if (translations[currentLang][key].includes('<')) {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.getElementById('html-root').lang = lang === 'zh' ? 'zh-CN' : 'en';
    updateLanguageButtons();
    applyTranslations();
}

// 添加语言切换按钮事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 初始化语言设置
    updateLanguageButtons();
    applyTranslations();
    
    // 为语言切换按钮添加事件监听器
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});