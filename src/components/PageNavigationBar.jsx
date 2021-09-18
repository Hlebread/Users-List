import React from 'react';
import '../scss/PageNavigationBar.scss';

const PageNavigationBar = ({ numberOfPages, filter, setFilter }) => {
	const pages = Array.from({ length: numberOfPages }, (v, k) => k + 1);
	const pagesBtns = pages.map(page => {
		if (page === filter.page ||
			page === filter.page + 2 && filter.page === 1 ||
			page === filter.page - 1 ||
			page === filter.page + 1 ||
			page === filter.page - 2 && filter.page === numberOfPages) {
			return <button key={page} className={filter.page === page ? 'selected' : ''}>
				{page}
			</button>
		}
	});

	const changePage = (btn) => {
		if (btn.tagName === 'BUTTON') {
			if (btn.classList.contains('move')) {
				return btn.textContent === 'Previous' ? setFilter({ ...filter, page: --filter.page })
					: setFilter({ ...filter, page: ++filter.page });
			} else {
				setFilter({ ...filter, page: +btn.textContent });
			};
		}
	};

	return (
		<nav onClick={e => changePage(e.target)}>
			<button className='move' disabled={filter.page < 2}>Previous</button>
			{
				pagesBtns.map(btn => btn)
			}
			<button className='move' disabled={filter.page === numberOfPages}>Next</button>
		</nav>
	);
};

export default PageNavigationBar;
