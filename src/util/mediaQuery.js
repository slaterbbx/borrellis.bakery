import { css } from 'styled-components';

// ${media(['min-400', 'min-300'], css`
// 	margin: 5% 7% 0 7%;
// `)}

const media = (types, cssString) => {

    const [width , height] = types;

    let result;
    
    if (width && height) {
        const [typeWidth, sizeWidth] = width.split('-');
        const [typeHeight, sizeHeight] = height.split('-');

        result = css`
            @media only screen and (${typeWidth}-width: ${(sizeWidth / 16).toFixed(2)}em)
            and (${typeHeight}-height: ${(sizeHeight / 16).toFixed(2)}em) {
            ${cssString}
        };`;

    } else if (width) {
        const [typeWidth, sizeWidth] = width.split('-');

        result = css`
            @media only screen and (${typeWidth}-width: ${(sizeWidth / 16).toFixed(2)}em) {
            ${cssString}
        };`;

    } else if (height) {
        const [typeHeight, sizeHeight] = height.split('-');

        result = css`
            @media only screen and (${typeHeight}-height: ${(sizeHeight / 16).toFixed(2)}em) {
            ${cssString}
        };`;

    }

    return result;

};

export default media;