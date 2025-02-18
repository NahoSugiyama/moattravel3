let maxDate = new Date();
maxDate = maxDate.setMonth(maxDate.getMonth() + 3);

flatpickr('#fromCheckinDateToCheckoutDate', {
	mode: "range",
	local: 'ja',
	minDate: 'today',
	maxDate: maxDate
});