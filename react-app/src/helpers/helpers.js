const wrongWords = ['fuck', 'nigger', 'bitch'];

export const isNotValidText = text => wrongWords.filter(word => text.includes(word)).length > 0
