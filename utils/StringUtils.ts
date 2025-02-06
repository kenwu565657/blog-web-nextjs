export const isBlank: (value: string|undefined|null) => boolean = (value) => {
    if (undefined == value) {
        return true;
    }
    if (null == value) {
        return true;
    }
    return '' == value;
}
