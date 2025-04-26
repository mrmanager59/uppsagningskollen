
const form = document.getElementById('calculator-form');
const results = document.getElementById('results');
const graphicSummary = document.getElementById('graphic-summary');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const salary = parseFloat(document.getElementById('salary').value);
  const years = parseInt(document.getElementById('years').value);
  const collective = document.getElementById('collective').value;

  let noticeMonths;

  if (collective === 'yes') {
    noticeMonths = Math.min(6, Math.ceil(years / 2) + 1);
  } else {
    if (years < 2) noticeMonths = 1;
    else if (years < 4) noticeMonths = 2;
    else if (years < 6) noticeMonths = 3;
    else if (years < 8) noticeMonths = 4;
    else if (years < 10) noticeMonths = 5;
    else noticeMonths = 6;
  }

  const legalCompensation = salary * noticeMonths;

  let minExtraMonths, maxExtraMonths;
  if (collective === 'yes') {
    minExtraMonths = 3;
    maxExtraMonths = 6;
  } else {
    minExtraMonths = 2;
    maxExtraMonths = 4;
  }

  const minNegotiationTarget = legalCompensation + (salary * minExtraMonths);
  const maxNegotiationTarget = legalCompensation + (salary * maxExtraMonths);

  graphicSummary.innerHTML = `
    <p><strong>Lagstadgad ersättning:</strong> ${legalCompensation.toLocaleString()} SEK</p>
    <p><strong>Rimligt förhandlingsmål:</strong> ${minNegotiationTarget.toLocaleString()} – ${maxNegotiationTarget.toLocaleString()} SEK</p>
  `;

  results.style.display = 'block';
});
