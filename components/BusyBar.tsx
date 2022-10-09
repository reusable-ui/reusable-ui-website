import { Progress, ProgressBar } from "@reusable-ui/components";



const BusyBar = () => {
    return (
        <Progress theme='primary' className='busy'>
            <ProgressBar value={100} progressBarStyle='striped' running={true} />
        </Progress>
    );
}
export {
    BusyBar,
    BusyBar as default,
}