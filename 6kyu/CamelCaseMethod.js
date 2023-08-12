String.prototype.camelCase = function () {
    if (!this.toString()) return '';
    return this
        .toString()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join('');
}