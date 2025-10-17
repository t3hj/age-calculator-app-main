// Age calculator script
(function(){
  const form = document.getElementById('age-form');
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  const yearsEl = document.getElementById('years');
  const monthsEl = document.getElementById('months');
  const daysEl = document.getElementById('days');

  function setError(fieldName, message){
    const el = document.querySelector(`.error[data-for="${fieldName}"]`);
    if(el) el.textContent = message || '';
  }

  function clearErrors(){
    ['day','month','year'].forEach(f => setError(f, ''));
  }

  function isValidDate(y,m,d){
    const dt = new Date(y,m-1,d);
    return dt && dt.getFullYear() === y && (dt.getMonth() === m-1) && dt.getDate() === d;
  }

  function daysInMonth(year, month){
    return new Date(year, month, 0).getDate();
  }

  function calculateAge(fromDate, toDate){
    // fromDate: birth date, toDate: now
    let y = toDate.getFullYear() - fromDate.getFullYear();
    let m = toDate.getMonth() - fromDate.getMonth();
    let d = toDate.getDate() - fromDate.getDate();

    if(d < 0){
      m -= 1;
      const prevMonth = (toDate.getMonth() === 0) ? 12 : toDate.getMonth();
      const yearOfPrevMonth = (toDate.getMonth() === 0) ? toDate.getFullYear() - 1 : toDate.getFullYear();
      d += daysInMonth(yearOfPrevMonth, prevMonth);
    }
    if(m < 0){
      y -= 1;
      m += 12;
    }
    return {years: y, months: m, days: d};
  }

  function animateValue(el, start, end, duration=800){
    const startTime = performance.now();
    const range = end - start;
    if(range === 0) { el.textContent = String(end); return; }
    function step(now){
      const t = Math.min(1, (now - startTime)/duration);
      const ease = t<.5 ? 2*t*t : -1 + (4 - 2*t)*t; // easeInOut
      const val = Math.round(start + range * ease);
      el.textContent = String(val);
      if(t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    clearErrors();

    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    let hasError = false;

    if(!dayInput.value){ setError('day', "This field is required"); hasError = true; }
    if(!monthInput.value){ setError('month', "This field is required"); hasError = true; }
    if(!yearInput.value){ setError('year', "This field is required"); hasError = true; }

    if(hasError) return;

    if(!(day >= 1 && day <= 31)){ setError('day', 'Must be a valid day'); hasError = true; }
    if(!(month >=1 && month <=12)){ setError('month', 'Must be a valid month'); hasError = true; }
    if(year > new Date().getFullYear()){ setError('year', 'Must be in the past'); hasError = true; }

    if(hasError) return;

    if(!isValidDate(year, month, day)){
      setError('day', 'Must be a valid date');
      setError('month', 'Must be a valid date');
      setError('year', 'Must be a valid date');
      return;
    }

    const birth = new Date(year, month-1, day);
    const now = new Date();
    if(birth > now){ setError('year','Must be in the past'); return; }

    const age = calculateAge(birth, now);

    // animate from current displayed values (if numeric) else from 0
    const currentYears = parseInt(yearsEl.textContent, 10);
    const currentMonths = parseInt(monthsEl.textContent, 10);
    const currentDays = parseInt(daysEl.textContent, 10);

    animateValue(yearsEl, Number.isFinite(currentYears) ? currentYears : 0, age.years);
    animateValue(monthsEl, Number.isFinite(currentMonths) ? currentMonths : 0, age.months);
    animateValue(daysEl, Number.isFinite(currentDays) ? currentDays : 0, age.days);
  });

})();
