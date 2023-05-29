
export const ICONMAP = {
    'beer': <svg blablablabla></svg>,
    'people': <svg blablablabla></svg>,
    'svgIcon': <svg blablablabla></svg>,
}

export default function Icon(props) {
    return ICONMAP[props.name];
}
