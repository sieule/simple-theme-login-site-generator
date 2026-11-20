/* =========================================================
 * Simple Theme Login Site Generator - i18n (vi/en/ja)
 * + Import JSON + Live Preview
 * Từ điển mặc định được nhúng trực tiếp (không cần lang.json)
 * ========================================================= */

/* ---------- TỪ ĐIỂN MẶC ĐỊNH (thay cho lang.json) ---------- */
const DEFAULT_TRANSLATIONS = {
  vi: {
    title: "Tạo trang đăng nhập nhanh",
    button_home: "Về trang chủ",
    lang_label: "Ngôn ngữ",
    heading_input: "Nhập Thông Tin",
    label_angle: "Độ nghiêng chuyển màu",
    placeholder_angle: "Độ nghiêng (0-360)",
    label_color1: "Nền một bên",
    label_color2: "Nền bên còn lại",
    label_color3: "Nút Đăng nhập",
    label_color6: "Rê chuột vào nút",
    label_color4: "Chữ Đăng nhập",
    label_color5: "Liên kết (QMK&ĐK)",
    label_color7: "Chữ trong hộp",
    button_create: "Tạo",
    heading_result: "Kết Quả",
    output_html: "Output HTML (index.html):",
    output_js: "Output JS (script.js):",
    output_css: "Output CSS (style.css):",
    button_copy: "Sao chép",
    alert_copied: "Đã sao chép nội dung!",
    heading_import_json: "Nhập JSON tùy chỉnh",
    hint_import_json: "Dán JSON dạng { \"vi\": {...}, \"en\": {...}, \"ja\": {...} } hoặc chọn file lang.json để ghi đè bộ từ điển.",
    button_apply_json: "Áp dụng JSON",
    button_load_file: "Chọn file lang.json",
    button_reset_json: "Khôi phục mặc định",
    heading_preview: "Xem trước",
    button_refresh_preview: "Làm mới xem trước",
    output: {
      page_title: "Đăng Nhập",
      login_heading: "Đăng Nhập",
      placeholder_username: "Tên đăng nhập",
      placeholder_password: "Mật khẩu",
      remember_me: "Ghi nhớ đăng nhập",
      button_login: "Đăng Nhập",
      forgot_password: "Quên mật khẩu?",
      register: "Đăng ký",
      success_message: "Đăng nhập thành công!",
      error_message: "Vui lòng điền đầy đủ thông tin!"
    }
  },
  en: {
    title: "Quick Login Page Generator",
    button_home: "Back to Home",
    lang_label: "Language",
    heading_input: "Enter Information",
    label_angle: "Gradient Angle",
    placeholder_angle: "Angle (0-360)",
    label_color1: "One Side Background",
    label_color2: "Other Side Background",
    label_color3: "Login Button",
    label_color6: "Button Hover",
    label_color4: "Login Button Text",
    label_color5: "Links (Forgot & Register)",
    label_color7: "Text in Box",
    button_create: "Generate",
    heading_result: "Result",
    output_html: "Output HTML (index.html):",
    output_js: "Output JS (script.js):",
    output_css: "Output CSS (style.css):",
    button_copy: "Copy",
    alert_copied: "Copied to clipboard!",
    heading_import_json: "Import Custom JSON",
    hint_import_json: "Paste JSON in the form { \"vi\": {...}, \"en\": {...}, \"ja\": {...} } or choose a lang.json file to override the dictionary.",
    button_apply_json: "Apply JSON",
    button_load_file: "Choose lang.json file",
    button_reset_json: "Restore default",
    heading_preview: "Preview",
    button_refresh_preview: "Refresh preview",
    output: {
      page_title: "Login",
      login_heading: "Login",
      placeholder_username: "Username",
      placeholder_password: "Password",
      remember_me: "Remember me",
      button_login: "Login",
      forgot_password: "Forgot password?",
      register: "Register",
      success_message: "Login successful!",
      error_message: "Please fill in all fields!"
    }
  },
  ja: {
    title: "ログインページジェネレーター",
    button_home: "ホームに戻る",
    lang_label: "言語",
    heading_input: "情報を入力",
    label_angle: "グラデーション角度",
    placeholder_angle: "角度 (0-360)",
    label_color1: "片側の背景色",
    label_color2: "反対側の背景色",
    label_color3: "ログインボタン",
    label_color6: "ボタンホバー",
    label_color4: "ログインボタンの文字",
    label_color5: "リンク (パスワード忘れ & 登録)",
    label_color7: "ボックス内の文字",
    button_create: "生成",
    heading_result: "結果",
    output_html: "出力 HTML (index.html):",
    output_js: "出力 JS (script.js):",
    output_css: "出力 CSS (style.css):",
    button_copy: "コピー",
    alert_copied: "コピーしました！",
    heading_import_json: "カスタムJSONをインポート",
    hint_import_json: "{ \"vi\": {...}, \"en\": {...}, \"ja\": {...} } 形式のJSONを貼り付けるか、lang.json ファイルを選択して辞書を上書きします。",
    button_apply_json: "JSONを適用",
    button_load_file: "lang.json を選択",
    button_reset_json: "デフォルトに戻す",
    heading_preview: "プレビュー",
    button_refresh_preview: "プレビューを更新",
    output: {
      page_title: "ログイン",
      login_heading: "ログイン",
      placeholder_username: "ユーザー名",
      placeholder_password: "パスワード",
      remember_me: "ログイン状態を保持",
      button_login: "ログイン",
      forgot_password: "パスワードをお忘れですか？",
      register: "新規登録",
      success_message: "ログインに成功しました！",
      error_message: "すべての項目を入力してください！"
    }
  }
};

