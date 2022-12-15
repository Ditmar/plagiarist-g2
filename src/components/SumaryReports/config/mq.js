
export const breakPoints = {
    values: {
        xxs: 0,
        xs: 375,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800
    }
}

const mq = (labelBreak, type) => {
    const breakValue = breakPoints.values[labelBreak]; 
    return type === 'max' ?  `@media (max-width: ${breakValue}px)` : `@media (min-width: ${breakValue}px)` 
}
export default mq;