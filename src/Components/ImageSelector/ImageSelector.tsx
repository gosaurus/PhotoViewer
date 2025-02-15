import { MouseEventHandler } from "react";

export function ImageSelector (props: {
    onClick: MouseEventHandler; src: string; className: string
})
{
    return (
        <button className="thumbnail" >
            <img onClick={props.onClick} src={props.src} className={props.className} />
        </button>
    );
}