/* ---------- STATE ---------- */
let translations = {};        // bộ đang dùng (có thể bị ghi đè bởi JSON import)
let defaultTranslations = null; // bản gốc để reset
let currentLang = localStorage.getItem('lang') || 'vi';

/* Lấy chuỗi theo key, hỗ trợ nested key "output.page_title" */
function t(key) {
    if (!translations[currentLang]) return key;
    const keys = key.split('.');
    let val = translations[currentLang];
    for (const k of keys) {
        if (val == null) return key;
        val = val[k];
    }
    return val != null ? val : key;
}

/* Nạp từ điển mặc định (thay cho fetch lang.json) */
function loadLang() {
    translations = JSON.parse(JSON.stringify(DEFAULT_TRANSLATIONS));
    defaultTranslations = JSON.parse(JSON.stringify(DEFAULT_TRANSLATIONS));
    if (!translations[currentLang]) currentLang = 'vi';
}

/* Áp dụng ngôn ngữ: cập nhật toàn bộ UI + output */
function applyLanguage(lang) {
    if (!translations[lang]) lang = 'vi';
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.title = t('title');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.textContent = t('button_copy');
    });

    const sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;

    updateOutputs();
}

/* Sinh nội dung output HTML (template trang login) */
function buildHtmlOutput() {
    const o = translations[currentLang].output;
    return `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${o.page_title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="login-box">
            <h2>${o.login_heading}</h2>
            <form id="loginForm">
                <div class="textbox">
                    <input type="text" id="username" placeholder="${o.placeholder_username}" required>
                </div>
                <div class="textbox">
                    <input type="password" id="password" placeholder="${o.placeholder_password}" required>
                    <span id="togglePassword" class="toggle-password">👁️</span>
                </div>
                <div class="remember-me">
                    <label><input type="checkbox"> ${o.remember_me}</label>
                </div>
                <button type="submit" class="btn">${o.button_login}</button>
                <div class="error-message" id="error-message"></div>
                <div class="links">
                    <a href="#">${o.forgot_password}</a>
                    <a href="#">${o.register}</a>
                </div>
            </form>
        </div>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`;
}

/* Sinh nội dung output JS */
function buildJsOutput() {
    const o = translations[currentLang].output;
    const success = JSON.stringify(o.success_message);
    const error = JSON.stringify(o.error_message);
    return `document.getElementById("loginForm").addEventListener("submit",function(t){t.preventDefault();const e=document.getElementById("error-message");e.textContent="";var n=document.getElementById("username").value,t=document.getElementById("password").value;n&&t?alert(${success}):e.textContent=${error}});const togglePassword=document.getElementById("togglePassword"),passwordInput=document.getElementById("password");togglePassword.addEventListener("click",function(){var t="password"===passwordInput.getAttribute("type")?"text":"password";passwordInput.setAttribute("type",t),this.textContent="password"==t?"👁️":"🙈"});`;
}

/* Sinh nội dung output CSS */
function buildCssOutput() {
    const angle  = document.getElementById('angle').value  || 0;
    const color1 = document.getElementById('color1').value || '#ffffff';
    const color2 = document.getElementById('color2').value || '#000000';
    const color3 = document.getElementById('color3').value || '#4cae4c';
    const color4 = document.getElementById('color4').value || '#ffffff';
    const color5 = document.getElementById('color5').value || '#0000ff';
    const color6 = document.getElementById('color6').value || '#4cae4c';
    const color7 = document.getElementById('color7').value || '#000000';
    return `*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(${angle}deg,${color1},${color2});color:${color7}}.container{display:flex;justify-content:center;align-items:center}.login-box{background:rgb(255 255 255 / .8);backdrop-filter:blur(10px);border-radius:15px;padding:20px;width:320px;box-shadow:0 0 10px rgb(0 0 0 / .1)}h2{text-align:center;margin-bottom:20px}.textbox{margin-bottom:15px;position:relative}.textbox input{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px}.toggle-password{position:absolute;top:50%;right:10px;transform:translateY(-50%);cursor:pointer}.remember-me{margin:10px 0}.btn{width:100%;padding:10px;border:none;background-color:${color3};color:${color4};border-radius:5px;cursor:pointer}.btn:hover{background-color:${color6}}.links{display:flex;justify-content:space-between;margin-top:10px}.links a{color:${color5};text-decoration:none}.links a:hover{text-decoration:underline}.error-message{color:red;text-align:center;margin-top:10px}`;
}

