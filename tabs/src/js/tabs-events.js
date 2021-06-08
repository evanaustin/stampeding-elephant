jQuery(document).ready(function($) {
	const tabContentSelector = '.tab-title-text';
	const activeContentClass = 'active';
	const activeColor = $('.tabContainer').attr('data-tab-color');

	$(tabContentSelector).on('click', function() {
		if (!this.classList.contains(activeContentClass)) {
			// deactivate the current active tab & its content region
			$('.tab-title-text.active').removeClass(activeContentClass);
			$('.tab-content.active').removeClass(activeContentClass);

			// activate the clicked tab and its respective content region (found by name)
			$(this).addClass(activeContentClass);
			const activeTabDataAttribute = $(this).attr('data-tab');
			$('.tab-content[data-tab="' + activeTabDataAttribute + '"]').addClass(activeContentClass);
		}
	});

	const upperTabs = $(tabContentSelector);
	if (upperTabs.length > 0) {
		const activeUpperTab = $('.tab-title-text.active');
		const activeTabName = activeUpperTab.attr('data-tab');
		$('.tab-content[data-tab="' + activeTabName + '"]').addClass(activeContentClass);
	}
});
