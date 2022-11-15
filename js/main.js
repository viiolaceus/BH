const userAgent = navigator.userAgent;
const IS_MOBILE = /(iPhone|iPod|iPad|Android|BlackBerry)/i.test(userAgent);

const addSrcsets = picture => {
	const img = picture.children[0];
	const { src } = img;
	img.setAttribute('src', src);
	const webp = document.createElement('source');
	webp.srcset = src.replace('.jpg', '.webp');
	webp.type = 'image/webp';
	const jpeg = document.createElement('source');
	jpeg.srcset = src;
	jpeg.type = 'image/jpeg';
	picture.append(webp, jpeg, img);
};

document.addEventListener('DOMContentLoaded', e => {
	document.querySelectorAll('.slideshow picture').forEach(addSrcsets);
});
