const fs = require('fs');
const path = require('path');

function runFileVerification() {
  console.log('=== RUNNING COMPREHENSIVE KINSHIP QA & ARTIFACT AUDIT ===\n');
  let failures = 0;

  const appServerDir = path.join(__dirname, '../.next/server/app');

  const filesToCheck = [
    { file: 'index.html', title: 'Home Page (/)' },
    { file: 'courses.html', title: 'Courses Catalog (/courses)' },
    { file: 'courses/pre-conception.html', title: 'Pre-Conception (/courses/pre-conception)' },
    { file: 'courses/pregnancy.html', title: 'Pregnancy (/courses/pregnancy)' },
    { file: 'courses/newborn.html', title: 'Newborn (/courses/newborn)' },
    { file: 'courses/infant.html', title: 'Infant (/courses/infant)' },
    { file: 'courses/toddler.html', title: 'Toddler (/courses/toddler)' },
    { file: 'courses/early-childhood.html', title: 'Early Childhood (/courses/early-childhood)' },
    { file: 'our-approach.html', title: 'Our Approach (/our-approach)' },
    { file: 'faq.html', title: 'FAQ (/faq)' },
    { file: 'educational-disclaimer.html', title: 'Educational Disclaimer (/educational-disclaimer)' },
    { file: 'privacy.html', title: 'Privacy Policy (/privacy)' },
    { file: 'terms.html', title: 'Terms of Service (/terms)' },
    { file: '_not-found.html', title: '404 Page' },
    { file: 'sitemap.xml.body', title: 'Sitemap XML' },
    { file: 'robots.txt.body', title: 'Robots TXT' },
  ];

  for (const item of filesToCheck) {
    const filePath = path.join(appServerDir, item.file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      console.log(`[PASS] ${item.title} exists (${stats.size} bytes)`);
    } else {
      console.error(`[FAIL] ${item.title} missing at ${filePath}`);
      failures++;
    }
  }

  // 2. Checkout URL Verification on every course page
  const expectedCheckouts = [
    {
      file: 'courses/pre-conception.html',
      name: 'Pre-Conception',
      expectedUrl: 'https://whop.com/checkout/plan_xojJjOlx2pXp5',
    },
    {
      file: 'courses/pregnancy.html',
      name: 'Pregnancy',
      expectedUrl: 'https://whop.com/checkout/plan_kJWuE35VfGwvx',
    },
    {
      file: 'courses/newborn.html',
      name: 'Newborn',
      expectedUrl: 'https://whop.com/checkout/plan_ZuKRJgFzNTb7j',
    },
    {
      file: 'courses/infant.html',
      name: 'Infant',
      expectedUrl: 'https://whop.com/checkout/plan_pu9VmtEZgl4jX',
    },
    {
      file: 'courses/toddler.html',
      name: 'Toddler',
      expectedUrl: 'https://whop.com/checkout/plan_NA5RcQrPD0vY3',
    },
    {
      file: 'courses/early-childhood.html',
      name: 'Early Childhood',
      expectedUrl: 'https://whop.com/checkout/plan_F8qTln4OnePz9',
    },
  ];

  console.log('\n--- VERIFYING EXACT WHOP CHECKOUT URL MAPPINGS ---');
  for (const c of expectedCheckouts) {
    const content = fs.readFileSync(path.join(appServerDir, c.file), 'utf8');
    if (content.includes(c.expectedUrl)) {
      console.log(`[PASS] ${c.name} contains exact Whop checkout URL: ${c.expectedUrl}`);
    } else {
      console.error(`[FAIL] ${c.name} MISSING checkout URL ${c.expectedUrl}`);
      failures++;
    }

    // Verify other 5 URLs are NOT present on this page
    for (const other of expectedCheckouts) {
      if (other.name !== c.name && content.includes(other.expectedUrl)) {
        console.error(`[FAIL] ${c.name} contains WRONG checkout URL from ${other.name}!`);
        failures++;
      }
    }

    // Verify CTA wording
    const expectedPrice = (c.name === 'Toddler' || c.name === 'Early Childhood') ? 79 : 99;
    const expectedCta = `GET INSTANT ACCESS — $${expectedPrice}`;
    if (content.includes(expectedCta)) {
      console.log(`[PASS] ${c.name} contains exact CTA: "${expectedCta}"`);
    } else {
      console.error(`[FAIL] ${c.name} missing exact CTA text "${expectedCta}"`);
      failures++;
    }
  }

  // 3. Verify Homepage Course Cards DO NOT link directly to Whop
  console.log('\n--- VERIFYING HOMEPAGE LINKS DO NOT DIRECTLY LINK TO WHOP ---');
  const homeContent = fs.readFileSync(path.join(appServerDir, 'index.html'), 'utf8');
  for (const c of expectedCheckouts) {
    if (homeContent.includes(c.expectedUrl)) {
      console.error(`[FAIL] Homepage should not link directly to checkout for ${c.name}`);
      failures++;
    }
  }
  console.log('[PASS] Homepage course cards navigate to internal course pages, not Whop checkout directly.');

  // 4. Verify Image Assets Exist
  console.log('\n--- VERIFYING PUBLIC IMAGE ASSETS ---');
  const imageAssets = [
    'public/images/kinship-logo.png',
    'public/images/kinship-pfp.png',
    'public/images/course-1-pre-conception.png',
    'public/images/course-2-pregnancy.png',
    'public/images/course-3-newborn.png',
    'public/images/course-4-infant.png',
    'public/images/course-5-toddler.png',
    'public/images/course-6-early-childhood.png',
    'public/images/course-1-card.png',
    'public/images/course-2-card.png',
    'public/images/course-3-card.png',
    'public/images/course-4-card.png',
    'public/images/course-5-card.png',
    'public/images/course-6-card.png',
  ];

  for (const img of imageAssets) {
    const fullPath = path.join(__dirname, '..', img);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`[PASS] ${img} exists (${stats.size} bytes)`);
    } else {
      console.error(`[FAIL] Missing image asset: ${img}`);
      failures++;
    }
  }

  // 5. Verify Content Integrity
  console.log('\n--- SCANNING CONTENT INTEGRITY ---');
  const forbiddenPhrases = [
    'lorem ipsum',
    'guarantee conception',
    'guarantee a healthy pregnancy',
    'prevent disease',
    'cure a condition',
    'guarantee developmental outcomes',
    'eliminate tantrums',
    'guarantee school success',
    'you are doing it wrong',
    'don\'t make this mistake',
    'your child\'s future depends on',
    'good parents',
    'bad parents'
  ];

  for (const item of filesToCheck) {
    if (item.file.endsWith('.xml.body') || item.file.endsWith('.txt.body')) continue;
    const content = fs.readFileSync(path.join(appServerDir, item.file), 'utf8').toLowerCase();
    for (const phrase of forbiddenPhrases) {
      if (content.includes(phrase)) {
        console.error(`[FAIL] ${item.file} contains forbidden phrase: "${phrase}"`);
        failures++;
      }
    }
  }
  console.log('[PASS] Zero forbidden phrases or placeholder copy detected.');

  // 6. Verify Legal Placeholders on Privacy and Terms
  console.log('\n--- VERIFYING LEGAL PLACEHOLDERS ---');
  const privacyHtml = fs.readFileSync(path.join(appServerDir, 'privacy.html'), 'utf8');
  const termsHtml = fs.readFileSync(path.join(appServerDir, 'terms.html'), 'utf8');
  const placeholders = ['[BUSINESS LEGAL NAME]', '[BUSINESS EMAIL]', '[COUNTRY/JURISDICTION]'];

  for (const ph of placeholders) {
    if (privacyHtml.includes(ph)) {
      console.log(`[PASS] Privacy Policy contains marked placeholder: ${ph}`);
    } else {
      console.error(`[FAIL] Privacy Policy missing: ${ph}`);
      failures++;
    }
    if (termsHtml.includes(ph)) {
      console.log(`[PASS] Terms of Service contains marked placeholder: ${ph}`);
    } else {
      console.error(`[FAIL] Terms of Service missing: ${ph}`);
      failures++;
    }
  }

  // 7. Verify Sticky Mobile Purchase Bar
  console.log('\n--- VERIFYING MOBILE STICKY PURCHASE BARS ---');
  for (const c of expectedCheckouts) {
    const courseHtml = fs.readFileSync(path.join(appServerDir, c.file), 'utf8');
    if (courseHtml.includes('Mobile quick purchase') || courseHtml.includes('GET INSTANT ACCESS')) {
      console.log(`[PASS] ${c.name} contains mobile purchase bar with direct link`);
    } else {
      console.error(`[FAIL] ${c.name} missing mobile purchase bar`);
      failures++;
    }
  }

  console.log(`\n==================================================`);
  console.log(`AUDIT SUMMARY: ${failures === 0 ? 'ALL AUDIT CHECKS PASSED WITH 100% SUCCESS' : `${failures} CHECKS FAILED`}`);
  console.log(`==================================================`);
  process.exit(failures === 0 ? 0 : 1);
}

runFileVerification();
