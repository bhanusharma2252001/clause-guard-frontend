// src/shared/SocialButtons.jsx
export default function SocialButtons({ onLogin }) {
  const providers = [
    {
      key: "google",
      label: "Google",
      iconLight: (
        <svg className="w-5 h-5" viewBox="0 0 48 48">
          <path fill="#fbc02d" d="M44 20H24v8h11.5C34 33 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.1 5.4 28.8 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 19-8.9 19-20 0-1.4-.1-2.7-.3-4z"/>
          <path fill="#e53935" d="M6.3 14.7l6.6 4.9C14.6 16.1 19 14 24 14c3 0 5.7 1.1 7.8 3l5.7-5.7C33.1 5.4 28.8 4 24 4 16.4 4 9.8 8.7 6.3 14.7z"/>
          <path fill="#4caf50" d="M24 44c4.6 0 8.9-1.6 12.2-4.3L30 34.1C28.4 35.3 26.3 36 24 36c-5.7 0-10.4-3.9-11.8-9.3l-6.6 5C9.8 39.3 16.4 44 24 44z"/>
          <path fill="#1565c0" d="M44 20H24v8h11.5C33.4 30.7 29 34 24 34c-5.7 0-10.4-3.9-11.8-9.3l-6.6 5C9.8 39.3 16.4 44 24 44c11.1 0 19-8.9 19-20 0-1.4-.1-2.7-.3-4z"/>
        </svg>
      ),
      iconDark: <svg className="w-5 h-5 text-white" viewBox="0 0 24 24"><path fill="white" d="M21.6 12.227c0-.637-.057-1.252-.16-1.848H12v3.495h5.508c-.237 1.266-.953 2.338-2.03 3.056v2.54h3.287c1.921-1.764 3.035-4.358 3.035-7.243z"/><path fill="white" d="M12 22c2.73 0 5.023-.905 6.698-2.454l-3.287-2.54C14.373 17.797 13.262 18.2 12 18.2c-2.81 0-5.188-1.888-6.037-4.436H2.55v2.785C4.216 19.977 7.865 22 12 22z"/><path fill="white" d="M5.963 13.764A7.23 7.23 0 0 1 5.6 12c0-.614.107-1.208.303-1.764V7.451H2.55A9.96 9.96 0 0 0 2 12c0 1.58.37 3.074 1.03 4.549l2.933-2.785z"/><path fill="white" d="M12 5.8c1.386 0 2.638.45 3.62 1.327l2.71-2.71C17.015 2.624 14.723 2 12 2 7.865 2 4.216 4.024 2.55 7.45l2.933 2.785C6.812 7.693 9.19 5.8 12 5.8z"/></svg>,
    },
    {
      key: "facebook",
      label: "Facebook",
      iconLight: <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24"><path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9H7.5v-2.9H10V9.5c0-2.6 1.55-4 3.9-4 1.13 0 2.32.2 2.32.2v2.55h-1.3c-1.28 0-1.68.8-1.68 1.62v1.94h2.85l-.46 2.9h-2.4V22c4.56-.93 8-4.96 8-9.8z"/></svg>,
      iconDark: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9H7.5v-2.9H10V9.5c0-2.6 1.55-4 3.9-4 1.13 0 2.32.2 2.32.2v2.55h-1.3c-1.28 0-1.68.8-1.68 1.62v1.94h2.85l-.46 2.9h-2.4V22c4.56-.93 8-4.96 8-9.8z"/></svg>,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconLight: <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.89v-5.58c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H8.67V9h3.73v1.56h.05c.52-.98 1.79-2.02 3.68-2.02 3.94 0 4.67 2.59 4.67 5.96v5.95z"/><circle cx="5.34" cy="5.34" r="2.34"/><path d="M7.23 20.45H3.46V9h3.77v11.45z"/></svg>,
      iconDark: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.89v-5.58c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H8.67V9h3.73v1.56h.05c.52-.98 1.79-2.02 3.68-2.02 3.94 0 4.67 2.59 4.67 5.96v5.95z"/><circle cx="5.34" cy="5.34" r="2.34"/><path d="M7.23 20.45H3.46V9h3.77v11.45z"/></svg>,
    },
    {
      key: "apple",
      label: "Apple",
      iconLight: <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24"><path d="M16.5 12.3c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6.1-3.1.9-3.9 2.3-1.7 3-0.4 7.3 1.2 9.7.8 1.2 1.7 2.4 2.9 2.3 1.2-.1 1.7-.8 3.2-.8 1.5 0 2 .8 3.3.8 1.4-.1 2.2-1.2 3-2.4 1-1.5 1.4-2.9 1.4-3-.1-.1-2.7-1-2.7-4.7z"/><path d="M14.1 5.5c.7-.8 1.2-1.9 1-3-.9 0-2 .6-2.6 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.6-1.3z"/></svg>,
      iconDark: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M16.5 12.3c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6.1-3.1.9-3.9 2.3-1.7 3-0.4 7.3 1.2 9.7.8 1.2 1.7 2.4 2.9 2.3 1.2-.1 1.7-.8 3.2-.8 1.5 0 2 .8 3.3.8 1.4-.1 2.2-1.2 3-2.4 1-1.5 1.4-2.9 1.4-3-.1-.1-2.7-1-2.7-4.7z"/><path d="M14.1 5.5c.7-.8 1.2-1.9 1-3-.9 0-2 .6-2.6 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.6-1.3z"/></svg>,
    },
    {
      key: "x",
      label: "X",
      iconLight: <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24"><path d="M18 2H6C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-3.6 14.7L12 13.2l-2.4 3.5H7.5l3.4-4.8L7.6 7.5h2.1l2.3 3.2 2.2-3.2h2.1l-3.2 4.5 3.4 4.7h-2.1z"/></svg>,
      iconDark: <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M18 2H6C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-3.6 14.7L12 13.2l-2.4 3.5H7.5l3.4-4.8L7.6 7.5h2.1l2.3 3.2 2.2-3.2h2.1l-3.2 4.5 3.4 4.7h-2.1z"/></svg>,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {providers.map((p) => (
        <button
          key={p.key}
          onClick={() => onLogin(p.key)}
          className="
            flex items-center justify-center gap-2 py-2.5 rounded-xl w-full
            bg-white dark:bg-[#1a1a1a]
            border border-gray-300 dark:border-[#262626]
            hover:bg-gray-50 dark:hover:bg-[#222]
            transition
          "
        >
          {/* Icon that switches automatically */}
          <span className="block dark:hidden">{p.iconLight}</span>
          <span className="hidden dark:block">{p.iconDark}</span>

          <span className="text-sm text-gray-800 dark:text-[#e8e8e8]">{p.label}</span>
        </button>
      ))}
    </div>
  );
}
