const getImageName = (image) => (String(image).toLowerCase());
const IMAGE_PATH = '/images';
const ICON_PATH = '/icons';

export const imageUrl = (image, path = null) => {
    if (path) {
        return `${IMAGE_PATH}/${path}/${getImageName(image)}`;
    }

    return `/${IMAGE_PATH}/${getImageName(image)}`;
}

export const iconUrl = (image, path = null) => {
    if (path) {
        return `${ICON_PATH}/${path}/${getImageName(image)}`;
    }

    return `${ICON_PATH}/${getImageName(image)}`;
}

