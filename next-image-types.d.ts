declare module 'next/image' {
    import { ImageProps } from 'next/dist/client/image';
    const Image: (props: ImageProps) => JSX.Element;
    export default Image;
}
