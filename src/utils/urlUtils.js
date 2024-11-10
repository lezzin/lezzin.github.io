const getImageName = (image) => (String(image).toLowerCase());
const IMAGE_PATH = 'src/assets/images';
const ICON_PATH = 'src/assets/icons';

export const imageUrl = (image, path = null) => {
    if (path) {
        return `${IMAGE_PATH}/${path}/${getImageName(image)}`;
    }

    return `src/assets/images/${getImageName(image)}`;
}

export const iconUrl = (image, path = null) => {
    if (path) {
        return `${ICON_PATH}/${path}/${getImageName(image)}`;
    }

    return `${ICON_PATH}/${getImageName(image)}`;
}

