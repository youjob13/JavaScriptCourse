const allowScroll = (item) => {
    if (!item.matches('.no_scroll')) {
        document.body.style.overflowY = 'auto';
    }
    item.style.visibility = 'hidden';
    document.body.style.overflowX = 'hidden';
};

export default allowScroll;