/* Cập nhật cả 3 ô output + preview */
function updateOutputs() {
    if (!translations[currentLang]) return;
    document.getElementById('output1').value = buildHtmlOutput();
    document.getElementById('output2').value = buildJsOutput();
    document.getElementById('output3').value = buildCssOutput();
    updatePreview();
}

/* Render preview vào iframe (ghép CSS + HTML + JS) */
function updatePreview() {
    const frame = document.getElementById('previewFrame');
    if (!frame) return;

    const html = buildHtmlOutput();
    const css  = buildCssOutput();
    const js   = buildJsOutput();

    const doc = `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${css}</style>
</head>
<body>
${html.replace(/^[\s\S]*?<body[^>]*>/, '').replace(/<\/body>[\s\S]*$/, '')}
<script>${js}<\/script>
</body>
</html>`;

    frame.srcdoc = doc;
}

/* Tạo nút "Sao chép" cho mỗi output (chỉ 1 lần) */
function setupCopyButtons() {
    document.querySelectorAll('.output-box').forEach(output => {
        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'copy-btn btn';
        copyButton.textContent = t('button_copy');
        copyButton.addEventListener('click', () => {
            output.select();
            document.execCommand('copy');
            alert(t('alert_copied'));
        });
        output.parentNode.insertBefore(copyButton, output);
    });
}

/* ============ IMPORT JSON ============ */

function setJsonStatus(msg, type) {
    const el = document.getElementById('jsonStatus');
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'status' + (type ? ' ' + type : '');
}

function applyJsonFromTextarea() {
    const raw = document.getElementById('jsonInput').value.trim();
    if (!raw) {
        setJsonStatus('Chưa có nội dung JSON.', 'error');
        return;
    }
    try {
        const parsed = JSON.parse(raw);
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
            throw new Error('JSON phải là object { "vi": {...}, ... }');
        }
        translations = Object.assign({}, translations, parsed);
        setJsonStatus('✅ Đã áp dụng JSON.', 'ok');
        applyLanguage(currentLang);
    } catch (e) {
        setJsonStatus('❌ JSON không hợp lệ: ' + e.message, 'error');
    }
}

function loadJsonFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
                throw new Error('File phải chứa object JSON');
            }
            translations = Object.assign({}, translations, parsed);
            document.getElementById('jsonInput').value = JSON.stringify(parsed, null, 2);
            setJsonStatus('✅ Đã nạp file: ' + file.name, 'ok');
            applyLanguage(currentLang);
        } catch (e) {
            setJsonStatus('❌ File JSON không hợp lệ: ' + e.message, 'error');
        }
    };
    reader.onerror = () => setJsonStatus('❌ Không đọc được file.', 'error');
    reader.readAsText(file, 'utf-8');
}

function resetJson() {
    if (!defaultTranslations) return;
    translations = JSON.parse(JSON.stringify(defaultTranslations));
    document.getElementById('jsonInput').value = '';
    setJsonStatus('↺ Đã khôi phục từ điển mặc định.', 'ok');
    applyLanguage(currentLang);
}

/* ============ INIT ============ */

function init() {
    loadLang(); // đồng bộ, không cần await

    setupCopyButtons();

    document.getElementById('createButton')
        .addEventListener('click', updateOutputs);

    document.getElementById('langSelect')
        .addEventListener('change', e => applyLanguage(e.target.value));

    ['angle','color1','color2','color3','color4','color5','color6','color7']
        .forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', updateOutputs);
        });

    document.getElementById('applyJsonBtn')
        .addEventListener('click', applyJsonFromTextarea);

    document.getElementById('jsonFile')
        .addEventListener('change', e => {
            if (e.target.files && e.target.files[0]) loadJsonFile(e.target.files[0]);
        });

    document.getElementById('resetJsonBtn')
        .addEventListener('click', resetJson);

    document.getElementById('refreshPreviewBtn')
        .addEventListener('click', updatePreview);

    applyLanguage(currentLang);
}

init();