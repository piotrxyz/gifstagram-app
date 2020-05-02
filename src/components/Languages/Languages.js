import React from 'react';

const Languages = ["en", "es", "pt", "id", "fr", "ar", "tr", "th", "vi", "de", "it", "ja", "zh-CN", "zh-TW", "ru", "ko", "pl", "nl", "ro", "hu", "sv", "cs", "hi", "bn", "da", "fa", "tl", "fi", "iw", "ms", "no", "uk"];
const langs = Languages.map((lang) =>
    <option key={lang.toString()}>{lang}</option>
);

export default langs;