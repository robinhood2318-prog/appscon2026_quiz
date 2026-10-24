// APPSCON 2026 – quiz buzzer: shared settings for the screen and the phones.
// The topic is private to this quiz (different from the e-Souvenir unveil topic).
window.QUIZ = {
  broker: 'wss://broker.hivemq.com:8884/mqtt',
  topic: 'appscon26/quiz/q7v3mx92kd4t8p',
  teams: [
    { name: 'Team 1', color: '#E63946' },
    { name: 'Team 2', color: '#3A86FF' },
    { name: 'Team 3', color: '#FFB703' },
    { name: 'Team 4', color: '#2DC653' }
  ]
};

// Picks dark or white text, whichever reads better on a team colour.
window.inkFor = function (hex) {
  const lum = h => {
    const n = parseInt(h.slice(1), 16);
    const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(v => {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const L = lum(hex);
  const onWhite = 1.05 / (L + 0.05);
  const onDark = (L + 0.05) / (lum('#12162B') + 0.05);
  return onWhite >= onDark ? '#FFFFFF' : '#12162B';
};
